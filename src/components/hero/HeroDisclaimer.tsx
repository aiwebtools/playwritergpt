
import React from 'react';
import { CircleHelp, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroDisclaimer = () => {
  return (
    <div className="mt-16 bg-vetcard/80 border border-vetmuted/40 rounded-xl p-6 shadow-md animate-on-scroll hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.6s' }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <AlertTriangle className="h-6 w-6 text-red-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            🚨 Important Legal Disclaimer
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            PlayWriter GPT is an AI-powered assistant designed to help create theatrical plays. While it ensures high-quality storytelling, it is not a substitute for professional playwrights, editors, or publishers.
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            All plays are AI-generated but designed to align with user input and creative vision. Users retain full ownership of the scripts created. PlayWriter GPT does not guarantee automatic acceptance in competitions, theaters, or publishing companies.
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            By using this tool, you acknowledge that PlayWriter GPT is a collaborative writing assistant designed to help structure and refine theatrical scripts.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Button asChild variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-vetprimary hover:text-white hover:border-vetprimary">
              <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer">
                <Shield className="h-4 w-4 mr-2" />Terms of Service
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-vetprimary hover:text-white hover:border-vetprimary">
              <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer">
                <Shield className="h-4 w-4 mr-2" />Privacy Policy
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDisclaimer;
