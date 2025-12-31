import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <SEO 
        title="Our Portfolio" 
        description="View the latest website design projects by Aniket Kumar. A showcase of modern, clean, and professional digital experiences created for various industries."
        path="/portfolio"
      />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full overflow-hidden rounded-[3rem] bg-white border border-slate-100 transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-3 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group-hover:border-slate-200">
                  {/* Image Container with refined zoom reveal */}
                  <div className="aspect-[4/5] overflow-hidden bg-slate-50 relative">
                    <img
                      src={project.imageUrl}
                      alt={`${project.title} - Website Design Project by Aniket Kumar`}
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 scale-100 group-hover:scale-105 transition-all duration-[1000ms] ease-[0.16,1,0.3,1]"
                    />
                    
                    <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-all duration-700" />
                  </div>
                  
                  {project.isDemo && (
                    <div className="absolute top-8 left-8 z-10">
                      <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-[0.3em] text-slate-900 rounded-full shadow-xl border border-white/50">
                        Concept
                      </span>
                    </div>
                  )}

                  {/* Content Area */}
                  <div className="p-10 space-y-4 bg-white relative">
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                        {project.category}
                      </p>
                      <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-200 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ease-[0.16,1,0.3,1]">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-black transition-colors duration-500">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-500 font-medium leading-relaxed group-hover:text-slate-700 transition-colors duration-500 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-slate-900 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                      View details <ArrowRight size={14} />
                    </div>
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
              <Link 
                to="/contact"
                className="px-16 py-8 bg-slate-900 text-white font-black text-2xl rounded-3xl hover:bg-black transition-all inline-flex items-center gap-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-2 active:scale-95"
              >
                Let's get started <ArrowRight className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;