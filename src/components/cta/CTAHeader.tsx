
import React from 'react';
import { PawPrint } from 'lucide-react';

const CTAHeader = () => {
  return (
    <>
      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-6">
        <PawPrint size={16} className="mr-2" />
        <span>Start Now</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Give Your Pet the <span className="text-gradient">Expert Care</span> They Deserve
      </h2>
      
      <p className="text-xl text-white max-w-2xl mx-auto mb-8">
        Join thousands of pet owners who trust VetGPT for reliable, compassionate guidance on their pets' health and wellbeing.
      </p>
    </>
  );
};

export default CTAHeader;
