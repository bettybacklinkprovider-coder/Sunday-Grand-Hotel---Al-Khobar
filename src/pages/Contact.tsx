import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Clock, User, CheckCircle2, Copy, Send, Compass
} from 'lucide-react';
import { HOTEL_INFO, HOTEL_IMAGES, ROOMS } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { isRtl, t } = useLanguage();
  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].name);
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | {
    refCode: string;
    guestName: string;
    room: string;
  }>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const refCode = `SGH-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmitted({
        refCode,
        guestName,
        room: selectedRoom
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleCopyRefCode = () => {
    if (submitted) {
      navigator.clipboard.writeText(submitted.refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-0 text-slate-100">
      
      {/* Contact Hero Section */}
      <section className="relative py-24 bg-[#0c0714] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Sunday Grand Hotel Front View"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0714]/80 via-[#0c0714] to-[#0c0714]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
            {isRtl ? 'التواصل المباشر مع إدارة الفندق' : 'Direct Hotel Communication'}
          </span>
          <h1 className="font-cinzel text-4xl sm:text-5xl font-bold text-white">
            {t('pageContact.title')}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('pageContact.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-[#0e081a] border-b border-[#D4AF37]/15">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                  {isRtl ? 'معلومات الفندق' : 'Hotel Information'}
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  {isRtl ? HOTEL_INFO.nameAr : HOTEL_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isRtl ? 'نرحب بزيارتك لنا في الخبر أو الاتصال بالاستقبال للحصول على الدعم الفوري.' : 'We welcome you to visit us in Al Khobar or call our front desk for instant support.'}
                </p>
              </div>

              {/* Contact Information Box */}
              <div className="space-y-4 bg-[#150a24] border border-[#D4AF37]/30 p-6 rounded-xl">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#221238] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{isRtl ? 'رقم الهاتف' : 'Phone Number'}</span>
                    <a 
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="font-bold text-lg text-[#F3E5AB] hover:underline"
                      dir="ltr"
                    >
                      {HOTEL_INFO.phone}
                    </a>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">{isRtl ? 'متاح 24 ساعة / 7 أيام' : 'Available 24 Hours / 7 Days'}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#221238] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{isRtl ? 'عنوان الفندق' : 'Hotel Address'}</span>
                    <p className="text-xs text-slate-200 leading-relaxed mt-0.5">
                      {isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#221238] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{isRtl ? 'البريد الإلكتروني للحجوزات' : 'Reservations Email'}</span>
                    <a 
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-xs text-slate-200 hover:text-[#D4AF37] transition-colors"
                      dir="ltr"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#221238] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{isRtl ? 'تسجيل الدخول / المغادرة' : 'Check-in / Check-out'}</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {isRtl ? (
                        <>تسجيل الدخول: {HOTEL_INFO.checkInTimeAr}<br />تسجيل المغادرة: {HOTEL_INFO.checkOutTimeAr}</>
                      ) : (
                        <>Check-in: {HOTEL_INFO.checkInTime}<br />Check-out: {HOTEL_INFO.checkOutTime}</>
                      )}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="py-3 px-4 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md shadow text-center flex items-center justify-center gap-2"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4" />
                  <span>{isRtl ? 'اتصل بنا الآن' : 'Call Hotel Now'}</span>
                </a>

                <a
                  href={HOTEL_INFO.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 text-xs font-semibold text-slate-200 border border-[#D4AF37]/40 bg-[#160a26] hover:bg-[#D4AF37]/10 rounded-md text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>{isRtl ? 'الاتجاهات' : 'Get Directions'}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#140a22] border-2 border-[#D4AF37]/35 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-6">
                
                <div>
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                    {isRtl ? 'الحجز الإلكتروني المباشر' : 'Online Reservations'}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                    {t('pageContact.sendMessage')}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    {isRtl ? 'أدخل تفاصيل إقامتك أدناه، وسيقوم فريق الحجوزات بمعالجة طلبك فوراً.' : 'Fill in your stay details below. Our reservations team will process your request promptly.'}
                  </p>
                </div>

                {submitted ? (
                  <div className="py-8 space-y-6 text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-cinzel text-2xl font-bold text-white">
                        {isRtl ? 'تم استلام طلب الحجز بنجاح!' : 'Booking Request Received!'}
                      </h4>
                      <p className="text-xs text-slate-300 max-w-md mx-auto">
                        {isRtl ? (
                          <>عزيزنا <span className="text-[#D4AF37] font-semibold">{submitted.guestName}</span>، تم تسجيل طلب حجزك لـ <span className="text-white font-medium">{submitted.room}</span> لدى فندق صنداي جراند.</>
                        ) : (
                          <>Dear <span className="text-[#D4AF37] font-semibold">{submitted.guestName}</span>, your request for <span className="text-white font-medium">{submitted.room}</span> has been logged with Sunday Grand Hotel.</>
                        )}
                      </p>
                    </div>

                    <div className="bg-[#1c0f33] border border-[#D4AF37]/30 rounded-lg p-4 max-w-sm mx-auto space-y-2">
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
                      <p className="font-mono text-2xl font-bold text-[#F3E5AB]">
                        {submitted.refCode}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`tel:${HOTEL_INFO.phone}`}
                        className="px-6 py-2.5 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md shadow"
                        dir="ltr"
                      >
                        {isRtl ? `اتصل بالاستقبال (${HOTEL_INFO.phone})` : `Call Front Desk (${HOTEL_INFO.phone})`}
                      </a>
                      <button
                        onClick={() => setSubmitted(null)}
                        className="px-6 py-2.5 text-xs font-semibold text-slate-300 border border-slate-700 rounded-md hover:bg-slate-800"
                      >
                        {isRtl ? 'إرسال طلب آخر' : 'Submit Another Request'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.fullName')} *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isRtl ? 'مثال: طارق المنصور' : 'e.g. Tariq Al-Mansoor'}
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.phone')} *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+966 5X XXX XXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    {/* Email & Room */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.email')} *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="guest@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none"
                          dir="ltr"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {isRtl ? 'الإقامة المفضلة' : 'Preferred Accommodations'}
                        </label>
                        <select
                          value={selectedRoom}
                          onChange={(e) => setSelectedRoom(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none"
                        >
                          {ROOMS.map((room) => (
                            <option key={room.id} value={isRtl ? room.nameAr : room.name}>
                              {isRtl ? room.nameAr : room.name} ({room.pricePerNight} {isRtl ? 'ر.س / ليلة' : 'SAR / Night'})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Dates & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.checkIn')} *
                        </label>
                        <input
                          type="date"
                          required
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2.5 text-xs text-slate-100 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.checkOut')} *
                        </label>
                        <input
                          type="date"
                          required
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2.5 text-xs text-slate-100 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-slate-300 block mb-1">
                          {t('modal.guests')}
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3 py-2.5 text-xs text-slate-100 focus:outline-none"
                        >
                          <option value="1">{isRtl ? 'ضيف واحد' : '1 Adult'}</option>
                          <option value="2">{isRtl ? 'ضيفان (2)' : '2 Adults'}</option>
                          <option value="3">{isRtl ? '3 ضيوف' : '3 Guests'}</option>
                          <option value="4">{isRtl ? '4 ضيوف / عائلة' : '4 Guests / Family'}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-medium text-slate-300 block mb-1">
                        {t('modal.specialRequests')}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={isRtl ? 'استفسار عن التوصيل من المطار، أسعار المجموعات والشركات، إلخ...' : 'Inquire about airport pickup, extra bed, early check-in, or corporate rates...'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-[#0c0714] border border-slate-700 focus:border-[#D4AF37] rounded-md px-3.5 py-2.5 text-xs text-slate-100 focus:outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 text-xs font-bold uppercase tracking-wider text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>{t('modal.processing')}</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>{t('pageContact.sendMessage')}</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps / Location Visual Section */}
      <section className="py-16 bg-[#0c0714]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest block">
                {isRtl ? 'خريطة الموقع التفاعلية' : 'Interactive Map'}
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-white">
                {isRtl ? 'موقع فندق صنداي جراند في الخبر' : 'Find Sunday Grand Hotel in Al Khobar'}
              </h3>
            </div>
            <a
              href={HOTEL_INFO.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>{isRtl ? 'الفتح في تطبيق خرائط جوجل' : 'Open in Google Maps App'}</span>
            </a>
          </div>

          {/* Location Map Container */}
          <div className="bg-[#150a24] border border-[#D4AF37]/30 rounded-2xl p-4 overflow-hidden shadow-2xl">
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden bg-[#180e2b]">
              <iframe
                title="Sunday Grand Hotel Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.21481121045!2d50.1983!3d26.2831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8316e685f0b%3A0x8633b3e648f8888!2sAl%20Tahliyah%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1650000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay Badge */}
              <div className={`absolute bottom-4 ${isRtl ? 'right-4 left-4 sm:left-auto' : 'left-4 right-4 sm:right-auto'} bg-[#0c0714]/95 border border-[#D4AF37]/40 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-sm`}>
                <p className="font-cinzel text-sm font-bold text-[#F3E5AB]">
                  {isRtl ? HOTEL_INFO.nameAr : HOTEL_INFO.name}
                </p>
                <p className="text-xs text-slate-300 mt-0.5">{isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}</p>
                <p className="text-xs text-[#D4AF37] font-semibold mt-1" dir="ltr">Tel: {HOTEL_INFO.phone}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
