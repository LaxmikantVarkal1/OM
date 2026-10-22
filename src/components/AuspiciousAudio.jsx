import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Music } from 'lucide-react';

export function AuspiciousAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Play peaceful Indian flute/shehnai Raag Bhupali pentatonic notes using Web Audio API
  const startMelody = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    // Raag Bhupali frequencies (Sa, Re, Ga, Pa, Dha, Sa')
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 440.00, 392.00, 329.63, 293.66];
    let noteIndex = 0;

    const playNote = () => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine'; // Soft flute timbre
      osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);

      // Soft envelope
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.9);

      noteIndex++;
    };

    playNote();
    intervalRef.current = setInterval(playNote, 1200);
    setIsPlaying(true);
  };

  const stopMelody = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startMelody();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Auspicious Melody" : "Play Auspicious Melody"}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-stone-700 border border-stone-200/80 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 text-xs font-semibold cursor-pointer"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-[#E11D48] animate-pulse" />
          <span className="hidden sm:inline text-[#831843]">Playing Melody</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        </>
      ) : (
        <>
          <Music className="w-4 h-4 text-[#EA580C]" />
          <span className="hidden sm:inline">Play Melody</span>
        </>
      )}
    </button>
  );
}
