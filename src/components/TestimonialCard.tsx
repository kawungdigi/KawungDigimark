import { Star, StarHalf } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, position, company, testimonial, rating, image }: TestimonialCardProps) => {
  // Generate star rating with support for half stars
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          size={16} 
          className="text-amber-400 fill-amber-400"
        />
      );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          size={16} 
          className="text-amber-400 fill-amber-400"
        />
      );
    }
    
    // Add empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          size={16} 
          className="text-gray-300 dark:text-gray-600"
        />
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{position}, {company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {renderStars()}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
