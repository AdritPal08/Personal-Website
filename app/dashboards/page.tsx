'use client';

import { dashboards } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaChartBar } from 'react-icons/fa';

export default function Dashboards() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter"
                >
                    Dashboards.
                </motion.h1>
                <p className="text-xl text-gray-400 mb-16 max-w-2xl">
                    Interactive reports and analytics solutions built with Power BI and Google Looker Studio.
                </p>

                <div className="space-y-4">
                    {dashboards.map((dash, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <Link
                                href={dash.link}
                                target="_blank"
                                className="group block bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    <span className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mr-4 group-hover:bg-blue-500/20 transition-colors">
                                        <FaChartBar size={20} />
                                    </span>
                                    <h3 className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                                        {dash.title}
                                    </h3>
                                </div>
                                <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
