
import React from 'react';
import { Theater, Heart, Mail, Phone, Instagram, Shield, AlertTriangle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Custom TikTok icon component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const scrollToDisclaimer = () => {
    const disclaimerElement = document.getElementById('disclaimer');
    if (disclaimerElement) {
      disclaimerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFaq = () => {
    const faqElement = document.getElementById('faq');
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-vetdark border-t border-vetmuted py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex flex-col items-start hover-scale mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Theater size={24} className="text-vetprimary" />
                <span className="text-xl font-semibold text-white">PlayWriter GPT</span>
              </div>
              <div className="ml-9">
                <a 
                  href="https://aiwebtools.ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-gray-400 block hover:text-vetprimary transition-colors"
                >
                  Presented by AiWebTools.Ai
                </a>
                <span className="text-xs text-white flex items-center">
                  Made with <Heart size={12} className="mx-1 text-[#ea384c] animate-pulse" fill="#ea384c" /> for creative expression
                </span>
              </div>
            </a>
            <p className="text-gray-400 mb-4">
              AI-powered playwriting assistant helping writers create professional theatrical scripts with compelling dialogue, rich character development, and engaging narratives.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={14} className="text-yellow-500" />
              <span className="text-xs text-gray-400">
                For creative and educational purposes only
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-vetprimary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@aiwebtools" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-vetprimary transition-colors">
                <TikTokIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal Information</h3>
            <ul className="space-y-3">
              <li><a href="https://aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vetprimary hover-scale inline-block">About Us</a></li>
              <li><a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vetprimary hover-scale inline-block">Privacy Policy</a></li>
              <li><a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-vetprimary hover-scale inline-block">Terms of Service</a></li>
              <li><Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-300 border-gray-700 hover:bg-vetprimary hover:text-white"
                  onClick={scrollToDisclaimer}
                >
                  <AlertTriangle size={12} className="mr-2 text-yellow-500" />
                  LEGAL DISCLAIMER
                </Button>
              </li>
              <li>
                <span className="text-gray-400 font-semibold">Contact:</span>
                <div className="ml-2 mt-1 space-y-2">
                  <a href="mailto:contact@ai-webtools.com" className="text-gray-400 hover:text-vetprimary hover-scale flex items-center gap-2">
                    <Mail size={14} className="text-vetprimary" />
                    contact@ai-webtools.com
                  </a>
                  <a href="tel:+14758008096" className="text-gray-400 hover:text-vetprimary hover-scale flex items-center gap-2">
                    <Phone size={14} className="text-vetprimary" />
                    (475) 800-8096
                  </a>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-300 border-gray-700 hover:bg-vetprimary hover:text-white"
                  onClick={() => window.open('https://www.aiwebtools.ai', '_blank')}
                >
                  MORE AI TOOLS
                </Button>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-300 border-gray-700 hover:bg-vetprimary hover:text-white"
                  onClick={() => window.open('https://chat.openai.com/', '_blank')}
                >
                  TRY PLAYWRITER GPT
                </Button>
              </li>
              <li>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-300 border-gray-700 hover:bg-vetprimary hover:text-white"
                  onClick={scrollToFaq}
                >
                  <FileText size={12} className="mr-2" />
                  FAQ
                </Button>
              </li>
              <li>
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="text-gray-300 border-gray-700 hover:bg-vetprimary hover:text-white"
                >
                  <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer">
                    <Shield size={12} className="mr-2" />
                    TERMS OF SERVICE
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-vetmuted flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {" "}
            <a 
              href="https://aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-vetprimary transition-colors"
            >
              AI WEB TOOLS LLC
            </a>
            . All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            PlayWriter GPT is for creative and educational purposes only. Users retain rights to content created with our assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
