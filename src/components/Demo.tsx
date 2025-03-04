
import React, { useEffect, useRef } from 'react';
import { PenSquare, FileText, MessageSquare, BookOpen } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Demo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px'
    });

    const animatedElements = containerRef.current.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, [isMobile]);

  return (
    <section 
      id="demo" 
      className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-indigo-900/90 to-indigo-950/80"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetaccent/20 text-white border border-vetaccent/30 mb-4">
            <PenSquare size={16} className="mr-2 text-vetaccent" />
            <span className="text-vetaccent">📜 Playwriting Process</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            How <span className="text-gradient">PlayWriter GPT</span> Works
          </h2>
          <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
            Create award-worthy theatrical plays in four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-glass border border-white/10 text-center relative animate-on-scroll touch-active" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetaccent flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="h-14 md:h-16 flex items-center justify-center mb-3 md:mb-4">
              <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-vetaccent" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Define Your Vision</h3>
            <p className="text-sm md:text-base text-indigo-200">
              Share your play's genre, premise, characters, and setting details or get inspired with creative suggestions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-glass border border-white/10 text-center relative animate-on-scroll touch-active" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetaccent flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="h-14 md:h-16 flex items-center justify-center mb-3 md:mb-4">
              <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-vetaccent" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Build Structured Outline</h3>
            <p className="text-sm md:text-base text-indigo-200">
              Get a detailed outline with acts, scenes, character descriptions, and key story progression elements.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-glass border border-white/10 text-center relative animate-on-scroll touch-active" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetaccent flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="h-14 md:h-16 flex items-center justify-center mb-3 md:mb-4">
              <PenSquare className="h-8 w-8 md:h-10 md:w-10 text-vetaccent" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Scene-by-Scene Creation</h3>
            <p className="text-sm md:text-base text-indigo-200">
              Each scene is written separately with dialogue, stage directions, and descriptions in professional format.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-glass border border-white/10 text-center relative animate-on-scroll touch-active" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-vetaccent flex items-center justify-center text-white font-bold">
              4
            </div>
            <div className="h-14 md:h-16 flex items-center justify-center mb-3 md:mb-4">
              <FileText className="h-8 w-8 md:h-10 md:w-10 text-vetaccent" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Complete Script Download</h3>
            <p className="text-sm md:text-base text-indigo-200">
              Receive your finalized play as a professionally formatted downloadable DOCX file ready for production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
