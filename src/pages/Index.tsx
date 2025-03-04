
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };

    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add dark scrollbar class to body
    document.body.classList.add('dark-scrollbar');
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('dark-scrollbar');
    };
  }, []);

  return (
    <div className="min-h-screen bg-vetchardark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <FAQ />
        <CTA />
        <div id="disclaimer" className="py-16 px-6 bg-vetchardark">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">🚨 Legal Disclaimer</h2>
            <div className="bg-vetcard/80 p-6 rounded-lg border border-vetmuted/40 shadow-md">
              <p className="text-gray-200 mb-4">
                <strong>Educational and Creative Tool:</strong> PlayWriter GPT is an AI tool designed to assist with creative writing and playwriting. It does not guarantee commercial success, production feasibility, or universal acclaim for any plays created with its assistance.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Original Content:</strong> While PlayWriter GPT aims to create original content, the user is responsible for ensuring the final work does not infringe on existing copyrights, trademarks, or intellectual property rights. We recommend reviewing all generated content for originality.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Limitation of Liability:</strong> By using PlayWriter GPT, you acknowledge and agree that AI WEB TOOLS LLC and its affiliates shall not be liable for any damages, direct or indirect, arising from your use of or reliance on any information or content provided by this service.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Content Guidelines:</strong> PlayWriter GPT is designed to adhere to ethical content creation standards. However, users are responsible for the themes, subject matter, and content they request. The AI will not knowingly assist in creating harmful, illegal, or unethical content.
              </p>
              <p className="text-gray-200">
                <strong>Rights to Created Content:</strong> Users retain rights to content created with the assistance of PlayWriter GPT, subject to our Terms of Service. AI WEB TOOLS LLC does not claim ownership of plays or creative works developed through our platform.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
