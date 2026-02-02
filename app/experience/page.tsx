'use client';

import { experience } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-20 tracking-tighter"
                >
                    Experience.
                </motion.h1>

                <div className="relative border-l border-white/20 ml-4 md:ml-12 space-y-16">
                    {experience.map((job, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-1">{job.role}</h2>
                                        <h3 className="text-xl text-blue-400">{job.company}</h3>
                                    </div>
                                    <span className="text-gray-400 font-mono text-sm mt-2 md:mt-0">{job.date}</span>
                                </div>

                                <ul className="space-y-3">
                                    {job.points.map((point, i) => (
                                        <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                                            <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
