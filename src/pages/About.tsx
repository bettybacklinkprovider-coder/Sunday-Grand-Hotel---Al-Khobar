import React, { useState } from 'react';
import { 
  Sparkles, MapPin, Phone, Calendar, ArrowRight, Maximize2, Compass, Wifi, Clock, Bed, Utensils, Car, Wind, Headphones
} from 'lucide-react';
import { HOTEL_INFO, HOTEL_IMAGES, AMENITIES, GALLERY_IMAGES, NEARBY_ATTRACTIONS } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  onOpenBookingModal: (roomId?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBookingModal }) => {
  const { isRtl, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-5 h-5 text-[#D4AF37]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#D4AF37]" />;
      case 'Bed': return <Bed className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'Car': return <Car className="w-5 h-5 text-[#D4AF37]" />;
      case 'Wind': return <Wind className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div className="space-y-0 text-slate-100">
      
      {/* Page Hero */}
      <section className="relative py-24 bg-[#0c0714] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.lobby}
            alt="Sunday Grand Hotel Lobby"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0714]/80 via-[#0c0714] to-[#0c0714]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
            {isRtl ? 'استكشف فندق صنداي جراند' : 'Discover Sunday Grand Hotel'}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-white">
            {t('pageAbout.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('pageAbout.subtitle')}
          </p>
        </div>
      </section>

      {/* Hotel Introduction & Vision */}
      <section className="py-20 bg-[#0f081c] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                {isRtl ? 'فلسفة الضيافة الفندقية' : 'Our Hospitality Philosophy'}
              </span>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white leading-snug">
                {isRtl ? 'واحة الفخامة والراحة في قلب الخبر' : 'An Oasis of Comfort & Elegance in Al Khobar'}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isRtl ? (
                  'تأسس فندق صنداي جراند برؤية واضحة: تقديم إقامة عالمية فاخرة وهادئة لرجال الأعمال، والعائلات، والزوار القادمين للمنطقة الشرقية بالمملكة العربية السعودية.'
                ) : (
                  'Sunday Grand Hotel was established with a clear mission: to provide world-class, serene lodging for business executives, families, and international visitors exploring the Eastern Province of Saudi Arabia.'
                )}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {isRtl ? (
                  'بموقعه المتميز على طريق الملك خالد بكرنيش الخبر، يجمع الفندق بين الهدوء المعماري الفاخر وسهولة الوصول إلى أهم المراكز التجارية والشواطئ والمطاعم.'
                ) : (
                  'Located on King Khalid Road in Al Tahliyah, our hotel combines quiet architectural sophistication with fast access to major commercial centers, pristine Arabian Gulf beaches, and international dining.'
                )}
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="font-cinzel text-xl font-bold text-[#F3E5AB] block">100%</span>
                  <span className="text-slate-400">{isRtl ? 'راحة ورفاهية النزلاء' : 'Guest Comfort & Quietude'}</span>
                </div>
                <div>
                  <span className="font-cinzel text-xl font-bold text-[#F3E5AB] block">24/7</span>
                  <span className="text-slate-400">{isRtl ? 'استقبال وخدمة الغرف' : 'Concierge & Dining Care'}</span>
                </div>
              </div>
            </div>

            {/* Fine Dining Spotlight Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
              <img
                src={HOTEL_IMAGES.dining}
                alt="Sunday Grand Hotel Fine Dining Restaurant"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0714] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#120a1f]/90 border border-[#D4AF37]/30 rounded-lg backdrop-blur-md">
                <p className="font-cinzel text-base font-bold text-[#F3E5AB]">
                  {isRtl ? 'مطعم الفندق الرئيسي الفاخر' : 'Grand Fine Dining Restaurant'}
                </p>
                <p className="text-xs text-slate-300">
                  {isRtl ? 'أشهر المأكولات العالمية والعربية بأجواء ضيافة ملكية.' : 'Gourmet international and traditional Middle Eastern culinary creations.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Hotel Amenities Section with Photos */}
      <section className="py-20 bg-[#0c0714] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {t('amenities.badge')}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              {t('amenities.title')}
            </h2>
            <p className="text-sm text-slate-300">
              {t('amenities.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-[#150a24] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={isRtl ? amenity.titleAr : amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150a24] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-[#0c0714]/90 border border-[#D4AF37]/50 backdrop-blur-md flex items-center justify-center shadow-lg">
                    {getAmenityIcon(amenity.iconName)}
                  </div>

                  <span className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'} text-[10px] font-semibold text-[#F3E5AB] bg-[#0c0714]/80 border border-[#D4AF37]/30 backdrop-blur-md px-2 py-0.5 rounded`}>
                    {isRtl ? amenity.categoryAr : amenity.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-cinzel text-base font-bold text-[#F3E5AB] mb-1">
                      {isRtl ? amenity.titleAr : amenity.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isRtl ? amenity.descriptionAr : amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location Advantages in Al Khobar */}
      <section className="py-20 bg-[#0e0719] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                {isRtl ? 'موقع استراتيجي' : 'Prime Location'}
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                {t('pageAbout.location')}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {isRtl ? (
                  'يتمتع فندق صنداي جراند بموقع مثالي على طريق الملك خالد، مما يوفر سهولة الوصول إلى مراكز الأعمال والمناطق السياحية بالخبر.'
                ) : (
                  'Sunday Grand Hotel enjoys a strategic setting on King Khalid Road, providing effortless navigation to business hubs, leisure destinations, and transport links.'
                )}
              </p>

              <div className="p-4 bg-[#180d2d] border border-[#D4AF37]/30 rounded-lg space-y-2 text-xs">
                <div className="flex items-start gap-2 text-slate-200">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 pt-1">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span className="font-bold text-[#F3E5AB]" dir="ltr">{HOTEL_INFO.phone}</span>
                </div>
              </div>

              <a
                href={HOTEL_INFO.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md shadow hover:opacity-90 transition-opacity"
              >
                <Compass className="w-4 h-4" />
                <span>{isRtl ? 'فتح الموقع في خرائط جوجل' : 'Open Location in Google Maps'}</span>
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NEARBY_ATTRACTIONS.map((spot, index) => (
                <div
                  key={index}
                  className="bg-[#140a23] border border-slate-800 p-5 rounded-xl space-y-2 hover:border-[#D4AF37]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-cinzel text-base font-bold text-white">
                      {isRtl ? spot.nameAr : spot.name}
                    </h3>
                    <span className="text-[10px] font-bold text-[#0c0714] bg-[#F3E5AB] px-2 py-0.5 rounded">
                      {isRtl ? spot.distanceAr : spot.distance}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {isRtl ? spot.descriptionAr : spot.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Hotel Photo Gallery */}
      <section className="py-20 bg-[#0c0714] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {isRtl ? 'معرض الصور الفاخر' : 'Visual Showcase'}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              {t('pageAbout.gallery')}
            </h2>
            <p className="text-sm text-slate-300">
              {isRtl ? 'جولة مصورة بين غرف، وأجنحة، ومطعم، وصالة فندق صنداي جراند.' : "Take a visual tour through Sunday Grand Hotel's suites, dining hall, and lobby lounge."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className="relative h-64 rounded-xl overflow-hidden border border-[#D4AF37]/20 group cursor-pointer shadow-lg"
              >
                <img
                  src={img.src}
                  alt={isRtl ? img.titleAr : img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0714] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                    {isRtl ? img.titleAr : img.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">{isRtl ? img.subtitleAr : img.subtitle}</p>
                </div>

                <div className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'} p-1.5 bg-black/60 rounded-full text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setActiveImageIndex(null)}
              className={`absolute -top-12 ${isRtl ? 'left-0' : 'right-0'} text-white hover:text-[#D4AF37] text-sm font-bold flex items-center gap-1 cursor-pointer`}
            >
              {isRtl ? 'إغلاق ✕' : 'Close ✕'}
            </button>
            <img
              src={GALLERY_IMAGES[activeImageIndex].src}
              alt={isRtl ? GALLERY_IMAGES[activeImageIndex].titleAr : GALLERY_IMAGES[activeImageIndex].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg border border-[#D4AF37]/50"
            />
            <div className="p-4 bg-[#120a1f] text-center border-t border-[#D4AF37]/30 mt-2 rounded-b-lg">
              <p className="font-cinzel text-lg font-bold text-[#F3E5AB]">
                {isRtl ? GALLERY_IMAGES[activeImageIndex].titleAr : GALLERY_IMAGES[activeImageIndex].title}
              </p>
              <p className="text-xs text-slate-300">
                {isRtl ? GALLERY_IMAGES[activeImageIndex].subtitleAr : GALLERY_IMAGES[activeImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer */}
      <section className="py-16 bg-[#120822] text-center border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h2 className="font-cinzel text-3xl font-bold text-white">
            {isRtl ? 'هل أنت مستعد لتجربة فندق صنداي جراند؟' : 'Ready to Experience Sunday Grand Hotel?'}
          </h2>
          <p className="text-sm text-slate-300">
            {isRtl ? 'احجز مباشرة عبر الإنترنت أو اتصل بفرقة الحجوزات لتأكيد إقامتك.' : 'Book directly online or call our reservations team to secure your preferred room.'}
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-8 py-3.5 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] rounded-md shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.bookNow')}</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
