import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, Heart, Camera, CircleHelp, FileText, Star, ExternalLink, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return <div className="min-h-screen pt-20 px-6 md:px-8 flex flex-col justify-center relative overflow-hidden" ref={heroRef}>
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-green-200/30 rounded-full filter blur-3xl z-0 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col space-y-8 animate-on-scroll">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetlight text-vetprimary mb-4">
                <PawPrint size={16} className="mr-2" />
                <span>Virtual Veterinary Assistant</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-vetaccent via-vetprimary to-vetsecondary text-transparent bg-clip-text animate-pulse">Veterinary Care,</span> <br />
                <span className="bg-gradient-to-r from-vetaccent via-vetprimary to-vetsecondary text-transparent bg-clip-text animate-pulse">Anytime, Anywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Your AI-powered veterinary assistant providing expert pet health guidance, personalized care recommendations, and peace of mind for pet owners.
              </p>
            </div>
            
            {/* Rating and Active Users - Improved with independent badge styling */}
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="flex items-center bg-vetdark/70 px-3 py-1.5 rounded-full border border-vetmuted/30">
                <div className="flex">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <div className="relative">
                    <Star className="h-5 w-5 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden" style={{
                    width: '40%'
                  }}>
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                <span className="ml-2 text-white font-medium">4.4/5</span>
              </div>
              
              <div className="flex items-center px-4 py-1.5 bg-vetprimary/20 rounded-full border border-vetprimary/30">
                <span className="text-vetprimary font-bold text-base">10k+</span>
                <span className="ml-1 text-white font-medium">active users</span>
              </div>
              
              <div className="flex items-center bg-vetprimary/20 px-4 py-1.5 rounded-full border border-vetprimary/30">
                <ShieldCheck className="h-5 w-5 text-vetprimary mr-1.5" />
                <span className="text-white font-medium">Secure & Confidential</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg shadow-lg btn-hover-effect">
                <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">Veterinarian GPT</a>
              </Button>
              <Button asChild variant="outline" className="border-vetprimary text-vetprimary hover:bg-vetlight rounded-lg px-8 py-6 text-lg">
                <a href="https://aidoctorgpt.lovable.app/" target="_blank" rel="noopener noreferrer">Ai Doctor GPT</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-2 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">SM</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs">+</div>
              </div>
              <span className="text-sm text-white">Join thousands of pet owners using VetGPT</span>
            </div>
          </div>
          
          {/* Hero Visual - YouTube Video Integration */}
          <div className="relative animate-on-scroll" style={{
          animationDelay: '0.3s'
        }}>
            {/* YouTube Video Embed */}
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg w-full aspect-video max-w-lg mx-auto animate-float">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ElAfvB0yLEI?autoplay=0&controls=1&rel=0&showinfo=0"
                title="Veterinary Care Assistant Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              {/* Video overlay with play button (optional) */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-vetprimary ml-1"></div>
                </div>
              </div>
            </div>
            
            {/* Added TRY IT NOW Button directly under the video */}
            <div className="flex justify-center mt-4 animate-float" style={{ animationDelay: '1s' }}>
              <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg font-bold shadow-lg btn-hover-effect flex items-center gap-2">
                <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
                  <PawPrint className="h-6 w-6" />
                  TRY IT Veterinarian GPT Now
                  <ExternalLink className="h-5 w-5 ml-1" />
                </a>
              </Button>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-vetaccent/10 flex items-center justify-center animate-float" style={{
            animationDelay: '1s'
          }}>
              <Heart className="h-10 w-10 text-vetaccent" />
            </div>
            
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-vetsecondary/10 flex items-center justify-center animate-float" style={{
            animationDelay: '1.5s'
          }}>
              <Camera className="h-8 w-8 text-vetsecondary" />
            </div>
            
            {/* Floating Try It Now Button */}
            <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-vetprimary hover:bg-vetprimary/90 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg animate-pulse hover:animate-none transition-all duration-300 hover:scale-110 z-20" style={{
            animationDuration: '3s'
          }}>
              <PawPrint className="h-8 w-8 mb-2" />
              <span className="text-base font-bold">TRY IT</span>
              <span className="text-base font-bold">NOW</span>
            </a>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <CircleHelp className="h-6 w-6 text-vetprimary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-vetdark mb-2">Important Disclaimer</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Veterinarian GPT is an AI-powered virtual assistant providing general pet health guidance, but it does not establish a veterinarian-client-patient relationship (VCPR) and is not a substitute for professional veterinary care. While we strive for accuracy, all advice is informational only and should not be considered a diagnosis, prescription, or medical treatment. In emergencies or serious health concerns, always consult a licensed veterinarian immediately. Users are responsible for verifying any information before making healthcare decisions for their pets, and we assume no liability for any harm or loss resulting from reliance on AI-generated responses. By using this service, you acknowledge its limitations and agree to seek professional veterinary care when needed. For urgent veterinary assistance, contact a licensed veterinarian or visit an emergency pet clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
