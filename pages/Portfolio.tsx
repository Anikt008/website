
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-24 space-y-6"
          >
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight">Portfolio</h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Explore some of my latest work. These projects demonstrate my focus on clarity, modern aesthetics, and professional standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                  
                  {project.isDemo && (
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-[10px] font-black uppercase tracking-widest text-slate-900 rounded-full shadow-lg">
                      Demo Project
                    </div>
                  )}
                </div>
                
                <div className="space-y-2 px-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{project.category}</p>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-black text-slate-900">{project.title}</h3>
                    <div className="text-slate-300 group-hover:text-slate-900 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  <p className="text-slate-500 font-medium">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 border-t border-slate-100 pt-32 text-center space-y-8">
            <h2 className="text-4xl font-black tracking-tight">Have a specific idea in mind?</h2>
            <p className="text-slate-500 max-w-lg mx-auto font-medium">I specialize in turning complex ideas into clean, functional web experiences.</p>
            <div className="pt-4">
              <a 
                href="/contact"
                className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all inline-block shadow-xl shadow-slate-100"
              >
                Let's discuss your project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
