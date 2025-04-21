import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from '../components/PortfolioItem';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioPage = () => {
  const { t } = useLanguage();
  const categories = [
    { id: 'All', name: t('categoryAll') },
    { id: 'Social Media', name: t('categorySocial') },
    { id: 'SEO', name: t('categorySEO') },
    { id: 'Content Marketing', name: t('categoryContent') },
    { id: 'PPC', name: t('categoryPPC') }
  ];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Growth Strategy',
      category: 'SEO',
      description: 'Increased organic traffic by 200% and conversion rates by 35% for an online fashion retailer.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Social Media Rebranding',
      category: 'Social Media',
      description: 'Developed a new social media strategy that increased engagement by 80% for a local restaurant chain.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Content Marketing Campaign',
      category: 'Content Marketing',
      description: 'Created and executed a content strategy that established the client as an industry thought leader.',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'PPC Campaign Optimization',
      category: 'PPC',
      description: 'Reduced cost-per-acquisition by 45% while increasing conversion volume for a SaaS company.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Local SEO Strategy',
      category: 'SEO',
      description: 'Improved local search rankings for a chain of medical clinics, resulting in 60% more appointment bookings.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Influencer Marketing Campaign',
      category: 'Social Media',
      description: 'Partnered with key industry influencers to launch a new product, reaching over 2 million potential customers.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-900 dark:from-gray-900 dark:to-gray-950 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('portfolioTitle')}</h1>
          <p className="text-lg text-indigo-100 dark:text-gray-300 max-w-2xl mx-auto">
            {t('portfolioSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <PortfolioItem
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    image={item.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('seeResults')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('seeResultsSubtitle')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a 
              href="/contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
            >
              {t('getFreeConsultation')}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
