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
                    GenAI Projects.
                </motion.h1>
                <p className="text-xl text-gray-400 mb-16 max-w-2xl">
                    A collection of my work in Agentic AI, LLMs, and Automation workflows.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {genAIProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.overview}
                                </p>
                            </div>
                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors w-fit"
                            >
                                <FaGithub className="mr-2" /> View Source
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
