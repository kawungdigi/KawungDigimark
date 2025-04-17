import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`py-4 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/95 dark:bg-gray-900/95'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/BLACK TR.png" 
                alt="Kawung Digimark" 
                className="h-11 md:h-14 block dark:hidden"
              />
              <img 
                src="/images/WHITE TR.png" 
                alt="Kawung Digimark" 
                className="h-11 md:h-14 hidden dark:block"
              />
            </motion.div>
          </NavLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors'
              }
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors'
              }
            >
              {t('about')}
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors'
              }
            >
              {t('services')}
            </NavLink>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors'
              }
            >
              {t('portfolio')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors'
              }
            >
              {t('contact')}
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <NavLink 
              to="/contact" 
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
              {t('getQuote')}
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-5 py-2">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? 'text-amber-500 font-medium text-lg' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors text-lg'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    isActive ? 'text-amber-500 font-medium text-lg' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors text-lg'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('about')}
                </NavLink>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => 
                    isActive ? 'text-amber-500 font-medium text-lg' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors text-lg'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('services')}
                </NavLink>
                <NavLink 
                  to="/portfolio" 
                  className={({ isActive }) => 
                    isActive ? 'text-amber-500 font-medium text-lg' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors text-lg'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('portfolio')}
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    isActive ? 'text-amber-500 font-medium text-lg' : 'text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-500 transition-colors text-lg'
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </NavLink>
                <div className="pt-3 flex justify-between items-center">
                  <LanguageToggle />
                </div>
                <NavLink 
                  to="/contact" 
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md transition-colors text-base font-medium text-center shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('getQuote')}
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
