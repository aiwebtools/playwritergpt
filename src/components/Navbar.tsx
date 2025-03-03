
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PawPrint, Menu, X } from 'lucide-react';

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
        <a href="#" className="flex items-center space-x-2 hover-scale">
          <PawPrint size={28} className="text-vetprimary" />
          <span className="text-xl font-semibold text-white">VetGPT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
            <a href="#start">Get Started</a>
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
            <a href="#start">Get Started</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
