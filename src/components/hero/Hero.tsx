
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroVideo from './HeroVideo';
import HeroDisclaimer from './HeroDisclaimer';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Mouse follow effect for the floating button
  useEffect(() => {
    const floatingBtn = document.querySelector('.floating-btn');
    if (!floatingBtn) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const videoContainer = document.querySelector('.video-container');
      if (!videoContainer) return;
      
      const rect = videoContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      floatingBtn.setAttribute('style', `transform: translate(${moveX}px, ${moveY}px) scale(1.1);`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20 px-6 md:px-8 flex flex-col justify-center relative overflow-hidden" ref={heroRef}>
      {/* Background Elements */}
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <HeroContent />
          
          {/* Hero Visual - YouTube Video Integration */}
          <HeroVideo />
        </div>
        
        {/* Disclaimer Section */}
        <HeroDisclaimer />
      </div>
    </div>
  );
};

export default Hero;
