import React, { useState } from 'react';
import { Gift, Copy, Check, Wallet, Building2, Heart } from 'lucide-react';

export const GiftsRegistry: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const accountNumber = '145675561';
  const bankName = 'NUBAN BANK';
  const beneficiaryName = 'Elina & David Honeymoon Fund';

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="gifts" className="py-24 px-4 sm:px-6 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Registry &amp; Honeymoon Fund
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            Gifts
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Gift className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[#6B5746] max-w-lg mx-auto leading-relaxed">
            “Your presence is the greatest gift, but should you wish to honor us with a gift, a contribution toward our honeymoon fund would be deeply appreciated.”
          </p>
        </div>

        {/* Gift Card Container */}
        <div className="rounded-3xl sm:rounded-[40px] bg-[#FFFDF9] border border-[#DFCBB5]/80 p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(82,62,45,0.08)] max-w-2xl mx-auto">
          {/* Bank Transfer Details Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5ED] border border-[#E3D6C5]/80 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D5C2A5] text-[11px] uppercase tracking-wider text-[#8A7156] font-sans font-medium mb-4">
              <Building2 className="w-3.5 h-3.5 text-[#A88B6A]" />
              <span>Direct Bank Transfer</span>
            </div>

            <div className="space-y-1 mb-5">
              <span className="text-xs uppercase tracking-widest text-[#8E755E] font-sans block">
                Bank Name
              </span>
              <p className="font-serif text-2xl text-[#3D332A] font-medium">
                {bankName}
              </p>
            </div>

            <div className="my-6 p-4 rounded-xl bg-white border border-[#D5C2A5]/70 shadow-sm max-w-xs mx-auto">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#8C745E] font-sans block">
                Account Number
              </span>
              <p className="font-mono text-3xl text-[#46372B] tracking-wider my-1 font-semibold tabular-nums">
                {accountNumber}
              </p>
              <p className="text-[11px] text-[#8A7560] font-sans">
                {beneficiaryName}
              </p>
            </div>

            {/* Copy Button with interactive toast feedback */}
            <button
              onClick={handleCopyAccount}
              className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-sm ${
                copied
                  ? 'bg-[#3A5A40] text-white scale-105'
                  : 'bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] hover:scale-[1.02]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Account Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY ACCOUNT NUMBER</span>
                </>
              )}
            </button>
          </div>

          {/* Secondary Digital Wallet Option */}
          <div className="mt-8 pt-8 border-t border-[#EFE7DC] text-center">
            <span className="text-xs uppercase tracking-widest text-[#8D7660] font-sans block mb-3">
              Alternative Options
            </span>
            <button
              onClick={() => setWalletModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D5C2A5] bg-[#FAF7F2] hover:bg-[#F2EAE0] text-[#554232] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              <Wallet className="w-3.5 h-3.5 text-[#8A7156]" />
              <span>DIGITAL WALLET</span>
            </button>
          </div>
        </div>
      </div>

      {/* Digital Wallet Modal Drawer */}
      {walletModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-3xl border border-[#DFCBB5] p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FAF0E4] border border-[#DFCBB5] mx-auto flex items-center justify-center text-[#8C7156] mb-3">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#3D332A]">
                Digital Wallet Support
              </h3>
              <p className="text-xs text-[#7A6451] font-sans mt-1">
                For international guests wishing to send love electronically.
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs text-[#5E4C3D]">
              <div className="p-3 rounded-xl bg-white border border-[#E3D6C5] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#3D332A]">USDT (TRC-20 / ERC-20)</p>
                  <p className="text-[10px] text-[#8C7662] truncate max-w-[200px]">
                    0x71C...ED2026Abuja (Configured Upon Request)
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E8166] px-2 py-1 bg-[#FAF5ED] rounded">
                  Crypto
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E3D6C5] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#3D332A]">Apple Pay &amp; Cards</p>
                  <p className="text-[10px] text-[#8C7662]">
                    Available via Stripe / Honeymoon Registry Link
                  </p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-[#9E8166] px-2 py-1 bg-[#FAF5ED] rounded">
                  Card
                </span>
              </div>
            </div>

            <p className="text-center text-[11px] text-[#8C745E] italic mt-4 font-serif">
              Please contact the bridal party concierge if you need custom international wire instructions.
            </p>

            <button
              onClick={() => setWalletModalOpen(false)}
              className="mt-6 w-full py-2.5 rounded-full bg-[#4C3B2D] text-[#FAF7F2] text-xs uppercase tracking-widest font-medium hover:bg-[#382B20] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
