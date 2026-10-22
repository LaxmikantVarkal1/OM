import React from 'react';

const STATIC_PETALS = [
  { id: 0, left: '6%', animationDuration: '9s', animationDelay: '0s', size: '14px', color: '#F6A5C0', opacity: 0.6 },
  { id: 1, left: '15%', animationDuration: '11s', animationDelay: '1.5s', size: '18px', color: '#FBA585', opacity: 0.5 },
  { id: 2, left: '26%', animationDuration: '10s', animationDelay: '0.8s', size: '13px', color: '#FBCFE8', opacity: 0.65 },
  { id: 3, left: '38%', animationDuration: '12s', animationDelay: '2.4s', size: '16px', color: '#FED7AA', opacity: 0.55 },
  { id: 4, left: '48%', animationDuration: '9.5s', animationDelay: '1.2s', size: '20px', color: '#F498B8', opacity: 0.6 },
  { id: 5, left: '60%', animationDuration: '11.5s', animationDelay: '3.1s', size: '14px', color: '#FDBA74', opacity: 0.55 },
  { id: 6, left: '70%', animationDuration: '10.2s', animationDelay: '0.5s', size: '16px', color: '#F6A5C0', opacity: 0.6 },
  { id: 7, left: '80%', animationDuration: '12.5s', animationDelay: '2.1s', size: '18px', color: '#FBA585', opacity: 0.5 },
  { id: 8, left: '89%', animationDuration: '9.8s', animationDelay: '1.8s', size: '13px', color: '#FCE7F3', opacity: 0.65 },
  { id: 9, left: '95%', animationDuration: '11.2s', animationDelay: '0.2s', size: '15px', color: '#FED7AA', opacity: 0.55 },
];

export function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {STATIC_PETALS.map((p) => (
        <div
          key={p.id}
          className="floating-petal"
          style={{
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            top: '-30px',
            opacity: p.opacity
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill={p.color}
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(244,152,184,0.3))' }}
          >
            <path d="M12 2C12 2 16 7 16 12C16 17 12 22 12 22C12 22 8 17 8 12C8 7 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
