export interface Room {
  id: string;
  name: string;
  nameAr: string;
  type: 'deluxe' | 'executive' | 'royal';
  tagline: string;
  taglineAr: string;
  pricePerNight: number;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  bedTypeAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  keyAmenities: string[];
  keyAmenitiesAr: string[];
  fullAmenities: string[];
  fullAmenitiesAr: string[];
  highlight: string;
  highlightAr: string;
}

export interface Amenity {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  iconName: string;
  category: string;
  categoryAr: string;
  image: string;
}

export interface WhyChooseUsItem {
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  stat: string;
  statLabel: string;
  statLabelAr: string;
  image: string;
}

export const HOTEL_INFO = {
  name: "Sunday Grand Hotel",
  nameAr: "فندق صنداي جراند",
  phone: "+966537466444",
  address: "King Khalid Rd, Al Tahliyah, Al Khobar 34716, Saudi Arabia",
  addressAr: "طريق الملك خالد، حي التحلية، الخبر 34716، المملكة العربية السعودية",
  shortAddress: "King Khalid Rd, Al Khobar, Saudi Arabia",
  shortAddressAr: "طريق الملك خالد، الخبر، المملكة العربية السعودية",
  email: "reservations@sundaygrandhotel.com",
  rating: 4.9,
  reviewsCount: 384,
  locationUrl: "https://maps.google.com/?q=King+Khalid+Rd,+Al+Tahliyah,+Al+Khobar+34716,+Saudi+Arabia",
  checkInTime: "14:00 (2:00 PM)",
  checkInTimeAr: "14:00 (2:00 مساءً)",
  checkOutTime: "12:00 (12:00 PM)",
  checkOutTimeAr: "12:00 (12:00 ظهراً)",
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-king-room",
    name: "Deluxe Room",
    nameAr: "غرفة ديلوكس",
    type: "deluxe",
    tagline: "Refined serenity with modern Arabian touch",
    taglineAr: "هدوء وراحة رفيعة بلمسة عربية معاصرة",
    pricePerNight: 450,
    sizeSqM: 38,
    maxGuests: 2,
    bedType: "King Size Plush Pillowtop Bed",
    bedTypeAr: "سرير كينج فاخر بمرتبة طبية",
    image: "/src/assets/images/deluxe_room_luxury_1791273474772.jpg",
    description: "Designed for discerning business travelers and couples, our Deluxe Room pairs rich dark velvet tones with warm golden ambient illumination, high-speed Wi-Fi, and a spa-inspired marble bathroom.",
    descriptionAr: "صممت الغرفة الديلوكس لرجال الأعمال والأزواج الباحثين عن التميز، حيث تجمع بين لمسات المخمل الداكن والإضاءة الذهبية الدافئة، مع إنترنت فائق السرعة وحمام رخامي فاخر.",
    keyAmenities: ["Plush King Bed", "Smart 55\" 4K TV", "High-Speed Wi-Fi", "Rain Shower", "Mini Bar"],
    keyAmenitiesAr: ["سرير كينج فاخر", "تلفزيون ذكي 55 بوصة 4K", "إنترنت فائق السرعة", "دش مطري رخامي", "ثلاجة ميني بار"],
    fullAmenities: [
      "Plush King Size Bed",
      "Smart 55\" 4K TV with Satellite",
      "Complimentary High-Speed Wi-Fi",
      "Spacious Marble Bathroom with Rain Shower",
      "Nespresso Coffee Maker & Premium Teas",
      "In-room Electronic Safe",
      "24/7 In-Room Dining Service",
      "Individual Climate Control AC",
      "Plush Bathrobes & Premium Toiletries",
      "Daily Housekeeping & Turn-Down Service"
    ],
    fullAmenitiesAr: [
      "سرير مريح بحجم كينج",
      "تلفزيون ذكي 55 بوصة 4K مع القنوات الفضائية",
      "واي فاي مجاني عالي السرعة",
      "حمام رخامي واسع مع دش مطري",
      "ماكينة قهوة نسبريسو وشاي فاخر",
      "خزنة إلكترونية داخل الغرفة",
      "خدمة تناول الطعام بالغرفة على مدار 24 ساعة",
      "تكييف هواء بتحكم فردي بالحرارة",
      "أرواب حمام ومستلزمات عناية شخصية فاخرة",
      "خدمة تنظيف وتنظيم الغرف اليومية"
    ],
    highlight: "Popular Choice",
    highlightAr: "الأكثر طلباً"
  },
  {
    id: "executive-suite",
    name: "Executive Room",
    nameAr: "غرفة تنفيذية",
    type: "executive",
    tagline: "Expanded living space with panoramic city views",
    taglineAr: "مساحة رحبة ومجهزة بإطلالات بانورامية على المدينة",
    pricePerNight: 750,
    sizeSqM: 58,
    maxGuests: 3,
    bedType: "Super King Bed + Daybed Lounge",
    bedTypeAr: "سرير سوبر كينج + جلسة إضافية",
    image: "/src/assets/images/executive_suite_luxury_1791273486355.jpg",
    description: "The Executive Room elevates stay comfort with an integrated lounge seating area, floor-to-ceiling windows overlooking Al Khobar, executive workspace, and VIP turn-down amenities.",
    descriptionAr: "ترتقي الغرفة التنفيذية بمستوى الإقامة بفضل منطقة الجلوس المتكاملة، ونوافذها الممتدة من الأرض إلى السقف المطلة على مدينة الخبر، ومكتب العمل المخصص، والمزايا الخاصة لكبار الشخصيات.",
    keyAmenities: ["Separate Lounge Area", "Super King Bed", "Executive Desk", "Nespresso Bar", "City Skyline View"],
    keyAmenitiesAr: ["منطقة جلسة مستقلة", "سرير سوبر كينج", "مكتب عمل تنفيذي", "ركن قهوة نسبريسو", "إطلالة على أفق المدينة"],
    fullAmenities: [
      "Super King Bed with Egyptian Cotton Linens",
      "Dedicated Executive Workstation with Ergonomic Chair",
      "Private Seating Lounge Area",
      "65\" Smart 4K UHD TV",
      "Marble Bathroom with Deep Soaking Tub & Separate Shower",
      "Complimentary Premium High-Speed Wi-Fi",
      "Nespresso Espresso Machine & Gourmet Snack Drawer",
      "Walk-in Dressing Closet",
      "Express Laundry & Pressing Service",
      "VIP Welcome Refreshment Basket"
    ],
    fullAmenitiesAr: [
      "سرير سوبر كينج مع مفارش من القطن المصري الفاخر",
      "مكتب عمل تنفيذي مخصص مع كرسي مريح",
      "منطقة جلوس واستراحة خاصة",
      "تلفزيون ذكي 65 بوصة 4K UHD",
      "حمام رخامي مزود بحوض استحمام عميق ودش مستقل",
      "واي فاي عالي السرعة مجاناً",
      "ماكينة نسبريسو وركن وجبات خفيفة فاخرة",
      "خزانة ملابس واسعة متكاملة",
      "خدمة غسيل وكي الملابس السريعة",
      "سلة ضيافة ترحيبية فاخرة للنزلاء VIP"
    ],
    highlight: "Best Business Value",
    highlightAr: "الأفضل لرجال الأعمال"
  },
  {
    id: "royal-luxury-suite",
    name: "Luxury Suite",
    nameAr: "جناح ملكي فاخر",
    type: "royal",
    tagline: "The pinnacle of opulence & custom hospitality",
    taglineAr: "قمة الفخامة والضيافة المخصصة بأرقى المعايير",
    pricePerNight: 1250,
    sizeSqM: 95,
    maxGuests: 4,
    bedType: "Master Royal King Bed + Dining Lounge",
    bedTypeAr: "سرير ملكي رئيسي + صالة طعام مستقلة",
    image: "/src/assets/images/royal_suite_luxury_1791273495564.jpg",
    description: "Immerse yourself in unrivaled elegance. Our Luxury Suite boasts a private dining parlor, master bedroom with crystal chandelier accents, deep marble soaking tub, and dedicated butler service.",
    descriptionAr: "انغمس في عالم من الأناقة الاستثنائية. يتميز الجناح الملكي الفاخر بوجود صالة طعام خاصة، وغرفة نوم رئيسية مزينة بلمسات الكريستال، وحوض استحمام رخامي كبير، وخدمة نادل خاص عند الطلب.",
    keyAmenities: ["Private Dining Parlor", "Dedicated Butler", "Marble Soaking Tub", "Walk-in Closet", "VIP Airport Transfer"],
    keyAmenitiesAr: ["صالة طعام خاصة", "خدمة نادل خاص", "حوض استحمام رخامي", "خزانة ملابس ملكية", "توصيل من وإلى المطار VIP"],
    fullAmenities: [
      "Grand Master Bedroom with Custom King Bed",
      "Independent Living Room & Dining Area",
      "Dedicated Butler Service upon Request",
      "Oversized Italian Marble Bathroom with Hydromassage Tub",
      "Dual Vanity Sink & Walk-in Shower",
      "75\" OLED Cinema TV with Surround Sound",
      "Customized Mini Bar & Coffee Selection",
      "Panoramic Al Khobar Sunset Views",
      "Priority Table Reservations at Grand Restaurant",
      "Complimentary VIP Airport Transfer Service"
    ],
    fullAmenitiesAr: [
      "غرفة نوم رئيسية فاخرة مع سرير ملكي مخصص",
      "صالة معيشة مستقلة مع طاولة طعام فاخرة",
      "خدمة نادل خادم خاص عند الطلب",
      "حمام إيطالي رخامي مع حوض جاكوزي هيدرومساج",
      "مغسلة مزدوجة ودش واسع مستقل",
      "تلفزيون سينمائي 75 بوصة OLED مع نظام صوتي محيطي",
      "ميني بار مخصص ومجموعة قهوة فاخرة",
      "إطلالة بانورامية ساحرة على غروب الشمس في الخبر",
      "أولوية حجز الطاولات في المطعم الرئيسي",
      "خدمة النقل والتوصيل الفاخرة من وإلى المطار"
    ],
    highlight: "Ultimate Luxury",
    highlightAr: "الفخامة المطلقة"
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "wifi",
    title: "Free Wi-Fi",
    titleAr: "إنترنت مجاني عالي السرعة",
    description: "Ultra-fast fiber optic connection available throughout all rooms and public spaces.",
    descriptionAr: "اتصال ألياف بصرية فائقة السرعة متاح في جميع الغرف والأجنحة والمرافق العامة.",
    iconName: "Wifi",
    category: "Connectivity",
    categoryAr: "الاتصالات",
    image: "/src/assets/images/amenity_wifi_lounge_1791275825334.jpg"
  },
  {
    id: "reception",
    title: "24/7 Reception",
    titleAr: "استقبال على مدار 24 ساعة",
    description: "Round-the-clock front desk concierge to assist with check-in, bookings, and guest requests.",
    descriptionAr: "طاقم استقبال وكونسيرج متواجد على مدار الساعة لمساعدتك في إنجاز الحجز والخدمات.",
    iconName: "Clock",
    category: "Services",
    categoryAr: "الخدمات",
    image: "/src/assets/images/amenity_reception_desk_1791275838430.jpg"
  },
  {
    id: "comfortable-rooms",
    title: "Comfortable Rooms",
    titleAr: "غرف مريحة ومجهزة",
    description: "Acoustically insulated rooms featuring ergonomic pillowtop mattresses and blackout curtains.",
    descriptionAr: "غرف معزولة صوتياً تتميز بأسرة طبية فاخرة وستائر حاجبة للضوء لضمان أقصى درجات الراحة.",
    iconName: "Bed",
    category: "Comfort",
    categoryAr: "الراحة",
    image: "/src/assets/images/amenity_comfortable_bedroom_1791275853382.jpg"
  },
  {
    id: "room-service",
    title: "Room Service",
    titleAr: "خدمة الغرف الفاخرة",
    description: "Gourmet culinary delights delivered straight to your suite anytime, day or night.",
    descriptionAr: "أشهى الوجبات والمأكولات العالمية والشرقية تصل إلى جناحك في أي وقت ليلاً أو نهاراً.",
    iconName: "Utensils",
    category: "Dining",
    categoryAr: "المطاعم والضيافة",
    image: "/src/assets/images/amenity_room_service_1791275864692.jpg"
  },
  {
    id: "parking",
    title: "Secure Parking",
    titleAr: "مواقف سيارات آمنة",
    description: "On-site shaded parking with 24/7 CCTV surveillance and valet assistance.",
    descriptionAr: "مواقف مظللة خاصة بالفندق مع مراقبة آمنة على مدار الساعة وخدمة صف السيارات.",
    iconName: "Car",
    category: "Facilities",
    categoryAr: "المرافق",
    image: "/src/assets/images/amenity_secure_parking_1791275875773.jpg"
  },
  {
    id: "air-conditioning",
    title: "Air Conditioning",
    titleAr: "تكييف هواء حديث",
    description: "State-of-the-art whisper-quiet climate control tailored to your exact comfort preference.",
    descriptionAr: "نظام تكييف مركزي همس هادئ ومتحكم ببرودته رقمياً حسب راحتك التامة.",
    iconName: "Wind",
    category: "Comfort",
    categoryAr: "الراحة",
    image: "/src/assets/images/amenity_air_conditioning_1791275886760.jpg"
  },
  {
    id: "modern-facilities",
    title: "Modern Facilities",
    titleAr: "مرافق حديثة متكاملة",
    description: "Business center, meeting spaces, daily turn-down, and luggage care.",
    descriptionAr: "مركز أعمال مجهز، قاعات اجتماعات راقية، خدمة تنظيم الغرف اليومية، وحفظ الأمتعة.",
    iconName: "Sparkles",
    category: "Facilities",
    categoryAr: "المرافق",
    image: "/src/assets/images/amenity_facilities_1791275902121.jpg"
  },
  {
    id: "guest-support",
    title: "Guest Support",
    titleAr: "دعم ودعم النزلاء",
    description: "Dedicated multilingual staff committed to delivering legendary Saudi Arabian hospitality.",
    descriptionAr: "طاقم عمل متعدد اللغات ملتزم بتقديم أرقى مستويات الضيافة السعودية والاهتمام التام بكل ضيف.",
    iconName: "Headphones",
    category: "Services",
    categoryAr: "الخدمات",
    image: "/src/assets/images/amenity_support_1791275915075.jpg"
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Premium Comfort",
    titleAr: "راحة واستجمام فاخر",
    description: "Handcrafted Italian linens, orthopaedic mattresses, and soundproofed walls ensure restful sleep.",
    descriptionAr: "مفارش إيطالية فاخرة، وأسرة طبية معزولة عن الضوضاء لضمان نوم هادئ ومريح.",
    stat: "100%",
    statLabel: "RELAXATION GUARANTEED",
    statLabelAr: "ضمان الاسترخاء التام",
    image: "/src/assets/images/why_comfort_1791276271911.jpg"
  },
  {
    title: "Excellent Hospitality",
    titleAr: "ضيافة سعودية أصيلة",
    description: "Authentic Saudi generosity blended with modern 5-star service standards.",
    descriptionAr: "أصالة الكرم السعودي ممزوجة بأرقى معايير الخدمة الفندقية العالمية ذات الخمس نجوم.",
    stat: "4.9/5",
    statLabel: "GUEST RATING",
    statLabelAr: "تقييم الضيوف",
    image: "/src/assets/images/why_hospitality_1791276285107.jpg"
  },
  {
    title: "Convenient Location",
    titleAr: "موقع حيوى ومميز",
    description: "Situated on King Khalid Road, minutes from Al Khobar Corniche and major business hubs.",
    descriptionAr: "يقع على طريق الملك خالد، على بعد دقائق معدودة من كورنيش الخبر والمراكز التجارية الرئيسية.",
    stat: "10 Min",
    statLabel: "TO CORNICHE & MALLS",
    statLabelAr: "للكورنيش والمجمعات",
    image: "/src/assets/images/why_location_1791276297809.jpg"
  },
  {
    title: "Elegant Atmosphere",
    titleAr: "أجواء فندقية راقية",
    description: "Sophisticated dark purple ambiance with gold detailing and refined architectural lines.",
    descriptionAr: "تصاميم متميزة باللون البنفسجي الملكي مع لمسات ذهبية وخطوط معمارية فاخرة.",
    stat: "5 Star",
    statLabel: "LUXURY AMBIANCE",
    statLabelAr: "فخامة 5 نجوم",
    image: "/src/assets/images/why_atmosphere_1791276321187.jpg"
  },
  {
    title: "Clean & Comfortable",
    titleAr: "نظافة وتعقيم مستمر",
    description: "Rigorous daily sanitization and pristine turn-down routine for every room.",
    descriptionAr: "بروتوكول تعقيم يومي دقيق وخدمة ترتيب وتنظيم الغرف على مدار الساعة.",
    stat: "24/7",
    statLabel: "HOUSEKEEPING",
    statLabelAr: "خدمة التنظيف والترتيب",
    image: "/src/assets/images/why_cleaning_1791276331514.jpg"
  },
  {
    title: "Professional Service",
    titleAr: "خدمة احترافية مخصصة",
    description: "Experienced concierge team ready to personalize every detail of your journey.",
    descriptionAr: "فريق كونسيرج خبير ومستعد لتلبية وتخصيص كل تفاصيل إقامتك ورحلتك.",
    stat: "100%",
    statLabel: "GUEST SATISFACTION",
    statLabelAr: "رضا النزلاء",
    image: "/src/assets/images/why_service_1791276340388.jpg"
  }
];

