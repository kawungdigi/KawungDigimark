import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const PortfolioItem = ({ title, category, description, image, link }: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
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

export default PortfolioItem;
