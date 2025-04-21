import { Link } from 'react-router-dom';
import { ArrowRight, ChartBar, MessageSquare, RefreshCw, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqAccordion from '../components/FaqAccordion';
import { useLanguage } from '../contexts/LanguageContext';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const HomePage = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive suite of digital marketing services including SEO, social media marketing, content marketing, email marketing, PPC advertising, and analytics & reporting. Each service is tailored to meet your specific business needs and goals."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "The timeline for seeing results varies depending on the strategies implemented. SEO typically takes 3-6 months to show significant results, while paid advertising can generate results more quickly. We provide regular updates and reports to track progress."
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer: "We use a variety of metrics and KPIs tailored to your specific goals, such as website traffic, conversion rates, engagement rates, lead generation, and ROI. We provide comprehensive analytics and regular reports to track performance."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to established enterprises. We create customized marketing strategies that align with your business size, industry, goals, and budget."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-950 dark:from-gray-900 dark:to-black text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('heroTitle')}
              </h1>
              <p className="text-lg mb-8 text-indigo-100 dark:text-gray-300">
                {t('heroSubtitle')}
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/services" 
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
                  >
                    {t('ourServices')}
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="bg-transparent hover:bg-white/10 border border-white text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
                  >
                    {t('contactUs')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Digital Marketing Team" 
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('whyChooseUs')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('whyChooseUsSubtitle')}
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-amber-500 mb-4">
                <Zap size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{t('resultsDriven')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('resultsDrivenDesc')}
              </p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-amber-500 mb-4">
                <RefreshCw size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{t('adaptiveStrategies')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('adaptiveStrategiesDesc')}
              </p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="text-amber-500 mb-4">
                <ChartBar size={40} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{t('transparentReporting')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('transparentReportingDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('servicesTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={item}>
              <ServiceCard 
                title={t('socialMediaMarketing')}
                description={t('socialMediaMarketingDesc')}
                icon={<Users size={24} />}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title={t('seo')}
                description={t('seoDesc')}
                icon={<TrendingUp size={24} />}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title={t('contentMarketing')}
                description={t('contentMarketingDesc')}
                icon={<MessageSquare size={24} />}
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                title={t('dataAnalytics')}
                description={t('dataAnalyticsDesc')}
                icon={<ChartBar size={24} />}
              />
            </motion.div>
          </motion.div>
          
          <div className="text-center mt-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/services" 
                className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
              >
                {t('viewAllServices')} <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - diubah ke bahasa Indonesia gaul berfokus UMKM */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('testimonialTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('testimonialSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              name="Budi Santoso"
              position="Pemilik"
              company="Warung Kopi Sejati"
              testimonial="Gila sih Kawung Digimark tuh! Awalnya warung kopi gue sepi banget, tapi setelah dibantu digital marketing-nya, jadi rame banget! Follower Instagram naik 300% dalam 3 bulan, orderan online nambah terus. Keren parah!"
              rating={5}
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
            <TestimonialCard
              name="Siti Rahayu"
              position="Founder"
              company="Batik Nusantara"
              testimonial="Jualan batik online berasa naik kelas sejak dibantu Kawung! Dari yang tadinya cuma jualan di offline, sekarang udah punya toko online sendiri, engagement di sosmed meningkat, dan penghasilan bulanan naik 2x lipat. Auto recommended buat UMKM yang mau naik level!"
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
            <TestimonialCard
              name="Andi Prasetyo"
              position="CEO"
              company="Snack Homemade Berkah"
              testimonial="Bisnis camilan homemade gue jadi makin dikenal semenjak kolaborasi sama Kawung Digimark. Strateginya kece, bikin konten-konten yang bikin orang penasaran. Orderan dari luar kota juga nambah terus. Pokoknya worth it banget lah investasinya!"
              rating={5}
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{t('faqTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('faqSubtitle')}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 dark:bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('readyToGrow')}</h2>
          <p className="text-indigo-100 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('readyToGrowSubtitle')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-md transition-colors font-medium inline-block"
            >
              {t('getStartedToday')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
