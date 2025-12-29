
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, ArrowRight, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<null | 'success'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formData);
    setStatus('success');
    setTimeout(() => setStatus(null), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

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
            <h1 className="text-6xl lg:text-8xl font-black tracking-tight">Get in touch</h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div className="space-y-8">
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.email}</p>
                  </div>
                </a>

                <a 
                  href={CONTACT_INFO.whatsappUrl}
                  className="group flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">WhatsApp</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-10 lg:p-16 rounded-[3rem] border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium"
                    placeholder="Aniket Kumar"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium"
                    placeholder="hello@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-6 py-5 bg-white border border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all font-medium resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                >
                  Send Message <Send size={18} />
                </button>
                {status === 'success' && (
                  <p className="text-center text-emerald-600 font-bold text-sm animate-fade-in">Message sent successfully!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
