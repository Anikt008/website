
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Fixed: Added ArrowRight to the lucide-react imports
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl h-20 border-b border-slate-100 shadow-sm' : 'bg-transparent h-28'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 group">
          ANIKET<span className="text-slate-300 font-light group-hover:text-slate-900 transition-colors duration-500">KUMAR</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-bold uppercase tracking-[0.2em] transition-all hover:text-slate-900 ${
                location.pathname === link.path ? 'text-slate-900 border-b-2 border-slate-900 pb-1' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-slate-900 text-white text-[13px] font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all active:scale-95 flex items-center gap-2 shadow-xl shadow-slate-200"
          >
            Inquiry <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-2xl font-black tracking-tighter text-slate-900">ANIKET</span>
              <button onClick={() => setIsOpen(false)} className="p-4 bg-slate-50 rounded-full">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-black tracking-tighter ${
                      location.pathname === link.path ? 'text-slate-900' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-12">
               <div className="w-12 h-1 bg-slate-900" />
               <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold flex items-center gap-4 group"
               >
                 Start a project <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
