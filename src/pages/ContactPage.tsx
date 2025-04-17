import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

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
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12.34L11.78 15.12L18.35 8.55M21.08 8C20.71 6.7 20 5.5 19.03 4.53C18.05 3.56 16.86 2.85 15.56 2.48C14.15 2.08 12.67 2.08 11.27 2.48C9.95 2.85 8.76 3.56 7.79 4.53L4.5 7.82V11C4.5 11 8.35 10.4 10.04 12.08C11.73 13.77 11 17.5 11 17.5H14.18L17.47 14.21C18.44 13.23 19.15 12.05 19.52 10.73C19.92 9.33 19.92 7.85 19.52 6.44M14.5 14.5L9.5 9.5" />
                    </svg>
                  </a>
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
