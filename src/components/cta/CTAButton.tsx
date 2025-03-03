
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTAButton = () => {
  return (
    <>
      <Button 
        asChild 
        className="bg-vetprimary hover:bg-vethighlight text-white rounded-lg px-8 py-6 text-lg shadow-glow btn-hover-effect hover-scale"
      >
        <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
          Get Started with VetGPT <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
      
      <div className="mt-8 text-gray-400 text-sm">
        <p>No subscription required. Start caring for your pet better today.</p>
      </div>
    </>
  );
};

export default CTAButton;
