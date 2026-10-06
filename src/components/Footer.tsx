import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Calendar, Clock, Crown } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const { isRtl, t } = useLanguage();

  return (
    <footer className="bg-[#08040d] border-t border-[#D4AF37]/30 text-slate-300 text-xs">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#8C6D13] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0c0714] rounded flex items-center justify-center">
                  <span className="font-cinzel text-xl font-bold text-[#D4AF37]">SG</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-white tracking-wider">
                  {t('brand.name')}
                </span>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.2em] font-semibold">
                  {t('brand.sub')}
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#D4AF37] font-semibold bg-[#160c26] border border-[#D4AF37]/30 px-3 py-1.5 rounded-md">
              <Crown className="w-3.5 h-3.5" />
              <span>{t('topbar.rating')}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-[#D4AF37]/20 pb-2">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-[#D4AF37] transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#D4AF37] transition-colors">{t('nav.rooms')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D4AF37] transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D4AF37] transition-colors">{t('nav.contact')}</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider border-b border-[#D4AF37]/20 pb-2">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-[#D4AF37] font-bold text-[#F3E5AB]" dir="ltr">
                  {HOTEL_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-[#D4AF37]">
                  {HOTEL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{isRtl ? 'تسجيل الدخول: 2:00 مساءً | المغادرة: 12:00 ظهراً' : 'Check-In: 2:00 PM | Check-Out: 12:00 PM'}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-2.5 px-4 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded transition-all shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t('nav.bookNow')}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#050208] border-t border-[#D4AF37]/15 py-4 px-4 text-center text-slate-400 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {t('footer.rights')}</span>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Al Khobar, Kingdom of Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
