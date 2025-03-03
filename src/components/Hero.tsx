
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint, Heart, Camera, CircleHelp, FileText, Star, ExternalLink, ShieldCheck, Clock, Users, Award } from 'lucide-react';

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

  // Mouse follow effect for the floating button
  useEffect(() => {
    const floatingBtn = document.querySelector('.floating-btn');
    if (!floatingBtn) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const videoContainer = document.querySelector('.video-container');
      if (!videoContainer) return;
      
      const rect = videoContainer.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 20;
      const moveY = (e.clientY - centerY) / 20;
      
      floatingBtn.setAttribute('style', `transform: translate(${moveX}px, ${moveY}px) scale(1.1);`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="min-h-screen pt-20 px-6 md:px-8 flex flex-col justify-center relative overflow-hidden" ref={heroRef}>
      {/* Background Elements - More dynamic and interactive */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-green-200/30 rounded-full filter blur-3xl z-0 animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full filter blur-3xl z-0 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="flex flex-col space-y-8 animate-on-scroll">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetlight text-vetprimary mb-4 hover:scale-105 transition-all cursor-default shadow-sm">
                <PawPrint size={16} className="mr-2 animate-pulse" />
                <span>Virtual Veterinary Assistant</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="gradient-text-animated">Veterinary Care,</span> <br />
                <span className="gradient-text-animated" style={{ animationDelay: '1s' }}>Anytime, Anywhere</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Your AI-powered veterinary assistant providing expert pet health guidance, personalized care recommendations, and peace of mind for pet owners.
              </p>
            </div>
            
            {/* Statistics Cards Section - Added as requested */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="flex items-center mb-2">
                  <Clock className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">24/7</h3>
                </div>
                <p className="text-sm text-gray-300">Always available whenever your pet needs help</p>
              </div>
              
              <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">1,000+</h3>
                </div>
                <p className="text-sm text-gray-300">Species and Breeds Supported in Our System</p>
              </div>
              
              <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="flex items-center mb-2">
                  <Users className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">10,000+</h3>
                </div>
                <p className="text-sm text-gray-300">Pet owners & active users</p>
              </div>
            </div>
            
            {/* Rating and Active Users - Improved with independent badge styling */}
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <div className="flex items-center bg-vetdark/70 px-3 py-1.5 rounded-full border border-vetmuted/30 hover:shadow-glow hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105 cursor-default">
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
              
              <div className="flex items-center px-4 py-1.5 bg-vetprimary/20 rounded-full border border-vetprimary/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
                <span className="text-vetprimary font-bold text-base">10k+</span>
                <span className="ml-1 text-white font-medium">active users</span>
              </div>
              
              <div className="flex items-center bg-vetprimary/20 px-4 py-1.5 rounded-full border border-vetprimary/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
                <ShieldCheck className="h-5 w-5 text-vetprimary mr-1.5" />
                <span className="text-white font-medium">Secure & Confidential</span>
              </div>
            </div>
            
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
            
            <div className="flex items-center space-x-2 mt-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0s' }}>JD</div>
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.3s' }}>SM</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.6s' }}>KL</div>
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs animate-float" style={{ animationDelay: '0.9s' }}>+</div>
              </div>
              <span className="text-sm text-white">Join thousands of pet owners using VetGPT</span>
            </div>
          </div>
          
          {/* Hero Visual - YouTube Video Integration - Removed interactivity */}
          <div className="relative animate-on-scroll video-container" style={{
          animationDelay: '0.3s'
        }}>
            {/* YouTube Video Embed - Removed hover animations and floating effects */}
            <div className="relative glass-card rounded-2xl overflow-hidden shadow-lg w-full aspect-video max-w-lg mx-auto">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/ElAfvB0yLEI?autoplay=0&controls=1&rel=0&showinfo=0"
                title="Veterinary Care Assistant Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Added TRY IT NOW Button directly under the video - Kept button but removed animation */}
            <div className="flex justify-center mt-4">
              <Button asChild className="bg-vetprimary hover:bg-vetprimary/90 text-white rounded-lg px-8 py-6 text-lg font-bold shadow-lg btn-3d pulse-on-hover flex items-center gap-2">
                <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer">
                  <PawPrint className="h-6 w-6 animate-pulse" />
                  TRY IT Veterinarian GPT Now
                  <ExternalLink className="h-5 w-5 ml-1" />
                </a>
              </Button>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-vetaccent/10 flex items-center justify-center">
              <Heart className="h-10 w-10 text-vetaccent animate-pulse" />
            </div>
            
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-vetsecondary/10 flex items-center justify-center">
              <Camera className="h-8 w-8 text-vetsecondary" />
            </div>
            
            {/* Floating Try It Now Button - Kept but made static */}
            <a href="https://chatgpt.com/g/g-QEBg6FdHT-veterinarian-gpt" target="_blank" rel="noopener noreferrer" className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-vetprimary hover:bg-vetprimary/90 text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-lg hover:shadow-glow hover:shadow-vetprimary/50 transition-all duration-300 hover:scale-110 z-20 neon-effect">
              <PawPrint className="h-8 w-8 mb-2 animate-bounce" />
              <span className="text-base font-bold">TRY IT</span>
              <span className="text-base font-bold">NOW</span>
            </a>
          </div>
        </div>
        
        {/* Disclaimer Section */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm animate-on-scroll hover:shadow-md transition-all duration-300" style={{ animationDelay: '0.6s' }}>
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
