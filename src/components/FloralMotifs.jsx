import React from 'react';

/**
 * 5-Petal Notched Sakura (Cherry Blossom)
 * Matches the left card from the user reference image.
 */
export function SakuraFlower({
  className = "w-16 h-16",
  filled = true,
  color = "#F498B8",
  strokeWidth = 2.5,
  style = {}
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={filled ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(50, 50)">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <path
            key={i}
            transform={`rotate(${angle})`}
            d="M 0 0 C -7 -14 -20 -26 -16 -40 C -13 -48 -4 -45 0 -39 C 4 -45 13 -48 16 -40 C 20 -26 7 -14 0 0 Z"
          />
        ))}
        {filled ? (
          <circle cx="0" cy="0" r="5" fill="#E87A9B" />
        ) : (
          <circle cx="0" cy="0" r="4" fill="none" stroke={color} strokeWidth={strokeWidth} />
        )}
      </g>
    </svg>
  );
}

/**
 * 12-Petal Daisy / Chamomile Flower
 * Matches the right card from the user reference image.
 */
export function DaisyFlower({
  className = "w-16 h-16",
  filled = true,
  color = "#FCA582",
  strokeWidth = 2.5,
  style = {}
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      fill={filled ? color : "none"}
      stroke={filled ? "none" : color}
      strokeWidth={filled ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(50, 50)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <path
            key={i}
            transform={`rotate(${angle})`}
            d="M -4 -10 C -7 -22 -6 -38 0 -44 C 6 -38 7 -22 4 -10 Z"
          />
        ))}
        <circle
          cx="0"
          cy="0"
          r="9"
          fill={filled ? color : "none"}
          stroke={filled ? "none" : color}
          strokeWidth={filled ? 0 : strokeWidth}
        />
      </g>
    </svg>
  );
}
