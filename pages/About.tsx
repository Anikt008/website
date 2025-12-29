
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-12">
               <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight mb-8">About</h1>
                <p className="text-xl text-slate-500 font-medium leading-relaxed">
                  I am a professional website designer based in India, helping businesses create meaningful digital experiences.
                </p>
              </motion.div>
              
              <div className="space-y-6 pt-12 border-t border-slate-100">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</span>
                  <span className="text-lg font-bold text-slate-900">{CONTACT_INFO.name}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</span>
                  <span className="text-lg font-bold text-slate-900">{CONTACT_INFO.location}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Languages</span>
                  <span className="text-lg font-bold text-slate-900">English, Hindi</span>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 prose prose-xl prose-slate max-w-none text-slate-600 space-y-10"
            >
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">The Philosophy</h3>
              <p className="text-lg leading-relaxed">
                I believe that good design is invisible. It doesn't scream for attention; instead, it guides the user effortlessly towards their destination. My work is inspired by minimalist masters and modern layout principles where white space is as important as the content itself.
              </p>
              
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">My Approach</h3>
              <p className="text-lg leading-relaxed">
                Every project starts with a conversation about goals. I don't just "build a site"—I create a strategic asset for your business or personal brand. Whether it's a corporate landing page or a personal portfolio, my focus remains on speed, accessibility, and visual clarity.
              </p>

              <div className="bg-slate-50 p-12 rounded-[2rem] border border-slate-100 space-y-6">
                 <h4 className="text-2xl font-bold text-slate-900">Why work with me?</h4>
                 <ul className="space-y-4 font-medium text-slate-500">
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2.5 shrink-0" />
                     <span>No fluff, just clean professional work.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2.5 shrink-0" />
                     <span>Clear and transparent communication in English and Hindi.</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 bg-slate-900 rounded-full mt-2.5 shrink-0" />
                     <span>Reliable delivery timelines and serious commitment to your success.</span>
                   </li>
                 </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
