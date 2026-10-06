import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Phone, MapPin, ArrowRight, ShieldCheck, Star, Sparkles,
  Wifi, Clock, Bed, Utensils, Car, Wind, Headphones, CheckCircle2, ChevronRight
} from 'lucide-react';
import { HOTEL_INFO, ROOMS, AMENITIES, WHY_CHOOSE_US, Room } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface HomeProps {
  onOpenBookingModal: (roomId?: string) => void;
  onOpenRoomDetail: (room: Room) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBookingModal, onOpenRoomDetail }) => {
  const { isRtl, t } = useLanguage();

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
      
      {/* SECTION 1 — LUXURY HERO */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Large luxury hotel background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_sunday_grand_hotel_1791273460849.jpg"
            alt="Sunday Grand Hotel Al Khobar"
            className="w-full h-full object-cover scale-105 animate-subtleZoom"
          />
          {/* Dark Purple Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0714] via-[#0c0714]/85 to-[#0c0714]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0714] via-transparent to-[#0c0714]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-left w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Top gold tag */}
            <div className="inline-flex items-center gap-2 bg-[#1b0f30]/90 border border-[#D4AF37]/40 backdrop-blur-md rounded-full px-4 py-1.5 text-xs text-[#F3E5AB]">
              <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
              <span className="font-semibold tracking-wider text-[11px]">
                {t('hero.badge')}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {t('hero.titleLine1')} <br />
              <span className="gold-gradient-text">{t('hero.titleLine2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-8 py-4 text-sm font-bold tracking-wider text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#0c0714]" />
                <span>{t('nav.bookNow')}</span>
                <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </button>

              <Link
                to="/rooms"
                className="px-8 py-4 text-sm font-semibold tracking-wider text-slate-200 hover:text-white bg-[#1a0f2e]/80 border border-[#D4AF37]/30 hover:border-[#D4AF37] backdrop-blur-md rounded-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{t('hero.exploreBtn')}</span>
                <ChevronRight className={`w-4 h-4 text-[#D4AF37] ${isRtl ? 'rotate-180' : ''}`} />
              </Link>
            </div>

            {/* Quick stats micro strip */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/20 max-w-lg text-xs">
              <div>
                <span className="font-cinzel text-xl font-bold text-[#F3E5AB] block">{t('hero.stat1')}</span>
                <span className="text-slate-400">{t('hero.stat1Sub')}</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold text-[#F3E5AB] block">{t('hero.stat2')}</span>
                <span className="text-slate-400">{t('hero.stat2Sub')}</span>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold text-[#F3E5AB] block">{t('hero.stat3')}</span>
                <span className="text-slate-400">{t('hero.stat3Sub')}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — ABOUT SUNDAY GRAND HOTEL */}
      <section className="py-20 bg-[#0e0817] relative border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Column 1: Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>{t('about.badge')}</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white leading-tight">
                {t('about.title')}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t('about.desc1')}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                {t('about.desc2')}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#180e2a] border border-[#D4AF37]/20 p-4 rounded-lg flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-white uppercase tracking-wider">{t('about.feat1Title')}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{t('about.feat1Desc')}</p>
                  </div>
                </div>

                <div className="bg-[#180e2a] border border-[#D4AF37]/20 p-4 rounded-lg flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xs text-white uppercase tracking-wider">{t('about.feat2Title')}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{t('about.feat2Desc')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-[#F3E5AB] uppercase tracking-wider group"
                >
                  <span>{t('about.learnMore')}</span>
                  <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </Link>
              </div>
            </div>

            {/* Column 2: Image Lockup */}
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
                <img
                  src="/src/assets/images/hotel_lobby_lounge_1791273515622.jpg"
                  alt="Sunday Grand Hotel Lobby Lounge"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0714]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#120a1f]/90 border border-[#D4AF37]/30 rounded-lg backdrop-blur-md">
                  <p className="font-cinzel text-base font-bold text-[#F3E5AB]">{t('about.lobbyTitle')}</p>
                  <p className="text-xs text-slate-300">{t('about.lobbyDesc')}</p>
                </div>
              </div>

              {/* Decorative gold backdrop frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4AF37]/20 rounded-xl -z-0 hidden sm:block" />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — ROOMS & ACCOMMODATION */}
      <section className="py-20 bg-[#0c0714] relative border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {t('rooms.badge')}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              {t('rooms.title')}
            </h2>
            <p className="text-sm text-slate-300">
              {t('rooms.subtitle')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="bg-[#140b22] border border-[#D4AF37]/25 rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 shadow-xl flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={isRtl ? room.nameAr : room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140b22] via-transparent to-transparent" />
                  
                  <span className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'} text-[10px] font-bold uppercase tracking-wider text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] px-2.5 py-1 rounded shadow`}>
                    {isRtl ? room.highlightAr : room.highlight}
                  </span>

                  <div className={`absolute bottom-3 ${isRtl ? 'right-4' : 'left-4'}`}>
                    <span className="font-cinzel text-xl font-bold text-[#F3E5AB]">
                      {room.pricePerNight} {isRtl ? 'ر.س' : 'SAR'}
                    </span>
                    <span className="text-xs text-slate-300"> {t('rooms.perNight')}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {isRtl ? room.nameAr : room.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {isRtl ? room.descriptionAr : room.description}
                    </p>

                    {/* Key amenities list */}
                    <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                      {(isRtl ? room.keyAmenitiesAr : room.keyAmenities).slice(0, 4).map((amenity, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center gap-2">
                    <button
                      onClick={() => onOpenRoomDetail(room)}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold text-slate-200 hover:text-white bg-[#1f1136] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-md transition-colors text-center cursor-pointer"
                    >
                      {t('rooms.viewBtn')}
                    </button>
                    <button
                      onClick={() => onOpenBookingModal(room.id)}
                      className="flex-1 py-2.5 px-3 text-xs font-semibold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md transition-colors text-center font-bold cursor-pointer"
                    >
                      {t('rooms.bookBtn')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-[#F3E5AB] uppercase tracking-wider border border-[#D4AF37]/30 rounded-md px-6 py-3 hover:bg-[#D4AF37]/10 transition-colors"
            >
              <span>{t('rooms.allRoomsBtn')}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>

        </div>
      </section>

      {/* SECTION 4 — HOTEL AMENITIES WITH REAL HIGH-RES IMAGES */}
      <section className="py-20 bg-[#0f081c] relative border-b border-[#D4AF37]/15">
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

          {/* Amenity Cards with High-Res Hotel Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES.map((amenity) => (
              <div
                key={amenity.id}
                className="bg-[#160b26] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group shadow-xl flex flex-col"
              >
                {/* Photo Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={isRtl ? amenity.titleAr : amenity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160b26] via-[#160b26]/30 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-[#0c0714]/90 border border-[#D4AF37]/50 backdrop-blur-md flex items-center justify-center shadow-lg">
                    {getAmenityIcon(amenity.iconName)}
                  </div>

                  <span className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'} text-[10px] font-semibold text-[#F3E5AB] bg-[#0c0714]/80 border border-[#D4AF37]/30 backdrop-blur-md px-2 py-0.5 rounded`}>
                    {isRtl ? amenity.categoryAr : amenity.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#F3E5AB] transition-colors mb-1">
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

      {/* SECTION 5 — WHY CHOOSE SUNDAY GRAND HOTEL (FEATURE CARDS WITH HIGH-RES IMAGES) */}
      <section className="py-20 bg-[#0c0714] relative border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
              {t('why.badge')}
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
              {t('why.title')}
            </h2>
            <p className="text-sm text-slate-300">
              {t('why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-[#150a24] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                {/* Image Header with Scrim */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={isRtl ? item.titleAr : item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150a24] via-[#150a24]/40 to-transparent" />
                  
                  {/* Floating Stat Badge */}
                  <div className={`absolute top-3 ${isRtl ? 'left-3' : 'right-3'} px-3 py-1 bg-[#0c0714]/90 border border-[#D4AF37]/60 backdrop-blur-md rounded-md shadow-lg`}>
                    <span className="font-cinzel text-base font-bold text-[#F3E5AB]" dir="ltr">
                      {item.stat}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors">
                      {isRtl ? item.titleAr : item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isRtl ? item.descriptionAr : item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-widest block">
                      {isRtl ? item.statLabelAr : item.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6 — CONTACT / BOOKING CTA */}
      <section className="py-20 bg-gradient-to-br from-[#180d2d] via-[#120822] to-[#0a0414] relative border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#180e2b]/90 border-2 border-[#D4AF37]/40 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            {/* Background subtle glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                  {t('cta.badge')}
                </span>
                
                <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white">
                  {t('cta.title')}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {t('cta.subtitle')}
                </p>

                <div className="space-y-2 pt-2 text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <span className="font-bold text-[#F3E5AB] text-lg" dir="ltr">{HOTEL_INFO.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                    <span className="text-xs text-slate-300">{isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full py-4 px-6 text-sm font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-lg shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('cta.onlineBtn')}</span>
                </button>

                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="w-full py-3.5 px-6 text-xs font-bold text-[#D4AF37] bg-[#120722] border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 rounded-lg transition-colors flex items-center justify-center gap-2"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('cta.callBtn')}</span>
                </a>

                <a
                  href={HOTEL_INFO.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t('cta.mapsBtn')}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
