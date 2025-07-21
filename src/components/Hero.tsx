import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Star, Gift, Truck } from 'lucide-react';  // استيراد الأيقونات الجديدة
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay)' }}></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="float-animation mb-6">
            <ChefHat className="mx-auto h-16 w-16 text-primary" />
          </div>

          <h1 className="fade-in text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            مطعم
            <span className="block text-primary-glow">كرم الشام</span>
          </h1>

          <p className="fade-in-delay text-xl md:text-2xl text-white/90 mb-8 font-inter leading-relaxed">
تجربة طعام راقية مع أشهى الأطباق العالمية

          </p>

          <div className="fade-in-delay flex justify-center items-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-primary-glow fill-current mx-1" />
            ))}
            <span className="text-white/80 ml-3 font-inter">تقييم 5 نجوم</span>
          </div>

          <div className="scale-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-elegant" onClick={handleClick}>
              <span>اكتشف المنيو</span>
            </button>

            <button
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              اتصل بنا
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section
        id="offers"
        className="py-16 px-6 sm:px-12 lg:px-24"
        style={{ backgroundColor: '#0e0e0eff' }} 
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-12 font-playfair"
            style={{ color: '#ffffffff' }} 
          >
            العروض الرئيسية
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Offer 1 */}
            <div
              className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }}
            >
              <Star className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">خصم 20% على أول طلب</h3>
              <p>استمتع بخصم خاص على أول طلب لك معنا!</p>
            </div>

            {/* Offer 2 */}
            <div
              className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }}
            >
              <Gift className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">وجبة أطفال مجانية</h3>
              <p>عند شراء وجبتين رئيسيتين، تحصل على وجبة أطفال مجانًا!</p>
            </div>

            {/* Offer 3 */}
            <div
              className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }}
            >
              <Truck className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">توصيل مجاني</h3>
              <p>الطلبات التي تزيد عن 200 جنيه مصري تشمل توصيل مجاني للمنزل.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;