
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, ArrowRight } from 'lucide-react';

const CTA = () => {
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
    <section id="start" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-vetprimary/10 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-vetsecondary/10 rounded-full filter blur-3xl z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-center animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-6">
            <PawPrint size={16} className="mr-2" />
            <span>Start Now</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Give Your Pet the <span className="text-gradient">Expert Care</span> They Deserve
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of pet owners who trust VetGPT for reliable, compassionate guidance on their pets' health and wellbeing.
          </p>
          
          <Button 
            asChild 
            className="bg-vetprimary hover:bg-vethighlight text-white rounded-lg px-8 py-6 text-lg shadow-glow btn-hover-effect hover-scale"
          >
            <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
              Get Started with VetGPT <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <div className="mt-8 text-gray-400 text-sm">
            <p>No subscription required. Start caring for your pet better today.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-vetprimary mb-2">24/7</div>
            <p className="text-gray-300">Always available whenever your pet needs help</p>
          </div>
          
          <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-vetprimary mb-2">1,000+</div>
            <p className="text-gray-300">Species and Breeds Supported in Our System</p>
          </div>
          
          <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.3s' }}>
            <div className="text-2xl font-bold text-vetprimary mb-2">5,000+</div>
            <p className="text-gray-300">Pet owners already using VetGPT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
