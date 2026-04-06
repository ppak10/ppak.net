/**
 * page.tsx
 * Feed Page
 */

// Components
import InfiniteScrollFeed from './InfiniteScrollFeed';
import { fetchBlueskyPosts } from 'lib/api/bluesky';
import type { FeedResponse } from 'lib/api/types';

// UI
import { Alert, AlertDescription, AlertTitle } from 'components/ui/alert';

// Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

async function getFeedData(): Promise<FeedResponse & { cursor?: string }> {
  const [blueskyResult] = await Promise.allSettled([fetchBlueskyPosts(20)]);

  const posts = [];
  const errors = [];
  let cursor: string | undefined = undefined;

  // Collect Bluesky posts
  if (blueskyResult.status === 'fulfilled' && blueskyResult.value) {
    posts.push(...blueskyResult.value.posts);
    cursor = blueskyResult.value.cursor;
  } else if (
    blueskyResult.status === 'rejected' ||
    (blueskyResult.status === 'fulfilled' && blueskyResult.value === null)
  ) {
    errors.push({
      platform: 'bluesky' as const,
      message: 'Failed to load Bluesky posts. Please check your configuration.',
    });
  }

  // Sort posts by timestamp (newest first)
  posts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return { posts, errors, cursor };
}

export default async function Home() {
  const feedData = await getFeedData();

  return (
    <div className="min-h-screen bg-background p-4 pt-32 sm:p-8 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Alert className="mb-8">
          <AlertTitle className="text-3xl sm:text-4xl">Feed</AlertTitle>
          <AlertDescription className="block text-xl">
            Latest updates
          </AlertDescription>
        </Alert>
        <InfiniteScrollFeed
          initialPosts={feedData.posts}
          initialErrors={feedData.errors}
          initialCursor={feedData.cursor}
        />
      </div>
    </div>
  );
}
