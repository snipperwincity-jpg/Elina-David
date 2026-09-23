import React from 'react';
import { Sparkles, Palette } from 'lucide-react';
import dressEditorialImg from '../assets/images/dress_code_editorial_1790198950818.jpg';

export const DressCodeSection: React.FC = () => {
  const colorSwatches = [
    { name: 'Warm Ivory', hex: '#F9F6F0', textDark: true, border: '#E0D4C3' },
    { name: 'Soft Neutral', hex: '#EDE3D4', textDark: true, border: '#D5C3AE' },
    { name: 'Champagne Silk', hex: '#DBC5A6', textDark: true, border: '#C5AC8B' },
    { name: 'Caramel Earth', hex: '#9E7E63', textDark: false, border: '#84664D' },
    { name: 'Espresso Velvet', hex: '#453528', textDark: false, border: '#33271D' },
  ];

  return (
    <section id="dress-code" className="py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Attire &amp; Aesthetic
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            Dress Code
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Sparkles className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg text-[#6B5746]">
            Garden-Glam &bull; Editorial Elegance
          </p>
        </div>

        {/* Fashion Editorial Layout */}
        <div className="rounded-3xl sm:rounded-[40px] bg-[#FFFDF9] border border-[#DFCBB5]/80 shadow-[0_20px_50px_-15px_rgba(82,62,45,0.08)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Editorial Visual */}
            <div className="lg:col-span-6 relative h-80 sm:h-full min-h-[380px] bg-[#2E241B] overflow-hidden">
              <img
                src={dressEditorialImg}
                alt="Dress code swatches and fabrics in warm ivory, champagne, and earth tones"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E0D0BC] font-sans">
                  Style Direction
                </span>
                <p className="font-serif text-2xl text-white font-normal mt-1">
                  Black Tie / Elegant Formal
                </p>
                <p className="text-xs text-[#DAC6B0] font-serif italic">
                  White Wedding Attire
                </p>
              </div>
            </div>

            {/* Right Guidance & Swatches */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-8">
              <div>
                <span className="inline-block text-[11px] uppercase tracking-[0.25em] text-[#8C7156] font-sans font-semibold mb-2">
                  Editorial Specification
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3D332A] font-light">
                  Black Tie / Elegant Formal
                </h3>
                <p className="font-serif italic text-xl text-[#785E48] mt-1">
                  White Wedding Attire
                </p>
              </div>

              {/* Color Direction Tagline */}
              <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#E3D6C5]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#8A7156] font-sans font-semibold mb-1 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  Color Direction
                </p>
                <p className="font-serif text-lg text-[#4A3A2C]">
                  Warm Ivory • Soft Neutrals • Champagne • Elegant Earth Tones
                </p>
              </div>

              {/* Color Swatches Grid */}
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#8D7763] font-sans mb-3">
                  Complementary Palette
                </span>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {colorSwatches.map((swatch) => (
                    <div key={swatch.name} className="flex flex-col items-center">
                      <div
                        className="w-full aspect-square rounded-xl shadow-sm transition-transform hover:scale-105"
                        style={{
                          backgroundColor: swatch.hex,
                          border: `1px solid ${swatch.border}`,
                        }}
                      />
                      <span className="text-[9px] sm:text-[10px] text-[#695543] font-sans text-center mt-1.5 leading-tight">
                        {swatch.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guest Note Quote */}
              <div className="pt-4 border-t border-[#F0E6D8]">
                <blockquote className="font-serif italic text-base sm:text-lg text-[#5E4B3B] leading-relaxed">
                  “We kindly request guests wear soft neutral or champagne tones to complement the garden-glam aesthetic.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
