import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, path }) => {
  const siteUrl = 'https://aniketkumar.netlify.app'; 
  const fullTitle = `${title} | Aniket Kumar - Expert Website Designer`;
  const url = `${siteUrl}${path}`;

  // Structured Data for Google Search (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aniket Kumar",
    "url": siteUrl,
    "jobTitle": "Website Designer & Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Muzaffarpur",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    },
    "description": "Professional website designer specializing in premium, high-performance digital experiences for business growth.",
    "sameAs": [
      "https://wa.me/917061984903"
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="theme-color" content="#0f172a" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:site_name" content="Aniket Kumar Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;