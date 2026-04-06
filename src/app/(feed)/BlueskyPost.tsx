/**
 * BlueskyPost.tsx
 * Bluesky post card component with neobrutalism styling.
 */

'use client';

// Node Modules
import Image from 'next/image';
import { useState } from 'react';
import { usePostHog } from 'posthog-js/react';

// Components
import BlueskyLogo from 'components/logos/third_party/Bluesky';
import type { BlueskyPost } from 'lib/api/types';
import { Button } from 'components/ui/button';
import { ImageModal } from './ImageModal';
import { VideoPlayer } from './VideoPlayer';
import { MessageSquareMore, Heart, Repeat2 } from 'lucide-react';

interface BlueskyPostProps {
  post: BlueskyPost;
  isInThread?: boolean;
  isFirstInThread?: boolean;
  isLastInThread?: boolean;
}

export function BlueskyPost({
  post,
  isInThread = false,
  isFirstInThread = true,
  isLastInThread = true,
}: BlueskyPostProps) {
  const { author, content, engagement, timestamp, url } = post;
  const posthog = usePostHog();
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
    ? 'bg-background p-6'
    : 'border-2 border-border bg-background p-6 shadow-shadow-lg';

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
        {isFirstInThread && (
          <div className="mb-4 inline-flex items-center gap-2 border-2 border-border bg-transparent px-3 py-1">
            <BlueskyLogo />
            <span className="text-sm font-black">Bluesky</span>
          </div>
        )}

        {/* Author Section */}
        <div className="mb-4 flex items-center gap-3">
          {author.avatar && (
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-border">
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
            <p className="text-sm font-medium text-foreground/70">
              {author.handle}
            </p>
          </div>
          <span className="ml-auto text-sm font-medium text-foreground/60">
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
            <div className="relative h-64 w-64 flex-shrink-0 border-2 border-border">
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
                  onClick={() => {
                    setSelectedImage(imageUrl);
                    posthog.capture('bluesky_post_image_opened', {
                      post_url: url,
                    });
                  }}
                  className="relative h-64 w-64 flex-shrink-0 border-2 border-border hover:opacity-80"
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
        <div className="mb-4 flex gap-4 border-t-2 border-border pt-4">
          <div className="flex items-center gap-1">
            <Heart />
            <span className="font-bold">{engagement.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquareMore />
            <span className="font-bold">{engagement.replies}</span>
          </div>
          <div className="flex items-center gap-1">
            <Repeat2 />
            <span className="font-bold">{engagement.reposts}</span>
          </div>
        </div>

        {isLastInThread && (
          <Button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => posthog.capture('bluesky_post_opened', { url })}
            >
              View on Bluesky →
            </a>
          </Button>
        )}
      </article>
    </>
  );
}
