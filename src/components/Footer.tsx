import { ArrowUp, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-indigo-950 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/images/WHITE TR.png" 
                alt="Kawung Digimark" 
                className="h-10 mb-2 hidden dark:block"
              />
              <img 
                src="/images/BLACK TR.png" 
                alt="Kawung Digimark" 
                className="h-10 mb-2 block dark:hidden"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.instagram.com/kawungdigimark/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-500 transition-colors p-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.div
                className="relative group p-2"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-gray-300 hover:text-amber-500 transition-colors cursor-pointer">
                  <FaTiktok size={24} />
                </span>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Coming Soon
                </div>
              </motion.div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('ourServices')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">{t('ourServicesFooter')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('socialMediaMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('seo')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('contentMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('emailMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('ppcAdvertising')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors py-1 block">
                  {t('dataAnalytics')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="sm:col-span-2 md:col-span-1 mt-6 sm:mt-0">
            <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 text-amber-500 flex-shrink-0" size={22} />
                <a 
                  href="https://maps.app.goo.gl/kSehFpRX8om4BdrU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-500 transition-colors text-sm sm:text-base"
                >
                  Jl. Kawung II No.50, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-amber-500 flex-shrink-0" size={22} />
                <a 
                  href="https://wa.me/6282258052069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  0822-5805-2069
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 text-amber-500 flex-shrink-0" size={22} />
                <a 
                  href="mailto:kawungdigimark@gmail.com"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  kawungdigimark@gmail.com
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <button 
                onClick={scrollToTop}
                className="bg-indigo-900 dark:bg-gray-800 hover:bg-indigo-800 dark:hover:bg-gray-700 p-3 rounded-full text-white transition-colors inline-flex items-center justify-center"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
