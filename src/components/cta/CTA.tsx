
import React, { useEffect } from 'react';
import CTABackground from './CTABackground';
import CTACard from './CTACard';
import CTAStats from './CTAStats';

const CTA = () => {
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
    <section id="start" className="py-24 px-6 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <CTABackground />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <CTACard />
        <CTAStats />
      </div>
    </section>
  );
};

export default CTA;
