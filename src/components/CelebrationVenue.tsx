import React from 'react';
import { MapPin, Navigation, Calendar, ExternalLink, Download, Building } from 'lucide-react';
import venueImg from '../assets/images/the_glass_house_abuja_1790198940274.jpg';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export const CelebrationVenue: React.FC = () => {
  const venueAddress = '1111 Herbert Macaulay Way, Central Business District, Abuja, FCT, Nigeria';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'The Glass House, International Conference Centre, 1111 Herbert Macaulay Way, Abuja, Nigeria'
  )}`;

  return (
    <section id="venue" className="py-24 px-4 sm:px-6 bg-[#F6F1E8] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Location &amp; Coordinates
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            The Celebration
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <MapPin className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg text-[#6B5746]">
            Where our vows are spoken and forever begins.
          </p>
        </div>

        {/* Venue Spotlight Card */}
        <div className="rounded-3xl sm:rounded-[40px] bg-[#FFFDF9] border border-[#DFCBB5]/80 shadow-[0_20px_50px_-15px_rgba(82,62,45,0.08)] overflow-hidden">
          {/* Glass House architectural imagery */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#2D231A]">
            <img
              src={venueImg}
              alt="The Glass House, International Conference Centre Abuja"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#F5EADE] mb-2 font-sans">
                  <Building className="w-3 h-3" />
                  Official Venue
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                  The Glass House
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#D9C8B5] font-sans mt-0.5">
                  International Conference Centre (ICC)
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#3D332A] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#F7F2E8] transition-all shadow-md self-start sm:self-auto"
              >
                <Navigation className="w-3.5 h-3.5 text-[#8A7156]" />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>

          {/* Details & Map Embed */}
          <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#91775E] font-sans font-semibold">
                  Official Address
                </span>
                <p className="font-serif text-2xl text-[#3D332A] mt-1 font-normal leading-snug">
                  The Glass House, International Conference Centre (ICC)
                </p>
                <p className="font-sans text-sm text-[#665343] mt-2 leading-relaxed">
                  {venueAddress}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF5ED] border border-[#E5D7C6]/80 text-xs text-[#715D4C] space-y-1">
                <p className="font-semibold text-[#544132] uppercase tracking-wider text-[11px]">
                  Parking &amp; Valet
                </p>
                <p>
                  Complimentary valet parking is reserved at the Glass House VIP entrance for all invited wedding guests.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow hover:scale-[1.02]"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <button
                  onClick={downloadIcsFile}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F5EFE6] hover:bg-[#EDE3D4] text-[#554232] border border-[#D5C2A5]/70 text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>ADD TO CALENDAR</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Map Card */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#D9C7B2] shadow-inner bg-[#EDE5D8] h-64 sm:h-80 relative group">
              <iframe
                title="The Glass House ICC Abuja Map"
                src="https://maps.google.com/maps?q=International%20Conference%20Centre%20Abuja%20Herbert%20Macaulay%20Way&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(18%) contrast(98%)' }}
                loading="lazy"
                aria-label="Google Map showing The Glass House ICC Abuja"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#D5C2A5] text-[11px] font-sans text-[#4D3D2F] shadow-sm flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A0825B]" />
                <span className="font-medium">ICC Central Area, Abuja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
