/**
 * InstagramPost.tsx
 * Instagram post card component with neobrutalism styling.
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { InstagramPost } from 'lib/api/types';
import { ImageModal } from './ImageModal';
import { VideoPlayer } from './VideoPlayer';

interface InstagramPostProps {
  post: InstagramPost;
}

export function InstagramPost({ post }: InstagramPostProps) {
  const { author, content, engagement, timestamp, url, mediaType } = post;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Format timestamp to relative time
  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  // Get media type icon
  const getMediaTypeIcon = () => {
    switch (mediaType) {
      case 'VIDEO':
        return '🎥';
      case 'CAROUSEL_ALBUM':
        return '🖼️';
      default:
        return '📷';
    }
  };

  return (
    <>
      <ImageModal
        imageUrl={selectedImage || ''}
        alt="Instagram post"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <article className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Platform Badge */}
      <div className="mb-4 inline-block border-2 border-black bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] px-3 py-1">
        <span className="text-sm font-black text-white">
          {getMediaTypeIcon()} Instagram
        </span>
      </div>

      {/* Author Section */}
      <div className="mb-4 flex items-center gap-3">
        <div>
          <p className="font-black leading-tight">{author.name}</p>
          <p className="text-sm font-medium text-gray-700">{author.handle}</p>
        </div>
        <span className="ml-auto text-sm font-medium text-gray-600">
          {formatTimestamp(timestamp)}
        </span>
      </div>

      {/* Media (Video and Images) */}
      <div className="mb-4">
        {/* Video */}
        {content.video && (
          <div className="relative h-64 w-64 border-2 border-black">
            <VideoPlayer
              src={content.video.url}
              poster={content.video.thumbnail}
              className="h-full w-full object-cover"
              autoPlay={true}
              muted={true}
              loop={true}
            />
          </div>
        )}

        {/* Images */}
        {content.images && content.images.length > 0 && (
          <button
            onClick={() => setSelectedImage(content.images![0])}
            className="relative h-64 w-64 border-2 border-black hover:opacity-80"
          >
            <Image
              src={content.images[0]}
              alt="Instagram post"
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        )}
      </div>

      {/* Content */}
      {content.text && (
        <div className="mb-4">
          <p className="line-clamp-4 whitespace-pre-wrap font-medium leading-relaxed">
            {content.text}
          </p>
        </div>
      )}

      {/* Engagement Footer */}
      <div className="mb-4 flex gap-4 border-t-2 border-black pt-4">
        <div className="flex items-center gap-1">
          <span className="text-lg">❤️</span>
          <span className="font-bold">{engagement.likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg">💬</span>
          <span className="font-bold">{engagement.replies}</span>
        </div>
      </div>

      {/* Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-4 border-black bg-white px-4 py-2 text-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100"
      >
        View on Instagram →
      </a>
      </article>
    </>
  );
}
