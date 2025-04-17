import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                href="#" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('ourServices')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('ourServicesFooter')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('socialMediaMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('seo')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('contentMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('emailMarketing')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('ppcAdvertising')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-amber-500 transition-colors">
                  {t('dataAnalytics')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 text-amber-500" size={18} />
                <a 
                  href="https://maps.app.goo.gl/kSehFpRX8om4BdrU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-amber-500 transition-colors"
                >
                  Jl. Kawung II No.50, Tlogosari Kulon, Kec. Pedurungan, Kota Semarang, Jawa Tengah 50196
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-amber-500" size={18} />
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
                <Mail className="mr-2 text-amber-500" size={18} />
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
