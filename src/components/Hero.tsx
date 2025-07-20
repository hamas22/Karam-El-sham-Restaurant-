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
            Restaurant
            <span className="block text-primary-glow">Karam El-sham</span>
          </h1>

          <p className="fade-in-delay text-xl md:text-2xl text-white/90 mb-8 font-inter leading-relaxed" style={{ fontSize: '1rem' }}>
            A fine dining experience with the most delicious international dishes
          </p>

          <div className="fade-in-delay flex justify-center items-center mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-primary-glow fill-current mx-1" />
            ))}
            <span className="text-white/80 ml-3 font-inter">Rated 5 stars</span>
          </div>

          <div className="scale-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-elegant" onClick={handleClick}>
              <span>Discover Menu</span>
            </button>

            <button
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Contact Us
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
            Main Offers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Offer 1 */}
            <div
  className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }} // بيج فاتح للنص
            >
              <Star className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">20% Off First Order</h3>
              <p>Enjoy a special discount on your very first order with us!</p>
            </div>

            {/* Offer 2 */}
            <div
  className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }}
            >
              <Gift className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">Free Kids Meal</h3>
              <p>Buy 2 main dishes and get a kids meal absolutely free!</p>
            </div>

            {/* Offer 3 */}
            <div
  className="bg-black/20 backdrop-blur-lg rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-[#fff]/30"
              style={{ color: '#f5f5dc' }}
            >
              <Truck className="mx-auto mb-4 w-12 h-12" style={{ color: '#f1ba08ff' }} />
              <h3 className="text-xl font-semibold mb-3">Free Delivery</h3>
              <p>Orders above EGP 200 get free doorstep delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
