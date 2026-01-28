import InfiniteScrollFeed from 'components/feed/InfiniteScrollFeed';
import { fetchBlueskyPosts } from 'lib/api/bluesky';
import { fetchYouTubeVideos } from 'lib/api/youtube';
import { fetchRedditPosts } from 'lib/api/reddit';
import type { FeedResponse } from 'lib/api/types';

// Revalidate every 5 minutes (300 seconds)
export const revalidate = 300;

async function getFeedData(): Promise<FeedResponse & { cursor?: string }> {
  // Fetch from all platforms in parallel
  const [blueskyResult, youtubeResult, redditResult] = await Promise.allSettled(
    [
      fetchBlueskyPosts(20),
      fetchYouTubeVideos(process.env.YOUTUBE_API_KEY || '', 10),
      fetchRedditPosts(10),
    ]
  );

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

  // Collect YouTube videos
  if (youtubeResult.status === 'fulfilled' && youtubeResult.value) {
    posts.push(...youtubeResult.value);
  } else if (
    youtubeResult.status === 'rejected' ||
    (youtubeResult.status === 'fulfilled' && youtubeResult.value === null)
  ) {
    errors.push({
      platform: 'youtube' as const,
      message:
        'Failed to load YouTube videos. Please check your API key configuration.',
    });
  }

  // Collect Reddit posts
  if (redditResult.status === 'fulfilled' && redditResult.value) {
    posts.push(...redditResult.value);
  } else if (
    redditResult.status === 'rejected' ||
    (redditResult.status === 'fulfilled' && redditResult.value === null)
  ) {
    errors.push({
      platform: 'reddit' as const,
      message: 'Failed to load Reddit posts.',
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
            Latest updates from{' '}
            <a
              href="https://bsky.app/profile/ppak.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0085ff] underline hover:no-underline"
            >
              Bluesky
            </a>
            ,{' '}
            <a
              href="https://www.youtube.com/@ppak10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] underline hover:no-underline"
            >
              YouTube
            </a>
            , and{' '}
            <a
              href="https://www.reddit.com/user/_ppak10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF4500] underline hover:no-underline"
            >
              Reddit
            </a>
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
