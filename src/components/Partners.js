import React from 'react';
import './Partners.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';
import { FaHandshake } from 'react-icons/fa';

const Partners = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const partners = [
    {
      name: 'IBM',
      logo: 'https://www.gesi.org/wp-content/uploads/2024/08/purepng.com-ibm-logologobrand-logoiconslogos-251519939176ka7y8.png',
      url: 'https://www.ibm.com'
    },
    {
      name: 'Cisco',
      logo: 'https://images.seeklogo.com/logo-png/21/2/cisco-logo-png_seeklogo-212506.png',
      url: 'https://www.cisco.com'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
      url: 'https://www.microsoft.com'
    },
    {
      name: 'NTRA',
      logo: 'https://digital.tra.gov.eg/Content/site/images/ntra.png',
      url: 'https://www.tra.gov.eg'
    },
    {
      name: 'OffSec',
      logo: 'https://manage.offsec.com/wp-content/uploads/2023/02/image1-1.png',
      url: 'https://www.offsec.com'
    },
    {
      name: 'Udemy',
      logo: 'https://images.seeklogo.com/logo-png/40/2/udemy-wordmark-logo-png_seeklogo-409220.png',
      url: 'https://www.udemy.com'
    }
  ];

  return (
    <section id="partners" className="partners bg-animated">
      <AnimatedBackground>
        <div className="container">
          <div 
            ref={headerRef}
            className={`section-header scroll-animate fade-down ${headerVisible ? 'visible' : ''}`}
          >
            <div className="partners-icon-wrapper">
              <FaHandshake className="partners-main-icon" />
            </div>
            <h2 className="section-title">
              شركاؤنا <span className="gradient-text">الاستراتيجيون</span>
            </h2>
            <p className="section-subtitle">
              نحن فخورون بالشراكة مع أبرز الشركات والمؤسسات العالمية في مجال التكنولوجيا والأمن السيبراني
            </p>
          </div>

          <div className="partners-slider-wrapper">
            <div className="partners-fade partners-fade-left"></div>
            <div 
              ref={gridRef}
              className={`partners-slider scroll-animate fade-up ${gridVisible ? 'visible' : ''}`}
            >
              {/* Set 1 - Original set */}
              {partners.map((partner, index) => (
                <a
                  key={`set1-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                </a>
              ))}
              {/* Set 2 - Duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <a
                  key={`set2-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                </a>
              ))}
              {/* Set 3 - Duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <a
                  key={`set3-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                </a>
              ))}
              {/* Set 4 - Duplicate for seamless loop */}
              {partners.map((partner, index) => (
                <a
                  key={`set4-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                </a>
              ))}
              {/* Set 5 - Additional duplicate to ensure seamless loop */}
              {partners.map((partner, index) => (
                <a
                  key={`set5-${index}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  <div className="partner-logo-wrapper">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="partner-logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay">
                    <span className="partner-name">{partner.name}</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="partners-fade partners-fade-right"></div>
          </div>
        </div>
      </AnimatedBackground>
    </section>
  );
};

export default Partners;

