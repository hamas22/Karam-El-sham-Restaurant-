import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
 details: [
      '6th of October Branch',
      'Cairo Branch',
      'Faisal Branch',
      'Shubra Branch',
      'Helwan Branch',
      'Alexandria Branches',
      'Heliopolis Branch',
      'Mansoura Branch',
      'Maadi Branch']
        },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['19509']
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['contact@logodalil.com', 'reservations@restaurantelite.sa']
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Working Hours',
      details: ['Sat - Thu: 12:00 AM - 12:00 PM', 'Friday: 2:00 AM - 12:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0e0e0e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-white/70 font-inter max-w-2xl mx-auto">
            We’re here to help. Reach out to us to reserve a table or inquire about our services.
          </p>
          <div className="w-24 h-1 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-700/20 text-orange-500 rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-white mb-8">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/5 text-white placeholder-white/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/5 text-white placeholder-white/50 transition-all duration-300"
                    placeholder="Your phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/5 text-white placeholder-white/50 transition-all duration-300"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 bg-white/5 text-white placeholder-white/50 transition-all duration-300"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
