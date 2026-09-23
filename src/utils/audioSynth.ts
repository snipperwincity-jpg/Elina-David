/**
 * Web Audio romantic piano/harp synthesis engine
 * Plays a warm, gentle acoustic chord progression for "Adore You" / Romantic wedding theme
 * seamlessly loops with lush reverb and warm harmonic overtones.
 */

class RomanticWeddingSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private step = 0;
  private isMuted = false;
  private masterGain: GainNode | null = null;

  // Romantic arpeggio sequence in C/Am (warm, emotional, garden-glam)
  // Frequencies for chords: Fmaj7 -> Cmaj7 -> Am7 -> Gsus4
  private chords = [
    // Fmaj7
    [174.61, 220.00, 261.63, 329.63, 392.00, 523.25],
    // Cmaj7
    [130.81, 196.00, 261.63, 329.63, 392.00, 493.88],
    // Am7
    [110.00, 164.81, 220.00, 261.63, 329.63, 440.00],
    // Gsus4 -> G
    [146.83, 196.00, 246.94, 293.66, 392.00, 493.88],
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.28, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public play() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.scheduleNotes();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public setMute(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : 0.28, this.ctx.currentTime);
    }
  }

  public getIsPlaying() {
    return this.isPlaying;
  }

  private playTone(freq: number, timeOffset: number, duration: number, velocity = 0.5) {
    if (!this.ctx || !this.masterGain) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Warm Rhodes / Harp / Piano hybrid tone
    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);
    osc2.frequency.setValueAtTime(freq * 1.002, this.ctx.currentTime + timeOffset);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime + timeOffset);
    filter.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + timeOffset + duration);

    const startTime = this.ctx.currentTime + timeOffset;
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(velocity * 0.4, startTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  private scheduleNotes() {
    if (!this.isPlaying || !this.ctx) return;

    const currentChordIndex = Math.floor(this.step / 6) % this.chords.length;
    const currentChord = this.chords[currentChordIndex];
    const noteInChord = this.step % 6;
    const freq = currentChord[noteInChord];

    // Play root bass on first note of chord
    if (noteInChord === 0) {
      this.playTone(freq * 0.5, 0, 2.2, 0.45);
    }

    // Play melody/arpeggio note
    this.playTone(freq, 0, 1.4, 0.35);

    this.step++;
    // Pace: ~380ms per note (gentle, relaxed adagio cadence)
    this.timer = window.setTimeout(() => {
      this.scheduleNotes();
    }, 420);
  }
}

export const weddingSynth = new RomanticWeddingSynth();
