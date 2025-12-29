
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Minus } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-32 space-y-8"
          >
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
              <Minus size={20} strokeWidth={4} /> Selected Works
            </div>
            <h1 className="text-7xl lg:text-[9rem] font-black tracking-tighter text-slate-900 leading-[0.85]">
              Portfolio.
            </h1>
            <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              A curated collection of digital experiences designed with precision, purpose, and a focus on premium aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-[3.5rem] bg-white border border-slate-100 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:-translate-y-6 group-hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.15)] group-hover:border-slate-200">
                  {/* Image Container with sophisticated reveal */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-[1200ms] ease-[0.16,1,0.3,1]"
                    />
                    
                    {/* Artistic gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                  
                  {project.isDemo && (
                    <div className="absolute top-10 left-10 z-10">
                      <span className="px-6 py-2.5 bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 rounded-full shadow-2xl border border-white/50">
                        Concept
                      </span>
                    </div>
                  )}

                  {/* Content Area */}
                  <div className="p-12 space-y-6 relative">
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                        {project.category}
                      </p>
                      <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-200 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 ease-[0.16,1,0.3,1]">
                        <ArrowRight size={20} className="-rotate-45" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-slate-900 leading-tight tracking-tighter">
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-60 border-t border-slate-100 pt-40 text-center space-y-16">
            <h2 className="text-6xl lg:text-[8rem] font-black tracking-tighter text-slate-900 leading-[0.85]">
              Your project <br /> deserves better.
            </h2>
            <p className="text-xl lg:text-3xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
              Every design choice I make is intentional. Let's work together to create a website that not only looks stunning but drives real results.
            </p>
            <div className="pt-10">
              <a 
                href="/contact"
                className="px-16 py-8 bg-slate-900 text-white font-black text-2xl rounded-3xl hover:bg-black transition-all inline-flex items-center gap-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-2 active:scale-95"
              >
                Let's get started <ArrowRight className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
