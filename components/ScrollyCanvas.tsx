'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
    images: string[];
    children?: React.ReactNode;
}

export default function ScrollyCanvas({ images, children }: ScrollyCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);

    // Scroll progress relative to this container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    useEffect(() => {
        if (!images || images.length === 0) return;

        let mounted = true;
        const loadAll = async () => {
            try {
                const promises = images.map((src) => {
                    return new Promise<HTMLImageElement>((resolve, reject) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(img);
                        img.onerror = reject;
                    });
                });

                const results = await Promise.all(promises);
                if (mounted) {
                    setLoadedImages(results);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Failed to preload images", error);
                if (mounted) setLoading(false);
            }
        };

        loadAll();

        return () => {
            mounted = false;
        };
    }, [images]);

    // Render logic
    useEffect(() => {
        if (loadedImages.length === 0) return;

        // Initial render of first frame
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        const renderFrame = (index: number) => {
            if (!canvas || !context) return;
            const img = loadedImages[index];
            if (!img) return;

            // Handle resize / object-fit: cover logic
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let renderWidth, renderHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                // Canvas is wider than image
                renderWidth = canvasWidth;
                renderHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - renderHeight) / 2;
            } else {
                // Canvas is taller than image
                renderHeight = canvasHeight;
                renderWidth = canvasHeight * imgRatio;
                offsetY = 0;
                offsetX = (canvasWidth - renderWidth) / 2;
            }

            context.clearRect(0, 0, canvasWidth, canvasHeight);
            context.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        // Handle Resize
        const handleResize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Re-render current frame? We need to track current index.
                // For now, let scroll listener handle it or just render frame 0 initially.
                // But valid scroll listener will trigger update.
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Init size

        // Initial draw
        renderFrame(0);

        // Subscribe to scroll changes
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.floor(latest * (loadedImages.length - 1));
            const safeIndex = Math.min(Math.max(frameIndex, 0), loadedImages.length - 1);
            requestAnimationFrame(() => renderFrame(safeIndex));
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            unsubscribe();
        };
    }, [loadedImages, scrollYProgress]);

    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center bg-[#121212] text-white">Loading Sequence...</div>;
    }

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />
                {children && React.cloneElement(children as React.ReactElement<any>, { scrollYProgress })}
            </div>
        </div>
    );
}
