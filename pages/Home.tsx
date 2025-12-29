
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-6 lg:px-12 py-24 bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Website Designer
              </span>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Clean, Professional Websites <span className="text-slate-300">That Build Trust</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed">
                I design modern, fast, and user-friendly websites for businesses and personal brands.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Business Websites</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Personal Brands</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} /> Clean UI Layouts</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-5 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all hover:translate-y-[-2px] active:scale-95 shadow-xl shadow-slate-200"
              >
                Contact Me <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-5 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-xl flex items-center justify-center hover:bg-slate-50 transition-all"
              >
                View Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] bg-slate-50 rounded-3xl overflow-hidden shadow-2xl shadow-slate-100 border border-slate-100">
              <img 
                src="https://picsum.photos/seed/aniket/1200/1500" 
                alt="Modern web design showcase" 
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-2xl border border-slate-50 max-w-xs">
              <p className="text-slate-900 font-bold text-lg leading-tight mb-2">Focused on high-performance design.</p>
              <p className="text-slate-400 text-sm font-medium">I help businesses scale their online presence through clarity.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-32 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 space-y-4"
          >
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">Tailored Solutions</h2>
            <p className="text-lg text-slate-500 max-w-2xl">Everything you need for a premium web presence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:translate-y-[-8px] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {idx === 0 && <CheckCircle size={24} />}
                  {idx === 1 && <CheckCircle size={24} />}
                  {idx === 2 && <CheckCircle size={24} />}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-40 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight"
          >
            "Websites should be as <span className="text-slate-300">seamless</span> as they are <span className="text-slate-300">sophisticated</span>."
          </motion.h2>
          <div className="flex flex-col items-center">
            <p className="font-bold text-lg">Aniket Kumar</p>
            <p className="text-slate-400 font-medium">Founder & Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
