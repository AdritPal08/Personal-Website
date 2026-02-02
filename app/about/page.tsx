'use client';

import { personalInfo, languages, education } from '@/lib/data';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">About Me.</h1>

                <section className="mb-16">
                    <h2 className="text-2xl text-blue-400 font-semibold mb-6">Professional Summary</h2>
                    <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                        {personalInfo.summary}
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section>
                        <h2 className="text-2xl text-purple-400 font-semibold mb-6">Bio</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {personalInfo.shortBio}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-emerald-400 font-semibold mb-6">Languages</h2>
                        <div className="flex flex-wrap gap-3">
                            {languages.map(lang => (
                                <span key={lang} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white">
                                    {lang}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="mt-16 border-t border-white/10 pt-16">
                    <h2 className="text-2xl text-amber-400 font-semibold mb-6">Education</h2>
                    <div className="space-y-8">
                        {education.map((edu, idx) => (
                            <div key={idx}>
                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                <p className="text-gray-400">{edu.school} | {edu.year}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </motion.div>
        </div>
    );
}
