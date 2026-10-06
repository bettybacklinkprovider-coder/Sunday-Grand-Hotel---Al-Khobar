import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top Bar & Brand
    'brand.name': 'SUNDAY GRAND',
    'brand.sub': 'HOTEL · AL KHOBAR',
    'topbar.rating': '5-Star Luxury Experience',
    'topbar.location': 'Al Khobar, SA',
    
    // Nav
    'nav.home': 'Home',
    'nav.rooms': 'Rooms & Suites',
    'nav.about': 'About & Amenities',
    'nav.contact': 'Contact / Booking',
    'nav.bookNow': 'Book Your Stay',
    'nav.switchLang': 'العربية',

    // Hero Section
    'hero.badge': '5-Star Hospitality in Al Khobar',
    'hero.titleLine1': 'Welcome to',
    'hero.titleLine2': 'Sunday Grand Hotel',
    'hero.subtitle': 'Experience an exquisite blend of modern Arabian elegance, unmatched personal comfort, and 5-star service in the prestigious district of Al Khobar, Saudi Arabia.',
    'hero.exploreBtn': 'Explore Our Hotel',
    'hero.stat1': '4.9 / 5',
    'hero.stat1Sub': 'Guest Rating',
    'hero.stat2': '24/7',
    'hero.stat2Sub': 'Front Desk & Dining',
    'hero.stat3': 'Prime',
    'hero.stat3Sub': 'King Khalid Rd',

    // About Home Section
    'about.badge': 'About Sunday Grand Hotel',
    'about.title': 'Refined Luxury & Comfort in the Heart of Al Khobar',
    'about.desc1': 'Located conveniently on King Khalid Road in Al Tahliyah, Sunday Grand Hotel stands as a sanctuary of relaxation and quiet luxury. Whether visiting Al Khobar for business meetings, corporate conventions, or family getaways, our hotel delivers a serene atmosphere crafted for your complete peace of mind.',
    'about.desc2': 'From our lavish lobby lounge to meticulously prepared guest rooms, every detail reflects timeless elegance, modern technical conveniences, and the deep-rooted warmth of Saudi Arabian hospitality.',
    'about.feat1Title': 'Unmatched Comfort',
    'about.feat1Desc': 'Acoustically treated rooms with orthopaedic bedding.',
    'about.feat2Title': 'Prime Location',
    'about.feat2Desc': 'Easy access to Al Khobar Corniche & Al Rashid Mall.',
    'about.learnMore': 'Learn More About Our Story & Facilities',
    'about.lobbyTitle': 'The Grand Lobby Lounge',
    'about.lobbyDesc': 'Where warm greetings and Saudi coffee welcome every guest.',

    // Accommodations Home Section
    'rooms.badge': 'Accommodations',
    'rooms.title': 'Luxurious Rooms & Suites',
    'rooms.subtitle': 'Each room is designed with meticulous attention to comfort, opulent gold touches, and ambient lighting.',
    'rooms.perNight': '/ night',
    'rooms.viewBtn': 'View Room',
    'rooms.bookBtn': 'Book Now',
    'rooms.allRoomsBtn': 'Explore All Rooms & Full Gallery',

    // Amenities Section
    'amenities.badge': 'Guest Amenities',
    'amenities.title': 'Designed For Modern Comfort',
    'amenities.subtitle': 'Enjoy tailored services and premium facilities crafted to make your stay effortless.',

    // Why Choose Us
    'why.badge': 'The Sunday Difference',
    'why.title': 'Why Choose Sunday Grand Hotel',
    'why.subtitle': 'We combine legendary Saudi Arabian warmth with meticulous international hospitality standards.',

    // Contact CTA Section
    'cta.badge': 'Reserve Your Stay Today',
    'cta.title': 'Book Your Stay at Sunday Grand Hotel',
    'cta.subtitle': 'Our reception desk is available 24 hours a day to take your booking, arrange custom transport, or answer any guest questions.',
    'cta.onlineBtn': 'Book Your Stay Online',
    'cta.callBtn': 'Call Now (+966537466444)',
    'cta.mapsBtn': 'Get Directions on Google Maps',

    // Footer
    'footer.desc': 'A premier 5-star hotel in Al Khobar delivering modern Arabian luxury, plush rooms, and unmatched Saudi hospitality on King Khalid Road.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.address': 'King Khalid Rd, Al Tahliyah, Al Khobar 34716, KSA',
    'footer.phone': '+966 53 746 6444',
    'footer.email': 'reservations@sundaygrandhotel.com',
    'footer.rights': 'All rights reserved. Sunday Grand Hotel Al Khobar.',

    // Booking Modal
    'modal.bookingTitle': 'Sunday Grand Stay Reservation',
    'modal.submittedTitle': 'Booking Request Submitted',
    'modal.selectRoom': 'Select Room Accommodations',
    'modal.checkIn': 'Check-In Date',
    'modal.checkOut': 'Check-Out Date',
    'modal.guests': 'Guests',
    'modal.fullName': 'Full Name',
    'modal.phone': 'Phone Number',
    'modal.email': 'Email Address',
    'modal.specialRequests': 'Special Requests / Notes (Optional)',
    'modal.estCost': 'Estimated Cost:',
    'modal.confirmBtn': 'Confirm & Send Booking Request',
    'modal.processing': 'Processing Reservation...',
    'modal.thankYou': 'Thank You',
    'modal.refCode': 'Reference Code:',
    'modal.copy': 'Copy Code',
    'modal.copied': 'Copied!',
    'modal.duration': 'Duration:',
    'modal.done': 'Done',
    'modal.callDesk': 'Call Front Desk',

    // Room Detail Modal
    'detail.roomDetails': 'Room Details & Features',
    'detail.overview': 'Room Overview',
    'detail.keyHighlights': 'Key Highlights',
    'detail.allAmenities': 'All Included Amenities',
    'detail.bookThisRoom': 'Book This Room',
    'detail.close': 'Close',

    // Rooms Page Filter
    'pageRooms.title': 'Rooms & Luxury Suites',
    'pageRooms.subtitle': 'Discover tailored elegance, Egyptian cotton linens, marble bathrooms, and peaceful city views in Al Khobar.',
    'pageRooms.category': 'Category:',
    'pageRooms.all': 'All Accommodations',
    'pageRooms.deluxe': 'Deluxe Rooms',
    'pageRooms.executive': 'Executive Rooms',
    'pageRooms.royal': 'Luxury Suites',
    'pageRooms.policiesTitle': 'Hotel Policies & Check-in Info',

    // About Page
    'pageAbout.title': 'About Our Hotel & Amenities',
    'pageAbout.subtitle': 'Where authentic Saudi Arabian warmth meets modern 5-star elegance, state-of-the-art facilities, and unmatched guest care.',
    'pageAbout.gallery': 'Hotel Gallery',
    'pageAbout.location': 'Located in the Heart of Al Khobar',

    // Contact Page
    'pageContact.title': 'Contact & Booking Requests',
    'pageContact.subtitle': 'Reach out to our reservations team directly for suite availability, corporate rates, or immediate booking confirmation.',
    'pageContact.sendMessage': 'Send Booking Request',
  },
  ar: {
    // Top Bar & Brand
    'brand.name': 'صنداي جراند',
    'brand.sub': 'فندق · الخبر',
    'topbar.rating': 'تجربة ضيافة فاخرة 5 نجوم',
    'topbar.location': 'الخبر، المملكة العربية السعودية',
    
    // Nav
    'nav.home': 'الرئيسية',
    'nav.rooms': 'الغرف والأجنحة',
    'nav.about': 'عن الفندق والمرافق',
    'nav.contact': 'التواصل والحجز',
    'nav.bookNow': 'احجز إقامتك',
    'nav.switchLang': 'English',

    // Hero Section
    'hero.badge': 'ضيافة 5 نجوم في الخبر',
    'hero.titleLine1': 'مرحباً بكم في',
    'hero.titleLine2': 'فندق صنداي جراند',
    'hero.subtitle': 'استمتع بمزيج فريد من الأناقة العربية الحديثة، والراحة الشخصية المطلقة، وخدمة الـ 5 نجوم في أرقى أحياء مدينة الخبر بالمملكة العربية السعودية.',
    'hero.exploreBtn': 'استكشف الفندق',
    'hero.stat1': '4.9 / 5',
    'hero.stat1Sub': 'تقييم النزلاء',
    'hero.stat2': '24/7',
    'hero.stat2Sub': 'الاستقبال والمطعم',
    'hero.stat3': 'موقع مميز',
    'hero.stat3Sub': 'طريق الملك خالد',

    // About Home Section
    'about.badge': 'عن فندق صنداي جراند',
    'about.title': 'فخامة وراحة رفيعة في قلب مدينة الخبر',
    'about.desc1': 'يقع فندق صنداي جراند بموقع استراتيجي على طريق الملك خالد في حي التحلية بالخبر، ليكون واحتك المثالية للاسترخاء والفخامة الهادئة. سواء كنت تزور الخبر لآداء الأعمال، أو المؤتمرات، أو العطلات العائلية، فإن فندقنا يوفر لك أجواءً ساحرة صممت لراحتك الكاملة.',
    'about.desc2': 'ابتداءً من صالة اللوبي الفاخرة وصولاً إلى الغرف والأجنحة المجهزة بعناية، يعكس كل تفصيل الأناقة الكلاسيكية والتسهيلات التقنية الحديثة مع أصالة الضيافة السعودية.',
    'about.feat1Title': 'راحة لا مثيل لها',
    'about.feat1Desc': 'غرف معزولة صوتياً وأسرة فاخرة مريحة جداً.',
    'about.feat2Title': 'موقع استراتيجي',
    'about.feat2Desc': 'سهولة الوصول إلى كورنيش الخبر والراشد مول.',
    'about.learnMore': 'تعرف على المزيد حول قصتنا ومرافقنا',
    'about.lobbyTitle': 'صالة اللوبي الملكية',
    'about.lobbyDesc': 'حيث نستقبل كل ضيف بالترحيب الحار والقهوة السعودية الأصيلة.',

    // Accommodations Home Section
    'rooms.badge': 'الإقامة والأجنحة',
    'rooms.title': 'غرف وأجنحة فاخرة',
    'rooms.subtitle': 'تم تصميم كل غرفة باهتمام بالغ بالراحة، ولمسات ذهبية فاخرة، وإضاءة مريحة للأعصاب.',
    'rooms.perNight': 'ر.س / ليلة',
    'rooms.viewBtn': 'عرض الغرفة',
    'rooms.bookBtn': 'احجز الآن',
    'rooms.allRoomsBtn': 'استكشف جميع الغرف والمعرض الكامل',

    // Amenities Section
    'amenities.badge': 'خدمات ومرافق النزلاء',
    'amenities.title': 'مصممة لأعلى درجات الراحة الحديثة',
    'amenities.subtitle': 'استمتع بالخدمات المخصصة والمرافق الفاخرة التي تجعل إقامتك سلسة وممتعة.',

    // Why Choose Us
    'why.badge': 'ميزة صنداي جراند',
    'why.title': 'لماذا تختار فندق صنداي جراند',
    'why.subtitle': 'نجمع بين أصول الكرم والضيافة السعودية الأصيلة وأعلى المعايير العالمية للفندقة.',

    // Contact CTA Section
    'cta.badge': 'احجز إقامتك اليوم',
    'cta.title': 'احجز إقامتك في فندق صنداي جراند',
    'cta.subtitle': 'فريق الاستقبال لدينا متواجد على مدار 24 ساعة لتلقي حجزك، وتنظيم تنقلاتك، وإجابة كافة استفساراتك.',
    'cta.onlineBtn': 'احجز إقامتك عبر الإنترنت',
    'cta.callBtn': 'اتصل الآن (966537466444+)',
    'cta.mapsBtn': 'احصل على الاتجاهات عبر خرائط جوجل',

    // Footer
    'footer.desc': 'فندق فاخر بدرجة 5 نجوم في الخبر يقدم أرقى مستويات الفخامة العربية والغرف المريحة والضيافة السعودية على طريق الملك خالد.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactUs': 'تواصل معنا',
    'footer.address': 'طريق الملك خالد، حي التحلية، الخبر 34716، المملكة العربية السعودية',
    'footer.phone': '966537466444+',
    'footer.email': 'reservations@sundaygrandhotel.com',
    'footer.rights': 'جميع الحقوق محفوظة. فندق صنداي جراند - الخبر.',

    // Booking Modal
    'modal.bookingTitle': 'حجز إقامة في فندق صنداي جراند',
    'modal.submittedTitle': 'تم إرسال طلب الحجز بنجاح',
    'modal.selectRoom': 'اختر نوع الغرفة أو الجناح',
    'modal.checkIn': 'تاريخ الوصول',
    'modal.checkOut': 'تاريخ المغادرة',
    'modal.guests': 'عدد النزلاء',
    'modal.fullName': 'الاسم الكامل',
    'modal.phone': 'رقم الهاتف',
    'modal.email': 'البريد الإلكتروني',
    'modal.specialRequests': 'طلبات خاصة / ملاحظات (اختياري)',
    'modal.estCost': 'التكلفة التقديرية:',
    'modal.confirmBtn': 'تأكيد وإرسال طلب الحجز',
    'modal.processing': 'جاري معالجة طلب الحجز...',
    'modal.thankYou': 'شكراً لك',
    'modal.refCode': 'رمز المرجعية:',
    'modal.copy': 'نسخ الرمز',
    'modal.copied': 'تم النسخ!',
    'modal.duration': 'المدة:',
    'modal.done': 'تم',
    'modal.callDesk': 'الاتصال بالاستقبال',

    // Room Detail Modal
    'detail.roomDetails': 'تفاصيل ومميزات الغرفة',
    'detail.overview': 'نظرة عامة على الغرفة',
    'detail.keyHighlights': 'أبرز المميزات',
    'detail.allAmenities': 'المرافق والخدمات المشمولة',
    'detail.bookThisRoom': 'احجز هذه الغرفة',
    'detail.close': 'إغلاق',

    // Rooms Page Filter
    'pageRooms.title': 'الغرف والأجنحة الفاخرة',
    'pageRooms.subtitle': 'اكتشف الأناقة العصرية، وأغطية القطن المصري الفاخر، والحمامات الرخامية، وإطلالات المدينة الهادئة في الخبر.',
    'pageRooms.category': 'الفئة:',
    'pageRooms.all': 'جميع الإقامات',
    'pageRooms.deluxe': 'غرف ديلوكس',
    'pageRooms.executive': 'غرف تنفيذية',
    'pageRooms.royal': 'أجنحة ملكية فاخرة',
    'pageRooms.policiesTitle': 'سياسات الفندق وتفاصيل الدخول',

    // About Page
    'pageAbout.title': 'عن الفندق والمرافق',
    'pageAbout.subtitle': 'حيث تلتقي أصالة الضيافة السعودية بفخامة الـ 5 نجوم الحديثة، وأحدث المرافق، والعناية الفائقة بالنزلاء.',
    'pageAbout.gallery': 'معرض صور الفندق',
    'pageAbout.location': 'موقع مميز في قلب مدينة الخبر',

    // Contact Page
    'pageContact.title': 'التواصل وطلبات الحجز',
    'pageContact.subtitle': 'تواصل مباشرة مع فريق الحجوزات للتحقق من توافر الأجنحة، وأسعار الشركات، والتأكيد الفوري للحجز.',
    'pageContact.sendMessage': 'إرسال طلب الحجز',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('sgh_language');
    return (saved === 'ar' || saved === 'en') ? saved : 'en';
  });

  const isRtl = language === 'ar';

  useEffect(() => {
    localStorage.setItem('sgh_language', language);
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRtl, t }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-sans' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
