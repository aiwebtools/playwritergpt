
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Book, Film } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const CTAStats = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
        <div className="bg-vetcard rounded-xl p-4 md:p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.1s' }}>
          <div className="text-xl md:text-2xl font-bold text-vetprimary mb-2">24/7</div>
          <p className="text-gray-300 text-sm md:text-base">Always available whenever creative inspiration strikes</p>
        </div>
        
        <div className="bg-vetcard rounded-xl p-4 md:p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.2s' }}>
          <div className="text-xl md:text-2xl font-bold text-vetprimary mb-2">12+</div>
          <p className="text-gray-300 text-sm md:text-base">Theatrical Genres and Styles Supported</p>
        </div>
        
        <div className="bg-vetcard rounded-xl p-4 md:p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.3s' }}>
          <div className="text-xl md:text-2xl font-bold text-vetprimary mb-2">3,000+</div>
          <p className="text-gray-300 text-sm md:text-base">Writers already using PlayWriter GPT</p>
        </div>
      </div>

      {/* Additional AI Writing Tools Section */}
      <div className="bg-vetcard/80 rounded-xl p-6 md:p-8 shadow-glass border border-vetmuted/30 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">More AI Writing Tools You'll Love</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-vetchardark/60 rounded-lg p-4 md:p-6 border border-vetmuted/20 hover:border-vetprimary/40 transition-all duration-300 hover:shadow-glow hover:shadow-vetprimary/20">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Book className="h-6 w-6 md:h-8 md:w-8 text-vetprimary" />
              <h4 className="text-lg md:text-xl font-bold text-white">Book Writer GPT</h4>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">Craft compelling novels, short stories, and creative fiction with our specialized AI book writing assistant.</p>
            <Button asChild className="w-full" variant="outline">
              <a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                {isMobile ? "Try it" : "Try Book Writer GPT"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="bg-vetchardark/60 rounded-lg p-4 md:p-6 border border-vetmuted/20 hover:border-vetprimary/40 transition-all duration-300 hover:shadow-glow hover:shadow-vetprimary/20">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
              <Film className="h-6 w-6 md:h-8 md:w-8 text-vetprimary" />
              <h4 className="text-lg md:text-xl font-bold text-white">Movie Script Writer GPT</h4>
            </div>
            <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">Create professional screenplay formats, develop compelling characters, and structure your movie scripts like a pro.</p>
            <Button asChild className="w-full" variant="outline">
              <a href="https://moviescriptwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                {isMobile ? "Try it" : "Try Movie Script Writer GPT"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAStats;
