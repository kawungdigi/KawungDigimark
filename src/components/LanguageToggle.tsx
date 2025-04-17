import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  const isIndonesian = language === 'id';

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
      
      <button 
        onClick={toggleLanguage}
        className={`relative w-14 h-7 rounded-full flex items-center px-1 focus:outline-none ${
          isIndonesian ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-700'
        }`}
        aria-label="Toggle language"
      >
        <motion.div 
          className="absolute flex justify-center items-center"
          initial={false}
          animate={{
            x: isIndonesian ? 25 : 1
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <div className="w-5 h-5 rounded-full bg-white shadow-md" />
        </motion.div>
        
        <div className="w-full flex justify-between items-center px-1 text-xs font-medium text-white">
          <span className={isIndonesian ? 'opacity-0' : 'opacity-100'}>EN</span>
          <span className={isIndonesian ? 'opacity-100' : 'opacity-0'}>ID</span>
        </div>
      </button>
      
      <AnimatePresence mode="wait">
        <motion.span
          key={isIndonesian ? 'id' : 'en'}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[20px]"
        >
          {isIndonesian ? 'ID' : 'EN'}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
