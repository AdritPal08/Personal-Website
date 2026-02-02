'use client';

import { genAIProjects } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
                >
                    GenAI & Agentic Projects.
                </motion.h1>
                <p className="text-xl text-gray-400 mb-16 max-w-2xl">
                    A collection of my work in Agentic AI, RAG Systems, and Automation workflows.
                </p>

                <div className="grid grid-cols-1 gap-12">
                    {genAIProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.07] transition-all"
                        >
                            <div className="flex flex-col lg:flex-row gap-10">

                                {/* Left: Info */}
                                <div className="flex-1 space-y-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h2>
                                        <p className="text-blue-400 font-medium text-lg">
                                            {project.outcome}
                                        </p>
                                    </div>

                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <span className="text-gray-500 font-bold uppercase text-xs tracking-wider block mb-1">Problem</span>
                                            <p>{project.problem}</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 font-bold uppercase text-xs tracking-wider block mb-1">Solution</span>
                                            <p>{project.solution}</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-white bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition-colors font-medium cursor-pointer"
                                    >
                                        <FaGithub size={20} /> View on GitHub
                                    </Link>
                                </div>

                                {/* Right: Features & Stack */}
                                <div className="lg:w-1/3 space-y-8 bg-black/20 p-6 rounded-2xl border border-white/5 h-fit">
                                    <div>
                                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-start leading-relaxed">
                                                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-bold mb-4">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
