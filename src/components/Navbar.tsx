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

  // Variasi animasi untuk item navbar
  const navItemVariants = {
    initial: { y: -5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    hover: { scale: 1.05, color: "#f59e0b" }
  };

  // Variasi untuk underline 
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%' }
  };

  // Komponen NavItem dengan animasi
  const NavItem = ({ to, children, onClick = () => {} }: { to: string; children: React.ReactNode; onClick?: () => void }) => {
    return (
      <NavLink to={to} onClick={onClick}>
        {({ isActive }) => (
          <motion.div 
            className="relative"
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            variants={navItemVariants}
            transition={{ duration: 0.2 }}
          >
            <span className={isActive ? 'text-amber-500 font-medium' : 'text-gray-700 dark:text-gray-300'}>
              {children}
            </span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-amber-500"
              initial="hidden"
              variants={underlineVariants}
              animate={isActive ? "visible" : "hidden"}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </NavLink>
    );
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
            <NavItem to="/">{t('home')}</NavItem>
            <NavItem to="/about">{t('about')}</NavItem>
            <NavItem to="/services">{t('services')}</NavItem>
            <NavItem to="/portfolio">{t('portfolio')}</NavItem>
            <NavItem to="/contact">{t('contact')}</NavItem>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <NavLink 
              to="/contact" 
              className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
              {t('getQuote')}
            </NavLink>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button 
              onClick={toggleMenu} 
              className="text-gray-700 dark:text-gray-300"
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
              <motion.div 
                className="flex flex-col space-y-5 py-2"
                initial="initial"
                animate="animate"
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <NavItem to="/" onClick={() => setIsMenuOpen(false)}>{t('home')}</NavItem>
                <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>{t('about')}</NavItem>
                <NavItem to="/services" onClick={() => setIsMenuOpen(false)}>{t('services')}</NavItem>
                <NavItem to="/portfolio" onClick={() => setIsMenuOpen(false)}>{t('portfolio')}</NavItem>
                <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</NavItem>
                <div className="pt-3 flex justify-between items-center">
                  <LanguageToggle />
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                <NavLink 
                  to="/contact" 
                    className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md transition-colors text-base font-medium text-center shadow-md block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('getQuote')}
                </NavLink>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
