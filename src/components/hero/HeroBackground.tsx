
import React from 'react';

const HeroBackground = () => {
  return (
    <>
      <div className="absolute top-40 right-10 w-64 h-64 bg-blue-200/30 rounded-full filter blur-3xl z-0 animate-float"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-green-200/30 rounded-full filter blur-3xl z-0 animate-float" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-200/20 rounded-full filter blur-3xl z-0 animate-pulse"></div>
    </>
  );
};

export default HeroBackground;
