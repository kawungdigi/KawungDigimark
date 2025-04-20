import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-900 dark:from-gray-900 dark:to-gray-950 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('contactTitle')}</h1>
          <p className="text-lg text-indigo-100 dark:text-gray-300 max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('getInTouch')}</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('ourLocation')}</h3>
                    <a 
                      href="https://maps.app.goo.gl/kSehFpRX8om4BdrU7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 mt-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      Jl. Kawung II No.50, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('phoneNumber')}</h3>
                    <a 
                      href="https://wa.me/6282258052069" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 mt-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    >
                      0822-5805-2069
                      <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">WhatsApp</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('emailAddress')}</h3>
                    <a 
                      href="mailto:kawungdigimark@gmail.com" 
                      className="text-gray-600 dark:text-gray-300 mt-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      kawungdigimark@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                      <Clock size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t('businessHours')}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{t('weekdayHours')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t('weekendClosed')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{t('connectWithUs')}</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/kawungdigimark/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <div className="relative group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors cursor-pointer">
                      <FaTiktok size={24} />
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('sendUsMessage')}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('ourLocation')}</h2>
          </div>
          <div className="h-96 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
            {/* Google Maps iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.147674342934!2d110.48279267499105!3d-6.9871517931376135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f31d1e7683d5%3A0xc99f9e5acf76872c!2sJl.%20Kawung%20II%20No.50%2C%20Tlogosari%20Kulon%2C%20Kec.%20Pedurungan%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050196!5e0!3m2!1sid!2sid!4v1718439783842!5m2!1sid!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kawung Digital Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
