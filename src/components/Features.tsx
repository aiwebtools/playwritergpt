
import React, { useEffect } from 'react';
import { 
  Theater, 
  BookOpen, 
  PenSquare, 
  FileText, 
  MessageSquare, 
  Users, 
  Globe, 
  Sparkles, 
  Clock 
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-glow interactive-card animate-on-scroll"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-full bg-vetprimary/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="features" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-full h-1/2 bg-vetprimary/5 -skew-y-3 z-0"></div>
      
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vetmuted text-vetprimary mb-4">
            <PenSquare size={16} className="mr-2" />
            <span>Professional Playwriting</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Advanced Features for <span className="text-gradient">Theatrical Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            PlayWriter GPT combines cutting-edge AI with theatrical expertise to help create compelling, production-ready plays.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<PenSquare className="h-6 w-6 text-vetprimary" />}
            title="Scene-by-Scene Creation"
            description="Develop your play one scene at a time with detailed stage directions, dialogue, and character development."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-vetprimary" />}
            title="Collaborative Process"
            description="Work closely with AI to refine each element of your play, from plot structure to dialogue nuances."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<Users className="h-6 w-6 text-vetprimary" />}
            title="Character Development"
            description="Create complex, believable characters with detailed backstories, motivations, and emotional arcs."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-vetprimary" />}
            title="Creative Techniques"
            description="Implement advanced playwriting techniques like cliffhangers, dramatic irony, and compelling narrative arcs."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-vetprimary" />}
            title="Professional Formatting"
            description="Receive perfectly formatted theatrical scripts that follow industry standards for production."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<Theater className="h-6 w-6 text-vetprimary" />}
            title="Genre Versatility"
            description="Create plays across diverse genres from comedy and drama to experimental theater and musicals."
            delay={0.6}
          />
          
          <FeatureCard
            icon={<Globe className="h-6 w-6 text-vetprimary" />}
            title="Research Integration"
            description="Incorporate historical facts, cultural contexts, and specialized knowledge into your plays."
            delay={0.7}
          />
          
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-vetprimary" />}
            title="Educational Resources"
            description="Access playwriting techniques, theatrical history, and dramaturgical insights during the creation process."
            delay={0.8}
          />
          
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-vetprimary" />}
            title="Efficient Creation"
            description="Complete full-length plays in a fraction of the time it would take through traditional methods."
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
