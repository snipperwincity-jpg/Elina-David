import React, { useState, useEffect } from 'react';
import { Mail, Check, Heart, Send, Calendar, Clock, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RsvpData {
  fullName: string;
  email: string;
  attendance: 'accept' | 'decline';
  guestCount: number;
  dietary: string;
  message: string;
  submittedAt: string;
}

export const RsvpSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'accept' as 'accept' | 'decline',
    guestCount: 1,
    dietary: '',
    message: '',
  });

  const [submittedRsvp, setSubmittedRsvp] = useState<RsvpData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load existing RSVP if user previously submitted
  useEffect(() => {
    try {
      const stored = localStorage.getItem('elina_david_rsvp');
      if (stored) {
        setSubmittedRsvp(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const rsvpPayload: RsvpData = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      try {
        localStorage.setItem('elina_david_rsvp', JSON.stringify(rsvpPayload));
      } catch {
        // ignore
      }

      setSubmittedRsvp(rsvpPayload);
      setIsSubmitting(false);

      // Trigger celebratory champagne & gold confetti burst!
      if (formData.attendance === 'accept') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D1BC9A', '#EFE2CC', '#B5966B', '#F7F3EB', '#8C7156'],
        });
      }
    }, 600);
  };

  const handleEditResponse = () => {
    if (submittedRsvp) {
      setFormData({
        fullName: submittedRsvp.fullName,
        email: submittedRsvp.email,
        attendance: submittedRsvp.attendance,
        guestCount: submittedRsvp.guestCount,
        dietary: submittedRsvp.dietary,
        message: submittedRsvp.message,
      });
    }
    setSubmittedRsvp(null);
  };

  return (
    <section id="rsvp" className="py-24 px-4 sm:px-6 bg-[#F6F1E8] relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#91775E] font-sans font-medium">
            Join Our Celebration
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#3D332A] mt-2 font-normal">
            RSVP
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
            <Mail className="w-4 h-4 text-[#A88B6A]" />
            <span className="h-[1px] w-12 bg-[#C2AA8C]/50" />
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-[#6B5746]">
            “We would be delighted to celebrate this special day with you.”
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#FAF5ED] border border-[#DFCBB5] text-xs font-sans text-[#7D6450]">
            <Clock className="w-3.5 h-3.5 text-[#A88B6A]" />
            <span>Kindly respond by <strong>September 25, 2026</strong></span>
          </div>
        </div>

        {/* Card Form or Confirmation View */}
        <div className="rounded-3xl sm:rounded-[40px] bg-[#FFFDF9] border border-[#DFCBB5]/80 p-8 sm:p-12 shadow-[0_20px_50px_-15px_rgba(82,62,45,0.08)]">
          {submittedRsvp ? (
            /* BEAUTIFUL CONFIRMATION STATE */
            <div className="text-center py-6 sm:py-10 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#FAF0E4] border border-[#CBB391] mx-auto flex items-center justify-center text-[#7A604A] shadow-inner">
                <Check className="w-8 h-8 text-[#5A4532]" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C7156] font-sans font-semibold">
                  Response Recorded
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#3D332A] mt-2 font-light">
                  Thank You, {submittedRsvp.fullName}
                </h3>
              </div>

              <div className="max-w-md mx-auto p-6 rounded-2xl bg-[#FAF6F0] border border-[#E3D6C5] text-center space-y-3">
                <p className="font-serif italic text-lg text-[#5E4C3D] leading-relaxed">
                  {submittedRsvp.attendance === 'accept'
                    ? `“Your response has been received. We can't wait to celebrate together with you in Abuja on October 18, 2026!”`
                    : `“Your response has been received. Although you will be dearly missed, thank you so much for your warm blessings.”`}
                </p>

                <div className="pt-3 border-t border-[#EAE0D2] flex justify-around text-xs font-sans text-[#7B6654]">
                  <div>
                    <span className="block text-[10px] uppercase text-[#9A8470]">Status</span>
                    <span className="font-medium text-[#46372B]">
                      {submittedRsvp.attendance === 'accept' ? 'Joyfully Attending' : 'Regretfully Declining'}
                    </span>
                  </div>
                  {submittedRsvp.attendance === 'accept' && (
                    <div>
                      <span className="block text-[10px] uppercase text-[#9A8470]">Party Size</span>
                      <span className="font-medium text-[#46372B]">{submittedRsvp.guestCount} Guest{submittedRsvp.guestCount > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleEditResponse}
                  className="px-6 py-2.5 rounded-full border border-[#D5C2A5] bg-[#FAF7F2] hover:bg-[#F2EAE0] text-[#554232] text-xs uppercase tracking-wider font-sans transition-colors"
                >
                  Edit Response
                </button>
              </div>
            </div>
          ) : (
            /* INTERACTIVE RSVP FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-2">
                  Full Name <span className="text-[#A84A3B]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Sarah & Michael Jenkins"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D9C7B2] text-[#3D332A] text-sm focus:outline-none focus:ring-1 focus:ring-[#8C7156] focus:border-[#8C7156] transition-colors placeholder:text-[#A89886]"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-2">
                  Email Address <span className="text-[#A84A3B]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D9C7B2] text-[#3D332A] text-sm focus:outline-none focus:ring-1 focus:ring-[#8C7156] focus:border-[#8C7156] transition-colors placeholder:text-[#A89886]"
                />
              </div>

              {/* Attendance Options */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-3">
                  Attendance Status <span className="text-[#A84A3B]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      formData.attendance === 'accept'
                        ? 'bg-[#FAF2E6] border-[#A88B6A] shadow-sm'
                        : 'bg-[#FAF7F2] border-[#E3D6C5] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    <div>
                      <p className="font-serif text-lg text-[#3D332A] font-medium">
                        Joyfully Accepts
                      </p>
                      <p className="text-xs text-[#7A6451] font-sans mt-0.5">
                        Can’t wait to celebrate!
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.attendance === 'accept'
                          ? 'border-[#8C7156] bg-[#8C7156] text-white'
                          : 'border-[#C2AA8C]'
                      }`}
                    >
                      {formData.attendance === 'accept' && <Check className="w-3 h-3" />}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      formData.attendance === 'decline'
                        ? 'bg-[#FAF2E6] border-[#A88B6A] shadow-sm'
                        : 'bg-[#FAF7F2] border-[#E3D6C5] hover:bg-[#F2ECE3]'
                    }`}
                  >
                    <div>
                      <p className="font-serif text-lg text-[#3D332A] font-medium">
                        Regretfully Declines
                      </p>
                      <p className="text-xs text-[#7A6451] font-sans mt-0.5">
                        Sending love from afar.
                      </p>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.attendance === 'decline'
                          ? 'border-[#8C7156] bg-[#8C7156] text-white'
                          : 'border-[#C2AA8C]'
                      }`}
                    >
                      {formData.attendance === 'decline' && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                </div>
              </div>

              {/* Guest Count (if attending) */}
              {formData.attendance === 'accept' && (
                <div className="animate-fadeIn">
                  <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-2">
                    Number of Guests
                  </label>
                  <div className="flex gap-3">
                    {[1, 2].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestCount: num })}
                        className={`flex-1 py-2.5 rounded-xl border text-xs font-sans uppercase tracking-wider font-medium transition-colors ${
                          formData.guestCount === num
                            ? 'bg-[#4C3B2D] text-white border-[#4C3B2D]'
                            : 'bg-[#FAF7F2] text-[#695543] border-[#D9C7B2] hover:bg-[#F2ECE3]'
                        }`}
                      >
                        {num} Guest{num > 1 ? 's' : ''}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dietary Requirements */}
              {formData.attendance === 'accept' && (
                <div className="animate-fadeIn">
                  <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-2">
                    Dietary Preferences or Allergies (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Vegetarian, Halal, Nut allergy, None"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D9C7B2] text-[#3D332A] text-sm focus:outline-none focus:ring-1 focus:ring-[#8C7156] focus:border-[#8C7156] transition-colors placeholder:text-[#A89886]"
                  />
                </div>
              )}

              {/* Message for the Couple */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#6B5542] mb-2">
                  Message for Elina &amp; David
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a sweet wish, toast, or favorite memory..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#D9C7B2] text-[#3D332A] text-sm focus:outline-none focus:ring-1 focus:ring-[#8C7156] focus:border-[#8C7156] transition-colors placeholder:text-[#A89886]"
                />
              </div>

              {/* Submit RSVP Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#4C3B2D] hover:bg-[#382B20] text-[#FAF7F2] text-xs uppercase tracking-[0.25em] font-medium transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting RSVP...</span>
                  ) : (
                    <>
                      <span>SUBMIT RSVP</span>
                      <Send className="w-3.5 h-3.5 text-[#DBC5A6]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
