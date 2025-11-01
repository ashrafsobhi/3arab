import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaQuoteRight, FaUserCircle, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مختبر اختراق',
      company: 'شركة أمان التقنية',
      text: 'الكورسات كانت ممتازة! ساعدتني في الحصول على أول وظيفة في الأمن السيبراني. المحتوى عملي وحديث، والمدربون محترفون جداً. أنصح بها بشدة.',
      rating: 5,
      course: 'اختبار الاختراق الأخلاقي'
    },
    {
      name: 'فاطمة علي',
      role: 'متخصصة أمن معلومات',
      company: 'بنك الرقمية',
      text: 'أفضل استثمار قمت به! المدربون محترفون والبيئة التعليمية رائعة. تعلمت مهارات عملية يمكن تطبيقها مباشرة. خدمة العملاء ممتازة أيضاً.',
      rating: 5,
      course: 'أساسيات الأمن السيبراني'
    },
    {
      name: 'خالد سعيد',
      role: 'محلل أمني',
      company: 'شركة الحماية المتقدمة',
      text: 'المشاريع العملية كانت الأهم. تعلمت مهارات حقيقية يمكنني تطبيقها مباشرة في العمل. الكورس شامل ومنظم بشكل احترافي.',
      rating: 5,
      course: 'أمان الشبكات'
    },
    {
      name: 'سارة أحمد',
      role: 'مطورة أمنية',
      company: 'استوديو الأمان',
      text: 'تجربة رائعة من البداية للنهاية. المادة العلمية غنية والتمارين العملية ممتازة. حقاً استفدت كثيراً وأصبحت أكثر ثقة في مهاراتي.',
      rating: 5,
      course: 'استجابة الحوادث'
    },
    {
      name: 'محمد حسن',
      role: 'مهندس أمن سيبراني',
      company: 'مجموعة الحماية',
      text: 'الكورسات ساعدتني في الترقية في عملي. المحتوى محدث ويغطي أحدث التقنيات. المدربون متجاوبون وساعدوني في كل خطوة.',
      rating: 5,
      course: 'اختبار الاختراق الأخلاقي'
    },
    {
      name: 'ريم خالد',
      role: 'محللة ثغرات',
      company: 'مختبرات الأمن',
      text: 'أكاديمية رائعة بمعنى الكلمة! المختبرات الافتراضية متطورة جداً. تعلمت تقنيات لم أكن أعرفها من قبل. شكراً لكم!',
      rating: 5,
      course: 'أساسيات الأمن السيبراني'
    },
    {
      name: 'يوسف علي',
      role: 'خبير أمن معلومات',
      company: 'شركة التكنولوجيا الآمنة',
      text: 'الكورس كان فوق التوقعات. المحتوى عملي جداً والشهادات معتمدة ومعترف بها. استطعت استخدامها في سيرتي الذاتية.',
      rating: 5,
      course: 'أمان الشبكات'
    },
    {
      name: 'نورا محمود',
      role: 'مستشارة أمنية',
      company: 'مركز الأمن السيبراني',
      text: 'تجربة تعليمية استثنائية! البيئة التدريبية احترافية والمواد التعليمية شاملة. سأعود بكل تأكيد لكورسات أخرى.',
      rating: 5,
      course: 'استجابة الحوادث'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star filled' : 'star'}
      />
    ));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ماذا يقول <span className="gradient-text">طلابنا</span>؟</h2>
          <p className="section-subtitle">تجارب حقيقية من طلاب أكاديمية 3arab Hack - أكثر من 10,000 طالب واثق</p>
        </div>
      </div>

      <div className="testimonials-slider-wrapper">
          <div 
            className="testimonials-slider"
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="quote-icon">
                      <FaQuoteRight />
                    </div>
                    <div className="rating-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <div className="testimonial-content">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-course">
                      <span className="course-badge">{testimonial.course}</span>
                    </div>
                  </div>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <FaUserCircle />
                    </div>
                    <div className="author-info">
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-role">{testimonial.role}</div>
                      <div className="author-company">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="السابق">
            <FaChevronRight />
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide} aria-label="التالي">
            <FaChevronLeft />
          </button>

          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`انتقل إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </div>

      <div className="container">
        <div className="testimonials-stats">
          <div className="stat-box">
            <div className="stat-number">10,000+</div>
            <div className="stat-text">طالب مسجل</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">4.9</div>
            <div className="stat-text">تقييم متوسط</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">98%</div>
            <div className="stat-text">معدل الرضا</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">5,000+</div>
            <div className="stat-text">تقييم إيجابي</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;