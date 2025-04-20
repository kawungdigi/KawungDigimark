export type TranslationKey = 
  // Navbar
  | 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact' | 'getQuote'
  // Home Page
  | 'heroTitle' | 'heroSubtitle' | 'ourServices' | 'contactUs'
  | 'whyChooseUs' | 'whyChooseUsSubtitle'  
  | 'resultsDriven' | 'resultsDrivenDesc' 
  | 'adaptiveStrategies' | 'adaptiveStrategiesDesc'
  | 'transparentReporting' | 'transparentReportingDesc'
  | 'servicesTitle' | 'servicesSubtitle' | 'viewAllServices'
  | 'testimonialTitle' | 'testimonialSubtitle'
  | 'faqTitle' | 'faqSubtitle'
  | 'readyToGrow' | 'readyToGrowSubtitle' | 'getStartedToday'
  // About Page
  | 'aboutTitle' | 'aboutSubtitle' | 'ourOffice' | 'ourStory' 
  | 'storyParagraph1' | 'storyParagraph2' | 'storyParagraph3'
  | 'ourValues' | 'valuesSubtitle'
  | 'valueExcellence' | 'valueExcellenceDesc'
  | 'valueInnovation' | 'valueInnovationDesc'
  | 'valuePartnership' | 'valuePartnershipDesc'
  | 'meetOurTeam' | 'teamSubtitle'
  | 'positionCEO' | 'positionMarketingDirector' | 'positionSEO' | 'positionContent'
  // Services Page
  | 'servicesPageSubtitle' | 'getFreeConsultation'
  | 'seoServiceDesc' | 'seoFeature1' | 'seoFeature2' | 'seoFeature3' | 'seoFeature4'
  | 'smServiceDesc' | 'smFeature1' | 'smFeature2' | 'smFeature3' | 'smFeature4'
  | 'contentServiceDesc' | 'contentFeature1' | 'contentFeature2' | 'contentFeature3' | 'contentFeature4'
  | 'emailServiceDesc' | 'emailFeature1' | 'emailFeature2' | 'emailFeature3' | 'emailFeature4'
  | 'ppcServiceDesc' | 'ppcFeature1' | 'ppcFeature2' | 'ppcFeature3' | 'ppcFeature4'
  | 'analyticsServiceDesc' | 'analyticsFeature1' | 'analyticsFeature2' | 'analyticsFeature3' | 'analyticsFeature4'
  // Portfolio Page
  | 'portfolioTitle' | 'portfolioSubtitle' | 'seeResults' | 'seeResultsSubtitle'
  | 'categoryAll' | 'categorySocial' | 'categorySEO' | 'categoryContent' | 'categoryPPC'
  // Blog Page
  | 'blogTitle' | 'blogSubtitle' | 'searchArticles' | 'noArticlesFound'
  | 'tryAdjusting' | 'viewAllArticles' | 'stayUpdated' | 'newsletterSubtitle'
  | 'yourEmailAddress' | 'subscribeVerb' | 'readMore'
  // Contact Page
  | 'contactTitle' | 'contactSubtitle' | 'getInTouch' | 'ourLocation' | 'phoneNumber'
  | 'emailAddress' | 'businessHours' | 'weekdayHours' | 'weekendClosed'
  | 'connectWithUs' | 'sendUsMessage' | 'yourName' | 'subject' | 'yourMessage'
  | 'selectSubject' | 'generalInquiry' | 'serviceRequest' | 'partnership' | 'other'
  | 'sendMessage' | 'sending' | 'thankYouMessage' | 'willGetBack' | 'errorSendingMessage'
  // Common services
  | 'socialMediaMarketing' | 'socialMediaMarketingDesc'
  | 'seo' | 'seoDesc'
  | 'contentMarketing' | 'contentMarketingDesc'
  | 'dataAnalytics' | 'dataAnalyticsDesc'
  | 'emailMarketing' | 'ppcAdvertising'
  // Newsletter
  | 'subscribe' | 'subscribeTitle' | 'subscribeSubtitle' | 'subscribingMsg' | 'thankYouSubscribing'
  // Footer
  | 'quickLinks' | 'ourServicesFooter' | 'contactInfo' | 'footerDescription' | 'officeAddress' | 'copyright'
  // Theme
  | 'darkMode' | 'lightMode'
  // Language
  | 'english' | 'indonesian';

type Translations = {
  [language: string]: {
    [key in TranslationKey]?: string;
  };
};

