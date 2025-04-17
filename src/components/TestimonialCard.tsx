import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, position, company, testimonial, rating, image }: TestimonialCardProps) => {
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
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
