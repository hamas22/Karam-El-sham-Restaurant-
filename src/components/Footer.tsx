import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{ backgroundColor: '#0e0e0eff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              مطعم كرم الشام
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              نقدم لك تجربة طعام استثنائية تجمع بين النكهات الأصلية والتقديم العصري. مطعمنا هو وجهتك المثالية للاستمتاع بأطباق شهية في أجواء راقية وأنيقة.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/KaramLSham"  target='_blank'
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              > 
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/karamelshamfoods/" target='_blank' 
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/MenuEgypt" target='_blank' 
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {['الرئيسية', 'القائمة', 'من نحن', 'تواصل معنا'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>شارع عباس العقاد</p>
                  <p>القاهرة، مصر</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/70 text-sm">+201098770087</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-white/70 text-sm">talabat.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 مطعم كرم الشام. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
