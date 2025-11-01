import React from 'react';
import './Hero.css';
import MatrixBackground from './MatrixBackground';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <MatrixBackground />
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
        <div className="scan-line"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text animate-fadeInUp">
          <h1 className="hero-title">
            <span className="gradient-text">3arab Hack</span>
            <br />
            أكاديمية الأمن السيبراني
          </h1>
          <p className="hero-subtitle">
            احترف الأمن السيبراني من الصفر وحتى الاحتراف مع أفضل الخبراء في المجال.
            <br />
            انضم إلى آلاف الطلاب الذين بدأوا مسيرتهم المهنية في الأمن السيبراني
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('courses')}
            >
              <span>اكتشف الكورسات</span>
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              اعرف المزيد
            </button>
          </div>
        </div>

        <div className="hero-visual animate-slideInRight">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot close"></span>
                <span className="control-dot minimize"></span>
                <span className="control-dot maximize"></span>
              </div>
              <div className="terminal-title-wrapper">
                <span className="terminal-user">root@3arabhack</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-path">~/security</span>
                <span className="terminal-prompt">$</span>
              </div>
            </div>
            <div className="terminal-body">
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="line-prompt"><span className="prompt-user">root</span>@<span className="prompt-host">3arabhack</span>:<span className="prompt-path">~/security</span>$</span>
                  <span className="line-command typing-animation-1"> whoami</span>
                </div>
                <div className="terminal-line terminal-output typing-animation-2">
                  <span className="output-text">3arab Hack Academy</span>
                </div>
                <div className="terminal-line">
                  <span className="line-prompt"><span className="prompt-user">root</span>@<span className="prompt-host">3arabhack</span>:<span className="prompt-path">~/security</span>$</span>
                  <span className="line-command typing-animation-3"> echo "Security Level: "</span>
                </div>
                <div className="terminal-line terminal-output typing-animation-4">
                  <span className="output-text">Security Level: </span>
                  <span className="output-value">MAXIMUM</span>
                </div>
                <div className="terminal-line">
                  <span className="line-prompt"><span className="prompt-user">root</span>@<span className="prompt-host">3arabhack</span>:<span className="prompt-path">~/security</span>$</span>
                  <span className="line-command typing-animation-5"> ./start_learning.sh</span>
                </div>
                <div className="terminal-line terminal-output typing-animation-6">
                  <span className="output-text">🚀 Starting Cybersecurity Journey...</span>
                </div>
                <div className="terminal-line typing-animation-7">
                  <span className="line-prompt"><span className="prompt-user">root</span>@<span className="prompt-host">3arabhack</span>:<span className="prompt-path">~/security</span>$</span>
                  <span className="terminal-cursor-blink">_</span>
                </div>
              </div>
              <div className="terminal-glow"></div>
              <div className="terminal-scan-line"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>انتقل للأسفل</span>
      </div>
    </section>
  );
};

export default Hero;
