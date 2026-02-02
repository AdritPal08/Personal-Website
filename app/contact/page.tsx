'use client';

import { personalInfo } from '@/lib/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4 md:px-12 pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-3xl w-full bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Get in Touch.</h1>
                <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16">
                    <Link href={`mailto:${personalInfo.email}`} className="flex items-center text-lg text-white hover:text-blue-400 transition-colors">
                        <FaEnvelope className="mr-3" /> {personalInfo.email}
                    </Link>
                    <Link href={`tel:${personalInfo.phone}`} className="flex items-center text-lg text-white hover:text-blue-400 transition-colors">
                        <FaPhone className="mr-3" /> {personalInfo.phone}
                    </Link>
                </div>

                <div className="flex justify-center space-x-8 mb-12">
                    <Link href={personalInfo.github} target="_blank" className="text-4xl text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-300">
                        <FaGithub />
                    </Link>
                    <Link href={personalInfo.linkedin} target="_blank" className="text-4xl text-gray-400 hover:text-blue-500 transition-colors hover:scale-110 transform duration-300">
                        <FaLinkedin />
                    </Link>
                </div>

                <div className="text-gray-500 flex items-center justify-center">
                    <FaMapMarkerAlt className="mr-2" /> {personalInfo.location}
                </div>
            </motion.div>
        </div>
    );
}
