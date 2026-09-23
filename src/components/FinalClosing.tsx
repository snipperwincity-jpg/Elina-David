import React from 'react';
import { Heart, ArrowUp, RotateCcw } from 'lucide-react';

interface FinalClosingProps {
  onReopenGate: () => void;
}

export const FinalClosing: React.FC<FinalClosingProps> = ({ onReopenGate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-24 px-4 sm:px-6 bg-[#2B2119] text-[#FAF7F2] text-center relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8C7156]/15 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <div className="flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#8C7156]/60" />
          <Heart className="w-4 h-4 text-[#D5C2A5] fill-[#D5C2A5]/30" />
          <span className="h-[1px] w-12 bg-[#8C7156]/60" />
        </div>

        <p className="font-script text-3xl sm:text-4xl text-[#DBC5A6]">
          Together Forever
        </p>

        <h2 className="font-serif text-4xl sm:text-6xl text-white font-light tracking-wide uppercase">
          Elina <span className="font-serif italic lowercase text-[#C5A882] text-3xl sm:text-5xl">&amp;</span> David
        </h2>

        <p className="text-xs uppercase tracking-[0.3em] text-[#C2B09E] font-sans">
          October 18, 2026 • Abuja, Nigeria
        </p>

        <div className="h-[1px] w-24 bg-[#8C7156]/40 mx-auto my-6" />

        <p className="font-serif italic text-xl sm:text-2xl text-[#E5D7C7] max-w-md mx-auto">
          “Thank you for being part of our story.”
        </p>

        {/* Action Controls */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#7D6652] bg-[#3B2E24] hover:bg-[#4E3D30] text-[#EFE5D8] text-xs uppercase tracking-wider font-sans transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#D5C2A5]" />
            <span>Return To Top</span>
          </button>

          <button
            onClick={onReopenGate}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#7D6652] bg-[#3B2E24] hover:bg-[#4E3D30] text-[#EFE5D8] text-xs uppercase tracking-wider font-sans transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#D5C2A5]" />
            <span>Re-seal Invitation</span>
          </button>
        </div>

        <div className="pt-12 text-[11px] text-[#A69382] font-sans">
          <p>© 2026 Elina &amp; David Wedding Celebration. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
