
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-20 px-6 lg:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
          <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-900">
            ANIKET<span className="text-slate-400 font-light">KUMAR</span>
          </Link>
          <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
            Designing modern, fast, and user-friendly websites for forward-thinking brands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><Link to="/services" className="hover:text-slate-900">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-slate-900">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-slate-900">About</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-slate-900">Email</a></li>
              <li><a href={CONTACT_INFO.whatsappUrl} className="hover:text-slate-900">WhatsApp</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li><Link to="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-slate-900">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between text-xs text-slate-400 font-medium">
        <p>&copy; {new Date().getFullYear()} Aniket Kumar. All rights reserved.</p>
        <p>Built for clarity and trust.</p>
      </div>
    </footer>
  );
};

export default Footer;
