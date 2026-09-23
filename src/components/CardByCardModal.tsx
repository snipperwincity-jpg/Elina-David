import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Heart, MapPin, Calendar, Clock, Gift, Sparkles, Navigation, Copy, Check } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

interface CardByCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CardByCardModal: React.FC<CardByCardModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalCards = 7;

  const handleNext = () => {
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prev) => prev - 1);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('145675561');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Container simulating the refined arched mobile invitation from the reference video */}
      <div className="relative w-full max-w-sm sm:max-w-md h-[90vh] max-h-[780px] bg-[#FAF6F0] rounded-[44px] border-4 border-[#E2D5C3] shadow-[0_25px_70px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden text-[#3D332A]">
        {/* Top bar with close & card index indicators */}
        <div className="px-6 pt-5 pb-2 flex items-center justify-between border-b border-[#EFE5D8] z-20">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalCards }).map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentCardIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentCardIndex ? 'w-6 bg-[#6E5642]' : 'w-2 bg-[#D5C2AF]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#EFE6DB] hover:bg-[#E5D9CC] text-[#5A4532] transition-colors"
            aria-label="Close card view"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Outer Arched Frame (Exact visual motif from video) */}
        <div className="relative flex-1 p-5 sm:p-6 flex flex-col justify-between overflow-hidden">
          {/* Arched Inner Border with Corner Floral Flourishes */}
          <div className="absolute inset-4 rounded-[36px] border border-[#CDB596]/60 pointer-events-none z-10 flex flex-col justify-between p-3">
            {/* Top corners filigree */}
            <div className="flex justify-between text-[#BCA17E] opacity-70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 6 3 8 2 12c4-1 7-4 8-8 1 4 4 7 8 8-1-4-6-6-6-10z" />
              </svg>
              <svg className="w-5 h-5 rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 6 3 8 2 12c4-1 7-4 8-8 1 4 4 7 8 8-1-4-6-6-6-10z" />
              </svg>
            </div>
            {/* Bottom corners filigree */}
            <div className="flex justify-between text-[#BCA17E] opacity-70">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 6 3 8 2 12c4-1 7-4 8-8 1 4 4 7 8 8-1-4-6-6-6-10z" />
              </svg>
              <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 6 3 8 2 12c4-1 7-4 8-8 1 4 4 7 8 8-1-4-6-6-6-10z" />
              </svg>
            </div>
          </div>

          {/* CARD BODY CONTENT */}
          <div className="flex-1 flex flex-col justify-center items-center text-center p-4 z-20 overflow-y-auto">
            {/* CARD 0: WELCOME & NAMES */}
            {currentCardIndex === 0 && (
              <div className="animate-fadeIn space-y-4 max-w-xs">
                <p className="font-script text-3xl text-[#9A7D60]">
                  Together Forever
                </p>
                <h2 className="font-serif text-4xl sm:text-5xl text-[#3A2D22] font-light uppercase tracking-wider">
                  Elina <span className="font-serif italic lowercase text-3xl text-[#9E8264]">&amp;</span> David
                </h2>
                <div className="w-12 h-[1px] bg-[#CBB59B] mx-auto my-2" />
                <p className="font-serif italic text-base text-[#6E5947]">
                  “Two hearts, one journey, and a lifetime still to come.”
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans pt-2">
                  October 18, 2026 • Abuja, Nigeria
                </p>
              </div>
            )}

            {/* CARD 1: DATE & TIME */}
            {currentCardIndex === 1 && (
              <div className="animate-fadeIn space-y-4 max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans">
                  The Sacred Date
                </span>
                <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#DFCBB5] shadow-sm">
                  <span className="font-serif text-6xl text-[#3A2D22] font-light block">
                    18
                  </span>
                  <span className="font-serif uppercase tracking-[0.2em] text-lg text-[#6E5744] block">
                    October 2026
                  </span>
                  <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-[#F0E6D8] text-xs font-sans text-[#786350]">
                    <span>Sunday</span>
                    <span>•</span>
                    <span>3:30 PM WAT</span>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={getGoogleCalendarUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#524031] text-[#FAF7F2] text-[10px] uppercase tracking-wider"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Add To Calendar</span>
                  </a>
                </div>
              </div>
            )}

            {/* CARD 2: VENUE & LOCATION */}
            {currentCardIndex === 2 && (
              <div className="animate-fadeIn space-y-3 max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans">
                  The Venue
                </span>
                <h3 className="font-serif text-2xl text-[#3A2D22] font-normal">
                  The Glass House
                </h3>
                <p className="text-xs text-[#6B5645] font-sans">
                  International Conference Centre (ICC)
                </p>
                <p className="text-[11px] text-[#8C7561] leading-relaxed">
                  1111 Herbert Macaulay Way, Central Business District, Abuja, Nigeria
                </p>
                <div className="pt-3">
                  <a
                    href="https://maps.google.com/maps?q=International+Conference+Centre+Abuja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#524031] text-white text-[11px] uppercase tracking-wider font-sans shadow"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            )}

            {/* CARD 3: SCHEDULE TIMELINE */}
            {currentCardIndex === 3 && (
              <div className="animate-fadeIn space-y-2 max-w-xs text-left w-full px-2">
                <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans mb-3">
                  The Wedding Day
                </p>
                <div className="space-y-2 text-xs font-sans text-[#524133]">
                  <div className="flex justify-between py-1 border-b border-[#EFE5D8]">
                    <span className="font-medium">3:30 PM</span>
                    <span>Guest Arrival &amp; Drinks</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EFE5D8]">
                    <span className="font-medium">4:00 PM</span>
                    <span>Exchange of Vows</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EFE5D8]">
                    <span className="font-medium">5:30 PM</span>
                    <span>Cocktail Hour</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EFE5D8]">
                    <span className="font-medium">7:00 PM</span>
                    <span>Dinner &amp; First Dance</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#EFE5D8]">
                    <span className="font-medium">9:30 PM</span>
                    <span>Party &amp; Dancing</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-medium">11:00 PM</span>
                    <span>Farewell Send-off</span>
                  </div>
                </div>
              </div>
            )}

            {/* CARD 4: DRESS CODE */}
            {currentCardIndex === 4 && (
              <div className="animate-fadeIn space-y-3 max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans">
                  Dress Code
                </span>
                <h3 className="font-serif text-2xl text-[#3A2D22]">
                  Black Tie / Formal
                </h3>
                <p className="font-serif italic text-sm text-[#7D6450]">
                  White Wedding Attire
                </p>
                <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#E3D6C5] text-xs text-[#5D4B3D]">
                  <p className="font-medium">Color Direction</p>
                  <p className="text-[11px] text-[#7E6957] mt-0.5">
                    Warm Ivory • Soft Neutrals • Champagne • Elegant Earth Tones
                  </p>
                </div>
                <p className="font-serif italic text-[11px] text-[#6E5846] leading-relaxed">
                  “We kindly request guests wear soft neutral or champagne tones.”
                </p>
              </div>
            )}

            {/* CARD 5: GIFTS & REGISTRY */}
            {currentCardIndex === 5 && (
              <div className="animate-fadeIn space-y-3 max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans">
                  Gifts &amp; Registry
                </span>
                <p className="font-serif italic text-xs text-[#6B5645] leading-relaxed">
                  “Your presence is our greatest gift. Contributions toward our honeymoon fund are deeply appreciated.”
                </p>
                <div className="p-3 rounded-xl bg-[#FFFDF9] border border-[#DFCBB5]">
                  <span className="text-[9px] uppercase tracking-wider text-[#8A735E]">NUBAN BANK</span>
                  <p className="font-mono text-xl font-bold text-[#3D332A] my-0.5">145675561</p>
                  <button
                    onClick={handleCopy}
                    className="mt-2 w-full py-1.5 rounded-lg bg-[#524031] text-white text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy Account'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* CARD 6: RSVP QUICK CARD */}
            {currentCardIndex === 6 && (
              <div className="animate-fadeIn space-y-3 max-w-xs">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans">
                  RSVP
                </span>
                <h3 className="font-serif text-2xl text-[#3A2D22]">
                  Join Us In Abuja
                </h3>
                <p className="text-xs text-[#7A6451] font-sans">
                  Kindly respond by September 25, 2026.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('rsvp');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-3 px-6 py-2.5 rounded-full bg-[#524031] text-[#FAF7F2] text-xs uppercase tracking-wider shadow"
                >
                  Fill Full RSVP Form
                </button>
              </div>
            )}
          </div>

          {/* BOTTOM BUTTON: "Aşağı Kaydır" / "NEXT CARD" (Directly inspired by reference video) */}
          <div className="pt-2 z-20 flex flex-col items-center">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFFDF9] border border-[#C5AA8C] hover:bg-[#F2ECE3] text-[#554232] text-[11px] font-sans uppercase tracking-[0.2em] transition-all shadow-sm active:scale-95"
            >
              <span>{currentCardIndex === totalCards - 1 ? 'Start Again' : 'Next Card'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8A7156]" />
            </button>
            <span className="text-[9px] text-[#A08873] uppercase tracking-widest mt-1">
              Card {currentCardIndex + 1} of {totalCards}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
