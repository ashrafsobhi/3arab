import React from 'react';
import './Features.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedBackground from './AnimatedBackground';
import { 
  FaShieldAlt, 
  FaBullseye, 
  FaUserGraduate, 
  FaCertificate, 
  FaLaptopCode, 
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';

const Features = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const features = [
    {
      icon: FaShieldAlt,
      title: 'حماية متقدمة',
      description: 'تعلم أحدث تقنيات الحماية والدفاع عن الشبكات والأنظمة',
      details: [
        'تقنيات الحماية من الاختراق',
        'أمن الشبكات والبنية التحتية',
        'إدارة الهويات والوصول',
        'حماية البيانات والمعلومات'
      ]
    },
    {
      icon: FaBullseye,
      title: 'تدريب عملي',
      description: 'مشاريع واقعية وتمارين عملية لتطبيق ما تتعلمه مباشرة',
      details: [
        'مختبرات حقيقية للتدريب',
        'سيناريوهات من الحياة الواقعية',
        'مشاريع قابلة للتطبيق',
        'تدريب على أحدث الأدوات'
      ]
    },
    {
      icon: FaUserGraduate,
      title: 'خبراء معتمدون',
      description: 'مدربون محترفون بخبرة واسعة في مجال الأمن السيبراني',
      details: [
        'خبراء معتمدين دولياً',
        'خبرة عملية أكثر من 10 سنوات',
        'تدريب مباشر وتفاعلي',
        'دعم مستمر من المدربين'
      ]
    },
    {
      icon: FaCertificate,
      title: 'شهادات معتمدة',
      description: 'احصل على شهادات إتمام معتمدة ومعترف بها في السوق',
      details: [
        'شهادات معترف بها دولياً',
        'صالحة في السوق العربي',
        'تساعدك في الحصول على وظائف',
        'إضافة قوية لسيرتك الذاتية'
      ]
    },
    {
      icon: FaLaptopCode,
      title: 'بيئة تدريبية',
      description: 'مختبرات افتراضية متطورة لممارسة المهارات بشكل آمن',
      details: [
        'مختبرات افتراضية متقدمة',
        'بيئة آمنة للتدريب',
        'أدوات احترافية مجانية',
        'دخول 24/7 للمختبرات'
      ]
    },
    {
      icon: FaRocket,
      title: 'مسار وظيفي',
      description: 'إرشاد كامل لبدء مسيرتك المهنية في الأمن السيبراني',
      details: [
        'استشارة مهنية مجانية',
        'مساعدة في كتابة السيرة الذاتية',
        'فرص عمل حصرية',
        'شبكة من المحترفين'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'دعم فني متميز',
      description: 'فريق دعم متاح على مدار الساعة لمساعدتك في رحلتك التعليمية',
      details: [
        'دعم فني 24/7',
        'رد سريع على الاستفسارات',
        'منتدى مجتمع تفاعلي',
        'دعم بالعربية والإنجليزية'
      ]
    },
    {
      icon: FaBullseye,
      title: 'مناهج محدثة',
      description: 'مناهج تعليمية محدثة باستمرار وفق أحدث المعايير العالمية',
      details: [
        'تحديثات مستمرة للمحتوى',
        'أحدث المعايير الدولية',
        'مواد تعليمية متنوعة',
        'فيديوهات عالية الجودة'
      ]
    }
  ];

  return (
    <section id="features" className="features bg-animated">
      <AnimatedBackground>
        <div className="container">
          <div 
            ref={headerRef}
            className={`section-header scroll-animate fade-down ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="section-title">لماذا تختار <span className="gradient-text">3arab Hack</span>؟</h2>
            <p className="section-subtitle">نوفر لك كل ما تحتاجه لتصبح خبيراً في الأمن السيبراني</p>
          </div>

          <div 
            ref={gridRef}
            className={`features-grid scroll-animate fade-up ${gridVisible ? 'visible' : ''}`}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="feature-card">
                  <div className="feature-content">
                    <div className="feature-icon">
                      <IconComponent />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    {feature.details && (
                      <ul className="feature-details">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="detail-item">
                            <FaCheckCircle className="detail-icon" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedBackground>
    </section>
  );
};

export default Features;