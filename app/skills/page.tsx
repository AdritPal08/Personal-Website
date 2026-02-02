'use client';

import { skills } from '@/lib/data';
import { motion } from 'framer-motion';

const SkillBlock = ({ title, items, color }: { title: string, items: string[], color: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
    >
        <h3 className={`text-xl font-bold mb-4 ${color}`}>{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map(item => (
                <span key={item} className="px-3 py-1 bg-black/30 rounded text-sm text-gray-300 border border-white/5">
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
);

export default function Skills() {
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
                    <SkillBlock title="Programming & Scripting" items={skills.programming} color="text-blue-400" />
                    <SkillBlock title="LLMs" items={skills.llms} color="text-purple-400" />
                    <SkillBlock title="Agents & Orchestration" items={[...skills.agents, ...skills.orchestration]} color="text-pink-400" />
                    <SkillBlock title="Data Processing & Analytics" items={skills.dataProcessing} color="text-amber-400" />
                    <SkillBlock title="Visualization & BI" items={skills.visualization} color="text-emerald-400" />
                    <SkillBlock title="ML & Deep Learning" items={skills.mlDl} color="text-red-400" />
                    <SkillBlock title="Databases" items={skills.databases} color="text-indigo-400" />
                    <SkillBlock title="MLOps & DevOps" items={skills.mlops} color="text-teal-400" />
                    <SkillBlock title="Tools & Apps" items={[...skills.apps, ...skills.tools]} color="text-gray-400" />
                </div>
            </div>
        </div>
    );
}
