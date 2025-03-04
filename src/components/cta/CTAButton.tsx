
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
        <a href="https://chatgpt.com/g/g-aWwfdYrHh-playwriter-gpt" target="_blank" rel="noopener noreferrer">
          Start Creating with PlayWriter GPT <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </Button>
      
      <div className="mt-8 text-gray-400 text-sm">
        <p>No subscription required. Start crafting your theatrical masterpiece today.</p>
      </div>
    </>
  );
};

export default CTAButton;
