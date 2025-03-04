
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Theater, ExternalLink, Heart, Camera } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroVideo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const attemptAutoplay = () => {
      try {
        if (iframeRef.current) {
          const currentSrc = iframeRef.current.src;
          const newSrc = ensureParameters(currentSrc);
          iframeRef.current.src = newSrc;
          console.log('Attempting to autoplay video with enhanced settings');
        }
      } catch (error) {
        console.error('Error attempting to autoplay:', error);
      }
    };
    
    const ensureParameters = (url: string) => {
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      
      params.set('autoplay', '1');
      params.set('mute', '0');
      params.set('controls', '1');
      params.set('rel', '0');
      params.set('showinfo', '0');
      params.set('enablejsapi', '1');
      params.set('hd', '1');
      params.set('vq', 'hd1080');
      params.set('playlist', 'KKldzg40wEI');
      params.set('loop', '1');
      
      urlObj.search = params.toString();
      return urlObj.toString();
    };
    
    attemptAutoplay();
    const timer = setTimeout(attemptAutoplay, 1000);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && iframeRef.current) {
        attemptAutoplay();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="relative animate-on-scroll video-container" style={{ animationDelay: '0.3s' }}>
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg w-full aspect-video max-w-lg mx-auto">
        <iframe 
          ref={iframeRef}
          className="w-full h-full"
          src="https://www.youtube.com/embed/KKldzg40wEI?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&enablejsapi=1&hd=1&vq=hd1080&playlist=KKldzg40wEI&loop=1"
          title="Playwriter GPT Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="flex justify-center mt-4">
        <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg font-bold shadow-lg btn-3d pulse-on-hover flex items-center gap-2">
          <a href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt" target="_blank" rel="noopener noreferrer">
            <Theater className="h-6 w-6 animate-pulse" />
            {isMobile ? "TRY NOW" : "TRY PlayWriter GPT Now"}
            <ExternalLink className="h-5 w-5 ml-1" />
          </a>
        </Button>
      </div>
      
      {/* Decorative elements - hide some on mobile for better focus */}
      <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-vetaccent/10 flex items-center justify-center ${isMobile ? 'hidden sm:flex' : ''}`}>
        <Heart className="h-10 w-10 text-vetaccent animate-pulse" />
      </div>
      
      <div className={`absolute -top-6 -left-6 w-20 h-20 rounded-full bg-vetsecondary/10 flex items-center justify-center ${isMobile ? 'hidden sm:flex' : ''}`}>
        <Camera className="h-8 w-8 text-vetsecondary" />
      </div>
      
      {/* Call-to-action floating button - make smaller on mobile */}
      <a 
        href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-vetprimary hover:bg-vetprimary/90 text-white rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-glow hover:shadow-vetprimary/50 transition-all duration-300 hover:scale-110 z-20 neon-effect ${isMobile ? 'w-20 h-20' : 'w-32 h-32'}`}
      >
        <Theater className={`${isMobile ? 'h-6 w-6 mb-1' : 'h-8 w-8 mb-2'} animate-bounce`} />
        <span className={`${isMobile ? 'text-sm' : 'text-base'} font-bold`}>TRY IT</span>
        <span className={`${isMobile ? 'text-sm' : 'text-base'} font-bold`}>NOW</span>
      </a>
    </div>
  );
};

export default HeroVideo;
