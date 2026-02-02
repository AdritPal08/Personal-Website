export default function Projects() {
    const projects = [
        { title: "Neon Skyline", category: "Immersive Web Experience" },
        { title: "Quantum Dashboard", category: "Fintech SaaS" },
        { title: "Velvet UI", category: "Design System" },
        { title: "Apex Motion", category: "Interactive Storytelling" },
    ];

    return (
        <section className="min-h-screen bg-[#121212] py-24 px-4 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-24 tracking-tighter">Selected Work.</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className={`group relative aspect-[4/3] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${i % 2 === 1 ? 'md:mt-24' : ''}`}
                        >
                            {/* Gradient Placeholder for Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 group-hover:scale-105 transition-transform duration-700 ease-out" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="overflow-hidden mb-2">
                                    <h3 className="text-3xl font-bold text-white translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                                        {p.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 text-lg">{p.category}</p>

                                <div className="mt-6 flex items-center text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    View Case Study <span className="ml-2">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
