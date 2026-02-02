'use client';

import { skills } from '@/lib/data';
import { motion } from 'framer-motion';

const SkillBlock = ({ title, items, purpose, color }: { title: string, items: string[], purpose: string, color: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all flex flex-col h-full"
    >
        <h3 className={`text-xl font-bold mb-2 ${color}`}>{title}</h3>
        <p className="text-sm text-gray-500 mb-4 italic min-h-[40px]">{purpose}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {items.map(item => (
                <span key={item} className="px-3 py-1 bg-black/30 rounded text-sm text-gray-300 border border-white/5">
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
    // Helper to map object keys to array for iteration
    const skillCategories = [
        { ...skills.programming, color: "text-blue-400" },
        { ...skills.dataProcessing, color: "text-amber-400" },
        { ...skills.visualization, color: "text-emerald-400" },
        { ...skills.mlDl, color: "text-red-400" },
        { ...skills.llms, color: "text-purple-400" },
        { ...skills.llmFrameworks, color: "text-pink-400" },
        { ...skills.agents, color: "text-orange-400" },
        { ...skills.nocode, color: "text-teal-400" },
        { ...skills.databases, color: "text-indigo-400" },
        { ...skills.mlops, color: "text-cyan-400" },
        { ...skills.monitoring, color: "text-lime-400" },
        { ...skills.tools, color: "text-gray-400" },
    ];

    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-tighter"
                >
                    Technical Skills.
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <SkillBlock
                            key={idx}
                            title={cat.title}
                            items={cat.items}
                            purpose={cat.purpose}
                            color={cat.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
