import React from 'react';
import './CauseSection.css';
import { FaHeart, FaHandHoldingHeart, FaPray } from 'react-icons/fa';

const CauseSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cause" className="cause-section">
      <div className="cause-background">
        <div className="cause-pattern"></div>
        <div className="cause-gradient"></div>
      </div>
      
      <div className="container">
        <div className="cause-content">
          <div className="cause-header">
            <div className="cause-icon-wrapper">
              <FaHeart className="cause-main-icon" />
            </div>
            <h2 className="cause-title">
              لا تنسى <span className="cause-accent">قضيتنا</span>
            </h2>
            <p className="cause-subtitle">
              في هذا الوقت العصيب، نتذكر إخواننا في غزة والسودان
            </p>
          </div>

          <div className="cause-cards">
            <div className="cause-card card-gaza">
              <div className="card-header">
                <div className="card-icon">
                  <FaPray />
                </div>
                <h3 className="card-title">غزة</h3>
              </div>
              <p className="card-text">
                إخواننا في غزة يواجهون أوقاتاً صعبة. لنبقَ معهم في دعواتنا وصلواتنا.
                ندعو الله أن يفرج كربهم وأن يحفظهم من كل سوء.
              </p>
              <div className="card-prayer">
                <span className="prayer-text">اللهم فرج كربهم وارحمهم</span>
              </div>
            </div>

            <div className="cause-card card-sudan">
              <div className="card-header">
                <div className="card-icon">
                  <FaHandHoldingHeart />
                </div>
                <h3 className="card-title">السودان</h3>
              </div>
              <p className="card-text">
                إخواننا في السودان يحتاجون دعاءنا ووقوفنا معهم. دعونا نتذكرهم في كل صلاة
                وندعو الله أن يحفظهم ويجعل الفرج قريباً.
              </p>
              <div className="card-prayer">
                <span className="prayer-text">اللهم احفظهم وارحمهم</span>
              </div>
            </div>
          </div>

          <div className="cause-message">
            <p className="message-text">
              "وَتَوَكَّلْ عَلَى اللَّهِ ۚ وَكَفَىٰ بِاللَّهِ وَكِيلًا"
            </p>
            <p className="message-source">سورة الأحزاب - الآية 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CauseSection;

