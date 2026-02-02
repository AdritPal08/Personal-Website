'use client';

import { dashboards } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt, FaChartPie, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

export default function Dashboards() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-24 px-4 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter"
                >
                    Dashboards & Reports.
                </motion.h1>
                <p className="text-xl text-gray-400 mb-8 max-w-3xl">
                    Interactive analytics solutions built with Power BI and Google Looker Studio.
                </p>

                {/* Disclaimer */}
                <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 px-4 py-3 rounded-lg mb-16 w-fit">
                    <FaExclamationTriangle />
                    <span className="text-sm font-medium">Public links / sample data only. No confidential business data shown.</span>
                </div>

                <div className="space-y-6">
                    {dashboards.map((dash, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.08] transition-all group"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                                {/* Left: Content */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${dash.platform === 'Power BI' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-blue-500/20 text-blue-500'}`}>
                                            {dash.platform}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {dash.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-300 font-medium mb-4">{dash.purpose}</p>

                                    <div>
                                        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider block mb-2">What you'll see:</span>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {dash.insights.map((insight, i) => (
                                                <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                                    <FaChartLine className="text-gray-600 size-3" />
                                                    {insight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right: Action */}
                                <div className="shrink-0 pt-2">
                                    <Link
                                        href={dash.link}
                                        target="_blank"
                                        className="flex items-center gap-2 text-white bg-white/10 px-5 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm font-bold whitespace-nowrap"
                                    >
                                        Open Dashboard <FaExternalLinkAlt size={12} />
                                    </Link>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
