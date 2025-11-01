import React, { useState } from 'react';
import './FAQ.css';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'ما هي متطلبات التسجيل في الكورسات؟',
      answer: 'لا توجد متطلبات محددة للكورسات المبتدئة. يمكنك البدء من الصفر. للكورسات المتقدمة، ننصح بوجود خلفية أساسية في البرمجة أو الشبكات. جميع الكورسات مناسبة للمبتدئين والمحترفين على حد سواء.'
    },
    {
      question: 'هل الشهادات معتمدة ومعترف بها؟',
      answer: 'نعم، جميع الشهادات التي تحصل عليها بعد إتمام الكورسات معتمدة ومعترف بها في سوق العمل. يمكنك استخدامها في سيرتك الذاتية والتقديم للوظائف في مجال الأمن السيبراني.'
    },
    {
      question: 'ما هي طريقة الدفع المتاحة؟',
      answer: 'نوفر عدة طرق دفع مريحة وآمنة، بما في ذلك البطاقات الائتمانية، التحويل البنكي، والدفع عند الاستلام في بعض المناطق. يمكنك التواصل معنا للمزيد من التفاصيل.'
    },
    {
      question: 'هل يمكنني الوصول للمحتوى بعد انتهاء الكورس؟',
      answer: 'نعم، يمكنك الوصول لجميع المواد التعليمية والمحاضرات المسجلة لمدة سنة كاملة بعد إتمام الكورس. يمكنك مراجعة المحتوى في أي وقت يناسبك.'
    },
    {
      question: 'ماذا إذا لم أستطع الحضور في وقت معين؟',
      answer: 'جميع المحاضرات مسجلة ومتاحة للمشاهدة في أي وقت. يمكنك متابعة المحاضرات حسب جدولك الخاص. كما نوفر جلسات حية أسبوعية للإجابة على أسئلتك.'
    },
    {
      question: 'هل يوجد دعم فني أثناء الكورس؟',
      answer: 'نعم، نوفر دعم فني كامل طوال مدة الكورس. يمكنك التواصل مع الفريق الفني عبر البريد الإلكتروني، الهاتف، أو منصة التواصل الخاصة بالكورس. فريقنا متاح 24/7 لمساعدتك.'
    },
    {
      question: 'كم مدة الكورس الواحد؟',
      answer: 'مدة الكورسات تتراوح بين 40 إلى 60 ساعة تدريبية، موزعة على عدة أسابيع. يمكنك اختيار الجدول الذي يناسبك سواء كان مكثفاً أو مرناً يتناسب مع وقتك.'
    },
    {
      question: 'هل يمكنني الحصول على استرداد للمبلغ إذا لم يعجبني الكورس؟',
      answer: 'نعم، نوفر ضمان استرداد كامل للمبلغ خلال أول 7 أيام من بداية الكورس إذا لم يكن المحتوى مناسباً لك. هدفنا هو رضاك الكامل عن تجربتك التعليمية.'
    },
    {
      question: 'ما هي لغة المحاضرات؟',
      answer: 'جميع المحاضرات باللغة العربية بشكل كامل. المواد التعليمية والشرح والتواصل باللغة العربية لضمان أفضل تجربة تعليمية للطلاب العرب.'
    },
    {
      question: 'هل أحتاج معدات خاصة للكورسات؟',
      answer: 'لا حاجة لمعدات خاصة. فقط جهاز كمبيوتر أو لابتوب مع اتصال بالإنترنت كافٍ. سنوفر لك بيئة تدريبية افتراضية يمكنك الوصول إليها من أي مكان.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-icon">
            <FaQuestionCircle />
          </div>
          <h2 className="section-title">
            الأسئلة <span className="gradient-text">الشائعة</span>
          </h2>
          <p className="section-subtitle">
            لدينا إجابات لجميع استفساراتك. إذا لم تجد ما تبحث عنه، لا تتردد في التواصل معنا
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <p>هل لديك سؤال آخر؟</p>
          <a href="#contact" className="contact-link">
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
