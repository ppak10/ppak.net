/**
 * BackgroundVideo.tsx
 * Background video component Hero Section
 */

// Node Modules
import { FC, ReactNode } from 'react';

// Types
interface Props {
  children: ReactNode;
  src: string;
  type: string;
}

const BackgroundVideo: FC<Props> = ({ children, src, type }) => (
  <div className="relative h-screen w-full overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute left-0 top-0 h-full w-full object-cover"
    >
      <source src={src} type={type} />
    </video>

    {/* Dark mode dimming overlay */}
    <div className="absolute inset-0 z-0 bg-black/0 dark:bg-black/50 transition-colors duration-300" />

    {/* Content Overlay on Hero */}
    <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-4 sm:p-8">
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </div>
  </div>
);

export default BackgroundVideo;
