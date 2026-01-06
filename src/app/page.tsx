import InfiniteScrollFeed from 'components/feed/InfiniteScrollFeed';
import { fetchBlueskyPosts } from 'lib/api/bluesky';
import { fetchInstagramPosts } from 'lib/api/instagram';
import type { FeedResponse } from 'lib/api/types';

// Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

async function getFeedData(): Promise<FeedResponse & { cursor?: string }> {
  // Fetch from both platforms in parallel
  const [blueskyResult, instagramResult] = await Promise.allSettled([
    fetchBlueskyPosts(20),
    fetchInstagramPosts(process.env.INSTAGRAM_ACCESS_TOKEN || '', 20),
  ]);

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

  // Collect Instagram posts
  if (instagramResult.status === 'fulfilled' && instagramResult.value) {
    posts.push(...instagramResult.value);
  } else if (
    instagramResult.status === 'rejected' ||
    (instagramResult.status === 'fulfilled' && instagramResult.value === null)
  ) {
    errors.push({
      platform: 'instagram' as const,
      message:
        'Failed to load Instagram posts. Please check your access token configuration.',
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
    <div className="min-h-screen bg-[#fef6e4] p-4 sm:p-8 pt-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="mb-2 text-5xl font-black tracking-tight sm:text-6xl">
            Feed
          </h1>
          <p className="text-xl font-bold text-gray-700">
            Latest updates from Bluesky and Instagram
          </p>
        </header>

        <InfiniteScrollFeed
          initialPosts={feedData.posts}
          initialErrors={feedData.errors}
          initialCursor={feedData.cursor}
        />
      </div>
    </div>
  );
}
