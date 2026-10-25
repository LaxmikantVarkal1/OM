import React, { useState } from 'react';
import { Sparkles, Flame, PartyPopper } from 'lucide-react';

export function NameRevealBanner({ isCountdownZero = false, babyName = "Om (ॐ)" }) {
  const [inlineAlert, setInlineAlert] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);

  const isRevealed = isCountdownZero;

  // On click: simple alert with NO extra info
  const handlePlateClick = () => {
    if (!isRevealed) {
      setInlineAlert(true);
      try {
        window.alert("Let's find out where the place is or wait until the countdown!");
      } catch {
        // fallback to inline alert
      }
    } else {
      // Re-trigger celebration burst if clicked when revealed
      setConfettiKey((prev) => prev + 1);
    }
  };

  // Celebration confetti pieces
  const confettiItems = [
    { color: '#F59E0B', left: '10%', delay: '0s', size: 'w-2 h-3.5' },
    { color: '#E11D48', left: '22%', delay: '0.3s', size: 'w-2.5 h-2.5 rounded-full' },
    { color: '#10B981', left: '35%', delay: '0.6s', size: 'w-3 h-2' },
    { color: '#FBBF24', left: '48%', delay: '0.1s', size: 'w-2 h-4' },
    { color: '#EC4899', left: '62%', delay: '0.4s', size: 'w-2.5 h-3' },
    { color: '#8B5CF6', left: '75%', delay: '0.7s', size: 'w-2.5 h-2.5 rounded-full' },
    { color: '#F97316', left: '88%', delay: '0.2s', size: 'w-3 h-2' },
  ];

  return (
    <div className="w-full my-4 select-none">
      {/* ================= SHORT & SIMPLE INDIAN STYLE NAME PLATE ================= */}
      <div
        onClick={handlePlateClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handlePlateClick();
        }}
        className={`group relative cursor-pointer overflow-hidden rounded-2xl p-0.5 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.99] ${
          isRevealed ? 'animate-celebration-pulse' : 'animate-golden-glow'
        }`}
      >
        {/* Inner Name Plate Frame */}
        <div className="relative rounded-[14px] px-4 py-3.5 sm:py-4 overflow-hidden border border-amber-300/80 bg-gradient-to-r from-[#4A0E17] via-[#7A283C] via-[#9A3412] via-[#831843] to-[#4A0E17] animate-fluid-gradient text-white text-center">

          {/* 4 Corner Brass Studs */}
          <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 border border-amber-800 shadow-xs pointer-events-none" />
          <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 border border-amber-800 shadow-xs pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 border border-amber-800 shadow-xs pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700 border border-amber-800 shadow-xs pointer-events-none" />

          {/* Flowing Sparklers & Shimmer Beam */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-100/20 to-transparent pointer-events-none animate-plate-shimmer" />

          {/* Sparkling Stars */}
          <div className="absolute top-2.5 left-8 text-amber-300 animate-sparkler-spark pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 fill-amber-300" />
          </div>
          <div className="absolute bottom-2.5 right-8 text-amber-200 animate-sparkler-spark pointer-events-none" style={{ animationDelay: '0.8s' }}>
            <Sparkles className="w-3.5 h-3.5 fill-amber-200" />
          </div>

          {/* ================= CELEBRATION CONFETTI (ACTIVE WHEN COUNTDOWN IS 0:0:0:0) ================= */}
          {isRevealed && (
            <div key={confettiKey} className="absolute inset-0 pointer-events-none overflow-hidden">
              {confettiItems.map((item, i) => (
                <div
                  key={i}
                  className={`absolute -top-3 ${item.size} animate-confetti`}
                  style={{
                    backgroundColor: item.color,
                    left: item.left,
                    animationDelay: item.delay,
                  }}
                />
              ))}
            </div>
          )}

          {/* Plate Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
            
            {/* Top Auspicious Header */}
            <div className="flex items-center gap-1.5 opacity-90">
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-200">
                {isRevealed ? "॥ बाळ नामकरण सोहळा ॥" : "॥ शुभ नामकरण पाटी ॥"}
              </span>
              <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
            </div>

            {/* Central Name Plate Inscription */}
            {isRevealed ? (
              /* REVEALED STATE: ONLY WHEN COUNTDOWN IS 0:0:0:0 */
              <div className="animate-reveal-pop py-0.5">
                <div className="flex items-center justify-center gap-2">
                  <PartyPopper className="w-4 h-4 text-amber-300 animate-bounce" />
                  <h3 className="text-2xl sm:text-3xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-300 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]">
                    {babyName}
                  </h3>
                  <PartyPopper className="w-4 h-4 text-amber-300 animate-bounce" />
                </div>
                <p className="text-[10px] text-amber-200/90 font-medium tracking-wide mt-0.5">
                  ✨ Blessed Name Revealed With Love ✨
                </p>
              </div>
            ) : (
              /* SECRET STATE: HIDDEN AS ? ? ? UNTIL 0:0:0:0 */
              <div className="py-0.5">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-amber-400 text-sm animate-pulse">✦</span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-widest text-amber-100 drop-shadow-sm">
                    ? ? ?
                  </span>
                  <span className="text-amber-400 text-sm animate-pulse">✦</span>
                </div>
                <p className="text-[10px] text-amber-200/80 font-medium">
                  Tap to Reveal • नाव उलगडा
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Inline alert confirmation message if alert was clicked (simple, no extra info) */}
      {inlineAlert && !isRevealed && (
        <div className="mt-2 text-center animate-card-entry">
          <p className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-[#7A283C] text-[11px] font-semibold shadow-2xs">
            📢 Let's find out where the place is or wait until the countdown!
          </p>
        </div>
      )}
    </div>
  );
}
