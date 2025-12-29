
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Layout, User, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const icons = [<Layout size={32} />, <User size={32} />, <Layers size={32} />];

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
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight">Services</h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              I provide specialized design services for serious businesses and individuals who value quality, speed, and aesthetics.
            </p>
          </motion.div>

          <div className="space-y-12">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 lg:p-16 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                   <div className="w-20 h-20 bg-white shadow-xl shadow-slate-200 rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    {icons[idx]}
                   </div>
                </div>
                <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                  <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">{service.description}</p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                   <Link 
                    to="/contact" 
                    className="flex items-center gap-3 font-bold text-slate-900 group-hover:gap-5 transition-all"
                  >
                    Get Started <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-slate-900 rounded-[2.5rem] text-center text-white space-y-8">
            <h2 className="text-4xl lg:text-5xl font-black">Ready to build something great?</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Tell me about your project and let's create a website that works for you.
            </p>
            <div className="pt-4">
               <Link 
                to="/contact" 
                className="inline-block px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-all active:scale-95"
               >
                 Start Your Project
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
