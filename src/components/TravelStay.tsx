import React, { useState } from 'react';
import { Compass, ExternalLink, Clock, Phone, MapPin, Check } from 'lucide-react';

interface HotelItem {
  name: string;
  distance: string;
  description: string;
  rateInfo: string;
  code?: string;
  phone: string;
  address: string;
  bookingUrl: string;
}

const hotels: HotelItem[] = [
  {
    name: 'Transcorp Hilton Abuja',
    distance: 'Approximately 8 minutes from venue',
    description:
      'Premier 5-star landmark hotel in Maitama offering luxury rooms, world-class dining, tranquil pools, and lush tropical gardens.',
    rateInfo: 'Special discounted wedding rate available under “ELINA & DAVID WEDDING”.',
    code: 'EDW2026',
    phone: '+234 9 461 3000',
    address: '1 Aguiyi Ironsi St, Maitama, Abuja, Nigeria',
    bookingUrl: 'https://www.hilton.com/en/hotels/abuhitw-transcorp-hilton-abuja/',
  },
  {
    name: 'The Fraser Suites Abuja',
    distance: 'Approximately 10 minutes from venue',
    description:
      'Luxury apartment-style accommodation in the Central Area featuring spacious suites, gourmet kitchenettes, and five-star bespoke hospitality.',
    rateInfo: 'Preferential wedding block rates reserved for out-of-town guests and families.',
    code: 'LOVE-ICC',
    phone: '+234 9 461 4000',
    address: '294 Leventis Close, Central Business District, Abuja, Nigeria',
    bookingUrl: 'https://www.frasershospitality.com/en/nigeria/abuja/fraser-suites-abuja/',
  },
];

export const TravelStay: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="travel" className="py-24 px-4 sm:px-6 bg-[#F6F1E8] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Guest Accommodations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            Travel &amp; Stay
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Compass className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg text-[#6B5746]">
            Curated sanctuaries in the heart of Abuja for our cherished guests.
          </p>
        </div>

        {/* Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="rounded-3xl bg-[#FFFDF9] border border-[#DFCBB5]/80 p-8 sm:p-10 shadow-[0_15px_40px_-10px_rgba(82,62,45,0.07)] flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Distance Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5ED] border border-[#E3D6C5] text-[11px] uppercase tracking-wider text-[#8A7156] font-sans font-medium mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#A88B6A]" />
                  <span>{hotel.distance}</span>
                </div>

                <h3 className="font-serif text-3xl text-[#3D332A] font-normal">
                  {hotel.name}
                </h3>

                <p className="text-xs font-sans text-[#8C7561] flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[#A88B6A]" />
                  <span>{hotel.address}</span>
                </p>

                <p className="font-serif text-base text-[#5C4A3B] mt-4 leading-relaxed">
                  {hotel.description}
                </p>

                {/* Rate details banner */}
                <div className="mt-6 p-4 rounded-xl bg-[#FAF6F0] border border-[#E5DACB] space-y-2">
                  <p className="text-xs font-sans text-[#6A5746] leading-relaxed">
                    {hotel.rateInfo}
                  </p>
                  {hotel.code && (
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] uppercase tracking-wider text-[#8C745E] font-sans">
                        Promo Code: <strong className="font-mono text-[#4C3B2D]">{hotel.code}</strong>
                      </span>
                      <button
                        onClick={() => handleCopyCode(hotel.code!)}
                        className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#D5C2A5] text-[#69523C] hover:bg-[#F7F2E8] transition-colors"
                      >
                        {copiedCode === hotel.code ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-6 border-t border-[#EFE7DC] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={hotel.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm"
                >
                  <span>Book Hotel</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={`tel:${hotel.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-[#D5C2A5] bg-[#FAF7F2] hover:bg-[#F2EAE0] text-[#554232] text-xs uppercase tracking-wider font-sans transition-colors"
                  title="Call Concierge"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A7156]" />
                  <span className="hidden sm:inline">Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
