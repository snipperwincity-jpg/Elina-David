import React from 'react';
import { GlassWater, Heart, Sparkles, Utensils, Music, Moon, Clock } from 'lucide-react';

interface EventItem {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  note?: string;
}

const scheduleEvents: EventItem[] = [
  {
    time: '3:30 PM',
    title: 'Guest Arrival',
    description: 'Welcome drinks & guest check-in.',
    icon: GlassWater,
    note: 'Champagne & botanical infusions on the glass lawn',
  },
  {
    time: '4:00 PM',
    title: 'Ceremony',
    description: 'Exchange of vows.',
    icon: Heart,
    note: 'Under the arched floral canopy',
  },
  {
    time: '5:30 PM',
    title: 'Cocktail Hour',
    description: 'Appetizers & celebratory toasts.',
    icon: Sparkles,
    note: 'Live string quartet & sunset aperitifs',
  },
  {
    time: '7:00 PM',
    title: 'Dinner & Reception',
    description: 'Dinner service, speeches, and first dance.',
    icon: Utensils,
    note: 'Curated 4-course culinary experience',
  },
  {
    time: '9:30 PM',
    title: 'Party & Dancing',
    description: 'Late-night music and celebration.',
    icon: Music,
    note: 'Celebration beats & signature cocktails',
  },
  {
    time: '11:00 PM',
    title: 'Farewell',
    description: 'Final send-off.',
    icon: Moon,
    note: 'Sparkler aisle exit under the stars',
  },
];

export const WeddingDaySchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Program &amp; Order of Events
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            The Wedding Day
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Clock className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg text-[#6B5746]">
            Sunday, October 18, 2026 • An evening of love &amp; celebration
          </p>
        </div>

        {/* Schedule Cards Grid / Editorial Flow */}
        <div className="relative">
          {/* Subtle center hairline for desktop */}
          <div className="hidden md:block absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-[#E3D3C1]" />

          <div className="space-y-6 sm:space-y-8">
            {scheduleEvents.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              const IconComp = evt.icon;

              return (
                <div
                  key={evt.time}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-[45%]">
                    <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#FFFDF9] border border-[#DFCBB5]/80 shadow-[0_10px_30px_-10px_rgba(82,62,45,0.06)] hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#8C7156] font-semibold">
                          {evt.time}
                        </span>
                        <div className="p-2 rounded-full bg-[#F5EFE6] text-[#715944]">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-serif text-2xl text-[#3D332A] font-normal">
                        {evt.title}
                      </h3>
                      <p className="font-serif text-base text-[#5B493A] mt-1">
                        {evt.description}
                      </p>

                      {evt.note && (
                        <p className="mt-3 pt-3 border-t border-[#F0E6D8] text-xs font-sans text-[#8C7561] italic">
                          {evt.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Center Node on desktop */}
                  <div className="hidden md:flex w-[10%] justify-center my-auto">
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#C5AA8C] flex items-center justify-center text-[#69523C] text-xs font-serif shadow-sm">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Empty Spacer */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Note on punctuality */}
        <div className="mt-14 text-center p-6 rounded-2xl bg-[#F6EFE5] border border-[#D5C2A5]/50 max-w-lg mx-auto">
          <p className="font-serif italic text-base text-[#5E4B3B]">
            “To honor the sacred moments of our vow exchange, we kindly advise all esteemed guests to be seated by 3:45 PM.”
          </p>
        </div>
      </div>
    </section>
  );
};
