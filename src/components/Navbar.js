import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <span className="logo-text">
              <span className="console-cursor">_</span>
              <span className="logo-typing">3arab</span><span className="logo-accent">Hack</span>
              <span className="logo-console">$</span>
            </span>
          </div>
          
          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ThemeToggle />
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>الرئيسية</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>المميزات</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>من نحن</a>
            <a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}>الكورسات</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>الأسئلة الشائعة</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>إنشاء حساب</a>
            <a 
              href="https://adnanalmadani.com/student_login.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nav-login-btn"
            >
              تسجيل الدخول
            </a>
            <button className="nav-cta-btn" onClick={() => scrollToSection('courses')}>
              ابدأ الآن
            </button>
          </div>

          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
