import React, { useState } from 'react';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId
}) => {
  const { isRtl, t } = useLanguage();
  const [selectedRoomId, setSelectedRoomId] = useState<string>(initialRoomId || ROOMS[0].id);
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [specialRequest, setSpecialRequest] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<null | {
    refCode: string;
    roomName: string;
    totalNights: number;
    estimatedCost: number;
  }>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find(r => r.id === selectedRoomId) || ROOMS[0];

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.max(0, end.getTime() - start.getTime());
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 1;
  };

  const nightsCount = calculateNights();
  const totalPrice = currentRoom.pricePerNight * nightsCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = `SGH-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingSuccess({
        refCode,
        roomName: isRtl ? currentRoom.nameAr : currentRoom.name,
        totalNights: nightsCount,
        estimatedCost: totalPrice
      });
      setIsSubmitting(false);
    }, 800);
  };

  const handleCopyRefCode = () => {
    if (bookingSuccess) {
      navigator.clipboard.writeText(bookingSuccess.refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleResetAndClose = () => {
    setBookingSuccess(null);
    setGuestName('');
    setEmail('');
    setPhone('');
    setCheckIn('');
    setCheckOut('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#120a1e] border border-[#D4AF37]/40 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden text-slate-100 relative">
        
        {/* Header bar */}
        <div className="bg-gradient-to-r from-[#1b0d30] via-[#24133f] to-[#1b0d30] border-b border-[#D4AF37]/20 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg font-bold text-[#F3E5AB]">
                {bookingSuccess ? t('modal.submittedTitle') : t('modal.bookingTitle')}
              </h2>
              <p className="text-xs text-slate-400">
                {isRtl ? 'فندق صنداي جراند · الخبر' : 'Sunday Grand Hotel · Al Khobar'}
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Success State */}
        {bookingSuccess ? (
          <div className="p-6 md:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37] animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="font-cinzel text-2xl font-bold text-white">
                {t('modal.thankYou')}, {guestName}!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                {isRtl ? (
                  <>تم استلام طلب حجزك لـ <span className="text-[#D4AF37] font-semibold">{bookingSuccess.roomName}</span> بنجاح. سيتواصل معك قسم الاستقبال لإنهاء الحجز.</>
                ) : (
                  <>Your reservation request for <span className="text-[#D4AF37] font-semibold">{bookingSuccess.roomName}</span> has been received. Our reception desk will contact you shortly to confirm your booking.</>
                )}
              </p>
            </div>

            {/* Reference Badge */}
            <div className="bg-[#1c0f33] border border-[#D4AF37]/30 rounded-lg p-4 max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{t('modal.refCode')}</span>
                <button
                  onClick={handleCopyRefCode}
                  className="flex items-center gap-1 text-[#D4AF37] hover:underline"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? t('modal.copied') : t('modal.copy')}</span>
                </button>
              </div>
              <p className="font-mono text-2xl font-bold tracking-widest text-[#F3E5AB]">
                {bookingSuccess.refCode}
              </p>
              
              <div className="pt-2 border-t border-slate-700/60 grid grid-cols-2 gap-2 text-xs text-slate-300 text-left">
                <div>
                  <span className="text-slate-400 block">{t('modal.duration')}</span>
                  <span className="font-medium">{bookingSuccess.totalNights} {isRtl ? 'ليلة' : 'Night(s)'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{t('modal.estCost')}</span>
                  <span className="font-medium text-[#D4AF37]">{bookingSuccess.estimatedCost} {isRtl ? 'ر.س' : 'SAR'}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md hover:opacity-90 flex items-center justify-center gap-2"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>{t('modal.callDesk')} ({HOTEL_INFO.phone})</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-300 border border-slate-700 rounded-md hover:bg-slate-800"
              >
                {t('modal.done')}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            
            {/* Room Picker Header Card */}
            <div className="bg-[#1b0f30] border border-[#D4AF37]/25 rounded-lg p-3.5 flex items-center gap-4">
              <img
                src={currentRoom.image}
                alt={isRtl ? currentRoom.nameAr : currentRoom.name}
                className="w-20 h-16 object-cover rounded-md border border-[#D4AF37]/30"
              />
              <div className="flex-1 min-w-0">
                <label className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block">
                  {t('modal.selectRoom')}
                </label>
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="mt-1 w-full bg-[#0c0714] border border-[#D4AF37]/40 text-slate-100 text-sm rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#D4AF37]"
                >
                  {ROOMS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {isRtl ? room.nameAr : room.name} — {room.pricePerNight} {isRtl ? 'ر.س / ليلة' : 'SAR / Night'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dates & Guests row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.checkIn')}
                </label>
                <input
                  type="date"
                  required
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.checkOut')}
                </label>
                <input
                  type="date"
                  required
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.guests')}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                >
                  <option value="1">{isRtl ? 'ضيف واحد' : '1 Guest'}</option>
                  <option value="2">{isRtl ? 'ضيفان (2)' : '2 Guests'}</option>
                  <option value="3">{isRtl ? '3 ضيوف' : '3 Guests'}</option>
                  <option value="4">{isRtl ? '4 ضيوف / عائلة' : '4 Guests / Family'}</option>
                </select>
              </div>
            </div>

            {/* Guest details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.fullName')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isRtl ? 'مثال: محمد العتيبي' : 'e.g. Mohammed Al-Otaibi'}
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.phone')}
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+966 5X XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 flex items-center gap-1 mb-1">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" /> {t('modal.email')}
              </label>
              <input
                type="email"
                required
                placeholder="guest@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none"
                dir="ltr"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                {t('modal.specialRequests')}
              </label>
              <textarea
                rows={2}
                placeholder={isRtl ? 'طلب خدمة التوصيل للمطار، تسجيل وصول متأخر، إلخ...' : 'Airport shuttle transfer, late check-in, high floor preference, etc.'}
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full bg-[#180e2a] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2 text-xs text-slate-100 focus:outline-none resize-none"
              />
            </div>

            {/* Price Estimate Breakdown */}
            <div className="bg-[#180e2a]/80 border border-[#D4AF37]/20 rounded-md p-3.5 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block">{t('modal.estCost')}</span>
                <span className="text-slate-300 font-medium">
                  {currentRoom.pricePerNight} {isRtl ? 'ر.س' : 'SAR'} × {nightsCount} {isRtl ? 'ليلة' : 'Night(s)'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-cinzel text-xl font-bold text-[#F3E5AB]">
                  {totalPrice} {isRtl ? 'ر.س' : 'SAR'}
                </span>
                <span className="text-[10px] text-emerald-400 block">{isRtl ? 'شامل الضرائب والرسوم' : 'Taxes & Fees Included'}</span>
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 text-sm font-semibold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-bold"
              >
                {isSubmitting ? (
                  <span>{t('modal.processing')}</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{t('modal.confirmBtn')}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
