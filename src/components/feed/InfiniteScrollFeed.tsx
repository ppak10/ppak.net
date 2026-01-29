/**
 * InfiniteScrollFeed.tsx
 * Client component that handles infinite scrolling for the feed.
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import type { SocialPost, FeedResponse } from 'lib/api/types';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { ThreadView } from './ThreadView';
import { groupPostsIntoThreads } from 'lib/utils/threadGrouping';

interface InfiniteScrollFeedProps {
  initialPosts: SocialPost[];
  initialErrors: FeedResponse['errors'];
  initialCursor?: string;
}

type PlatformFilter = 'all' | 'bluesky' | 'youtube' | 'reddit';

export default function InfiniteScrollFeed({
  initialPosts,
  initialErrors,
  initialCursor,
}: InfiniteScrollFeedProps) {
  const [posts, setPosts] = useState<SocialPost[]>(initialPosts);
  const [errors, setErrors] = useState(initialErrors);
  const [cursor, setCursor] = useState<string | undefined>(initialCursor);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(!!initialCursor);
  const [filter, setFilter] = useState<PlatformFilter>('all');
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    try {
      // Fetch more Bluesky posts
      const url = cursor
        ? `/api/bluesky?cursor=${encodeURIComponent(cursor)}&limit=20`
        : '/api/bluesky?limit=20';

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch more posts');
      }

      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setPosts(prev => [...prev, ...data.posts]);
        setCursor(data.cursor);
        setHasMore(!!data.cursor);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more posts:', error);
      setErrors(prev => [
        ...prev,
        {
          platform: 'bluesky',
          message: 'Failed to load more posts',
        },
      ]);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [cursor, isLoading, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [loadMore, hasMore, isLoading]);

  const hasErrors = errors.length > 0;
  const hasPosts = posts.length > 0;

  // Filter posts by platform
  const filteredPosts =
    filter === 'all' ? posts : posts.filter(post => post.platform === filter);

  // Group posts into threads
  const threads = groupPostsIntoThreads(filteredPosts);

  return (
    <div className="space-y-6">
      {/* Platform Filter */}
      <div className="flex flex-wrap gap-3 border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <span className="flex items-center font-black">Filter:</span>
        <button
          onClick={() => setFilter('all')}
          className={`border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            filter === 'all'
              ? 'bg-black text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('bluesky')}
          className={`flex items-center gap-2 border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            filter === 'bluesky'
              ? 'bg-[#0085ff] text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 600 530" fill="currentColor">
            <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
          </svg>
          Bluesky
        </button>
        <button
          onClick={() => setFilter('youtube')}
          className={`flex items-center gap-2 border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            filter === 'youtube'
              ? 'bg-[#FF0000] text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          YouTube
        </button>
        <button
          onClick={() => setFilter('reddit')}
          className={`flex items-center gap-2 border-4 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
            filter === 'reddit'
              ? 'bg-[#FF4500] text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
          Reddit
        </button>
      </div>

      {/* Display Errors */}
      {hasErrors && (
        <div className="space-y-4">
          {errors.map((error, index) => (
            <ErrorState
              key={index}
              platform={error.platform}
              message={error.message}
            />
          ))}
        </div>
      )}

      {/* Display Threads or Empty State */}
      {hasPosts ? (
        <>
          <div className="grid gap-6 grid-cols-1">
            {threads.map(thread => (
              <ThreadView key={thread.id} thread={thread} />
            ))}
          </div>

          {/* Loading indicator and intersection observer target */}
          <div ref={observerTarget} className="py-8">
            {isLoading && (
              <div className="border-4 border-black bg-white p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-black border-t-transparent"></div>
                <p className="mt-4 font-bold">Loading more posts...</p>
              </div>
            )}
            {!hasMore && !isLoading && (
              <div className="border-4 border-black bg-white p-6 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-bold text-gray-600">
                  You&apos;ve reached the end! 🎉
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        !hasErrors && <EmptyState />
      )}
    </div>
  );
}
