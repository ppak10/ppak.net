/**
 * AnimatedWords.tsx
 * Displays words and circulates between them on mobile.
 */

'use client';

// Node Modules
import { FC, useEffect, useState } from 'react';

interface Props {
  wordDuration?: number;
  words: string[];
}

const AnimatedWords: FC<Props> = ({ words, wordDuration = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, wordDuration);

    return () => clearInterval(interval);
  }, [wordDuration, words.length]);

  return (
    <>
      {/* Desktop: Show all words with "/" separator */}
      <p className="hidden md:block">
        {words.map((word, index) => (
          <span key={index}>
            {word}
            {index < words.length - 1 && ' / '}
          </span>
        ))}
      </p>

      {/* Mobile: Show one word at a time with fade animation */}
      <div className="md:hidden">
        <p>
          <span
            className={`inline-block transition-opacity duration-${wordDuration}`}
            style={{
              opacity: 1,
              animation: `fadeInOut ${wordDuration}ms infinite`,
            }}
            key={currentIndex}
          >
            {words[currentIndex]}
          </span>
        </p>

        <style>{`
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default AnimatedWords;
