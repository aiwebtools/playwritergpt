
import React from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg shadow-lg pulse-on-hover btn-3d">
        <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
          <PawPrint className="h-5 w-5 animate-pulse" />
          Veterinarian GPT
        </a>
      </Button>
      <Button asChild variant="outline" className="border-vetprimary text-vetprimary hover:bg-vetlight rounded-lg px-8 py-6 text-lg hover:shadow-glow hover:shadow-vetprimary/30">
        <a href="https://aidoctorgpt.lovable.app/" target="_blank" rel="noopener noreferrer">Ai Doctor GPT</a>
      </Button>
    </div>
  );
};

export default HeroButtons;
