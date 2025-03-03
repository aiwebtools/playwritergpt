
import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

const HeroRatings = () => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-2">
      <div className="flex items-center bg-vetdark/70 px-3 py-1.5 rounded-full border border-vetmuted/30 hover:shadow-glow hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105 cursor-default">
        <div className="flex">
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          <div className="relative">
            <Star className="h-5 w-5 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '40%' }}>
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>
        <span className="ml-2 text-white font-medium">4.4/5</span>
      </div>
      
      <div className="flex items-center px-4 py-1.5 bg-vetprimary/20 rounded-full border border-vetprimary/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
        <span className="text-vetprimary font-bold text-base">10k+</span>
        <span className="ml-1 text-white font-medium">active users</span>
      </div>
      
      <div className="flex items-center bg-vetprimary/20 px-4 py-1.5 rounded-full border border-vetprimary/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
        <ShieldCheck className="h-5 w-5 text-vetprimary mr-1.5" />
        <span className="text-white font-medium">Secure & Confidential</span>
      </div>
    </div>
  );
};

export default HeroRatings;
