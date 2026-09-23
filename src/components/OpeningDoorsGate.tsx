import React, { useState, useRef, useEffect } from 'react';
import { Heart, ChevronDown, Sparkles, Video, Upload, RotateCcw } from 'lucide-react';
import { WaxSeal } from './WaxSeal';
import floralDoorsImg from '../assets/images/wedding_floral_doors_relief_1790198908599.jpg';
import walkdownImg from '../assets/images/couple_cathedral_walkdown_1790198920043.jpg';
import walkdownVideo from '../assets/video/walkdown.mp4';

interface OpeningDoorsGateProps {
  isOpen: boolean;
  onOpen: () => void;
  onScrollToContent: () => void;
}

export const OpeningDoorsGate: React.FC<OpeningDoorsGateProps> = ({
  isOpen,
  onOpen,
  onScrollToContent,
}) => {
  const [isSealBreaking, setIsSealBreaking] = useState(false);
  const [doorsSwinging, setDoorsSwinging] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('elina_david_hero_video') || null;
    } catch {
      return null;
    }
  });
  const [showVideoUploader, setShowVideoUploader] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Play video automatically once seal starts opening or is open
  useEffect(() => {
    if (isOpen || doorsSwinging) {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay fallback
        });
      }
    }
  }, [isOpen, doorsSwinging, customVideoUrl]);

  const handleSealClick = () => {
    if (isSealBreaking || doorsSwinging || isOpen) return;

    // 1. Trigger the wax seal shimmer & smooth breaking/unfolding transition
    setIsSealBreaking(true);

    // 2. Door swing follows the fracture after 380ms
    setTimeout(() => {
      setDoorsSwinging(true);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 380);

    // 3. Complete opening transition and reveal full site content
    setTimeout(() => {
      onOpen();
      setIsSealBreaking(false);
      setDoorsSwinging(false);
    }, 1400);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
      try {
        localStorage.setItem('elina_david_hero_video', url);
      } catch {
        // ignore
      }
      setShowVideoUploader(false);
    }
  };

  const handleResetVideo = () => {
    setCustomVideoUrl(null);
    try {
      localStorage.removeItem('elina_david_hero_video');
    } catch {
      // ignore
    }
    setShowVideoUploader(false);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#1E1712] text-[#FAF7F2] transition-all duration-700 ${
        isOpen ? 'min-h-screen' : 'h-screen'
      }`}
    >
      {/* ========================================================================= */}
      {/* 1. REVEALED BACKGROUND: THE BRIDE & GROOM WALKDOWN HERO VIDEO */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Living Video Layer: Cathedral Walkdown under floral archway */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={walkdownImg}
          src={customVideoUrl || walkdownVideo}
          className="w-full h-full object-cover object-center filter brightness-95 scale-100 transition-opacity duration-1000"
        >
          <source src={customVideoUrl || walkdownVideo} type="video/mp4" />
          <source src="/walkdown.mp4" type="video/mp4" />
        </video>

        {/* Ambient golden sunbeam & warm champagne overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#947854]/25 via-transparent to-[#FCEECB]/30 pointer-events-none mix-blend-screen" />

        {/* Soft luxury film scrim to ensure WCAG AA text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A140F]/90 via-[#261E17]/45 to-black/35 pointer-events-none" />

        {/* Cinematic Walkdown Intro Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-12 text-center z-10">
          {/* Top Monogram / Heading */}
          <div className="pt-8 opacity-90">
            <span className="text-xs uppercase tracking-[0.35em] text-[#E0D2C0] font-sans">
              The Holy Matrimony Of
            </span>
          </div>

          {/* Central Emotional Couple Title */}
          <div className="max-w-3xl px-4 py-6">
            <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#F3E7D7] mb-2 drop-shadow-md">
              Together Forever
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-white tracking-wide uppercase drop-shadow-lg">
              Elina <span className="font-serif italic lowercase text-[#E3CCA9] text-4xl sm:text-6xl">&amp;</span> David
            </h1>

            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-[#D1BC9A]/60" />
              <Heart className="w-4 h-4 text-[#D1BC9A] fill-[#D1BC9A]/30" />
              <span className="h-[1px] w-12 bg-[#D1BC9A]/60" />
            </div>

            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#E8DDD1] max-w-xl mx-auto drop-shadow leading-relaxed">
              “Two hearts, one journey, and a lifetime still to come.”
            </p>

            <p className="mt-4 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#DBCBB6] font-sans">
              Sunday, October 18, 2026 • The Glass House, ICC Abuja
            </p>
          </div>

          {/* Bottom Action Area (Shown when gate is opened) */}
          <div className="pb-8 flex flex-col items-center gap-3">
            <button
              onClick={onScrollToContent}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF7F2]/95 hover:bg-[#FAF7F2] text-[#3D332A] text-xs uppercase tracking-[0.25em] font-medium shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-[#D5C2A5]/60"
            >
              <span>Explore Invitation</span>
              <ChevronDown className="w-4 h-4 text-[#8C7355] group-hover:translate-y-0.5 transition-transform" />
            </button>
            <span className="text-[11px] tracking-widest text-[#D1C2AF]/80 uppercase font-sans">
              Scroll to discover program &amp; details
            </span>
          </div>
        </div>

        {/* Video Source Utility Option (bottom-left) */}
        <div className="absolute bottom-5 left-5 z-20">
          <input
            ref={fileInputRef}
            type="file"
            accept="video/mp4,video/webm,video/quicktime"
            onChange={handleVideoUpload}
            className="hidden"
          />

          {showVideoUploader ? (
            <div className="p-3 rounded-2xl bg-[#2A2018]/95 backdrop-blur-md border border-[#8C7156]/60 text-xs text-[#EFE5D8] shadow-2xl space-y-2 max-w-xs animate-fadeIn">
              <p className="font-medium text-[#FAF7F2]">Hero Walkdown Video</p>
              <p className="text-[11px] text-[#C9B5A0]">
                Choose an MP4 video of the bride &amp; groom walkdown:
              </p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-[#FAF7F2] text-[#3D2E22] text-[10px] uppercase tracking-wider font-semibold hover:bg-white flex items-center justify-center gap-1"
                >
                  <Upload className="w-3 h-3" />
                  <span>Select Video</span>
                </button>
                {customVideoUrl && (
                  <button
                    onClick={handleResetVideo}
                    className="p-1.5 rounded-lg border border-[#8C7156] text-[#D8C4B0] hover:bg-white/10"
                    title="Reset to default video"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setShowVideoUploader(false)}
                  className="px-2 py-1 text-[11px] text-[#A69382] hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowVideoUploader(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A2018]/70 hover:bg-[#2A2018] backdrop-blur-sm border border-[#8C7156]/40 text-[#D8C4B0] text-[10px] uppercase tracking-wider font-sans transition-all"
              title="Change hero video"
            >
              <Video className="w-3 h-3 text-[#D5C2A5]" />
              <span className="hidden sm:inline">
                {customVideoUrl ? 'Custom Video Active' : 'Walkdown Video'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE CARVED FLORAL RELIEF GATES & HIGH-QUALITY WAX SEAL (BEFORE OPENING) */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 z-30 perspective-1200 transition-opacity duration-700 pointer-events-none ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* Left Gate Door (Floral Relief Plaster) */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full overflow-hidden origin-left transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl"
          style={{
            transform: doorsSwinging || isOpen ? 'rotateY(-112deg)' : 'rotateY(0deg)',
          }}
        >
          <img
            src={floralDoorsImg}
            alt="Carved floral plaster relief gate left"
            referrerPolicy="no-referrer"
            className="w-[200%] max-w-none h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/35 border-r border-[#69523C]/50" />
        </div>

        {/* Right Gate Door (Floral Relief Plaster) */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full overflow-hidden origin-right transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl"
          style={{
            transform: doorsSwinging || isOpen ? 'rotateY(112deg)' : 'rotateY(0deg)',
          }}
        >
          <img
            src={floralDoorsImg}
            alt="Carved floral plaster relief gate right"
            referrerPolicy="no-referrer"
            className="w-[200%] max-w-none h-full object-cover object-right -ml-[100%]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/35 border-l border-[#69523C]/50" />
        </div>

        {/* Center Door Seam Shadow */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] -translate-x-1/2 bg-black/45 z-30 shadow-lg pointer-events-none" />

        {/* ========================================================================= */}
        {/* 3. HIGH-QUALITY SVG/CSS WAX SEAL ANIMATION IN THE GATE CENTER */}
        {/* ========================================================================= */}
        {!isOpen && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-auto p-4">
            {/* The Wax Seal Component */}
            <WaxSeal
              isBreaking={isSealBreaking}
              onClick={handleSealClick}
              disabled={isSealBreaking || doorsSwinging}
            />

            {/* Introductory Card below the wax seal */}
            <div
              className={`mt-6 text-center max-w-sm px-6 py-4 rounded-2xl bg-[#FAF6F0]/95 backdrop-blur-md border border-[#CBB391]/50 shadow-2xl transition-all duration-500 ${
                isSealBreaking ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              <p className="font-script text-2xl text-[#6B533E]">
                Cordially Invited
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#3A2D22] tracking-wide uppercase my-1 font-light">
                Elina &amp; David
              </h2>
              <p className="text-[10px] tracking-[0.25em] text-[#76604D] uppercase font-sans font-medium">
                Together Forever • October 18, 2026
              </p>

              <button
                onClick={handleSealClick}
                className="mt-3 w-full py-2.5 px-4 rounded-lg bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>BREAK SEAL &amp; ENTER</span>
                <Sparkles className="w-3.5 h-3.5 text-[#E3CCA9]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
