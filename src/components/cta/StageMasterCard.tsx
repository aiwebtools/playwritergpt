
import React from 'react';
import { Button } from '@/components/ui/button';
import { Theater, ExternalLink } from 'lucide-react';

const StageMasterCard = () => {
  return (
    <div className="glass-card bg-vetcard/80 rounded-xl p-6 md:p-8 border border-vetmuted/30 shadow-glass animate-on-scroll">
      <div className="flex flex-col items-center text-center mb-6">
        <div className="w-16 h-16 bg-vetprimary/20 rounded-full flex items-center justify-center mb-4">
          <Theater className="h-8 w-8 text-vetprimary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          <span className="text-gradient">StageMaster AI Suite</span>
        </h3>
        <p className="text-lg text-gray-300 max-w-2xl">
          Complete AI Creative Suite for Stage & Screen Productions
        </p>
      </div>
      
      <div className="bg-vetchardark/60 rounded-lg p-6 border border-vetmuted/20 mb-6">
        <p className="text-gray-300 mb-4">
          Transform your theater production process with a comprehensive suite of AI tools - from set design and lighting to costumes, choreography, and scriptwriting. The StageMaster AI Suite includes:
        </p>
        
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Theater Set Design GPT</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Costume Design GPT</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Choreography GPT</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Stage Lighting GPT</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Playwriter GPT</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="text-vetprimary mt-1">▸</div>
            <span className="text-gray-300">Movie Script Writer GPT</span>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-center">
        <Button 
          asChild 
          className="bg-vetprimary hover:bg-vethighlight text-white rounded-lg px-6 py-5 text-lg shadow-glow btn-hover-effect"
        >
          <a href="https://stagemasterai.lovable.app/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Explore StageMaster Suite <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StageMasterCard;
