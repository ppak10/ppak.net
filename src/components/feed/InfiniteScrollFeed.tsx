/**
 * InfiniteScrollFeed.tsx
 * Client component that handles infinite scrolling for the feed.
 */

'use client';

// Node Modules
import { useState, useEffect, useCallback, useRef } from 'react';
import type { SocialPost, FeedResponse } from 'lib/api/types';

// Components
import BlueskyLogo from 'components/logos/third_party/Bluesky';
import RedditLogo from 'components/logos/third_party/Reddit';
import YouTubeLogo from 'components/logos/third_party/YouTube';

// UI
import { Button } from 'components/ui/button';
import { Tabs, TabsList, TabsTrigger } from 'components/ui/tabs';

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
    <Tabs className="space-y-6" defaultValue="all">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="bluesky">
          <BlueskyLogo />
          Bluesky
        </TabsTrigger>
        <TabsTrigger value="youtube">
          <YouTubeLogo />
          YouTube
        </TabsTrigger>
        <TabsTrigger value="reddit">
          <RedditLogo />
          Reddit
        </TabsTrigger>
      </TabsList>

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
    </Tabs>
  );
}
