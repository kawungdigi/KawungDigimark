import { ChartBar, Mail, MessageSquare, Search, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-800 to-indigo-900 dark:from-gray-900 dark:to-gray-950 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('servicesTitle')}</h1>
          <p className="text-lg text-indigo-100 dark:text-gray-300 max-w-2xl mx-auto">
            {t('servicesPageSubtitle')}
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Service 1 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <TrendingUp size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('seo')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('seoServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('seoFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('seoFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('seoFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('seoFeature4')}
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Users size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('socialMediaMarketing')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('smServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('smFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('smFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('smFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('smFeature4')}
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <MessageSquare size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('contentMarketing')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('contentServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('contentFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('contentFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('contentFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('contentFeature4')}
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 4 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Mail size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('emailMarketing')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('emailServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('emailFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('emailFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('emailFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('emailFeature4')}
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 5 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <Search size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('ppcAdvertising')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('ppcServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('ppcFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('ppcFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('ppcFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('ppcFeature4')}
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Service 6 */}
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                  <ChartBar size={32} />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{t('dataAnalytics')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t('analyticsServiceDesc')}
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('analyticsFeature1')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('analyticsFeature2')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('analyticsFeature3')}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {t('analyticsFeature4')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('readyToGrow')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('readyToGrowSubtitle')}
          </p>
          <Link 
            to="/contact" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
          >
            {t('getFreeConsultation')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
