
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
            <span className="text-gradient">🎬 What Can</span> <span className="text-gradient">Playwriter GPT Do?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your ultimate AI playwriting assistant, designed to help you craft professional theatrical plays from creative concept to final script.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-vetprimary" />}
            title="Generate Complete Plays"
            description="Create fully written plays with dialogue, stage directions, and vivid descriptions that engage audiences."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<PenSquare className="h-6 w-6 text-vetprimary" />}
            title="Create Detailed Outlines"
            description="Build structured outlines with act titles, scenes, settings, and comprehensive character breakdowns."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<Theater className="h-6 w-6 text-vetprimary" />}
            title="Master Any Genre & Style"
            description="Craft plays in any style from Shakespearean tragedies to modern comedies and experimental theater."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<Users className="h-6 w-6 text-vetprimary" />}
            title="Character Development"
            description="Create complex, memorable characters with detailed backstories, motivations and emotional depth."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-vetprimary" />}
            title="Craft Powerful Themes"
            description="Integrate moral dilemmas and thought-provoking narratives that leave a lasting impact on audiences."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-vetprimary" />}
            title="Collaborative Creation"
            description="Get feedback at every step through an interactive process that ensures your vision comes to life."
            delay={0.6}
          />
          
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-vetprimary" />}
            title="Professional Formatting"
            description="Receive perfectly formatted theatrical scripts that follow industry standards for production or submission."
            delay={0.7}
          />
          
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-vetprimary" />}
            title="Scene-by-Scene Creation"
            description="Write each scene in its final form with consistent tone, structure, and character arcs throughout."
            delay={0.8}
          />
          
          <FeatureCard
            icon={<BookOpen className="h-6 w-6 text-vetprimary" />}
            title="Downloadable Scripts"
            description="Get your complete play as a professional, downloadable DOCX file for easy sharing and submission."
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
