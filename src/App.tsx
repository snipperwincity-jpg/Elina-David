/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { OpeningDoorsGate } from './components/OpeningDoorsGate';
import { Navigation } from './components/Navigation';
import { CountdownCalendar } from './components/CountdownCalendar';
import { OurStory } from './components/OurStory';
import { WeddingDaySchedule } from './components/WeddingDaySchedule';
import { CelebrationVenue } from './components/CelebrationVenue';
import { DressCodeSection } from './components/DressCodeSection';
import { TravelStay } from './components/TravelStay';
import { GiftsRegistry } from './components/GiftsRegistry';
import { RsvpSection } from './components/RsvpSection';
import { FinalClosing } from './components/FinalClosing';
import { FloatingMusicPlayer } from './components/FloatingMusicPlayer';
import { CardByCardModal } from './components/CardByCardModal';

export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const contentStartRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scrolling while the invitation gate is sealed
  useEffect(() => {
    if (!isGateOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isGateOpen]);

  const handleOpenGate = () => {
    setIsGateOpen(true);
  };

  const handleReopenGate = () => {
    setIsGateOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToContent = () => {
    if (contentStartRef.current) {
      contentStartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D332A] font-sans selection:bg-[#EAE0D2] selection:text-[#2E241B]">
      {/* 1. TOP BAR NAVIGATION (Only visible after the invitation seal is broken) */}
      {isGateOpen && (
        <Navigation
          onReopenGate={handleReopenGate}
          onOpenCardModal={() => setIsCardModalOpen(true)}
        />
      )}

      {/* 2. THE HERO OPENING EXPERIENCE:
             - Before opening: Sealed floral carved gates with handcrafted wax seal & shimmer effect
             - Upon tapping: Smooth fracture/unfolding transition, doors swing open
             - Revealed: Cathedral walkdown video under the floral arch
      */}
      <OpeningDoorsGate
        isOpen={isGateOpen}
        onOpen={handleOpenGate}
        onScrollToContent={handleScrollToContent}
      />

      {/* 3. INVITATION SITE CONTENT (Only revealed after the seal is opened) */}
      {isGateOpen && (
        <main className="animate-fadeIn">
          {/* Scroll anchor right after the opening hero video */}
          <div ref={contentStartRef} />

          {/* WEDDING DATE & LIVE COUNTDOWN */}
          <CountdownCalendar />

          {/* OUR STORY - INTERACTIVE CHRONOLOGICAL TIMELINE */}
          <OurStory />

          {/* THE WEDDING DAY SCHEDULE */}
          <WeddingDaySchedule />

          {/* THE CELEBRATION - VENUE & COORDINATES (ICC ABUJA) */}
          <CelebrationVenue />

          {/* DRESS CODE - EDITORIAL LUXURY FASHION DIRECTION */}
          <DressCodeSection />

          {/* TRAVEL & STAY - GUEST ACCOMMODATIONS */}
          <TravelStay />

          {/* GIFTS & HONEYMOON REGISTRY */}
          <GiftsRegistry />

          {/* RSVP SECTION */}
          <RsvpSection />

          {/* FINAL ROMANTIC CLOSING */}
          <FinalClosing onReopenGate={handleReopenGate} />
        </main>
      )}

      {/* 4. FLOATING MUSIC PLAYER ("Adore You — Miley Cyrus") */}
      {isGateOpen && <FloatingMusicPlayer />}

      {/* 5. CARD-BY-CARD BOOKLET VIEW (MATCHING REFERENCE VIDEO 1) */}
      <CardByCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
