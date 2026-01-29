/**
 * BlueskyPost.tsx
 * Bluesky post card component with neobrutalism styling.
 */

'use client';

// Node Modules
import Image from 'next/image';
import { useState } from 'react';

// Components
import BlueskyLogo from 'components/logos/third_party/Bluesky';
import type { BlueskyPost } from 'lib/api/types';
import { ImageModal } from './ImageModal';
import { VideoPlayer } from './VideoPlayer';

interface BlueskyPostProps {
  post: BlueskyPost;
  isInThread?: boolean;
  isLastInThread?: boolean;
}

export function BlueskyPost({
  post,
  isInThread = false,
  isLastInThread = true,
}: BlueskyPostProps) {
  const { author, content, engagement, timestamp, url } = post;
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

  const articleClassName = isInThread
    ? 'bg-white p-6'
    : 'border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]';

  return (
    <>
      <ImageModal
        imageUrl={selectedImage || ''}
        alt="Post image"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <article className={articleClassName}>
        {/* Platform Badge */}
        <div className="mb-4 inline-flex items-center gap-2 border-2 border-black bg-transparent px-3 py-1">
          <BlueskyLogo className="h-4 w-4" />
          <span className="text-sm font-black">Bluesky</span>
        </div>

        {/* Author Section */}
        <div className="mb-4 flex items-center gap-3">
          {author.avatar && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-black">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
          <div>
            <p className="font-black leading-tight">{author.name}</p>
            <p className="text-sm font-medium text-gray-700">{author.handle}</p>
          </div>
          <span className="ml-auto text-sm font-medium text-gray-600">
            {formatTimestamp(timestamp)}
          </span>
        </div>

        {/* Content */}
        <div className="mb-4">
          <p className="whitespace-pre-wrap font-medium leading-relaxed">
            {content.text}
          </p>
        </div>

        {/* Media (Video and Images) */}
        <div className="mb-4 flex gap-2 overflow-x-auto">
          {/* Video */}
          {content.video && (
            <div className="relative h-64 w-64 flex-shrink-0 border-2 border-black">
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
            <>
              {content.images.slice(0, 4).map((imageUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imageUrl)}
                  className="relative h-64 w-64 flex-shrink-0 border-2 border-black hover:opacity-80"
                >
                  <Image
                    src={imageUrl}
                    alt={`Post image ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </>
          )}
        </div>

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
          <div className="flex items-center gap-1">
            <span className="text-lg">🔁</span>
            <span className="font-bold">{engagement.reposts}</span>
          </div>
        </div>

        {/* Action Button */}
        {isLastInThread && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border-4 border-black bg-white px-4 py-2 text-center font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-100"
          >
            View on Bluesky →
          </a>
        )}
      </article>
    </>
  );
}
