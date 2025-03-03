
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PawPrint, Menu, X, Stethoscope, Heart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-8',
        isScrolled 
          ? 'bg-vetdark/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex flex-col items-start hover-scale">
          <div className="flex items-center space-x-2">
            <PawPrint size={28} className="text-vetprimary" />
            <span className="text-xl font-semibold text-white">PetCareGPT</span>
          </div>
          <a 
            href="https://aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-gray-400 ml-9 hover:text-vetprimary transition-colors"
          >
            Presented by AiWebTools.Ai
          </a>
          <span className="text-xs text-gray-400 ml-9 flex items-center">
            Made with <Heart size={12} className="mx-1 text-vetprimary animate-pulse" fill="#3B82F6" /> for better and free healthcare
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Button 
            asChild 
            variant="ghost" 
            className="text-gray-300 hover:text-vetprimary hover:bg-transparent transition-colors flex items-center gap-2"
          >
            <a href="https://aidoctorgpt.lovable.app/" target="_blank" rel="noopener noreferrer">
              <Stethoscope size={16} />
              AI DOCTOR GPT
            </a>
          </Button>
          <a href="#features" className="text-gray-300 hover:text-vetprimary transition-colors">
            Features
          </a>
          <a href="#demo" className="text-gray-300 hover:text-vetprimary transition-colors">
            How It Works
          </a>
          <a href="#faq" className="text-gray-300 hover:text-vetprimary transition-colors">
            FAQ
          </a>
          <Button 
            asChild 
            variant="default"
            className="bg-vetprimary hover:bg-vethighlight text-white btn-hover-effect glow-on-hover"
          >
            <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-[68px] z-40 bg-vetdark/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        )}
      >
        <div className="flex flex-col space-y-4 px-6">
          <a 
            href="https://aidoctorgpt.lovable.app/" 
            className="text-gray-300 py-2 border-b border-vetmuted flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Stethoscope size={16} />
            AI DOCTOR GPT
          </a>
          <a 
            href="#features" 
            className="text-gray-300 py-2 border-b border-vetmuted"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#demo" 
            className="text-gray-300 py-2 border-b border-vetmuted"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-300 py-2 border-b border-vetmuted"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <Button 
            asChild 
            variant="default"
            className="mt-2 bg-vetprimary hover:bg-vethighlight text-white w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
