/**
 * ImageModal.tsx
 * Modal for viewing full-size images.
 */

'use client';

import Image from 'next/image';
import { useEffect } from 'react';

// Components
import { Button } from 'components/ui/button';

interface ImageModalProps {
  imageUrl: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({
  imageUrl,
  alt,
  isOpen,
  onClose,
}: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <Button className="absolute right-2 top-2 z-1" onClick={onClose}>
          ×
        </Button>
        <div className="relative border-2 border-black">
          <Image
            src={imageUrl}
            alt={alt}
            width={1200}
            height={1200}
            className="max-h-[85vh] w-auto object-contain"
            unoptimized
            onClick={e => e.stopPropagation()}
          />
        </div>
      </div>
    </div>
  );
}
