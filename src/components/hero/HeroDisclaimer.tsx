
import React from 'react';
import { CircleHelp } from 'lucide-react';

const HeroDisclaimer = () => {
  return (
    <div className="mt-16 bg-vetcard/80 border border-vetmuted/40 rounded-xl p-6 shadow-md animate-on-scroll hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.6s' }}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          <CircleHelp className="h-6 w-6 text-vetprimary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Veterinarian GPT is an AI-powered virtual assistant providing general pet health guidance, but it does not establish a veterinarian-client-patient relationship (VCPR) and is not a substitute for professional veterinary care. While we strive for accuracy, all advice is informational only and should not be considered a diagnosis, prescription, or medical treatment. In emergencies or serious health concerns, always consult a licensed veterinarian immediately. Users are responsible for verifying any information before making healthcare decisions for their pets, and we assume no liability for any harm or loss resulting from reliance on AI-generated responses. By using this service, you acknowledge its limitations and agree to seek professional veterinary care when needed. For urgent veterinary assistance, contact a licensed veterinarian or visit an emergency pet clinic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroDisclaimer;
