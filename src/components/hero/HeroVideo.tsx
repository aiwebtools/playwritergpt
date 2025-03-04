
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, ExternalLink, Heart, Camera } from 'lucide-react';

const HeroVideo = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    // Try to force autoplay when component mounts
    const attemptAutoplay = () => {
      try {
        if (iframeRef.current) {
          // For YouTube iframe API - alternative approach
          // Add the hd=1 parameter to force high definition and vq=hd1080 for 1080p
          const currentSrc = iframeRef.current.src;
          // Remove the iframe and re-add it to force the quality setting
          const newSrc = ensureQualityParameters(currentSrc);
          iframeRef.current.src = newSrc;
          
          // Log for debugging
          console.log('Attempting to autoplay video with HD quality settings');
        }
      } catch (error) {
        console.error('Error attempting to autoplay:', error);
      }
    };
    
    // Function to ensure quality parameters are in the URL
    const ensureQualityParameters = (url: string) => {
      // Make sure we have HD enabled
      if (url.indexOf('hd=1') === -1) {
        url = url.includes('?') ? `${url}&hd=1` : `${url}?hd=1`;
      }
      
      // Add the vq parameter for 1080p
      if (url.indexOf('vq=hd1080') === -1) {
        url = `${url}&vq=hd1080`;
      }
      
      return url;
    };
    
    // Attempt autoplay after a short delay to ensure DOM is ready
    const timer = setTimeout(attemptAutoplay, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative animate-on-scroll video-container" style={{ animationDelay: '0.3s' }}>
      {/* YouTube Video Embed */}
      <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg w-full aspect-video max-w-lg mx-auto">
        <iframe 
          ref={iframeRef}
          className="w-full h-full"
          src="https://www.youtube.com/embed/ElAfvB0yLEI?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&enablejsapi=1&hd=1&vq=hd1080"
          title="Veterinary Care Assistant Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* TRY IT NOW Button under video */}
      <div className="flex justify-center mt-4">
        <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg font-bold shadow-lg btn-3d pulse-on-hover flex items-center gap-2">
          <a href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt" target="_blank" rel="noopener noreferrer">
            <PawPrint className="h-6 w-6 animate-pulse" />
            TRY PlayWriter GPT Now
            <ExternalLink className="h-5 w-5 ml-1" />
          </a>
        </Button>
      </div>
      
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-vetaccent/10 flex items-center justify-center">
        <Heart className="h-10 w-10 text-vetaccent animate-pulse" />
      </div>
      
      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-vetsecondary/10 flex items-center justify-center">
        <Camera className="h-8 w-8 text-vetsecondary" />
      </div>
      
      {/* Floating Try It Now Button */}
      <a href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-vetprimary hover:bg-vetprimary/90 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-glow hover:shadow-vetprimary/50 transition-all duration-300 hover:scale-110 z-20 neon-effect">
        <PawPrint className="h-8 w-8 mb-2 animate-bounce" />
        <span className="text-base font-bold">TRY IT</span>
        <span className="text-base font-bold">NOW</span>
      </a>
    </div>
  );
};

export default HeroVideo;
