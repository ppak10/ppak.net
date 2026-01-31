/**
 * Main.tsx
 * Animated logo that redraws on remount.
 */

'use client';

// Node Modules
import { FC, useState } from 'react';

// Path data for each letter stroke
const LETTER_PATHS = [
  // First "p"
  {
    d: 'm 19.158397,51.13135 9.51576,-22.457192',
    dasharray: 30,
    strokeWidth: 5,
  },
  {
    d: 'm 28.801034,29.181663 c 12.172708,-6.652445 7.298331,16.615259 -1.776275,7.231978',
    dasharray: 40,
    strokeWidth: 4,
  },
  // Second "p"
  {
    d: 'm 35.274784,51.074598 9.51576,-22.457192',
    dasharray: 30,
    strokeWidth: 5,
  },
  {
    d: 'm 44.917421,29.124911 c 12.172708,-6.652445 7.298331,16.615259 -1.776275,7.231978',
    dasharray: 40,
    strokeWidth: 4,
  },
  // "a"
  {
    d: 'M 67.371581,30.957939 C 59.418535,19.537408 51.17286,45.638021 65.341552,36.413642',
    dasharray: 50,
    strokeWidth: 4,
  },
  {
    d: 'm 68.640349,28.16665 c -2.6631,6.634994 -4.821959,12.977602 1.141891,10.023267',
    dasharray: 40,
    strokeWidth: 4,
  },
  // "k"
  {
    d: 'M 83.484934,17.508999 74.730435,38.824301',
    dasharray: 40,
    strokeWidth: 4,
  },
  {
    d: 'm 86.529977,27.786019 -5.455702,4.186935 3.933181,6.34384',
    dasharray: 50,
    strokeWidth: 4,
  },
];

const ANIMATION_STEP = 100; // ms between each stroke

interface Props {
  height?: number;
  width?: number;
  stroke?: string;
  viewBox?: string;
}

const Logo: FC<Props> = ({
  height = 68,
  width = 108,
  stroke = 'currentColor',
  viewBox = '0 0 108 68',
}) => {
  const [key, setKey] = useState(0);

  // Generate CSS for animations
  const borderDelay = LETTER_PATHS.length * ANIMATION_STEP;

  return (
    <>
      <style>
        {`
          @keyframes drawStroke-${key} {
            to { stroke-dashoffset: 0; }
          }
          .logo-${key} .border {
            animation: drawStroke-${key} 0.25s ${borderDelay}ms forwards;
          }
          ${LETTER_PATHS.map(
            (_, i) => `
            .logo-${key} .stroke-${i} {
              animation: drawStroke-${key} 0.1s ${i * ANIMATION_STEP}ms forwards;
            }
          `
          ).join('')}
        `}
      </style>
      <svg
        onMouseEnter={() => setKey(prev => prev + 1)}
        className={`logo-${key}`}
        viewBox={viewBox}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Border */}
        <rect
          className="border"
          x="4"
          y="4"
          width="100"
          height="60"
          rx="15"
          ry="15"
          fill="none"
          stroke={stroke}
          strokeWidth="8"
          strokeDasharray="400"
          strokeDashoffset="400"
          strokeLinecap="round"
        />

        {/* Letter strokes */}
        {LETTER_PATHS.map(({ d, dasharray, strokeWidth }, i) => (
          <path
            key={i}
            className={`stroke-${i}`}
            d={d}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={dasharray}
            strokeDashoffset={dasharray}
          />
        ))}
      </svg>
    </>
  );
};

export default Logo;
