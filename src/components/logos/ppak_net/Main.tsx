/**
 * Main.tsx
 * Animated logo that redraws on remount.
 */

// Node Modules
import { FC, useState } from 'react';

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
  // Hooks
  const [key, setKey] = useState(0);

  const handleMouseEnter = () => {
    // Increment key to remount the SVG
    setKey(prev => prev + 1);
  };

  return (
    <svg
      onMouseEnter={handleMouseEnter}
      key={key} // remount SVG to restart animation
      viewBox={viewBox}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Border */}
      <rect
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
      >
        <animate
          attributeName="stroke-dashoffset"
          from="400"
          to="0"
          dur="0.25s"
          begin="0.8s"
          fill="freeze"
        />
      </rect>

      {/* First "p" */}
      <path
        d="m 19.158397,51.13135 9.51576,-22.457192"
        stroke={stroke}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="30"
        strokeDashoffset="30"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="30"
          to="0"
          dur="0.1s"
          begin="0s"
          fill="freeze"
        />
      </path>
      <path
        d="m 28.801034,29.181663 c 12.172708,-6.652445 7.298331,16.615259 -1.776275,7.231978"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="40"
          to="0"
          dur="0.1s"
          begin="0.1s"
          fill="freeze"
        />
      </path>

      {/* Second "p" */}
      <path
        d="m 35.274784,51.074598 9.51576,-22.457192"
        stroke={stroke}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="30"
        strokeDashoffset="30"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="30"
          to="0"
          dur="0.1s"
          begin="0.2s"
          fill="freeze"
        />
      </path>
      <path
        d="m 44.917421,29.124911 c 12.172708,-6.652445 7.298331,16.615259 -1.776275,7.231978"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="40"
          to="0"
          dur="0.1s"
          begin="0.3s"
          fill="freeze"
        />
      </path>

      {/* "a" */}
      <path
        d="M 67.371581,30.957939 C 59.418535,19.537408 51.17286,45.638021 65.341552,36.413642"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50"
        strokeDashoffset="50"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="50"
          to="0"
          dur="0.1s"
          begin="0.4s"
          fill="freeze"
        />
      </path>
      <path
        d="m 68.640349,28.16665 c -2.6631,6.634994 -4.821959,12.977602 1.141891,10.023267"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="40"
          to="0"
          dur="0.1s"
          begin="0.5s"
          fill="freeze"
        />
      </path>

      {/* "k" */}
      <path
        d="M 83.484934,17.508999 74.730435,38.824301"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="40"
          to="0"
          dur="0.1s"
          begin="0.6s"
          fill="freeze"
        />
      </path>
      <path
        d="m 86.529977,27.786019 -5.455702,4.186935 3.933181,6.34384"
        stroke={stroke}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="50"
        strokeDashoffset="50"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="50"
          to="0"
          dur="0.1s"
          begin="0.7s"
          fill="freeze"
        />
      </path>
    </svg>
  );
};

export default Logo;
