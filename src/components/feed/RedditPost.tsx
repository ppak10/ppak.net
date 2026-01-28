/**
 * RedditPost.tsx
 * Reddit post card component with neobrutalism styling.
 */

'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { RedditPost } from 'lib/api/types';
import { ImageModal } from './ImageModal';
import { VideoPlayer } from './VideoPlayer';

interface RedditPostProps {
  post: RedditPost;
}

export function RedditPostCard({ post }: RedditPostProps) {
  const { author, content, subreddit, postType, engagement, timestamp, url } =
    post;
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

  // Format numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  // Truncate text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  // Get post type icon
  const getPostTypeIcon = () => {
    switch (postType) {
      case 'image':
        return '🖼️';
      case 'video':
        return '🎬';
      case 'gallery':
        return '📸';
      case 'link':
        return '🔗';
      default:
        return '📝';
    }
  };

  return (
    <>
      <ImageModal
        imageUrl={selectedImage || ''}
        alt="Post image"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <article className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Platform Badge */}
        <div className="mb-4 inline-flex items-center gap-2 border-2 border-black bg-[#FF4500] px-3 py-1">
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
          <span className="text-sm font-black text-white">Reddit</span>
        </div>

        {/* Subreddit and Post Type */}
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded border-2 border-black bg-gray-100 px-2 py-0.5 text-sm font-bold">
            {subreddit}
          </span>
          <span className="text-sm">{getPostTypeIcon()}</span>
          <span className="ml-auto text-sm font-medium text-gray-600">
            {formatTimestamp(timestamp)}
          </span>
        </div>

        {/* Author */}
        <div className="mb-3 flex items-center gap-2">
          <p className="text-sm font-medium text-gray-700">{author.handle}</p>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-black leading-tight">{content.title}</h3>

        {/* Text Content */}
        {content.text && (
          <p className="mb-4 whitespace-pre-wrap font-medium leading-relaxed text-gray-700">
            {truncateText(content.text, 300)}
          </p>
        )}

        {/* Media */}
        <div className="mb-4">
          {/* Video */}
          {content.video && (
            <div className="relative aspect-video w-full border-2 border-black">
              <VideoPlayer
                src={content.video.url}
                poster={content.video.thumbnail}
                className="h-full w-full object-contain"
                autoPlay={false}
                muted={true}
                loop={true}
              />
            </div>
          )}

          {/* Images */}
          {content.images && content.images.length > 0 && !content.video && (
            <div className="flex gap-2 overflow-x-auto">
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
              {content.images.length > 4 && (
                <div className="flex h-64 w-32 flex-shrink-0 items-center justify-center border-2 border-black bg-gray-100">
                  <span className="font-bold">+{content.images.length - 4}</span>
                </div>
              )}
            </div>
          )}

          {/* External Link */}
          {content.link && !content.images && !content.video && (
            <a
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-black bg-gray-50 p-3 hover:bg-gray-100"
            >
              {content.thumbnail && (
                <div className="relative h-16 w-16 flex-shrink-0 border border-black">
                  <Image
                    src={content.thumbnail}
                    alt="Link thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-blue-600">
                  {content.link}
                </p>
              </div>
              <span className="text-lg">🔗</span>
            </a>
          )}
        </div>

        {/* Engagement Footer */}
        <div className="mb-4 flex gap-4 border-t-2 border-black pt-4">
          <div className="flex items-center gap-1">
            <span className="text-lg">⬆️</span>
            <span className="font-bold">{formatNumber(engagement.upvotes)}</span>
            <span className="text-sm text-gray-500">
              ({Math.round(engagement.upvoteRatio * 100)}%)
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-lg">💬</span>
            <span className="font-bold">{formatNumber(engagement.comments)}</span>
          </div>
        </div>

        {/* Action Button */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-4 border-black bg-[#FF4500] px-4 py-2 text-center font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#CC3700]"
        >
          View on Reddit →
        </a>
      </article>
    </>
  );
}
