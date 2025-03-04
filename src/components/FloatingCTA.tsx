
import React, { useEffect, useState } from 'react';
import { Theater } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling past the hero section
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      
      setIsVisible(scrollPosition > threshold);
    };

    // Initialize
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-vetprimary hover:bg-vethighlight text-white rounded-full shadow-glow shadow-vetprimary/30 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${isMobile ? 'px-4 py-3' : 'px-6 py-4'} hover:scale-110 active:scale-95`}
      aria-label="Try PlayWriter GPT"
    >
      <Theater className={`${isMobile ? 'h-5 w-5' : 'h-6 w-6'} animate-pulse`} />
      <span className={`font-bold ${isMobile ? 'text-sm' : 'text-base'}`}>
        TRY PLAYWRITER GPT
      </span>
    </a>
  );
};

export default FloatingCTA;
