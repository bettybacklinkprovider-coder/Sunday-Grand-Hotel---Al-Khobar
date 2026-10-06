import React, { useState } from 'react';
import { 
  Users, Maximize2, BedDouble, Check, Calendar, Phone, Filter, ShieldCheck, Clock
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, HOTEL_IMAGES, Room } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface RoomsProps {
  onOpenBookingModal: (roomId?: string) => void;
  onOpenRoomDetail: (room: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onOpenBookingModal, onOpenRoomDetail }) => {
  const { isRtl, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'deluxe' | 'executive' | 'royal'>('all');

  const filteredRooms = activeFilter === 'all' 
    ? ROOMS 
    : ROOMS.filter(r => r.type === activeFilter);

  return (
    <div className="space-y-0 text-slate-100">
      
      {/* Luxury Hero */}
      <section className="relative py-24 bg-[#0c0714] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.executive}
            alt="Sunday Grand Hotel Suites"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0714]/80 via-[#0c0714] to-[#0c0714]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
            {isRtl ? 'إقامات صنداي جراند' : 'Sunday Grand Accommodations'}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-white">
            {t('pageRooms.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('pageRooms.subtitle')}
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-[#0f081c] border-b border-[#D4AF37]/15 sticky top-[65px] z-30 backdrop-blur-md bg-[#0f081c]/90">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between flex-wrap gap-4">
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {t('pageRooms.category')}
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: t('pageRooms.all') },
              { id: 'deluxe', label: t('pageRooms.deluxe') },
              { id: 'executive', label: t('pageRooms.executive') },
              { id: 'royal', label: t('pageRooms.royal') },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] text-[#0c0714] font-bold shadow-md'
                    : 'bg-[#180e2a] text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 hidden lg:inline">
            {isRtl ? `عرض ${filteredRooms.length} من أصل ${ROOMS.length} فئات` : `Showing ${filteredRooms.length} of ${ROOMS.length} categories`}
          </span>

        </div>
      </section>

      {/* Main Room Showcase List */}
      <section className="py-16 bg-[#0c0714] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
          
          {filteredRooms.map((room, idx) => (
            <div
              key={room.id}
              className="bg-[#130a21] border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              
              {/* Image side */}
              <div className={`lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden ${
                idx % 2 === 1 ? 'lg:order-2' : ''
              }`}>
                <img
                  src={room.image}
                  alt={isRtl ? room.nameAr : room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130a21] via-transparent to-transparent lg:hidden" />
                
                <span className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} text-xs font-bold text-[#0c0714] bg-[#F3E5AB] px-3 py-1 rounded shadow-md`}>
                  {isRtl ? room.highlightAr : room.highlight}
                </span>

                <div className={`absolute bottom-4 left-4 right-4 bg-[#120a1f]/90 border border-[#D4AF37]/30 p-3 rounded-lg backdrop-blur-md lg:hidden`}>
                  <span className="font-cinzel text-xl font-bold text-[#F3E5AB]">
                    {room.pricePerNight} {isRtl ? 'ر.س' : 'SAR'}
                  </span>
                  <span className="text-xs text-slate-300"> {t('rooms.perNight')}</span>
                </div>
              </div>

              {/* Specs side */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">
                        {room.type.toUpperCase()}
                      </span>
                      <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">
                        {isRtl ? room.nameAr : room.name}
                      </h2>
                    </div>

                    <div className="hidden lg:block text-right">
                      <span className="font-cinzel text-2xl font-bold text-[#F3E5AB]">
                        {room.pricePerNight} {isRtl ? 'ر.س' : 'SAR'}
                      </span>
                      <span className="text-xs text-slate-400 block">{t('rooms.perNight')}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#D4AF37] font-medium">{isRtl ? room.taglineAr : room.tagline}</p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isRtl ? room.descriptionAr : room.description}
                  </p>

                  {/* Room Key Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-center text-xs">
                    <div className="p-2 bg-[#1b0e32] rounded">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-slate-400 block text-[10px]">{isRtl ? 'المساحة' : 'Area'}</span>
                      <span className="font-semibold text-white">{room.sizeSqM} m²</span>
                    </div>
                    <div className="p-2 bg-[#1b0e32] rounded">
                      <Users className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-slate-400 block text-[10px]">{isRtl ? 'النزلاء' : 'Guests'}</span>
                      <span className="font-semibold text-white">{isRtl ? `حتى ${room.maxGuests}` : `Up to ${room.maxGuests}`}</span>
                    </div>
                    <div className="p-2 bg-[#1b0e32] rounded">
                      <BedDouble className="w-3.5 h-3.5 text-[#D4AF37] mx-auto mb-1" />
                      <span className="text-slate-400 block text-[10px]">{isRtl ? 'السرير' : 'Bedding'}</span>
                      <span className="font-semibold text-white truncate block">{isRtl ? room.bedTypeAr : room.bedType}</span>
                    </div>
                  </div>

                  {/* Amenities grid */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 block">{isRtl ? 'المميزات والمرافق الرئيسية:' : 'Features & Amenities:'}</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {(isRtl ? room.fullAmenitiesAr : room.fullAmenities).slice(0, 6).map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onOpenRoomDetail(room)}
                    className="w-full sm:w-auto flex-1 py-3 px-4 text-xs font-semibold text-slate-200 border border-[#D4AF37]/40 hover:border-[#D4AF37] bg-[#1a0e2f] rounded-md transition-colors text-center cursor-pointer"
                  >
                    {isRtl ? 'عرض صور ومواصفات الغرفة' : 'View Room Gallery & Features'}
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(room.id)}
                    className="w-full sm:w-auto flex-1 py-3 px-4 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isRtl ? `احجز ${room.nameAr}` : `Book ${room.name}`}</span>
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Hotel Policies & Check-in info */}
      <section className="py-16 bg-[#0f081c] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#160c27] border border-[#D4AF37]/25 rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                <Clock className="w-4 h-4" />
                <span>{isRtl ? 'مواعيد الدخول والمغادرة' : 'Check-In & Check-Out'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl ? (
                  <>تسجيل الدخول: 14:00 (2:00 مساءً)<br />تسجيل المغادرة: 12:00 (12:00 ظهراً)<br />الدخول المبكر حسب الإمكانية.</>
                ) : (
                  <>Check-In: 14:00 (2:00 PM)<br />Check-Out: 12:00 (12:00 PM)<br />Early check-in subject to availability.</>
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{isRtl ? 'الدفعة والإلغاء' : 'Deposit & Cancellation'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl ? (
                  <>إلغاء مجاني حتى 24 ساعة قبل موعد الوصول. تقبل جميع البطاقات الائتمانية والدفع النظير.</>
                ) : (
                  <>Free cancellation up to 24 hours prior to check-in. Major credit cards & cash accepted.</>
                )}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#D4AF37] font-semibold">
                <Phone className="w-4 h-4" />
                <span>{isRtl ? 'الاستقبال والتنقلات' : 'Concierge & Transport'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isRtl ? (
                  <>خدمات التوصيل من المطار وسيارات بسائق خاص متوفرة عند الطلب لدى مكتب الاستقبال.</>
                ) : (
                  <>Airport transfers and private chauffeur services available upon request.</>
                )}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Call / Booking Banner */}
      <section className="py-12 bg-[#0c0714] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-cinzel text-2xl font-bold text-white">
            {isRtl ? 'هل تحتاجب إلى مساعدة خاصة في الحجز؟' : 'Need Personal Assistance with Your Reservation?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            {isRtl ? 'فريق الحجوزات متواجد 24/7. اتصل بنا مباشرة للاستفسار عن حجوزات المجموعات والأسر.' : 'Our reservation desk is online 24/7. Call us directly to inquire about corporate group bookings or custom suites.'}
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="px-6 py-3 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md shadow flex items-center gap-2"
              dir="ltr"
            >
              <Phone className="w-4 h-4" />
              <span>{isRtl ? `اتصل بالاستقبال (${HOTEL_INFO.phone})` : `Call Reception (${HOTEL_INFO.phone})`}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
