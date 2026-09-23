import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, RotateCcw } from 'lucide-react';

interface NavigationProps {
  onReopenGate: () => void;
  onOpenCardModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onReopenGate,
  onOpenCardModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'The Day', href: '#schedule' },
    { label: 'Venue', href: '#venue' },
    { label: 'Dress Code', href: '#dress-code' },
    { label: 'Gifts', href: '#gifts' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E0D4C3]/60 py-3.5 shadow-sm text-[#3D332A]'
          : 'bg-gradient-to-b from-[#1E1712]/70 via-[#1E1712]/30 to-transparent py-5 text-[#FAF7F2]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="font-serif text-xl sm:text-2xl tracking-wider font-normal whitespace-nowrap hover:opacity-85 transition-opacity"
        >
          Elina &amp; David
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-sans font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors relative py-1 hover:text-[#9A734C] ${
                scrolled ? 'text-[#5E4E3F]' : 'text-[#EFE2D2]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* Card Presentation View (like in-vitely reference video) */}
          <button
            onClick={onOpenCardModal}
            title="View as animated booklet cards"
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider transition-colors border ${
              scrolled
                ? 'border-[#D9C8B4] text-[#695543] hover:bg-[#EFE8DD]'
                : 'border-[#FAF7F2]/30 text-[#FAF7F2] hover:bg-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Card View</span>
          </button>

          {/* Replay Opening Doors */}
          <button
            onClick={onReopenGate}
            title="Replay wax seal & gate opening"
            className={`p-1.5 rounded-full transition-colors border ${
              scrolled
                ? 'border-[#D9C8B4] text-[#695543] hover:bg-[#EFE8DD]'
                : 'border-[#FAF7F2]/30 text-[#FAF7F2] hover:bg-white/10'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Primary RSVP Action */}
          <a
            href="#rsvp"
            className="px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium text-[#FAF7F2] bg-[#4C3B2D] hover:bg-[#382B20] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
          >
            RSVP
          </a>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-inherit hover:opacity-75 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E0D4C3] px-6 py-6 text-[#3D332A] shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs uppercase tracking-[0.25em] font-medium text-[#5E4E3F] hover:text-[#9A734C] transition-colors border-b border-[#EFE8DD]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCardModal();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5B29B] text-xs uppercase tracking-wider text-[#5A4532]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Card View</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenGate();
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#C5B29B] text-xs uppercase tracking-wider text-[#5A4532]"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Seal Gate</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
