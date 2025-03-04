
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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
                <strong>Not a Substitute for Professional Care:</strong> PetCareGPT is an AI tool designed to provide general information about pet health. It is not a substitute for professional veterinary advice, diagnosis, or treatment. This service does not establish a veterinarian-client-patient relationship (VCPR).
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Emergency Situations:</strong> Always seek the advice of your veterinarian with any questions you may have regarding your pet's medical condition. Never disregard professional veterinary advice or delay in seeking it because of something you have read on this website or received from this AI tool.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Limitation of Liability:</strong> By using PetCareGPT, you acknowledge and agree that AI WEB TOOLS LLC and its affiliates shall not be liable for any damages, direct or indirect, arising from your use of or reliance on any information provided by this service.
              </p>
              <p className="text-gray-200 mb-4">
                <strong>Image Analysis Limitations:</strong> While our AI can analyze images to provide general observations, these should not be considered diagnostic. Visual assessments have limitations and cannot replace physical examination by a qualified veterinarian.
              </p>
              <p className="text-gray-200">
                <strong>Urgent Care:</strong> In case of emergency, contact your local veterinary emergency services immediately at the first sign of distress or concerning symptoms in your pet.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
