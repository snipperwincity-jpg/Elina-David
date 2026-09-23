import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { weddingSynth } from '../utils/audioSynth';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Audio tag reference for external MP3 streaming ("Adore You" - Miley Cyrus or placeholder)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      weddingSynth.pause();
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      weddingSynth.play();
      if (audioRef.current && audioRef.current.src) {
        audioRef.current.play().catch(() => {
          // Fall back gracefully to synthesized romantic acoustic piano
        });
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    weddingSynth.setMute(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  return (
    <aside
      aria-label="Wedding Music Player"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 select-none"
    >
      {/* Hidden audio element architecture for external source */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        aria-hidden="true"
        className="hidden"
      >
        {/* Placeholder for custom MP3: <source src="/assets/adore_you.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Expanded details badge */}
      {isExpanded && (
        <div className="bg-[#FAF7F2]/95 backdrop-blur-md border border-[#D5C2A5] rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-fadeIn text-[#4A3C2F]">
          <div className="w-8 h-8 rounded-full bg-[#FAF0E4] border border-[#DFCBB5] flex items-center justify-center text-[#8C7156]">
            <Disc className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          </div>
          <div>
            <p className="text-xs font-serif font-semibold text-[#3D332A] leading-tight">
              Adore You
            </p>
            <p className="text-[10px] font-sans text-[#7F6B58] uppercase tracking-wider">
              Miley Cyrus • Wedding Version
            </p>
          </div>
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-[#EFE5D8] text-[#715A46] transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}

      {/* Main floating pill button */}
      <div className="flex items-center gap-1.5 p-1.5 pl-3 pr-2 rounded-full bg-[#3D2F23]/90 hover:bg-[#3D2F23] backdrop-blur-md text-[#FAF7F2] shadow-2xl border border-[#967C63]/60 transition-all">
        {/* Animated equalizer waves when playing */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 cursor-pointer pr-1"
          title="Toggle music info"
        >
          <div className="flex items-end gap-[2px] h-3.5 w-3.5">
            <span
              className={`w-[2px] bg-[#E3D0B9] rounded-full transition-all ${
                isPlaying ? 'h-3 animate-pulse' : 'h-1'
              }`}
            />
            <span
              className={`w-[2px] bg-[#E3D0B9] rounded-full transition-all ${
                isPlaying ? 'h-3.5 animate-pulse' : 'h-2'
              }`}
              style={{ animationDelay: '0.15s' }}
            />
            <span
              className={`w-[2px] bg-[#E3D0B9] rounded-full transition-all ${
                isPlaying ? 'h-2 animate-pulse' : 'h-1.5'
              }`}
              style={{ animationDelay: '0.3s' }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-sans font-medium text-[#E0D0BE] hidden sm:inline">
            {isPlaying ? 'Playing' : 'Music'}
          </span>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-7 h-7 rounded-full bg-[#FAF7F2] text-[#3D2F23] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current ml-0.5" />}
        </button>

        {/* Mute button */}
        <button
          onClick={toggleMute}
          className="p-1 rounded-full text-[#E0D0BE] hover:text-white transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </aside>
  );
};
