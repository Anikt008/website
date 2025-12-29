import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="py-32 px-6 lg:px-12 bg-white max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-12">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
          <p>By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2 className="text-2xl font-bold text-slate-900">1. Use License</h2>
          <p>Permission is granted to temporarily view the materials on Aniket Kumar's website for personal, non-commercial transitory viewing only.</p>

          <h2 className="text-2xl font-bold text-slate-900">2. Disclaimer</h2>
          <p>The materials on this website are provided on an 'as is' basis. Aniket Kumar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2 className="text-2xl font-bold text-slate-900">3. Limitations</h2>
          <p>In no event shall Aniket Kumar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.</p>

          <h2 className="text-2xl font-bold text-slate-900">4. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>

          <p className="pt-8 text-sm">Last updated: October 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Terms;