
import React, { useEffect, useRef } from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroVideo from './HeroVideo';
import HeroDisclaimer from './HeroDisclaimer';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
      threshold: isMobile ? 0.05 : 0.1, // Lower threshold for mobile
      rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -10% 0px' // Trigger earlier on mobile
    });
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [isMobile]);

  // Simplified mouse follow effect with better cross-browser compatibility
  // Disable floating button animation on mobile for better performance
  useEffect(() => {
    if (isMobile) return; // Skip effect on mobile
    
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
  }, [isMobile]);

  return (
    <div className="min-h-screen pt-16 md:pt-20 px-4 md:px-6 lg:px-8 flex flex-col justify-center relative overflow-hidden" ref={heroRef}>
      {/* Background Elements - simplified on mobile */}
      <HeroBackground />
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
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
