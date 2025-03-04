
import React from 'react';
import { Theater, Award, Users } from 'lucide-react';

const HeroStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
      <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
        <div className="flex items-center mb-2">
          <Theater className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
          <h3 className="text-2xl font-bold text-white">All Genres</h3>
        </div>
        <p className="text-sm text-gray-300">From comedy to drama to experimental theater</p>
      </div>
      
      <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
        <div className="flex items-center mb-2">
          <Award className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
          <h3 className="text-2xl font-bold text-white">Professional</h3>
        </div>
        <p className="text-sm text-gray-300">Industry-standard formatting and structure</p>
      </div>
      
      <div className="bg-vetdark/70 p-4 rounded-xl border border-vetmuted/30 hover:shadow-glow hover:shadow-vetprimary/30 transition-all duration-300 hover:scale-105 cursor-default">
        <div className="flex items-center mb-2">
          <Users className="h-6 w-6 text-vetprimary mr-2 animate-pulse" />
          <h3 className="text-2xl font-bold text-white">10,000+</h3>
        </div>
        <p className="text-sm text-gray-300">Playwrights & active users</p>
      </div>
    </div>
  );
};

export default HeroStats;
