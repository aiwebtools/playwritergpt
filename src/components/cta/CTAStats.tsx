
import React from 'react';

const CTAStats = () => {
  return (
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
        <div className="text-2xl font-bold text-vetprimary mb-2">5,000+</div>
        <p className="text-gray-300">Writers already using PlayWriter GPT</p>
      </div>
    </div>
  );
};

export default CTAStats;
