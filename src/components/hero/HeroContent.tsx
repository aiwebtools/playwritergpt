
import React from 'react';
import { PawPrint } from 'lucide-react';
import HeroStats from './HeroStats';
import HeroRatings from './HeroRatings';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="flex flex-col space-y-8 animate-on-scroll">
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetlight text-vetprimary mb-4 hover:scale-105 transition-all cursor-default shadow-sm">
          <PawPrint size={16} className="mr-2 animate-pulse" />
          <span>Virtual Veterinary Assistant</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <span className="gradient-text-animated">Veterinary Care,</span> <br />
          <span className="gradient-text-animated" style={{ animationDelay: '1s' }}>Anytime, Anywhere</span>
        </h1>
        <p className="text-lg md:text-xl text-white font-medium max-w-lg">
          Your AI-powered veterinary assistant providing expert pet health guidance, personalized care recommendations, and peace of mind for pet owners.
        </p>
      </div>
      
      {/* Statistics Cards Section */}
      <HeroStats />
      
      {/* Rating and Active Users */}
      <HeroRatings />
      
      <HeroButtons />
      
      <div className="flex items-center space-x-2 mt-8">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0s' }}>JD</div>
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.3s' }}>SM</div>
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.6s' }}>KL</div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.9s' }}>+</div>
        </div>
        <span className="text-sm text-white">Join thousands of pet owners using VetGPT</span>
      </div>
    </div>
  );
};

export default HeroContent;
