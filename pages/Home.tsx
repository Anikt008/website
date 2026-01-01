import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Minus } from 'lucide-react';
import { SERVICES } from '../constants';
import SEO from '../components/SEO';

// Premium professional workspace image representing "Work"
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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    },
  };

  return (
    <div className="pt-32 lg:pt-40 overflow-x-hidden">
      <SEO 
        title="Expert Website Designer" 
        description="Premium website design by Aniket Kumar. Specialized in UI/UX, clean layouts, and high-performance websites that build trust and drive business growth."
        path="/"
      />
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* TEXT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 order-2 lg:order-1"
          >
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                <Minus size={20} strokeWidth={4} /> Visionary Digital Craft
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]"
              >
                Modern <br />
                <span className="text-slate-300">
                  Experiences.
                </span>
              </motion.h1>

              <motion.div variants={itemVariants}>
                <TypingLine />
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-xl lg:text-2xl text-slate-500 max-w-xl leading-relaxed font-medium"
              >
                I transform complex business goals into simple, beautiful, and high-performance websites that leave a lasting impression on your audience.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="px-12 py-6 bg-slate-900 text-white text-xl font-black rounded-[2rem] flex items-center justify-center gap-4 hover:bg-black transition-all hover:translate-y-[-4px] active:scale-95 shadow-2xl shadow-slate-200"
              >
                Work with me <ArrowRight size={24} />
              </Link>
              <Link
                to="/portfolio"
                className="px-12 py-6 bg-white text-slate-900 border-2 border-slate-100 text-xl font-bold rounded-[2rem] flex items-center justify-center hover:bg-slate-50 transition-all"
              >
                Portfolio
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8 text-[11px] font-black uppercase tracking-[0.4em] text-slate-400"
            >
              <span className="flex items-center gap-3"><CheckCircle size={16} className="text-slate-900" /> Premium UI</span>
              <span className="flex items-center gap-3"><CheckCircle size={16} className="text-slate-900" /> SEO Focused</span>
              <span className="flex items-center gap-3"><CheckCircle size={16} className="text-slate-900" /> Global Standards</span>
            </motion.div>
          </motion.div>

          {/* IMAGE CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[580px] mx-auto overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 group">
              <img
                src={heroImage}
                alt="Professional Design Work Environment - Aniket Kumar Portfolio"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 opacity-70">Based in India</p>
                <h3 className="text-2xl font-black tracking-tight leading-tight">Driven by Clarity & Purpose.</h3>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-slate-100 rounded-full blur-3xl -z-10 opacity-50" />
          </motion.div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-40 px-6 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 space-y-6 text-center lg:text-left">
            <div className="inline-block px-6 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-4">
              Expertise
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 leading-none">Core Services</h2>
            <p className="text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
              I specialize in high-end web solutions for serious brands that need to stand out from the noise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white p-14 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700 group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                   <span className="font-black text-xl">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight leading-tight group-hover:text-slate-900">{service.title}</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-48 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-16 lg:p-32 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center space-y-12">
            <h2 className="text-5xl lg:text-[6rem] font-black text-white tracking-tighter leading-[0.85]">
              Let's create <br /> something <span className="text-slate-500">remarkable</span>.
            </h2>
            <p className="text-slate-400 text-xl lg:text-3xl max-w-2xl font-medium leading-relaxed">
              Elevate your business with a website designed for high-performance and premium impact.
            </p>
            <div className="pt-8">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-900 text-2xl font-black rounded-[2.5rem] hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-2xl"
              >
                Get Started <ArrowRight size={32} />
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full -mr-80 -mt-80 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-slate-800/30 rounded-full -ml-80 -mb-80 blur-3xl" />
        </div>
      </section>
    </div>
  );
};

export default Home;