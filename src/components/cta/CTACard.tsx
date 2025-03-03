
import React from 'react';
import CTAHeader from './CTAHeader';
import CTAButton from './CTAButton';

const CTACard = () => {
  return (
    <div className="glass-card rounded-2xl p-8 md:p-12 text-center animate-on-scroll">
      <CTAHeader />
      <CTAButton />
    </div>
  );
};

export default CTACard;