export const translations: Translations = {
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Blog',
    contact: 'Contact',
    getQuote: 'Get a Quote',
    
    // Home Page
    heroTitle: 'Boost Your Business with Digital Marketing',
    heroSubtitle: 'Strategic solutions that drive results and grow your online presence. Let\'s transform your business together.',
    ourServices: 'Our Services',
    contactUs: 'Contact Us',
    whyChooseUs: 'Why Choose Kawung Digimark?',
    whyChooseUsSubtitle: 'We\'re more than just a digital marketing agency. We\'re your partners in growth and success.',
    resultsDriven: 'Results-Driven',
    resultsDrivenDesc: 'We focus on measurable outcomes and ROI, ensuring your marketing investment delivers tangible results.',
    adaptiveStrategies: 'Adaptive Strategies',
    adaptiveStrategiesDesc: 'We continuously evolve our approach based on performance data and changing market trends.',
    transparentReporting: 'Transparent Reporting',
    transparentReportingDesc: 'We provide clear, comprehensive reports so you always know how your campaigns are performing.',
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We offer comprehensive digital marketing solutions to help your business grow and succeed in the digital landscape.',
    viewAllServices: 'View All Services',
    testimonialTitle: 'What Our Clients Say',
    testimonialSubtitle: 'Don\'t just take our word for it. Here\'s what our clients have to say about working with us.',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Have questions? We\'ve got answers. Here are some of the most common questions we receive.',
    readyToGrow: 'Ready to Grow Your Business?',
    readyToGrowSubtitle: 'Let\'s discuss how our digital marketing services can help you achieve your business goals.',
    getStartedToday: 'Get Started Today',
    
    // About Page
    aboutTitle: 'About Kawung Digimark',
    aboutSubtitle: 'We\'re a dedicated team of digital marketing experts committed to helping businesses thrive in the digital landscape.',
    ourOffice: 'Our Office',
    ourStory: 'Our Story',
    storyParagraph1: 'Kawung Digimark was founded in 2024 with a mission to help businesses navigate the complex world of digital marketing. Our name "Kawung" is inspired by a traditional Indonesian batik pattern that symbolizes harmony and balance - principles we apply to our marketing strategies.',
    storyParagraph2: 'Starting with a small team of passionate marketers, we\'ve grown into a full-service digital marketing agency serving clients across various industries.',
    storyParagraph3: 'What sets us apart is our commitment to understanding each client\'s unique needs and developing tailored strategies that deliver measurable results.',
    ourValues: 'Our Core Values',
    valuesSubtitle: 'These principles guide everything we do and define how we work with our clients.',
    valueExcellence: 'Excellence',
    valueExcellenceDesc: 'We strive for excellence in everything we do, constantly improving our skills and knowledge to deliver the best results.',
    valueInnovation: 'Innovation',
    valueInnovationDesc: 'We embrace new technologies and approaches, staying ahead of trends to provide cutting-edge solutions.',
    valuePartnership: 'Partnership',
    valuePartnershipDesc: 'We build lasting relationships with our clients, working as an extension of their team toward shared goals.',
    meetOurTeam: 'Meet Our Team',
    teamSubtitle: 'Our talented team of marketing professionals brings diverse skills and experiences to deliver exceptional results.',
    positionCEO: 'Founder & CEO',
    positionMarketingDirector: 'Marketing Director',
    positionSEO: 'SEO Specialist',
    positionContent: 'Content Manager',
    
    // Services Page
    servicesPageSubtitle: 'Comprehensive digital marketing solutions to help your business grow and succeed online.',
    getFreeConsultation: 'Get a Free Consultation',
    
    seoServiceDesc: 'Improve your website\'s visibility in search results and drive organic traffic through strategic SEO techniques.',
    seoFeature1: 'Keyword research and strategy',
    seoFeature2: 'On-page and off-page optimization',
    seoFeature3: 'Technical SEO audits and fixes',
    seoFeature4: 'Local SEO for business visibility',
    
    smServiceDesc: 'Build brand awareness, engage with your audience, and drive conversions through strategic social media campaigns.',
    smFeature1: 'Platform strategy and content planning',
    smFeature2: 'Content creation and publishing',
    smFeature3: 'Community management and engagement',
    smFeature4: 'Paid social media advertising',
    
    contentServiceDesc: 'Create valuable content that attracts, engages, and converts your target audience while establishing your brand authority.',
    contentFeature1: 'Content strategy development',
    contentFeature2: 'Blog posts and article writing',
    contentFeature3: 'Ebooks, whitepapers, and guides',
    contentFeature4: 'Visual content creation',
    
    emailServiceDesc: 'Create targeted email campaigns that nurture leads, drive conversions, and build customer loyalty.',
    emailFeature1: 'Email strategy and campaign planning',
    emailFeature2: 'Newsletter design and content creation',
    emailFeature3: 'Automated email sequences',
    emailFeature4: 'Performance analysis and optimization',
    
    ppcServiceDesc: 'Drive targeted traffic and conversions with strategic PPC campaigns across search engines and social platforms.',
    ppcFeature1: 'Campaign strategy and setup',
    ppcFeature2: 'Keyword research and ad creation',
    ppcFeature3: 'Bid management and budget optimization',
    ppcFeature4: 'Landing page optimization',
    
    analyticsServiceDesc: 'Make data-driven decisions with comprehensive analytics and reporting that track your marketing performance.',
    analyticsFeature1: 'Analytics setup and configuration',
    analyticsFeature2: 'KPI tracking and goal measurement',
    analyticsFeature3: 'Custom dashboard development',
    analyticsFeature4: 'Regular performance reports',
    
    // Common services
    socialMediaMarketing: 'Social Media Marketing',
    socialMediaMarketingDesc: 'Engage with your audience and build brand awareness through strategic social media campaigns.',
    seo: 'Search Engine Optimization',
    seoDesc: 'Improve your website\'s visibility in search results and drive organic traffic.',
    contentMarketing: 'Content Marketing',
    contentMarketingDesc: 'Create valuable content that attracts and retains your target audience.',
    dataAnalytics: 'Data Analytics',
    dataAnalyticsDesc: 'Make data-driven decisions with comprehensive analytics and reporting.',
    emailMarketing: 'Email Marketing',
    ppcAdvertising: 'PPC Advertising',
    
    // Newsletter
    subscribe: 'Subscribe',
    subscribeTitle: 'Subscribe to Our Newsletter',
    subscribeSubtitle: 'Get the latest digital marketing tips, trends, and insights delivered directly to your inbox.',
    subscribingMsg: 'Subscribing...',
    thankYouSubscribing: 'Thank you for subscribing!',
    
    // Footer
    quickLinks: 'Quick Links',
    ourServicesFooter: 'Our Services',
    contactInfo: 'Contact Info',
    footerDescription: 'Transforming businesses through innovative digital marketing strategies tailored to your unique needs.',
    officeAddress: '123 Digital Street, Marketing City, 12345',
    copyright: 'Kawung Digimark. All rights reserved.',
    
    // Theme
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    
    // Language
    english: 'English',
    indonesian: 'Indonesian',
    
    // Portfolio Page
    portfolioTitle: 'Our Portfolio',
    portfolioSubtitle: 'Explore our successful digital marketing campaigns and see how we\'ve helped businesses achieve their goals.',
    seeResults: 'Ready to See Results Like These?',
    seeResultsSubtitle: 'Let\'s discuss how our digital marketing expertise can help your business achieve similar success.',
    categoryAll: 'All',
    categorySocial: 'Social Media',
    categorySEO: 'SEO',
    categoryContent: 'Content Marketing',
    categoryPPC: 'PPC',
    
    // Blog Page
    blogTitle: 'Digital Marketing Blog',
    blogSubtitle: 'Insights, tips, and strategies to help you navigate the ever-evolving digital marketing landscape.',
    searchArticles: 'Search articles...',
    noArticlesFound: 'No matching articles found',
    tryAdjusting: 'Try adjusting your search term or browse all our articles',
    viewAllArticles: 'View all articles',
    stayUpdated: 'Stay Updated',
    newsletterSubtitle: 'Subscribe to our newsletter to receive the latest marketing insights and tips directly to your inbox.',
    yourEmailAddress: 'Your email address',
    subscribeVerb: 'Subscribe',
    readMore: 'Read More',
    
    // Contact Page
    contactTitle: 'Contact Us',
    contactSubtitle: 'Have questions? Want to discuss how we can help your business? Get in touch with our team today.',
    getInTouch: 'Get In Touch',
    ourLocation: 'Our Location',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    businessHours: 'Business Hours',
    weekdayHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    weekendClosed: 'Closed on Weekends & Public Holidays',
    connectWithUs: 'Connect With Us',
    sendUsMessage: 'Send Us a Message',
    yourName: 'Your Name',
    subject: 'Subject',
    yourMessage: 'Your Message',
    selectSubject: 'Select a subject',
    generalInquiry: 'General Inquiry',
    serviceRequest: 'Service Request',
    partnership: 'Partnership',
    other: 'Other',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    thankYouMessage: 'Thank you for your message!',
    willGetBack: 'We will get back to you soon.',
    errorSendingMessage: 'There was an error sending your message. Please try again later.'
  },
  id: {
    // Navbar
    home: 'Beranda',
    about: 'Tentang',
    services: 'Layanan',
    portfolio: 'Portofolio',
    blog: 'Blog',
    contact: 'Kontak',
    getQuote: 'Dapatkan Penawaran',
    
    // Home Page
    heroTitle: 'Tingkatkan Bisnis Anda dengan Pemasaran Digital',
    heroSubtitle: 'Solusi strategis yang mendorong hasil dan mengembangkan kehadiran online Anda. Mari kita transformasikan bisnis Anda bersama.',
    ourServices: 'Layanan Kami',
    contactUs: 'Hubungi Kami',
    whyChooseUs: 'Mengapa Memilih Kawung Digimark?',
    whyChooseUsSubtitle: 'Kami lebih dari sekadar agensi pemasaran digital. Kami adalah mitra Anda dalam pertumbuhan dan kesuksesan.',
    resultsDriven: 'Berorientasi Hasil',
    resultsDrivenDesc: 'Kami fokus pada hasil yang terukur dan ROI, memastikan investasi pemasaran Anda memberikan hasil nyata.',
    adaptiveStrategies: 'Strategi Adaptif',
    adaptiveStrategiesDesc: 'Kami terus mengembangkan pendekatan kami berdasarkan data kinerja dan tren pasar yang berubah.',
    transparentReporting: 'Pelaporan Transparan',
    transparentReportingDesc: 'Kami memberikan laporan yang jelas dan komprehensif sehingga Anda selalu tahu bagaimana kinerja kampanye Anda.',
    servicesTitle: 'Layanan Kami',
    servicesSubtitle: 'Kami menawarkan solusi pemasaran digital komprehensif untuk membantu bisnis Anda berkembang dan sukses di lanskap digital.',
    viewAllServices: 'Lihat Semua Layanan',
    testimonialTitle: 'Apa Kata Klien Kami',
    testimonialSubtitle: 'Jangan hanya percaya kata-kata kami. Inilah yang dikatakan klien kami tentang bekerja dengan kami.',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqSubtitle: 'Punya pertanyaan? Kami punya jawabannya. Berikut beberapa pertanyaan umum yang kami terima.',
    readyToGrow: 'Siap Mengembangkan Bisnis Anda?',
    readyToGrowSubtitle: 'Mari kita diskusikan bagaimana layanan pemasaran digital kami dapat membantu Anda mencapai tujuan bisnis.',
    getStartedToday: 'Mulai Hari Ini',
    
    // About Page
    aboutTitle: 'Tentang Kawung Digimark',
    aboutSubtitle: 'Kami adalah tim ahli pemasaran digital yang berdedikasi untuk membantu bisnis berkembang di dunia digital.',
    ourOffice: 'Kantor Kami',
    ourStory: 'Cerita Kami',
    storyParagraph1: 'Kawung Digimark didirikan pada tahun 2024 dengan misi membantu bisnis menghadapi kompleksitas dunia pemasaran digital. Nama "Kawung" terinspirasi dari motif batik tradisional Indonesia yang melambangkan harmoni dan keseimbangan - prinsip yang kami terapkan dalam strategi pemasaran kami.',
    storyParagraph2: 'Berawal dari tim kecil pemasar yang bersemangat, kami telah berkembang menjadi agensi pemasaran digital layanan penuh yang melayani klien di berbagai industri.',
    storyParagraph3: 'Yang membedakan kami adalah komitmen untuk memahami kebutuhan unik setiap klien dan mengembangkan strategi yang disesuaikan untuk memberikan hasil yang terukur.',
    ourValues: 'Nilai-Nilai Inti Kami',
    valuesSubtitle: 'Prinsip-prinsip ini memandu semua yang kami lakukan dan mendefinisikan bagaimana kami bekerja dengan klien kami.',
    valueExcellence: 'Keunggulan',
    valueExcellenceDesc: 'Kami berusaha untuk keunggulan dalam segala hal yang kami lakukan, terus meningkatkan keterampilan dan pengetahuan kami untuk memberikan hasil terbaik.',
    valueInnovation: 'Inovasi',
    valueInnovationDesc: 'Kami mengadopsi teknologi dan pendekatan baru, selalu mengikuti tren untuk menyediakan solusi terdepan.',
    valuePartnership: 'Kemitraan',
    valuePartnershipDesc: 'Kami membangun hubungan jangka panjang dengan klien kami, bekerja sebagai perpanjangan tim mereka untuk mencapai tujuan bersama.',
    meetOurTeam: 'Kenali Tim Kami',
    teamSubtitle: 'Tim profesional pemasaran kami yang berbakat membawa beragam keterampilan dan pengalaman untuk memberikan hasil yang luar biasa.',
    positionCEO: 'Pendiri & CEO',
    positionMarketingDirector: 'Direktur Pemasaran',
    positionSEO: 'Spesialis SEO',
    positionContent: 'Manajer Konten',
    
    // Services Page
    servicesPageSubtitle: 'Solusi pemasaran digital komprehensif untuk membantu bisnis Anda tumbuh dan sukses secara online.',
    getFreeConsultation: 'Dapatkan Konsultasi Gratis',
    
    seoServiceDesc: 'Tingkatkan visibilitas situs web Anda dalam hasil pencarian dan dorong lalu lintas organik melalui teknik SEO strategis.',
    seoFeature1: 'Riset dan strategi kata kunci',
    seoFeature2: 'Optimasi on-page dan off-page',
    seoFeature3: 'Audit teknis SEO dan perbaikan',
    seoFeature4: 'SEO lokal untuk visibilitas bisnis',
    
    smServiceDesc: 'Bangun kesadaran merek, berinteraksi dengan audiens Anda, dan dorong konversi melalui kampanye media sosial strategis.',
    smFeature1: 'Strategi platform dan perencanaan konten',
    smFeature2: 'Pembuatan dan publikasi konten',
    smFeature3: 'Manajemen komunitas dan interaksi',
    smFeature4: 'Periklanan media sosial berbayar',
    
    contentServiceDesc: 'Buat konten berharga yang menarik, melibatkan, dan mengonversi audiens target Anda sambil membangun otoritas merek Anda.',
    contentFeature1: 'Pengembangan strategi konten',
    contentFeature2: 'Penulisan artikel dan postingan blog',
    contentFeature3: 'Ebook, whitepaper, dan panduan',
    contentFeature4: 'Pembuatan konten visual',
    
    emailServiceDesc: 'Buat kampanye email yang ditargetkan untuk membina prospek, mendorong konversi, dan membangun loyalitas pelanggan.',
    emailFeature1: 'Strategi email dan perencanaan kampanye',
    emailFeature2: 'Desain newsletter dan pembuatan konten',
    emailFeature3: 'Rangkaian email otomatis',
    emailFeature4: 'Analisis kinerja dan optimasi',
    
    ppcServiceDesc: 'Dorong lalu lintas dan konversi yang ditargetkan dengan kampanye PPC strategis di mesin pencari dan platform sosial.',
    ppcFeature1: 'Strategi dan setup kampanye',
    ppcFeature2: 'Riset kata kunci dan pembuatan iklan',
    ppcFeature3: 'Manajemen penawaran dan optimasi anggaran',
    ppcFeature4: 'Optimasi landing page',
    
    analyticsServiceDesc: 'Buat keputusan berbasis data dengan analitik dan pelaporan komprehensif yang melacak kinerja pemasaran Anda.',
    analyticsFeature1: 'Setup dan konfigurasi analitik',
    analyticsFeature2: 'Pelacakan KPI dan pengukuran tujuan',
    analyticsFeature3: 'Pengembangan dasbor kustom',
    analyticsFeature4: 'Laporan kinerja berkala',
    
    // Common services
    socialMediaMarketing: 'Pemasaran Media Sosial',
    socialMediaMarketingDesc: 'Terlibat dengan audiens Anda dan bangun kesadaran merek melalui kampanye media sosial strategis.',
    seo: 'Optimasi Mesin Pencari',
    seoDesc: 'Tingkatkan visibilitas situs web Anda dalam hasil pencarian dan dorong lalu lintas organik.',
    contentMarketing: 'Pemasaran Konten',
    contentMarketingDesc: 'Buat konten berharga yang menarik dan mempertahankan audiens target Anda.',
    dataAnalytics: 'Analisis Data',
    dataAnalyticsDesc: 'Buat keputusan berdasarkan data dengan analitik dan pelaporan komprehensif.',
    emailMarketing: 'Email Marketing',
    ppcAdvertising: 'Iklan PPC',
    
    // Newsletter
    subscribe: 'Berlangganan',
    subscribeTitle: 'Berlangganan Newsletter Kami',
    subscribeSubtitle: 'Dapatkan tips, tren, dan wawasan pemasaran digital terbaru langsung ke kotak masuk Anda.',
    subscribingMsg: 'Berlangganan...',
    thankYouSubscribing: 'Terima kasih telah berlangganan!',
    
    // Footer
    quickLinks: 'Tautan Cepat',
    ourServicesFooter: 'Layanan Kami',
    contactInfo: 'Informasi Kontak',
    footerDescription: 'Mentransformasi bisnis melalui strategi pemasaran digital inovatif yang disesuaikan dengan kebutuhan unik Anda.',
    officeAddress: 'Jalan Digital 123, Kota Marketing, 12345',
    copyright: 'Kawung Digimark. Hak Cipta Dilindungi.',
    
    // Theme
    darkMode: 'Mode Gelap',
    lightMode: 'Mode Terang',
    
    // Language
    english: 'Bahasa Inggris',
    indonesian: 'Bahasa Indonesia',
    
    // Portfolio Page
    portfolioTitle: 'Portofolio Kami',
    portfolioSubtitle: 'Jelajahi kampanye pemasaran digital kami yang sukses dan lihat bagaimana kami telah membantu bisnis mencapai tujuan mereka.',
    seeResults: 'Siap Melihat Hasil Seperti Ini?',
    seeResultsSubtitle: 'Mari kita diskusikan bagaimana keahlian pemasaran digital kami dapat membantu bisnis Anda mencapai kesuksesan serupa.',
    categoryAll: 'Semua',
    categorySocial: 'Media Sosial',
    categorySEO: 'SEO',
    categoryContent: 'Pemasaran Konten',
    categoryPPC: 'PPC',
    
    // Blog Page
    blogTitle: 'Blog Pemasaran Digital',
    blogSubtitle: 'Wawasan, tips, dan strategi untuk membantu Anda menavigasi lanskap pemasaran digital yang terus berkembang.',
    searchArticles: 'Cari artikel...',
    noArticlesFound: 'Tidak ditemukan artikel yang cocok',
    tryAdjusting: 'Coba sesuaikan kata pencarian Anda atau telusuri semua artikel kami',
    viewAllArticles: 'Lihat semua artikel',
    stayUpdated: 'Tetap Terinformasi',
    newsletterSubtitle: 'Berlangganan newsletter kami untuk menerima wawasan dan tips pemasaran terbaru langsung ke kotak masuk Anda.',
    yourEmailAddress: 'Alamat email Anda',
    subscribeVerb: 'Berlangganan',
    readMore: 'Baca Selengkapnya',
    
    // Contact Page
    contactTitle: 'Hubungi Kami',
    contactSubtitle: 'Punya pertanyaan? Ingin mendiskusikan bagaimana kami dapat membantu bisnis Anda? Hubungi tim kami hari ini.',
    getInTouch: 'Hubungi Kami',
    ourLocation: 'Lokasi Kami',
    phoneNumber: 'Nomor Telepon',
    emailAddress: 'Alamat Email',
    businessHours: 'Jam Kerja',
    weekdayHours: 'Senin - Jumat: 9:00 - 18:00',
    weekendClosed: 'Tutup pada Akhir Pekan & Hari Libur',
    connectWithUs: 'Terhubung Dengan Kami',
    sendUsMessage: 'Kirim Pesan Kepada Kami',
    yourName: 'Nama Anda',
    subject: 'Subjek',
    yourMessage: 'Pesan Anda',
    selectSubject: 'Pilih subjek',
    generalInquiry: 'Pertanyaan Umum',
    serviceRequest: 'Permintaan Layanan',
    partnership: 'Kemitraan',
    other: 'Lainnya',
    sendMessage: 'Kirim Pesan',
    sending: 'Mengirim...',
    thankYouMessage: 'Terima kasih atas pesan Anda!',
    willGetBack: 'Kami akan segera menghubungi Anda kembali.',
    errorSendingMessage: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi nanti.'
  }
};
