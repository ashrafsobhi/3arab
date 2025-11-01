import React from 'react';
import './About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';
import { FaLock, FaBook, FaStar } from 'react-icons/fa';

const About = () => {
  const [textRef, textVisible] = useScrollAnimation(0.2);
  const [visualRef, visualVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="about bg-animated">
      <AnimatedBackground>
        <div className="container">
          <div className="about-content">
            <div 
              ref={textRef}
              className={`about-text scroll-animate fade-right ${textVisible ? 'visible' : ''}`}
            >
              <h2 className="section-title">
                من نحن في <span className="gradient-text">3arab Hack</span>
              </h2>
              <p className="about-description">
                نحن أكاديمية متخصصة في تدريب وتأهيل الخبراء في مجال الأمن السيبراني.
                نؤمن بأن الأمن السيبراني هو المستقبل، ونسعى لتمكين الجيل العربي من إتقان
                هذه المهارات الحيوية.
              </p>
              <p className="about-description">
                مع أكثر من 5 سنوات من الخبرة، قدمنا التدريب لأكثر من 10,000 طالب وطالبة
                في جميع أنحاء العالم العربي. نحن لا نكتفي بتعليمك النظرية، بل نضمن لك
                الخبرة العملية التي تحتاجها للنجاح في سوق العمل.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">10,000+</div>
                  <div className="stat-label">طالب</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">كورس</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">معدل الرضا</div>
                </div>
              </div>
            </div>
            <div 
              ref={visualRef}
              className={`about-visual scroll-animate fade-left ${visualVisible ? 'visible' : ''}`}
            >
              <div className="about-image-main">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                  alt="فريق العمل والأكاديمية"
                  className="about-main-img"
                  loading="lazy"
                />
                <div className="image-frame"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>
    </section>
  );
};

export default About;