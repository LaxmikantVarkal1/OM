import React from 'react';

export function FestiveToran() {
  return (
    <div className="w-full overflow-hidden pointer-events-none select-none z-20 relative animate-sway opacity-90">
      {/* Repeating subtle pastel floral garland */}
      <svg
        className="w-full h-10 sm:h-14"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5 Q100 45 200 5 Q300 45 400 5 Q500 45 600 5 Q700 45 800 5 Q900 45 1000 5 Q1100 45 1200 5"
          stroke="#FBA585"
          strokeWidth="2.5"
          strokeDasharray="6 3"
        />
        {/* Repeating flowers & drops */}
        {[100, 300, 500, 700, 900, 1100].map((cx, i) => (
          <g key={i}>
            {/* Hanging string */}
            <line x1={cx} y1="35" x2={cx} y2="52" stroke="#F498B8" strokeWidth="1.5" />
            {/* Flower motif */}
            <circle cx={cx} cy="35" r="8" fill="#FFEADA" stroke="#FBA585" strokeWidth="1.5" />
            <circle cx={cx} cy="35" r="4" fill="#F498B8" />
            {/* Little bell/drop at bottom */}
            <path
              d={`M${cx - 5} 52 C${cx - 5} 48 ${cx + 5} 48 ${cx + 5} 52 L${cx + 6} 57 L${cx - 6} 57 Z`}
              fill="#FBA585"
            />
            <circle cx={cx} cy="58" r="1.5" fill="#E11D48" />
          </g>
        ))}
      </svg>
    </div>
  );
}
