import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';
import { FaUsers, FaBook, FaStar, FaGraduationCap } from 'react-icons/fa';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: '10,000+', label: 'طالب نشط', icon: FaUsers },
    { number: '50+', label: 'كورس متخصص', icon: FaBook },
    { number: '98%', label: 'معدل الرضا', icon: FaStar },
    { number: '100+', label: 'خبير معتمد', icon: FaGraduationCap }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-background">
        <div className="stats-gradient"></div>
      </div>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`stat-card ${isVisible ? 'animate' : ''}`}>
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;