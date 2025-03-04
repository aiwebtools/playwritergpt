
import React from 'react';
import { Theater } from 'lucide-react';
import HeroStats from './HeroStats';
import HeroRatings from './HeroRatings';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  return (
    <div className="flex flex-col space-y-8 animate-on-scroll">
      <div>
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetlight text-vetprimary mb-4 hover:scale-105 transition-all cursor-default shadow-sm">
          <Theater size={16} className="mr-2 animate-pulse" />
          <span>AI-Powered Playwriting Assistant</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <span className="gradient-text-animated">🎭 Playwriter GPT</span> <br />
          <span className="gradient-text-animated" style={{ animationDelay: '1s' }}>Write Award-Worthy Plays</span>
        </h1>
        <p className="text-lg md:text-xl text-white font-medium max-w-lg">
          Craft professional, fully structured theatrical plays from start to finish. Whether you have a concept or need inspiration, create original, engaging plays designed to captivate audiences.
        </p>
      </div>
      
      {/* Statistics Cards Section */}
      <HeroStats />
      
      {/* Rating and Active Users */}
      <HeroRatings />
      
      <HeroButtons />
      
      <div className="flex items-center space-x-2 mt-8">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 animate-float" style={{ animationDelay: '0s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150" 
              alt="Jane Davis" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 animate-float" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=150&h=150" 
              alt="Samuel Miller" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 animate-float" style={{ animationDelay: '0.6s' }}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150" 
              alt="Kelly Lee" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.9s' }}>+</div>
        </div>
        <span className="text-sm text-white">Join thousands of playwrights using PlayWriter GPT</span>
      </div>
    </div>
  );
};

export default HeroContent;
