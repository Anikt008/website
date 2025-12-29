import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const heroImage = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200";

const TypingLine: React.FC = () => {
  const words = [
    "Expert Website Designer",
    "UI/UX Specialist",
    "Frontend Developer",
    "Business Growth Partner"
  ];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (
    <div className="h-8 flex items-center gap-1 text-lg font-medium text-slate-400">
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-5 bg-slate-900"
      />
    </div>
  );
};

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="pt-32 lg:pt-40 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center">
          
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
              >
                Clean, Professional Websites
                <span className="block text-slate-300">
                  That Build Trust
                </span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <TypingLine />
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium"
              >
                I specialize in creating high-performance digital experiences that help brands stand out and drive real business growth through minimalist, modern design.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                to="/contact"
                className="px-10 py-5 bg-slate-900 text-white text-lg font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-black transition-all hover:translate-y-[-2px] active:scale-95 shadow-xl shadow-slate-200"
              >
                Work with me <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 text-lg font-bold rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all"
              >
                See Portfolio
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
            >
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> UI Focus</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> SEO Ready</span>
              <span className="flex items-center gap-2"><CheckCircle size={14} className="text-slate-900" /> 100% Mobile Ready</span>
            </motion.div>
          </motion.div>

          {/* IMAGE CONTENT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={heroImage}
              alt="Professional website designer"
              className="
                w-full
                max-w-[520px]
                rounded-2xl
                object-cover
                shadow-2xl
              "
            />
          </motion.div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 px-6 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 space-y-4 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">Services</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl">Premium solutions for serious brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                   <span className="font-bold">0{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-40 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3.5rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center space-y-10">
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-tight">
              Let's create something <br /> remarkable together.
            </h2>
            <p className="text-slate-400 text-xl lg:text-2xl max-w-xl font-medium">
              Join dozens of satisfied clients who have elevated their business with a custom-designed website.
            </p>
            <div className="pt-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 px-14 py-7 bg-white text-slate-900 text-xl font-black rounded-3xl hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                Get Started Now <ArrowRight size={24} />
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/20 rounded-full -ml-48 -mb-48 blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Home;