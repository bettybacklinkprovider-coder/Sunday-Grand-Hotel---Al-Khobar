import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, ChevronRight, Crown, Globe } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBookingModal: (roomType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, isRtl, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.rooms'), path: '/rooms' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top phone & address micro bar */}
      <div className="bg-[#09050f] border-b border-[#D4AF37]/15 text-xs py-2 px-4 md:px-8 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${HOTEL_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors font-medium text-[#D4AF37]"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 truncate max-w-md">
              {isRtl ? HOTEL_INFO.addressAr : HOTEL_INFO.address}
            </span>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span className="flex items-center gap-1 text-[#D4AF37]">
              <Crown className="w-3 h-3" /> {t('topbar.rating')}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-medium">{t('topbar.location')}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#0c0714]/95 backdrop-blur-md border-[#D4AF37]/30 shadow-2xl py-3.5' 
            : 'bg-[#0c0714]/85 backdrop-blur-sm border-[#D4AF37]/20 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 text-slate-100 hover:text-[#D4AF37] transition-colors group shrink-0"
          >
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#E5C158] via-[#D4AF37] to-[#8C6D13] p-0.5 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0c0714] rounded-[4px] flex items-center justify-center">
                <span className="font-cinzel text-lg font-bold text-[#D4AF37]">SG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg md:text-xl font-bold tracking-wider text-slate-100 group-hover:text-[#F3E5AB] transition-colors whitespace-nowrap">
                {t('brand.name')}
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase font-semibold">
                {t('brand.sub')}
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-[#F3E5AB] font-semibold'
                    : 'text-slate-300 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E5C158] to-[#997A15] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Language Toggle & Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-xs font-semibold text-[#D4AF37] bg-[#1a0f2e] border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 rounded-md transition-all flex items-center gap-1.5 cursor-pointer"
              title="Switch Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t('nav.switchLang')}</span>
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 text-xs md:text-sm font-semibold tracking-wider text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] hover:from-[#FFF0B3] hover:to-[#D4AF37] rounded-md transition-all duration-200 shadow-md hover:shadow-[#D4AF37]/20 flex items-center gap-2 whitespace-nowrap active:scale-95 cursor-pointer font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>{t('nav.bookNow')}</span>
            </button>
          </div>

          {/* Mobile menu hamburger & Language button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 text-xs font-semibold text-[#D4AF37] bg-[#1a0f2e] border border-[#D4AF37]/30 rounded-md flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1 text-xs font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-md"
            >
              {t('rooms.bookBtn')}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-200 hover:text-[#D4AF37] rounded-lg border border-[#D4AF37]/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#120a1f] border-b border-[#D4AF37]/30 px-6 py-6 mt-2 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                    isActive(link.path)
                      ? 'bg-[#211339] text-[#F3E5AB] font-semibold border-l-2 border-[#D4AF37]'
                      : 'text-slate-300 hover:bg-[#1b0f2e] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 text-slate-500 ${isRtl ? 'rotate-180' : ''}`} />
                </Link>
              ))}

              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
                <button
                  onClick={toggleLanguage}
                  className="w-full py-2.5 text-xs text-center font-semibold text-[#D4AF37] bg-[#1a0f2e] border border-[#D4AF37]/40 rounded-md flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 text-sm font-bold text-[#0c0714] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B88E14] rounded-md shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('nav.bookNow')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
