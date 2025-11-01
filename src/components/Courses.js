import React from 'react';
import './Courses.css';
import { FaClock, FaUsers, FaCheck } from 'react-icons/fa';

const Courses = () => {
  const handleCourseRegistration = (course) => {
    // تحضير الرسالة للواتساب مع تفاصيل الكورس
    const message = `*تسجيل في كورس ${course.title}*\n\n` +
      `*اسم الكورس:* ${course.title}\n` +
      `*المستوى:* ${course.level}\n` +
      `*المدة:* ${course.duration}\n` +
      `*عدد الطلاب:* ${course.students}\n` +
      `*الوصف:* ${course.description}\n\n` +
      `*المميزات:*\n${course.features.map(feature => `• ${feature}`).join('\n')}\n\n` +
      `أرغب في التسجيل في هذا الكورس. أرجو التواصل معي.`;

    // رقم الواتساب
    const whatsappNumber = '201090183430';
    
    // إنشاء رابط الواتساب
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // فتح الواتساب في نافذة جديدة
    window.open(whatsappUrl, '_blank');
  };

  const courses = [
    {
      title: 'أساسيات الأمن السيبراني',
      level: 'مبتدئ',
      duration: '40 ساعة',
      students: '2,500+',
      description: 'ابدأ رحلتك في الأمن السيبراني من الصفر. تعلم المفاهيم الأساسية والتطبيق العملي.',
      price: '599',
      features: ['مقدمة شاملة', 'تمارين عملية', 'شهادة إتمام']
    },
    {
      title: 'اختبار الاختراق الأخلاقي',
      level: 'متقدم',
      duration: '60 ساعة',
      students: '1,800+',
      description: 'احترف تقنيات اختبار الاختراق والدفاع عن الأنظمة. تعلم استخدام أدوات Penetration Testing.',
      price: '899',
      features: ['مختبرات تفاعلية', 'مشاريع حقيقية', 'دعم فني']
    },
    {
      title: 'أمان الشبكات',
      level: 'متوسط',
      duration: '50 ساعة',
      students: '1,200+',
      description: 'فهم أمان الشبكات وحماية البنية التحتية. تعلم تقنيات الحماية المتقدمة.',
      price: '749',
      features: ['شبكات افتراضية', 'أدوات احترافية', 'تدريب عملي']
    },
    {
      title: 'استجابة الحوادث',
      level: 'متقدم',
      duration: '45 ساعة',
      students: '950+',
      description: 'تعلم كيفية اكتشاف والتعامل مع الحوادث الأمنية. مهارات حيوية للمحترفين.',
      price: '799',
      features: ['سيناريوهات واقعية', 'أدوات محترفة', 'شهادة معتمدة']
    }
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">كورساتنا <span className="gradient-text">المميزة</span></h2>
          <p className="section-subtitle">اختر الكورس الذي يناسب مستواك وأهدافك المهنية</p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => {
            const courseImages = [
              'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
              'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
              'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
              'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80'
            ];
            return (
            <div key={index} className="course-card">
              <div className="course-image-wrapper">
                <img 
                  src={courseImages[index]} 
                  alt={course.title}
                  className="course-image"
                  loading="lazy"
                />
                <div className="course-image-overlay"></div>
                <div className="course-badge">{course.level}</div>
              </div>
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
              </div>
              
              <div className="course-info">
                <div className="info-item">
                  <FaClock className="info-icon" />
                  <span>{course.duration}</span>
                </div>
                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <span>{course.students} طالب</span>
                </div>
              </div>

              <div className="course-features">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <FaCheck className="check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="course-footer">
                <div className="course-price">
                  <span className="price-amount blurred">****</span>
                  <span className="price-currency">جنيه مصري</span>
                </div>
                <button 
                  className="course-btn"
                  onClick={() => handleCourseRegistration(course)}
                >
                  سجل الآن
                </button>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;