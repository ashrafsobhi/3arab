import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCalendarAlt, FaUserShield, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    thirdName: '',
    birthDate: '',
    phone: '',
    guardianPhone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // تحضير الرسالة للواتساب
    const message = `*تسجيل جديد في 3arab Hack*\n\n` +
      `*الاسم الأول:* ${formData.firstName}\n` +
      `*الاسم الثاني:* ${formData.secondName}\n` +
      `*الاسم الثالث:* ${formData.thirdName}\n` +
      `*تاريخ الميلاد:* ${formData.birthDate}\n` +
      `*رقم الهاتف:* ${formData.phone}\n` +
      `*رقم هاتف ولي الأمر:* ${formData.guardianPhone}`;

    // رقم الواتساب
    const whatsappNumber = '201090183430';
    
    // إنشاء رابط الواتساب
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح الواتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
    
    // إعادة تعيين النموذج
    setFormData({
      firstName: '',
      secondName: '',
      thirdName: '',
      birthDate: '',
      phone: '',
      guardianPhone: ''
    });
    
    alert('سيتم فتح الواتساب لإرسال البيانات. شكراً لتسجيلك!');
  };

  const openWhatsApp = (phoneNumber) => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            تواصل معنا <span className="gradient-text">وأنشئ حسابك</span>
          </h2>
          <p className="section-subtitle">
            املأ البيانات التالية لإنشاء حساب جديد أو تواصل معنا عبر المعلومات أدناه
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3 className="contact-subtitle">معلومات التواصل</h3>
              <p className="contact-description">
                نحن هنا لمساعدتك في أي وقت! تواصل معنا عبر أي من القنوات التالية
              </p>
            </div>
            
            <div className="contact-details">
              <div className="contact-category">
                <div className="category-header">
                  <FaEnvelope className="category-icon" />
                  <h4 className="category-title">البريد الإلكتروني</h4>
                </div>
                <div className="category-items">
                  <a href="mailto:support@3arabhack.com" className="contact-value-item link">
                    <span className="value-label">الدعم الفني:</span>
                    <span className="value-content">support@3arabhack.com</span>
                  </a>
                  <a href="mailto:info@3arabhack.com" className="contact-value-item link">
                    <span className="value-label">المعلومات العامة:</span>
                    <span className="value-content">info@3arabhack.com</span>
                  </a>
                </div>
              </div>
              
              <div className="contact-category">
                <div className="category-header">
                  <FaPhone className="category-icon" />
                  <h4 className="category-title">الهاتف</h4>
                </div>
                <div className="category-items">
                  <a href="tel:01552803430" className="contact-value-item phone-link">
                    <span className="value-label">الهاتف الرئيسي:</span>
                    <span className="value-content">01552803430</span>
                  </a>
                </div>
              </div>

              <div className="contact-category whatsapp-category">
                <div className="category-header">
                  <FaWhatsapp className="category-icon whatsapp-icon" />
                  <h4 className="category-title">واتساب</h4>
                </div>
                <div className="category-items">
                  <button 
                    className="whatsapp-btn-item"
                    onClick={() => openWhatsApp('201090183430')}
                  >
                    <FaWhatsapp className="btn-icon" />
                    <div className="btn-content">
                      <span className="btn-label">واتساب 1</span>
                      <span className="btn-number">201090183430</span>
                    </div>
                  </button>
                  <button 
                    className="whatsapp-btn-item"
                    onClick={() => openWhatsApp('01090183430')}
                  >
                    <FaWhatsapp className="btn-icon" />
                    <div className="btn-content">
                      <span className="btn-label">واتساب 2</span>
                      <span className="btn-number">01090183430</span>
                    </div>
                  </button>
                </div>
              </div>
              
              <div className="contact-category">
                <div className="category-header">
                  <FaMapMarkerAlt className="category-icon" />
                  <h4 className="category-title">الفروع</h4>
                </div>
                <div className="category-items">
                  <div className="branch-item-wrapper">
                    <div className="branch-name">فرع السادات</div>
                    <div className="branch-address">سنتر VIP - مدينة السادات - المنوفية</div>
                  </div>
                  <div className="branch-item-wrapper">
                    <div className="branch-name">فرع أكتوبر</div>
                    <div className="branch-address">امريكانا بلازا - الشيخ زايد - أكتوبر</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="form-title">إنشاء حساب جديد</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">
                    <FaUser className="label-icon" />
                    الاسم الأول
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل الاسم الأول"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="secondName">
                    <FaUser className="label-icon" />
                    الاسم الثاني
                  </label>
                  <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل الاسم الثاني"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="thirdName">
                    <FaUser className="label-icon" />
                    الاسم الثالث
                  </label>
                  <input
                    type="text"
                    id="thirdName"
                    name="thirdName"
                    value={formData.thirdName}
                    onChange={handleChange}
                    required
                    placeholder="أدخل الاسم الثالث"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthDate">
                    <FaCalendarAlt className="label-icon" />
                    تاريخ الميلاد
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone className="label-icon" />
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="01XXXXXXXXX"
                    pattern="[0-9]{11}"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="guardianPhone">
                    <FaUserShield className="label-icon" />
                    رقم هاتف ولي الأمر
                  </label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleChange}
                    required
                    placeholder="01XXXXXXXXX"
                    pattern="[0-9]{11}"
                  />
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <FaPaperPlane className="btn-icon" />
                إرسال البيانات عبر الواتساب
              </button>
            </form>

            <div className="contact-embed">
              <div className="embed-header">
                <h3 className="embed-title">تابع آخر أخبارنا</h3>
                <p className="embed-subtitle">تابعنا على Facebook لمتابعة آخر الأخبار والتحديثات</p>
              </div>
              <div className="embed-wrapper">
                <iframe 
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid025gps6Xzhhg5xv1wNrwjFJjc7CPjGoHYvbY69NwdS6UCbqmANgFNYvSFcCWyAgEpKl%26id%3D61572543482605&show_text=true&width=500" 
                  width="500" 
                  height="400" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="3arab Hack Facebook Post"
                  className="facebook-embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;