import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  projectYear?: string;
}

const PortfolioItem = ({ title, category, description, image, images, projectYear }: PortfolioItemProps) => {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // Gunakan array gambar jika tersedia, jika tidak gunakan gambar utama
  const imageArray = images && images.length > 0 ? images : [image];
  const currentImage = imageArray[currentImageIndex];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };

  const nextModalImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
  };
  
  const prevModalImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
  };
  
  const openDetailModal = () => {
    setModalImageIndex(currentImageIndex);
    setShowDetailModal(true);
    // Menonaktifkan scroll pada body ketika modal terbuka
    document.body.style.overflow = 'hidden';
  };
  
  const closeDetailModal = () => {
    setShowDetailModal(false);
    // Mengaktifkan kembali scroll pada body ketika modal ditutup
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <motion.div 
        className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={currentImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
          />
          
          {/* Navigation arrows for multiple images */}
          {imageArray.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
                style={{ opacity: isHovered ? 0.8 : 0 }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-opacity"
                style={{ opacity: isHovered ? 0.8 : 0 }}
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {imageArray.map((_, index) => (
                  <span 
                    key={index} 
                    className={`block h-1.5 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'w-4 bg-white' 
                        : 'w-1.5 bg-white bg-opacity-60'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
          <div className="flex justify-between items-center mb-2">
            <div className="text-xs text-gray-500 dark:text-gray-400">{category}</div>
            {projectYear && (
              <div className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                {projectYear}
              </div>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={openDetailModal}
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
            >
              {t('viewDetail')} <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Detail Modal */}
      <AnimatePresence>
        {showDetailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={closeDetailModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white dark:bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                  {projectYear && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {t('projectYear')}: {projectYear}
                    </div>
                  )}
                </div>
                <button 
                  onClick={closeDetailModal}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
              
              {/* Modal Image Gallery */}
              <div className="relative flex-grow overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <img 
                    src={imageArray[modalImageIndex]} 
                    alt={`${title} - screenshot ${modalImageIndex + 1}`}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                </div>
                
                {/* Image Navigation Arrows */}
                {imageArray.length > 1 && (
                  <>
                    <button 
                      onClick={prevModalImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Navigation */}
              {imageArray.length > 1 && (
                <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 overflow-x-auto">
                  <div className="flex space-x-2">
                    {imageArray.map((img, index) => (
                      <button 
                        key={index}
                        onClick={() => setModalImageIndex(index)}
                        className={`w-16 h-12 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                          index === modalImageIndex 
                            ? 'border-indigo-600 dark:border-indigo-500' 
                            : 'border-transparent'
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Modal Footer with Description */}
              <div className="p-4 border-t dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">{description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioItem;
