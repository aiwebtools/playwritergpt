
import React, { useEffect } from 'react';
import { PawPrint, Upload, MessageSquare, FileText, ArrowRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg overflow-hidden animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-vetdark mb-4">See VetGPT in Action</h3>
              <p className="text-gray-600 mb-6">
                Watch how VetGPT analyzes pet symptoms, asks targeted questions, and provides comprehensive care recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-vetprimary/10 flex items-center justify-center flex-shrink-0">
                    <PawPrint className="h-4 w-4 text-vetprimary" />
                  </div>
                  <div className="bg-vetlight rounded-lg p-3 text-sm">
                    <p>Hi! I'm VetGPT. How can I help your pet today?</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-600">You</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-lg p-3 text-sm shadow-subtle">
                    <p>My cat isn't eating much and seems lethargic since yesterday.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-vetprimary/10 flex items-center justify-center flex-shrink-0">
                    <PawPrint className="h-4 w-4 text-vetprimary" />
                  </div>
                  <div className="bg-vetlight rounded-lg p-3 text-sm">
                    <p>I understand your concern. Loss of appetite and lethargy in cats can indicate several issues.</p>
                    <p className="mt-2 font-semibold">Could you tell me your cat's age, breed, and if they have any pre-existing health conditions?</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-600">You</span>
                  </div>
                  <div className="bg-white border border-gray-100 rounded-lg p-3 text-sm shadow-subtle">
                    <p>She's a 7-year-old domestic shorthair with no health issues until now.</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-vetprimary/10 flex items-center justify-center flex-shrink-0">
                    <PawPrint className="h-4 w-4 text-vetprimary" />
                  </div>
                  <div className="bg-vetlight rounded-lg p-3 text-sm">
                    <p>Thank you. For a 7-year-old cat with no history of health issues, sudden lethargy and appetite loss could indicate several conditions ranging from minor to more serious.</p>
                    <p className="mt-2 font-semibold">Has your cat had access to any plants, chemicals, or unusual foods recently? Any vomiting or changes in bathroom habits?</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="#start" className="inline-flex items-center text-vetprimary hover:text-vetprimary/80 font-medium">
                  Try for yourself <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -right-10 -top-10 w-full h-full rounded-full bg-vetaccent/5 animate-pulse"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <PawPrint className="h-16 w-16 text-vetprimary/30 mx-auto mb-3" />
                    <p className="text-gray-500">VetGPT Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
