
import React, { useEffect } from 'react';
import { PawPrint, Upload, MessageSquare, FileText } from 'lucide-react';

const Demo = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="demo" className="py-24 px-6 md:px-8 bg-vetlight/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-vetprimary mb-4">
            <PawPrint size={16} className="mr-2" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-vetdark mb-4">
            How <span className="text-vetprimary">VetGPT</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get expert veterinary guidance in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-subtle text-center relative animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetprimary flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="h-16 flex items-center justify-center mb-4">
              <Upload className="h-10 w-10 text-vetprimary" />
            </div>
            <h3 className="text-xl font-semibold text-vetdark mb-2">Upload Photo</h3>
            <p className="text-gray-600">
              Share a photo of your pet or describe their symptoms in detail.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-subtle text-center relative animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetprimary flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="h-16 flex items-center justify-center mb-4">
              <MessageSquare className="h-10 w-10 text-vetprimary" />
            </div>
            <h3 className="text-xl font-semibold text-vetdark mb-2">Consult VetGPT</h3>
            <p className="text-gray-600">
              Answer follow-up questions to provide a complete picture of your pet's health.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-subtle text-center relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetprimary flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="h-16 flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-vetprimary" />
            </div>
            <h3 className="text-xl font-semibold text-vetdark mb-2">Get Expert Advice</h3>
            <p className="text-gray-600">
              Receive a detailed assessment, care plan, and actionable next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
