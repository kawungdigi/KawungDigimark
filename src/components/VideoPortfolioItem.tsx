import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface VideoPortfolioItemProps {
  title: string;
  category: string;
  description: string;
  thumbnailImage: string;
  videoUrl: string;
  clientName?: string;
  projectYear?: string;
  link?: string;
}

const VideoPortfolioItem = ({ 
  title, 
  description, 
  thumbnailImage, 
  videoUrl, 
  clientName, 
  projectYear,
  link 
}: VideoPortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  
  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden" style={{ height: isVideoPlaying ? 'auto' : '200px' }}>
        {!isVideoPlaying ? (
          <>
            <img 
              src={thumbnailImage} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            />
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0.7 }}
            >
              <motion.button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePlayVideo}
              >
                <Play size={24} />
              </motion.button>
            </div>
          </>
        ) : (
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
          {projectYear && (
            <div className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 px-2 py-0.5 rounded-full">
              {projectYear}
            </div>
          )}
        </div>
        {clientName && (
          <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">
            <span className="font-medium">Client:</span> {clientName}
          </p>
        )}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium"
          >
            View Project <ExternalLink size={14} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default VideoPortfolioItem; 