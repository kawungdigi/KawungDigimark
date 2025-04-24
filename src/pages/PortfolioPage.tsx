import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from '../components/PortfolioItem';
import VideoPortfolioItem from '../components/VideoPortfolioItem';
import { useLanguage } from '../contexts/LanguageContext';

// Menambahkan interface untuk data portofolio
interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[]; // Array gambar tambahan untuk portofolio
  projectYear?: string; // Tahun project
}

// Menambahkan interface untuk data portofolio video
interface VideoPortfolioItemType {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnailImage: string;
  videoUrl: string;
  clientName?: string;
  projectYear?: string;
  link?: string;
}

// Menambahkan tipe gabungan untuk semua jenis item portofolio
type PortfolioItemTypes = PortfolioItemType | VideoPortfolioItemType;

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Path untuk video lokal
  const featuredVideoPath = '/assets/videos/animasi iklan rev_1.mp4';
  
  // Portofolio website
  const portfolioItems: PortfolioItemType[] = [
    // Website Perusahaan
    {
      id: 1,
      title: 'Corporate Website',
      category: 'Website',
      description: 'Website perusahaan modern dengan tampilan profesional, responsif, dan fitur lengkap. Termasuk halaman about, layanan, portofolio, testimoni, dan kontak.',
      image: '/assets/images/portoweb/company_web/p1.png',
      images: [
        '/assets/images/portoweb/company_web/p1.png',
        '/assets/images/portoweb/company_web/p2.png',
        '/assets/images/portoweb/company_web/p3.png',
        '/assets/images/portoweb/company_web/p4.png',
        '/assets/images/portoweb/company_web/p5.png',
        '/assets/images/portoweb/company_web/p6.png',
        '/assets/images/portoweb/company_web/p7.png'
      ],
      projectYear: '2024'
    },
    // E-Commerce
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      description: 'Platform e-commerce lengkap dengan katalog produk, sistem keranjang belanja, checkout, pembayaran online, dan manajemen pesanan. Mendukung berbagai kategori produk dan fitur pencarian lanjutan.',
      image: '/assets/images/portoweb/e-commerce/e1.png',
      images: [
        '/assets/images/portoweb/e-commerce/e1.png',
        '/assets/images/portoweb/e-commerce/e2.png',
        '/assets/images/portoweb/e-commerce/e3.png',
        '/assets/images/portoweb/e-commerce/e4.png',
        '/assets/images/portoweb/e-commerce/e5.png',
        '/assets/images/portoweb/e-commerce/e6.png'
      ],
      projectYear: '2024'
    },
    // Aplikasi CRM
    {
      id: 4,
      title: 'CRM Application',
      category: 'Aplikasi',
      description: 'Aplikasi CRM (Customer Relationship Management) komprehensif untuk mengelola pelanggan, prospek, dan penjualan. Dilengkapi dengan dashboard analitik, manajemen lead, dan fitur otomatisasi pemasaran.',
      image: '/assets/images/portoweb/CRMapp/c1.png',
      images: [
        '/assets/images/portoweb/CRMapp/c1.png',
        '/assets/images/portoweb/CRMapp/c2.png',
        '/assets/images/portoweb/CRMapp/c3.png',
        '/assets/images/portoweb/CRMapp/c4.png',
        '/assets/images/portoweb/CRMapp/c5.png',
        '/assets/images/portoweb/CRMapp/c6.png',
        '/assets/images/portoweb/CRMapp/c7.png'
      ],
      projectYear: '2024'
    }
  ];
  
  // Contoh implementasi portofolio video
  const videoPortfolioItems: VideoPortfolioItemType[] = [
    {
      id: 101,
      title: 'Video Promosi kelas khusus',
      category: 'Video',
      description: 'Video promosi untuk penjualan tiket kelas khusus milik dody zulkifli yang dibuat oleh talent kami.',
      thumbnailImage: '/assets/images/thumbnails/thumb1.png',
      videoUrl: 'https://drive.google.com/file/d/17KzIR6CYCYkCeG9QJmKmxSjl-j4VPgGJ/preview',
      clientName: 'dody zulkifli',
      projectYear: '2025'
    },
    {
      id: 102,
      title: 'Video short untuk youtube ',
      category: 'Video',
      description: 'Video informasi apa saja pekerjaan yang akan digantikan oleh AI dan membangun personal branding.',
      thumbnailImage: '/assets/images/thumbnails/thumb2.png',
      videoUrl: 'https://drive.google.com/file/d/1YAFa-4UCrJOfQi40S1EbguYQZau0X01u/preview',
      clientName: 'Sultan',
      projectYear: '2024'
    }
  ];
  
  const combinedItems: PortfolioItemTypes[] = [...portfolioItems, ...videoPortfolioItems];
  
  const filteredItems = activeCategory === 'all' 
    ? combinedItems 
    : combinedItems.filter(item => item.category === activeCategory);

  // Fungsi untuk memverifikasi apakah item adalah tipe PortfolioItemType 
  // dan memiliki array images
  const hasMultipleImages = (item: PortfolioItemTypes): item is PortfolioItemType & { images: string[] } => {
    return 'images' in item && Array.isArray(item.images) && item.images.length > 0;
  };

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
      
      {/* Featured Video Container */}
      <section className="w-full bg-gray-900">
        <div className="w-full">
          <video
            src={featuredVideoPath}
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            style={{ pointerEvents: 'none' }}
          ></video>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('ourCreations')}</h2>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {t('categoryAll')}
            </button>
            <button 
              onClick={() => setActiveCategory('Website')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'Website' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Website
            </button>
            <button 
              onClick={() => setActiveCategory('E-Commerce')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'E-Commerce' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              E-Commerce
            </button>
            <button 
              onClick={() => setActiveCategory('Aplikasi')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'Aplikasi' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Aplikasi
            </button>
              <button
              onClick={() => setActiveCategory('Video')}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === 'Video' 
                    ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
              Video
              </button>
          </div>
          
          {/* Portfolio Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-10">
              <h3 className="text-xl text-gray-600 dark:text-gray-300">
                {t('portfolioEmpty')}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {t('portfolioEmptySubtext')}
              </p>
            </div>
          ) : (
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
                    {item.category === 'Video' ? (
                      <VideoPortfolioItem
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        thumbnailImage={(item as VideoPortfolioItemType).thumbnailImage}
                        videoUrl={(item as VideoPortfolioItemType).videoUrl}
                        clientName={(item as VideoPortfolioItemType).clientName}
                        projectYear={(item as VideoPortfolioItemType).projectYear}
                      />
                    ) : (
                  <PortfolioItem
                    title={item.title}
                    category={item.category}
                    description={item.description}
                        image={(item as PortfolioItemType).image}
                        images={hasMultipleImages(item) ? item.images : undefined}
                        projectYear={(item as PortfolioItemType).projectYear}
                  />
                    )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          )}
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
