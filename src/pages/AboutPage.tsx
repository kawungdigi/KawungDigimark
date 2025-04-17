import { Award, Target, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-900 dark:from-gray-900 dark:to-gray-950 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('aboutTitle')}</h1>
          <p className="text-lg text-indigo-100 dark:text-gray-300 max-w-2xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt={t('ourOffice')} 
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('ourStory')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('storyParagraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('storyParagraph2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('storyParagraph3')}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('ourValues')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('valuesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-orange-500 mb-4 mx-auto">
                <Award size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-800 dark:text-indigo-300">{t('valueExcellence')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('valueExcellenceDesc')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-orange-500 mb-4 mx-auto">
                <Target size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-800 dark:text-indigo-300">{t('valueInnovation')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('valueInnovationDesc')}
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
              <div className="text-orange-500 mb-4 mx-auto">
                <Users size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-800 dark:text-indigo-300">{t('valuePartnership')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('valuePartnershipDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
