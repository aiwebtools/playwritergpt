
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroVideo from './HeroVideo';
import HeroDisclaimer from './HeroDisclaimer';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Use a more reliable way to check if elements are in the viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class with a slight delay to ensure DOM is ready
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 10);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before element enters viewport
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Simplified mouse follow effect with better cross-browser compatibility
  useEffect(() => {
    const floatingBtn = document.querySelector('.floating-btn');
    if (!floatingBtn) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      try {
        const videoContainer = document.querySelector('.video-container');
        if (!videoContainer) return;
        
        const rect = videoContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Use a more conservative movement amount for better compatibility
        const moveX = (e.clientX - centerX) / 30;
        const moveY = (e.clientY - centerY) / 30;
        
        // Apply transform in a more compatible way
        floatingBtn.setAttribute('style', `transform: translate(${moveX}px, ${moveY}px);`);
      } catch (error) {
        console.log("Error in mouse move effect:", error);
      }
    };
    
    // Use passive event listener for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
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