export const GALLERY_IMAGES = [
  {
    src: "/src/assets/images/hero_sunday_grand_hotel_1791273460849.jpg",
    title: "Grand Facade at Dusk",
    titleAr: "واجهة الفندق الملكية عند الغروب",
    subtitle: "King Khalid Rd, Al Khobar",
    subtitleAr: "طريق الملك خالد، الخبر"
  },
  {
    src: "/src/assets/images/hotel_lobby_lounge_1791273515622.jpg",
    title: "Opulent Lobby Lounge",
    titleAr: "صالة اللوبي الفاخرة",
    subtitle: "Marble floor & golden screen architecture",
    subtitleAr: "أرضيات رخامية وديكورات ذهبية راقية"
  },
  {
    src: "/src/assets/images/luxury_hotel_dining_1791273505113.jpg",
    title: "Grand Fine Dining Restaurant",
    titleAr: "مطعم الفندق الرئيسي الفاخر",
    subtitle: "Culinary excellence & mood lighting",
    subtitleAr: "تميز في الطهي وإضاءة مريحة للأعصاب"
  },
  {
    src: "/src/assets/images/royal_suite_luxury_1791273495564.jpg",
    title: "Luxury Royal Suite",
    titleAr: "الجناح الملكي الفاخر",
    subtitle: "Master suite with crystal chandeliers",
    subtitleAr: "غرفة نوم رئيسية مع نجف كريستال"
  },
  {
    src: "/src/assets/images/executive_suite_luxury_1791273486355.jpg",
    title: "Executive Suite Lounge",
    titleAr: "جلسة الغرفة التنفيذية",
    subtitle: "Panoramic Al Khobar views",
    subtitleAr: "إطلالة بانورامية على أفق الخبر"
  },
  {
    src: "/src/assets/images/deluxe_room_luxury_1791273474772.jpg",
    title: "Deluxe King Bedroom",
    titleAr: "غرفة ديلوكس كينج",
    subtitle: "Modern comfort & plush linens",
    subtitleAr: "راحة حديثة ومفارش بيضاء مريحة"
  }
];

