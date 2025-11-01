import React from 'react';
import './Footer.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <div className="footer-logo" onClick={scrollToTop}>
              <span className="logo-text">
                <span className="console-cursor">_</span>
                <span className="logo-typing">3arab</span><span className="logo-accent">Hack</span>
                <span className="logo-console">$</span>
              </span>
            </div>
            <p className="footer-description">
              أكاديمية متخصصة في تدريب وتأهيل الخبراء في مجال الأمن السيبراني
            </p>
            <div className="footer-contact">
              <a href="mailto:support@3arabhack.com" className="contact-link-item">
                <FaEnvelope /> support@3arabhack.com
              </a>
              <a href="mailto:info@3arabhack.com" className="contact-link-item">
                <FaEnvelope /> info@3arabhack.com
              </a>
              <a href="tel:01552803430" className="contact-link-item">
                <FaPhone /> 01552803430
              </a>
              <button 
                className="contact-link-item whatsapp-link"
                onClick={() => openWhatsApp('201090183430')}
              >
                <FaWhatsapp /> واتساب
              </button>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">روابط مهمة</h3>
            <ul className="footer-links">
              <li><a href="#hero" onClick={scrollToTop}>الرئيسية</a></li>
              <li><a href="#courses">الكورسات</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#faq">الأسئلة الشائعة</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">الفروع</h3>
            <div className="footer-branches">
              <div className="branch-item">
                <FaMapMarkerAlt className="branch-icon" />
                <div>
                  <div className="branch-name">سنتر VIP</div>
                  <div className="branch-location">مدينة السادات - المنوفية</div>
                </div>
              </div>
              <div className="branch-item">
                <FaMapMarkerAlt className="branch-icon" />
                <div>
                  <div className="branch-name">امريكانا بلازا</div>
                  <div className="branch-location">الشيخ زايد - أكتوبر</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 3arab Hack. جميع الحقوق محفوظة.</p>
          <p className="made-with">صُنع في العالم العربي</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;