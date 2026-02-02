import fs from 'fs';
import path from 'path';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Link from 'next/link';
import { genAIProjects } from '@/lib/data';
import { FaGithub } from 'react-icons/fa';

function getSequenceImages() {
  const sequenceDir = path.join(process.cwd(), 'public', 'sequence');
  try {
    const files = fs.readdirSync(sequenceDir);
    return files
      .filter(file => file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.webp'))
      .sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      })
      .map(file => `/sequence/${file}`);
  } catch (err) {
    console.error("Error reading sequence directory", err);
    return [];
  }
}

export default function Home() {
  const images = getSequenceImages();
  const featuredProjects = genAIProjects.slice(0, 3); // Top 3

  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas images={images}>
        {/* scrollYProgress is injected by cloneElement in ScrollyCanvas */}
        <Overlay scrollYProgress={null as any} />
      </ScrollyCanvas>

      {/* Featured Projects Section */}
      <section className="py-24 px-4 md:px-12 bg-[#121212] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Work.</h2>
              <p className="text-gray-400 text-lg">A selection of my recent AI & GenAI projects.</p>
            </div>
            <Link href="/projects" className="hidden md:block text-white border-b border-white pb-1 hover:text-gray-300 transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.overview}
                </p>
                <Link href={project.link} target="_blank" className="inline-flex items-center text-sm font-bold text-white hover:underline">
                  <FaGithub className="mr-2" /> View Source
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/projects" className="inline-block px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
