import React, { useState } from 'react';
import { Heart, Compass, Coffee, Sparkles } from 'lucide-react';
import proposalImg from '../assets/images/couple_proposal_sunset_1790198930527.jpg';

interface StoryChapter {
  year: string;
  tagline: string;
  narrative: string;
  location: string;
  icon: React.ComponentType<{ className?: string }>;
  highlightImage?: string;
  quote?: string;
}

const chapters: StoryChapter[] = [
  {
    year: '2020',
    tagline: 'First Encounter',
    location: 'Downtown Artisan Café',
    narrative:
      'Our paths crossed at a cozy coffee shop downtown. What started as a shared table quickly became hours of effortless conversation.',
    icon: Coffee,
    quote: 'From a shared cup of warm espresso to sharing dreams until nightfall.',
  },
  {
    year: '2021',
    tagline: 'First Adventure',
    location: 'The Atlantic Coastline',
    narrative:
      'We took our first trip together to the coast. From spontaneous road trips to quiet weekend getaways, every moment brought us closer.',
    icon: Compass,
    quote: 'We discovered that wherever we traveled together, that was home.',
  },
  {
    year: '2023',
    tagline: 'Moving Forward',
    location: 'Building Our Shared Space',
    narrative:
      'Building a life together, supporting each other’s dreams, and growing stronger with each passing day.',
    icon: Sparkles,
    quote: 'Encouraging each other, through laughter, milestones, and daily routines.',
  },
  {
    year: '2025',
    tagline: 'The Proposal',
    location: 'Golden Sunset Cliffside',
    narrative:
      'With a heart full of love and a sunset as our backdrop, the question was asked and answered with tears of joy.',
    icon: Heart,
    highlightImage: proposalImg,
    quote: 'The easiest and most certain "Yes" in the universe.',
  },
];

export const OurStory: React.FC = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(3); // Start with proposal featured

  return (
    <section id="story" className="py-24 px-4 sm:px-6 bg-[#F6F1E8] relative overflow-hidden">
      {/* Subtle organic watermark */}
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Chapters Of Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            Our Story
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Heart className="w-4 h-4 text-[#A88B6A] fill-[#A88B6A]/20" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg text-[#6B5746]">
            Every step led us right here, to forever.
          </p>
        </div>

        {/* Interactive Year Selector Ribbon */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 overflow-x-auto pb-2 scrollbar-none">
          {chapters.map((chapter, idx) => {
            const isActive = idx === activeYearIndex;
            return (
              <button
                key={chapter.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 border whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4C3B2D] text-[#FAF7F2] border-[#4C3B2D] shadow-md scale-105'
                    : 'bg-[#FFFDF9] text-[#715E4D] border-[#DFCBB5]/80 hover:bg-[#F0E6D8]'
                }`}
              >
                <span className="font-serif font-semibold text-sm">{chapter.year}</span>
                <span className="opacity-80">· {chapter.tagline}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Spotlight Card for the selected milestone */}
        <div className="rounded-3xl sm:rounded-[40px] bg-[#FFFDF9] border border-[#DFCBB5]/80 shadow-[0_25px_60px_-15px_rgba(82,62,45,0.09)] overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#91775E] font-sans font-medium mb-3">
                  <span>Chapter 0{activeYearIndex + 1}</span>
                  <span aria-hidden="true">·</span>
                  <span>{chapters[activeYearIndex].location}</span>
                </div>

                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif text-5xl sm:text-6xl text-[#46372B] font-light">
                    {chapters[activeYearIndex].year}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#5E4C3D] italic">
                    {chapters[activeYearIndex].tagline}
                  </h3>
                </div>

                <div className="h-[1px] w-20 bg-[#C2AA8C]/50 my-6" />

                <p className="font-serif text-xl sm:text-2xl text-[#3D332A] leading-relaxed mb-6 font-normal">
                  {chapters[activeYearIndex].narrative}
                </p>

                {chapters[activeYearIndex].quote && (
                  <blockquote className="p-4 rounded-xl bg-[#FAF5ED] border-l-2 border-[#A88B6A] font-serif italic text-base text-[#6E5947]">
                    “{chapters[activeYearIndex].quote}”
                  </blockquote>
                )}
              </div>

              {/* Step dots navigation */}
              <div className="pt-8 flex items-center justify-between border-t border-[#EFE5D8]">
                <span className="text-xs tracking-widest uppercase text-[#8D7660] font-sans">
                  {activeYearIndex + 1} of {chapters.length} Memories
                </span>
                <div className="flex gap-2">
                  {chapters.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveYearIndex(i)}
                      aria-label={`Go to story milestone ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === activeYearIndex ? 'w-8 bg-[#524031]' : 'w-2 bg-[#D9C8B5]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] bg-[#2E241C] overflow-hidden">
              <img
                src={chapters[activeYearIndex].highlightImage || proposalImg}
                alt={chapters[activeYearIndex].tagline}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-right">
                <span className="text-xs uppercase tracking-[0.25em] text-[#E0D0BC] font-sans">
                  David &amp; Elina
                </span>
                <p className="font-serif italic text-lg text-white">
                  Sunset Horizon, 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Chronological Timeline Rail Below */}
        <div className="mt-16 relative border-l border-[#D9C7B2] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {chapters.map((ch, idx) => (
            <div key={ch.year} className="relative group">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                  idx === activeYearIndex
                    ? 'bg-[#4C3B2D] border-[#FAF7F2] text-white shadow'
                    : 'bg-[#FAF7F2] border-[#C2AA8C] text-[#866F57]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8E755E] font-sans font-semibold">
                  {ch.year} • {ch.location}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#3D332A] mt-1 font-normal">
                  {ch.tagline}
                </h4>
                <p className="font-serif text-base text-[#5E4C3D] mt-2 max-w-2xl leading-relaxed">
                  {ch.narrative}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
