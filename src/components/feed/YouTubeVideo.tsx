/**
 * YouTubeVideo.tsx
 * YouTube video card component with neobrutalism styling.
 */

'use client';

// Node Modules
import Image from 'next/image';

// Components
import YouTubeLogo from 'components/logos/third_party/YouTube';
import type { YouTubeVideo } from 'lib/api/types';

interface YouTubeVideoProps {
  post: YouTubeVideo;
}

export function YouTubeVideoCard({ post }: YouTubeVideoProps) {
  const { author, content, engagement, timestamp, url } = post;

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

  // Format view count
  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  // Truncate description
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  return (
    <article className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Platform Badge */}
      <div className="mb-4 inline-flex items-center gap-2 border-2 border-black bg-[#FF0000] px-3 py-1">
        <YouTubeLogo className="h-4 w-4 text-white" />
        <span className="text-sm font-black text-white">YouTube</span>
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

      {/* Thumbnail */}
      {content.thumbnail && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-4 block aspect-video w-full overflow-hidden border-2 border-black hover:opacity-90"
        >
          <Image
            src={content.thumbnail}
            alt={content.title}
            fill
            className="object-cover"
            unoptimized
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70">
              <svg
                className="ml-1 h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      )}

      {/* Title */}
      <h3 className="mb-2 text-lg font-black leading-tight">{content.title}</h3>

      {/* Description */}
      {content.text && (
        <p className="mb-4 font-medium leading-relaxed text-gray-700">
          {truncateText(content.text, 150)}
        </p>
      )}

      {/* Engagement Footer */}
      <div className="mb-4 flex gap-4 border-t-2 border-black pt-4">
        <div className="flex items-center gap-1">
          <span className="text-lg">👁️</span>
          <span className="font-bold">{formatViews(engagement.views)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg">👍</span>
          <span className="font-bold">{formatViews(engagement.likes)}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg">💬</span>
          <span className="font-bold">{formatViews(engagement.comments)}</span>
        </div>
      </div>

      {/* Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block border-4 border-black bg-[#FF0000] px-4 py-2 text-center font-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#CC0000]"
      >
        Watch on YouTube →
      </a>
    </article>
  );
}
