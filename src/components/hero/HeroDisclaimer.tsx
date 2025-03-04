
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
            PetCareGPT/Veterinarian GPT is NOT a licensed veterinarian and does not establish a veterinarian-client-patient relationship (VCPR). This AI tool provides general pet health guidance and should not be used for diagnosis, prescription, or medical treatment.
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            While we strive for accuracy, all advice is for informational purposes only. Users must verify any information before making pet healthcare decisions. For urgent or serious pet health concerns, contact a licensed veterinarian immediately. In emergencies, seek immediate veterinary assistance or visit an animal hospital.
          </p>
          <p className="text-sm text-gray-200 leading-relaxed mb-4">
            By using this tool, you acknowledge its limitations and agree to seek professional veterinary care when needed.
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
