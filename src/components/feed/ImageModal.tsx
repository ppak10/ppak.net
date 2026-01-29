/**
 * ImageModal.tsx
 * Modal for viewing full-size images.
 */

'use client';

import Image from 'next/image';
import { useEffect } from 'react';

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
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-10 border-4 border-black bg-white px-4 py-2 text-2xl font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100"
        >
          ×
        </button>
        <div className="relative border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
