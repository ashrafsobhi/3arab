import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = ({ children, variant = 'default' }) => {
  return (
    <div className={`animated-background ${variant}`}>
      <div className="bg-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
      </div>
      <div className="bg-gradient-animated"></div>
      <div className="bg-orbs">
        <div className="orb orb-1 bg-float"></div>
        <div className="orb orb-2 bg-float-reverse"></div>
        <div className="orb orb-3 bg-pulse-glow"></div>
      </div>
      {children}
    </div>
  );
};

export default AnimatedBackground;

