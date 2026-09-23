import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface WaxSealProps {
  isBreaking: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  isBreaking,
  onClick,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!disabled && (e.key === 'Enter' || e.key === ' ')) onClick();
      }}
      aria-label="Open wedding invitation wax seal"
      className={`relative cursor-pointer select-none transition-transform duration-500 ease-out group ${
        isBreaking ? 'pointer-events-none' : 'hover:scale-[1.03] active:scale-[0.97]'
      }`}
      style={{ perspective: 1000 }}
    >
      {/* 1. Ambient Golden Glow Halo behind the seal */}
      <div
        className={`absolute -inset-6 rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#F3E5AB]/40 to-[#AA771C]/30 blur-2xl transition-all duration-700 pointer-events-none ${
          isBreaking
            ? 'scale-150 opacity-0'
            : isHovered
            ? 'scale-110 opacity-100'
            : 'scale-95 opacity-70 animate-pulse'
        }`}
      />

      {/* Floating Sparkle stars around the seal */}
      <div
        className={`absolute -top-3 -right-3 text-[#E6CA65] transition-opacity duration-500 pointer-events-none ${
          isBreaking ? 'opacity-0 scale-150' : 'opacity-85 group-hover:opacity-100'
        }`}
      >
        <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '7s' }} />
      </div>

      <div
        className={`absolute -bottom-2 -left-3 text-[#D4AF37] transition-opacity duration-500 pointer-events-none ${
          isBreaking ? 'opacity-0' : 'opacity-70 group-hover:opacity-100'
        }`}
      >
        <Sparkles className="w-4 h-4 animate-pulse" style={{ animationDuration: '3s' }} />
      </div>

      {/* 2. THE WAX SEAL COMPONENT */}
      {/* When breaking, we split into Left and Right halves */}
      <div className="relative w-48 h-60 sm:w-56 sm:h-70 filter drop-shadow-[0_20px_35px_rgba(45,30,15,0.45)]">
        {/* SHIMMER SVG DEFS */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            {/* Shimmer gradient moving across the gold elements */}
            <linearGradient id="goldShimmerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#96723B" />
              <stop offset="35%" stopColor="#DFCA8E" />
              <stop offset="50%" stopColor="#FFFDF7">
                <animate
                  attributeName="offset"
                  values="-0.3; 1.3"
                  dur="3.2s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="65%" stopColor="#E5CD91" />
              <stop offset="100%" stopColor="#8C6633" />
            </linearGradient>

            {/* Ambient metallic gold gradient */}
            <linearGradient id="antiqueGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5E8C7" />
              <stop offset="25%" stopColor="#D8BE8A" />
              <stop offset="70%" stopColor="#A8834E" />
              <stop offset="100%" stopColor="#7E5C2D" />
            </linearGradient>

            {/* Wax surface radial depth */}
            <radialGradient id="waxDepth" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FAF4EA" />
              <stop offset="45%" stopColor="#EADCC7" />
              <stop offset="85%" stopColor="#D0BCA0" />
              <stop offset="100%" stopColor="#B39B7C" />
            </radialGradient>

            {/* Debossed inner shadow */}
            <filter id="debossShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="1" dy="1.5" stdDeviation="1" floodColor="#FFFFFF" floodOpacity="0.8" />
              <feDropShadow dx="-1" dy="-1" stdDeviation="1.2" floodColor="#634B2E" floodOpacity="0.6" />
            </filter>

            {/* Crack Clip Paths */}
            {/* Left half clip path */}
            <clipPath id="leftHalfClip">
              <path d="M 0,0 L 112,0 L 115,45 L 108,80 L 116,120 L 109,160 L 115,200 L 110,240 L 113,280 L 0,280 Z" />
            </clipPath>

            {/* Right half clip path */}
            <clipPath id="rightHalfClip">
              <path d="M 224,0 L 112,0 L 115,45 L 108,80 L 116,120 L 109,160 L 115,200 L 110,240 L 113,280 L 224,280 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ============================================================ */}
        {/* SEAL GRAPHICS - SPLIT ON BREAK */}
        {/* ============================================================ */}

        {/* LEFT PIECE */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${
            isBreaking
              ? '-translate-x-12 -translate-y-4 -rotate-12 opacity-0'
              : 'translate-x-0 translate-y-0 rotate-0 opacity-100'
          }`}
          style={{
            clipPath: isBreaking
              ? 'polygon(0% 0%, 51% 0%, 53% 20%, 48% 40%, 52% 65%, 49% 80%, 51% 100%, 0% 100%)'
              : 'none',
          }}
        >
          <WaxSealSvgLayer />
        </div>

        {/* RIGHT PIECE (Only during breaking animation, tilts and slides right) */}
        {isBreaking && (
          <div
            className="absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.2,0.9,0.3,1)] translate-x-12 translate-y-4 rotate-12 opacity-0"
            style={{
              clipPath:
                'polygon(100% 0%, 51% 0%, 53% 20%, 48% 40%, 52% 65%, 49% 80%, 51% 100%, 100% 100%)',
            }}
          >
            <WaxSealSvgLayer />
          </div>
        )}

        {/* GOLDEN FRACTURE LIGHT BEAM (BURSTS THROUGH CENTER UPON CLICK) */}
        {isBreaking && (
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-transparent via-[#FFF4D0] to-transparent animate-ping blur-sm pointer-events-none" />
        )}
      </div>

      {/* 3. Bottom Invitation Ribbon Badge */}
      <div
        className={`mt-4 text-center transition-all duration-500 ${
          isBreaking ? 'opacity-0 translate-y-2' : 'opacity-100'
        }`}
      >
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#3D2E22]/90 backdrop-blur-md text-[#F4EADA] border border-[#B89B72]/70 shadow-lg text-[10px] uppercase tracking-[0.25em] font-medium group-hover:bg-[#32251B] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5CA85] animate-pulse" />
          <span>Tap Seal To Open</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Reusable high-fidelity SVG wax seal rendering layer
 * Features organic wax melt rim, ornate laurel wreath, double beaded border,
 * and classical monogram "E & D" with metallic gold sheen.
 */
const WaxSealSvgLayer: React.FC = () => {
  return (
    <svg
      viewBox="0 0 224 280"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Organic outer melted wax edge (scalloped irregular drops like real poured sealing wax) */}
      <path
        d="M 112,6 
           C 145,5 178,16 198,38 
           C 218,60 222,94 220,128 
           C 223,160 220,195 202,224 
           C 182,252 148,272 112,274 
           C 74,275 42,256 22,226 
           C 3,196 2,160 4,126 
           C 2,92 8,58 28,36 
           C 48,15 80,6 112,6 Z"
        fill="url(#waxDepth)"
        stroke="#A0835B"
        strokeWidth="2.5"
      />

      {/* 2. Soft highlight edge to give organic 3D wax rim depth */}
      <path
        d="M 112,12 
           C 142,11 170,21 188,42 
           C 206,62 212,94 210,126 
           C 212,156 208,188 192,214 
           C 174,242 142,262 112,264 
           C 80,265 50,248 32,220 
           C 16,192 14,158 16,128 
           C 14,96 20,64 36,44 
           C 54,23 82,12 112,12 Z"
        fill="none"
        stroke="#FFF8EE"
        strokeWidth="2"
        strokeOpacity="0.75"
      />

      {/* 3. Inner Raised Bevel Ring */}
      <ellipse
        cx="112"
        cy="140"
        rx="86"
        ry="108"
        fill="#F6EFE3"
        stroke="url(#antiqueGold)"
        strokeWidth="3.5"
      />

      {/* 4. Beaded Pearls Border Ring */}
      <ellipse
        cx="112"
        cy="140"
        rx="78"
        ry="99"
        fill="none"
        stroke="url(#goldShimmerGradient)"
        strokeWidth="2"
        strokeDasharray="1.5 5"
        strokeLinecap="round"
      />

      {/* 5. Inner Oval Medallion Base */}
      <ellipse
        cx="112"
        cy="140"
        rx="72"
        ry="92"
        fill="#FCFAF5"
        stroke="#CBB392"
        strokeWidth="1"
      />

      {/* 6. TOP CREST: Royal Crown / Fleur-de-lis motif */}
      <g transform="translate(112, 74) scale(0.9)" filter="url(#debossShadow)">
        {/* Central fleur-de-lis petal */}
        <path
          d="M 0,-14 C 4,-7 7,-1 0,6 C -7,-1 -4,-7 0,-14 Z"
          fill="url(#goldShimmerGradient)"
        />
        {/* Left petal */}
        <path
          d="M -2,0 C -7,-6 -14,-4 -12,2 C -10,7 -3,6 -1,5 Z"
          fill="url(#antiqueGold)"
        />
        {/* Right petal */}
        <path
          d="M 2,0 C 7,-6 14,-4 12,2 C 10,7 3,6 1,5 Z"
          fill="url(#antiqueGold)"
        />
        {/* Base ring */}
        <rect
          x="-9"
          y="6"
          width="18"
          height="2.5"
          rx="1.2"
          fill="url(#goldShimmerGradient)"
        />
      </g>

      {/* 7. BOTANICAL LAUREL BRANCHES (LEFT & RIGHT) */}
      <g filter="url(#debossShadow)">
        {/* Left Laurel Branch */}
        <g stroke="url(#goldShimmerGradient)" fill="url(#antiqueGold)" strokeWidth="0.8">
          <path d="M 52,140 C 50,110 65,85 88,74" fill="none" strokeWidth="1.2" />
          {/* Leaves along left stem */}
          <path d="M 52,140 C 46,136 44,130 50,126 C 54,129 55,135 52,140 Z" />
          <path d="M 51,120 C 44,116 43,110 49,106 C 54,109 54,115 51,120 Z" />
          <path d="M 54,102 C 48,96 50,90 56,88 C 60,92 59,98 54,102 Z" />
          <path d="M 64,88 C 60,82 64,76 70,76 C 73,80 71,86 64,88 Z" />
          <path d="M 78,78 C 76,72 82,68 87,70 C 88,75 84,80 78,78 Z" />
          <path d="M 52,140 C 47,146 48,154 54,156 C 56,150 55,144 52,140 Z" />
          <path d="M 55,160 C 51,167 54,175 60,176 C 62,170 59,164 55,160 Z" />
          <path d="M 64,178 C 62,185 68,192 74,191 C 75,185 71,180 64,178 Z" />
          <path d="M 78,194 C 78,201 86,206 91,203 C 90,197 86,193 78,194 Z" />
        </g>

        {/* Right Laurel Branch */}
        <g stroke="url(#goldShimmerGradient)" fill="url(#antiqueGold)" strokeWidth="0.8">
          <path d="M 172,140 C 174,110 159,85 136,74" fill="none" strokeWidth="1.2" />
          {/* Leaves along right stem */}
          <path d="M 172,140 C 178,136 180,130 174,126 C 170,129 169,135 172,140 Z" />
          <path d="M 173,120 C 180,116 181,110 175,106 C 170,109 170,115 173,120 Z" />
          <path d="M 170,102 C 176,96 174,90 168,88 C 164,92 165,98 170,102 Z" />
          <path d="M 160,88 C 164,82 160,76 154,76 C 151,80 153,86 160,88 Z" />
          <path d="M 146,78 C 148,72 142,68 137,70 C 136,75 140,80 146,78 Z" />
          <path d="M 172,140 C 177,146 176,154 170,156 C 168,150 169,144 172,140 Z" />
          <path d="M 169,160 C 173,167 170,175 164,176 C 162,170 165,164 169,160 Z" />
          <path d="M 160,178 C 162,185 156,192 150,191 C 149,185 153,180 160,178 Z" />
          <path d="M 146,194 C 146,201 138,206 133,203 C 134,197 138,193 146,194 Z" />
        </g>
      </g>

      {/* 8. CENTRAL CALLIGRAPHY MONOGRAM: "E & D" */}
      <g filter="url(#debossShadow)" className="transition-transform duration-300">
        {/* Letter E */}
        <text
          x="88"
          y="150"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="44"
          fontWeight="400"
          fill="url(#goldShimmerGradient)"
          textAnchor="middle"
          letterSpacing="1"
        >
          E
        </text>

        {/* Ampersand & */}
        <text
          x="112"
          y="146"
          fontFamily="'Pinyon Script', cursive"
          fontSize="36"
          fill="url(#antiqueGold)"
          textAnchor="middle"
          opacity="0.95"
        >
          &amp;
        </text>

        {/* Letter D */}
        <text
          x="136"
          y="150"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="44"
          fontWeight="400"
          fill="url(#goldShimmerGradient)"
          textAnchor="middle"
          letterSpacing="1"
        >
          D
        </text>
      </g>

      {/* 9. Hairline decorative divider */}
      <path
        d="M 82,164 L 142,164"
        stroke="url(#antiqueGold)"
        strokeWidth="1"
        strokeLinecap="round"
        filter="url(#debossShadow)"
      />
      <circle cx="112" cy="164" r="2.5" fill="url(#goldShimmerGradient)" />

      {/* 10. LOWER RIBBON / TEXT: TOGETHER FOREVER */}
      <g filter="url(#debossShadow)">
        <text
          x="112"
          y="178"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="2.5"
          fill="#866538"
          textAnchor="middle"
        >
          TOGETHER FOREVER
        </text>

        <text
          x="112"
          y="190"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontSize="7"
          fontWeight="500"
          letterSpacing="2"
          fill="#A4855D"
          textAnchor="middle"
        >
          OCTOBER 18, 2026
        </text>
      </g>
    </svg>
  );
};
