import { Award, Heart, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'طعام عالي الجودة',
      description: 'نستخدم أفضل المكونات الطازجة لتحضير أطباقنا.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'فريق محترف',
      description: 'طهاة ذوو خبرة عالية وطاقم خدمة استثنائي.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'أجواء فريدة',
      description: 'تصميم داخلي أنيق لتجربة طعام لا تُنسى.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'حائز على جوائز',
      description: 'حصلنا على جوائز أفضل مطعم لعدة سنوات متتالية.'
    }
  ];

  const stats = [
    { number: '15+', label: 'سنة من الخبرة' },
    { number: '50K+', label: 'عميل راضٍ' },
    { number: '200+', label: 'طبق مميز' },
    { number: '5★', label: 'تقييم العملاء' }
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#0e0e0eff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            من نحن
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
            رحلة طهي استثنائية بدأت منذ أكثر من 15 عامًا، هدفها تقديم أفضل تجربة طعام تجمع بين النكهات الأصيلة والعرض العصري.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold text-orange-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 text-orange-500 rounded-full mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-elegant max-w-2xl mx-auto border border-white/10">
            <h3 className="text-3xl font-playfair font-bold text-white mb-4">
              عِش تجربة طعام لا تُنسى
            </h3>
            <p className="text-gray-300 mb-6">
              احجز طاولتك الآن واستمتع بأشهى الأطباق في أجواء راقية وأنيقة.
            </p>
            <Link to="/menu" className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 border border-white/10">
              احجز الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
