import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink, Heart } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const CountdownCalendar: React.FC = () => {
  // Target: October 18, 2026 15:30:00 (WAT, UTC+1)
  const targetDate = new Date('2026-10-18T15:30:00+01:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-[#FAF7F2]">
      {/* Decorative background element */}
      <div className="max-w-4xl mx-auto">
        {/* Outer Arched Frame (matching reference video card aesthetic) */}
        <div className="relative rounded-[40px] sm:rounded-[60px] bg-[#FFFDF9] border border-[#DFCBB5]/80 p-8 sm:p-14 shadow-[0_20px_60px_-15px_rgba(82,62,45,0.08)]">
          {/* Subtle ornate inner border */}
          <div className="absolute inset-3 sm:inset-4 rounded-[32px] sm:rounded-[52px] border border-[#E8DAC8]/80 pointer-events-none" />

          {/* Top filigree flourish */}
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
              Save The Date
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
              October 18, 2026
            </h2>
            <p className="font-script text-2xl text-[#8E714F] mt-1">
              Sunday Afternoon at 3:30 PM
            </p>
          </div>

          {/* Classical Date Medallion box */}
          <div className="my-8 max-w-xs mx-auto p-4 rounded-2xl bg-[#F7F2E8] border border-[#D5C2A5]/50 text-center shadow-inner">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#866D54] font-sans">
              West Africa Time
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#46372B] my-0.5">
              Sunday • 15:30
            </p>
            <p className="text-xs text-[#8A7560] font-serif italic">
              Central Business District, Abuja
            </p>
          </div>

          {/* Live Countdown Grid with Tabular Numerals */}
          <div className="max-w-lg mx-auto">
            <p className="text-center text-xs uppercase tracking-[0.25em] text-[#8C745C] mb-4 font-sans font-medium">
              Countdown to Forever
            </p>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="p-3 sm:p-4 rounded-xl bg-[#FAF6F0] border border-[#E3D6C5]/70">
                <span className="block font-serif text-3xl sm:text-4xl text-[#3E3125] font-light tabular-nums">
                  {timeLeft.days}
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8A745F] font-sans mt-1">
                  Days
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#FAF6F0] border border-[#E3D6C5]/70">
                <span className="block font-serif text-3xl sm:text-4xl text-[#3E3125] font-light tabular-nums">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8A745F] font-sans mt-1">
                  Hours
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#FAF6F0] border border-[#E3D6C5]/70">
                <span className="block font-serif text-3xl sm:text-4xl text-[#3E3125] font-light tabular-nums">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8A745F] font-sans mt-1">
                  Minutes
                </span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-[#FAF6F0] border border-[#E3D6C5]/70">
                <span className="block font-serif text-3xl sm:text-4xl text-[#3E3125] font-light tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-[#8A745F] font-sans mt-1">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Romantic introductory quote */}
          <div className="text-center my-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2 text-[#C0AA8E]">
              <span className="h-[1px] w-8 bg-[#C0AA8E]/50" />
              <Heart className="w-3.5 h-3.5 fill-[#C0AA8E]/30" />
              <span className="h-[1px] w-8 bg-[#C0AA8E]/50" />
            </div>
            <p className="font-serif italic text-lg text-[#614E3E]">
              “Two hearts, one journey, and a lifetime still to come.”
            </p>
          </div>

          {/* Add to Calendar Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Add to Google Calendar</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <button
              onClick={downloadIcsFile}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F5EFE6] hover:bg-[#EDE3D4] text-[#554232] border border-[#D5C2A5]/70 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Apple / Outlook (.ics)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
