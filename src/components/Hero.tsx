
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, Heart, Camera, CircleHelp, FileText } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
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
    <div className="min-h-screen pt-20 px-6 md:px-8 flex flex-col justify-center relative overflow-hidden" ref={heroRef}>
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-green-200/30 rounded-full filter blur-3xl z-0 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col space-y-8 animate-on-scroll">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetlight text-vetprimary mb-4">
                <PawPrint size={16} className="mr-2" />
                <span>Virtual Veterinary Assistant</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-vetdark mb-4">
                Veterinary Care, <br />
                <span className="text-vetprimary">Anytime, Anywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Your AI-powered veterinary assistant providing expert pet health guidance, personalized care recommendations, and peace of mind for pet owners.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg shadow-lg btn-hover-effect"
              >
                <a href="#start">Get Started</a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className="border-vetprimary text-vetprimary hover:bg-vetlight rounded-lg px-8 py-6 text-lg"
              >
                <a href="#demo">See How It Works</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">SM</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">+</div>
              </div>
              <span className="text-sm text-gray-600">Join thousands of pet owners using VetGPT</span>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative glass-card rounded-2xl p-6 shadow-lg w-full max-w-lg mx-auto animate-float">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-vetprimary/10 flex items-center justify-center flex-shrink-0">
                  <PawPrint className="h-5 w-5 text-vetprimary" />
                </div>
                <div className="flex-grow">
                  <div className="bg-vetlight rounded-xl p-4 text-gray-700">
                    <p className="font-medium">Hi I'm VetGPT! Do you have an animal you would like me to assess? I can analyze photos and provide care recommendations.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-gray-600">You</span>
                </div>
                <div className="flex-grow">
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-gray-700 shadow-subtle">
                    <p>My dog has been scratching a lot and has red spots on his skin.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-vetprimary/10 flex items-center justify-center flex-shrink-0">
                  <PawPrint className="h-5 w-5 text-vetprimary" />
                </div>
                <div className="flex-grow">
                  <div className="bg-vetlight rounded-xl p-4 text-gray-700">
                    <p className="font-medium">I understand your concern. This could be a sign of several conditions including allergies or skin irritation.</p>
                    <p className="mt-2"><strong>Could you provide some more information about your dog? What breed, age, and weight is your dog?</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-vetaccent/10 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Heart className="h-10 w-10 text-vetaccent" />
            </div>
            
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-vetsecondary/10 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <Camera className="h-8 w-8 text-vetsecondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
