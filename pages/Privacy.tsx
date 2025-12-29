import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 lg:pt-40">
      <section className="py-32 px-6 lg:px-12 bg-white max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-12">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-slate-600 font-medium leading-relaxed">
          <p>Your privacy is important to us. It is Aniket Kumar's policy to respect your privacy regarding any information we may collect from you across our website.</p>
          
          <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>

          <h2 className="text-2xl font-bold text-slate-900">2. Use of Information</h2>
          <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>

          <h2 className="text-2xl font-bold text-slate-900">3. Cookies</h2>
          <p>We use cookies to help us understand how you interact with our site, providing you with a better experience. You can choose to disable cookies through your browser settings.</p>

          <h2 className="text-2xl font-bold text-slate-900">4. Third-Party Services</h2>
          <p>We may use third-party services for analytics and communications. These services have their own privacy policies regarding how they handle data.</p>

          <p className="pt-8 text-sm">Last updated: October 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;