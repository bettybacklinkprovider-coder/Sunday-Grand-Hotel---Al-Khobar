import React from 'react';
import { X, Check, Users, Maximize2, BedDouble, Calendar } from 'lucide-react';
import { Room } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onBookRoom: (roomId: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onBookRoom
}) => {
  const { isRtl, t } = useLanguage();

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120a1e] border border-[#D4AF37]/40 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-slate-100 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} z-20 p-2 text-slate-300 hover:text-white bg-black/60 rounded-full hover:bg-black/80 backdrop-blur-sm transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Header Banner */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={room.image}
            alt={isRtl ? room.nameAr : room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120a1e] via-[#120a1e]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block text-xs font-semibold text-[#0c0714] bg-[#F3E5AB] px-3 py-1 rounded-full mb-2">
              {isRtl ? room.highlightAr : room.highlight}
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
              {isRtl ? room.nameAr : room.name}
            </h2>
            <p className="text-sm text-[#D4AF37] mt-0.5">{isRtl ? room.taglineAr : room.tagline}</p>
          </div>
        </div>

        {/* Room Info Grid */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-3 bg-[#1b0f30] border border-[#D4AF37]/20 rounded-lg p-4 text-center">
            <div>
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-1">
                <Maximize2 className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">{isRtl ? 'المساحة' : 'Room Size'}</span>
              </div>
              <p className="font-cinzel text-base font-bold text-white">{room.sizeSqM} m²</p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">{isRtl ? 'النزلاء' : 'Capacity'}</span>
              </div>
              <p className="font-cinzel text-base font-bold text-white">
                {isRtl ? `حتى ${room.maxGuests} ضيوف` : `Up to ${room.maxGuests} Guests`}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-1">
                <BedDouble className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">{isRtl ? 'نوع السرير' : 'Bed Type'}</span>
              </div>
              <p className="text-xs font-semibold text-white truncate max-w-[150px] mx-auto">
                {isRtl ? room.bedTypeAr : room.bedType}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-base font-bold text-[#F3E5AB]">
              {t('detail.overview')}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isRtl ? room.descriptionAr : room.description}
            </p>
          </div>

          {/* Complete Amenities Checklist */}
          <div className="space-y-3">
            <h3 className="font-cinzel text-base font-bold text-[#F3E5AB]">
              {t('detail.allAmenities')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
              {(isRtl ? room.fullAmenitiesAr : room.fullAmenities).map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-[#170e28] p-2.5 rounded border border-slate-800">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & CTA Action Footer */}
          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">{isRtl ? 'سعر الليلة:' : 'Nightly Rate:'}</span>
              <div className="flex items-baseline gap-1">
                <span className="font-cinzel text-2xl font-bold text-[#F3E5AB]">
                  {room.pricePerNight} {isRtl ? 'ر.س' : 'SAR'}
                </span>
                <span className="text-xs text-slate-400">{t('rooms.perNight')}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom(room.id);
              }}
              className="w-full sm:w-auto px-8 py-3 text-sm font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('detail.bookThisRoom')}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
