import { Clock, Users } from 'lucide-react';
import menuData from '../../menuData.json';
import React, { useState } from 'react';
import OrderPopup from './OrderPopup';

const images = import.meta.glob('@/assets/*.jpg', { eager: true }) as Record<string, { default: string }>;

const getImage = (fileName: string): string => {
  const match = Object.entries(images).find(([path]) => path.includes(fileName));
  return match ? match[1].default : '';
};

const Menu = () => {
  const [activePopupId, setActivePopupId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? menuData : menuData.slice(0, 3);

  return (
    <section id="menu" className="pt-24 py-20" style={{ backgroundColor: '#0e0e0eff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Special Menu
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            Taste the most delicious dishes prepared with the finest ingredients by expert chefs
          </p>
          <div className="w-24 h-1 bg-orange-700 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              className="menu-item group fade-in bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-8 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={getImage(item.image)}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 rounded-lg"
                />
                <div className="absolute top-4 right-4 bg-orange-600/90 text-white px-3 py-1 rounded-full font-semibold shadow-lg">
                  {item.price} EGP
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Info */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-orange-600" />
                    {item.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-orange-600" />
                    {item.serves}
                  </div>
                </div>

                {/* Order Button */}
                <button
                  className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-white"
                  onClick={() => setActivePopupId(item.id)}
                >
                  Order Now
                </button>

                {activePopupId === item.id && (
                  <OrderPopup onClose={() => setActivePopupId(null)} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Menu Button */}
        <div className="text-center mt-12">
          {!showAll && (
            <button
              className="bg-orange-600 hover:bg-white text-white py-3 px-6 rounded-lg font-semibold transition-all duration-800 hover:shadow-lg border border-white hover:text-orange-600"
              onClick={() => setShowAll(true)}
            >
              View Full Menu
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