export const NEARBY_ATTRACTIONS = [
  {
    name: "Al Khobar Corniche",
    nameAr: "كورنيش الخبر",
    distance: "8 mins drive",
    distanceAr: "8 دقائق بالسيارة",
    description: "Stunning coastal walkway along the Arabian Gulf with waterfront parks and dining.",
    descriptionAr: "ممشي ساحلي ساحر على الخليج العربي مزود بحدائق ومطاعم واجهة بحرية."
  },
  {
    name: "Al Rashid Mall",
    nameAr: "الراشد مول",
    distance: "10 mins drive",
    distanceAr: "10 دقائق بالسيارة",
    description: "Premier shopping destination featuring international fashion houses and restaurants.",
    descriptionAr: "وجهة التسوق الأولى المشتملة على أرقى دور الأزياء والمطاعم العالمية."
  },
  {
    name: "King Fahd Causeway",
    nameAr: "جسر الملك فهد",
    distance: "15 mins drive",
    distanceAr: "15 دقيقة بالسيارة",
    description: "Iconic 25km bridge connecting Saudi Arabia directly to the Kingdom of Bahrain.",
    descriptionAr: "الجسر الأيقوني بطول 25 كم والذي يربط المملكة بالبحرين مباشرة."
  },
  {
    name: "Dhahran International Exhibition Center",
    nameAr: "مركز الظهران الدولي للمعارض",
    distance: "12 mins drive",
    distanceAr: "12 دقيقة بالسيارة",
    description: "Major venue for international trade conventions and regional corporate expos.",
    descriptionAr: "المركز الرئيسي للمؤتمرات والمعارض التجارية الإقليمية والدولية."
  }
];
