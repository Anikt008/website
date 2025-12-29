
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6 lg:px-12 py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.span 
                variants={itemVariants}
                className="inline-block text-[11px] font-black uppercase tracking-[0.4em] text-slate-400"
              >
                Based in India — Working Globally
              </motion.span>
              <motion.h1 
                variants={itemVariants}
                className="text-6xl lg:text-[7.5rem] font-black text-slate-900 leading-[0.9] tracking-tighter"
              >
                Digital <br />
                Craftsmanship <br />
                <span className="text-slate-200 underline decoration-slate-100 underline-offset-[12px]">Redefined.</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium"
              >
                Aniket Kumar designs clean, high-performance websites for businesses and personal brands who demand excellence.
              </motion.p>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400"
            >
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> Professional</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> Minimalist</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> Reliable</span>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                to="/contact"
                className="px-10 py-6 bg-slate-900 text-white text-lg font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all hover:translate-y-[-2px] active:scale-95 shadow-2xl shadow-slate-200"
              >
                Start a project <ArrowRight size={22} />
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-6 bg-white text-slate-900 border-2 border-slate-100 text-lg font-bold rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all"
              >
                View Works
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[5/6] bg-slate-50 rounded-[4rem] overflow-hidden border border-slate-100 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.08)]">
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1510" 
                alt="Sophisticated web designer portfolio visual" 
                className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply transition-transform duration-[2000ms] hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-50 max-w-sm">
              <div className="space-y-4">
                <div className="w-12 h-1 bg-slate-900" />
                <p className="text-slate-900 font-black text-3xl leading-none tracking-tighter">Clarity Above All.</p>
                <p className="text-slate-400 text-sm font-semibold leading-relaxed uppercase tracking-wider">
                  I help high-value brands find their voice through minimalist and meaningful digital experiences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900">Expertise & <br />Approach</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                Focused on delivering results through design systems that scale and layouts that convert.
              </p>
            </motion.div>
            <div className="flex justify-end">
              <Link to="/services" className="group flex items-center gap-4 text-slate-900 font-black text-xl hover:gap-6 transition-all duration-300">
                Explore all services <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-16 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] hover:translate-y-[-16px] transition-all duration-700 group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-12 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700">
                   <span className="font-black text-xl">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Link Section */}
      <section className="py-60 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl lg:text-[10rem] font-black text-slate-900 tracking-tighter leading-[0.8]"
          >
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-slate-200">ICONIC.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-6 group"
            >
              <div className="w-24 h-24 rounded-full border-2 border-slate-900 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <ArrowRight size={40} className="transform group-hover:rotate-[-45deg] transition-transform duration-500" />
              </div>
              <span className="text-3xl font-black tracking-tight border-b-4 border-transparent group-hover:border-slate-900 transition-all duration-500 pb-2">Get in touch</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
