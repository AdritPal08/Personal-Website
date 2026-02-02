'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    // Section 1: Hero - Name & Title
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);

    // Section 2: Value Statement - Left
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.55], [0, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.55], [-50, 0]);

    // Section 3: Call to Action - Right
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]);

    return (
        <div className="absolute inset-0 z-10 w-full h-full pointer-events-none text-white">
            {/* Section 1: Hero */}
            <motion.div
                style={{ opacity: opacity1, y: y1, scale: scale1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mix-blend-difference mb-4">
                    {personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto mb-8">
                    {personalInfo.title}
                </p>

                <div className="flex space-x-6 text-2xl pointer-events-auto">
                    <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <FaGithub />
                    </Link>
                    <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        <FaLinkedin />
                    </Link>
                    <Link href={`mailto:${personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                        <FaEnvelope />
                    </Link>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-400">
                    <FaMapMarkerAlt className="mr-2" /> {personalInfo.location}
                </div>
            </motion.div>

            {/* Section 2: Value Statement */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute inset-0 flex items-center justify-start p-4 md:pl-24"
            >
                <div className="max-w-2xl bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/5 pointer-events-auto">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                        Building <span className="text-blue-500">Agentic AI</span> & <br />
                        <span className="text-purple-500">Automation Workflows</span>
                    </h2>
                    <p className="text-lg text-gray-300">
                        {personalInfo.shortBio}
                    </p>
                </div>
            </motion.div>

            {/* Section 3: CTA */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute inset-0 flex items-center justify-end p-4 md:pr-24"
            >
                <div className="max-w-xl text-right bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/5 pointer-events-auto">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Let's transform <br />
                        data into <span className="text-emerald-500">action.</span>
                    </h2>
                    <Link href="/projects" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                        View My Work
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
