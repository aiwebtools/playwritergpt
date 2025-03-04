
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Book, Film } from 'lucide-react';

const CTAStats = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.1s' }}>
          <div className="text-2xl font-bold text-vetprimary mb-2">24/7</div>
          <p className="text-gray-300">Always available whenever creative inspiration strikes</p>
        </div>
        
        <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.2s' }}>
          <div className="text-2xl font-bold text-vetprimary mb-2">12+</div>
          <p className="text-gray-300">Theatrical Genres and Styles Supported</p>
        </div>
        
        <div className="bg-vetcard rounded-xl p-6 shadow-glass border border-vetmuted/30 text-center animate-on-scroll interactive-card" style={{ animationDelay: '0.3s' }}>
          <div className="text-2xl font-bold text-vetprimary mb-2">3,000+</div>
          <p className="text-gray-300">Writers already using PlayWriter GPT</p>
        </div>
      </div>

      {/* Additional AI Writing Tools Section */}
      <div className="bg-vetcard/80 rounded-xl p-8 shadow-glass border border-vetmuted/30 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-2xl font-bold text-white mb-6 text-center">More AI Writing Tools You'll Love</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-vetchardark/60 rounded-lg p-6 border border-vetmuted/20 hover:border-vetprimary/40 transition-all duration-300 hover:shadow-glow hover:shadow-vetprimary/20">
            <div className="flex items-center gap-3 mb-3">
              <Book className="h-8 w-8 text-vetprimary" />
              <h4 className="text-xl font-bold text-white">Book Writer GPT</h4>
            </div>
            <p className="text-gray-300 mb-4">Craft compelling novels, short stories, and creative fiction with our specialized AI book writing assistant.</p>
            <Button asChild className="w-full" variant="outline">
              <a href="https://bookwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Try Book Writer GPT
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="bg-vetchardark/60 rounded-lg p-6 border border-vetmuted/20 hover:border-vetprimary/40 transition-all duration-300 hover:shadow-glow hover:shadow-vetprimary/20">
            <div className="flex items-center gap-3 mb-3">
              <Film className="h-8 w-8 text-vetprimary" />
              <h4 className="text-xl font-bold text-white">Movie Script Writer GPT</h4>
            </div>
            <p className="text-gray-300 mb-4">Create professional screenplay formats, develop compelling characters, and structure your movie scripts like a pro.</p>
            <Button asChild className="w-full" variant="outline">
              <a href="https://moviescriptwritergpt.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Try Movie Script Writer GPT
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
