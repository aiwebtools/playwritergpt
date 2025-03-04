
import React from 'react';
import { PenSquare } from 'lucide-react';

const CTAHeader = () => {
  return (
    <>
      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-6">
        <PenSquare size={16} className="mr-2" />
        <span>Start Creating</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Bring Your Theatrical <span className="text-gradient">Vision to Life</span>
      </h2>
      
      <p className="text-xl text-white max-w-2xl mx-auto mb-8">
        Join thousands of writers who trust PlayWriter GPT for crafting compelling, production-ready theatrical plays with professional dialogue and stage directions.
      </p>
    </>
  );
};

export default CTAHeader;
