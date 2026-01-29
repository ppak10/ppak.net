/**
 * bluesky.ts
 * Bluesky API integration for fetching user posts.
 */

import type {
  BlueskyPost,
  BlueskyFeedResponse,
  BlueskyFeedItem,
} from './types';

const BLUESKY_API_URL = 'https://public.api.bsky.app';
const BLUESKY_HANDLE = 'ppak.net';
const TIMEOUT_MS = 5000;

/**
 * Fetches posts from a Bluesky user's feed.
 * @param limit - Number of posts to fetch (default: 20)
 * @param cursor - Optional cursor for pagination
 * @returns Object containing posts array and next cursor, or null on failure
 */
export async function fetchBlueskyPosts(
  limit: number = 20,
  cursor?: string
): Promise<{ posts: BlueskyPost[]; cursor?: string } | null> {
  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    // Build URL with optional cursor
    let url = `${BLUESKY_API_URL}/xrpc/app.bsky.feed.getAuthorFeed?actor=${encodeURIComponent(BLUESKY_HANDLE)}&limit=${limit}`;
    if (cursor) {
      url += `&cursor=${encodeURIComponent(cursor)}`;
    }

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
      cache: cursor ? 'no-store' : 'default', // Don't cache paginated requests
      next: cursor ? undefined : { revalidate: 300 }, // Cache only initial request
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(
        `Bluesky API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data: BlueskyFeedResponse = await response.json();

    if (!data.feed || data.feed.length === 0) {
      console.warn('No Bluesky posts found');
      return { posts: [], cursor: undefined };
    }

    // Transform to unified format
    return {
      posts: data.feed.map(transformBlueskyPost),
      cursor: data.cursor,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Bluesky API request timed out');
      } else {
        console.error('Bluesky API error:', error.message);
      }
    }
    return null;
  }
}

/**
 * Transforms a Bluesky feed item to the unified BlueskyPost format.
 */
function transformBlueskyPost(item: BlueskyFeedItem): BlueskyPost {
  const { post } = item;

  // Extract images from embed
  const images: string[] = [];
  if (
    post.embed?.$type === 'app.bsky.embed.images#view' &&
    post.embed?.images
  ) {
    images.push(...post.embed.images.map(img => img.fullsize));
  } else if (post.record.embed?.images) {
    images.push(...post.record.embed.images.map(img => img.fullsize));
  }

  // Extract video from embed - check $type to ensure it's a video embed
  let video: { url: string; thumbnail?: string } | undefined;
  if (
    post.embed?.$type === 'app.bsky.embed.video#view' &&
    post.embed?.playlist
  ) {
    video = {
      url: post.embed.playlist,
      thumbnail: post.embed.thumbnail,
    };
  }

  // Build post URL
  const postId = post.uri.split('/').pop() || post.cid;
  const url = `https://bsky.app/profile/${post.author.handle}/post/${postId}`;

  return {
    id: post.cid,
    platform: 'bluesky',
    author: {
      name: post.author.displayName || post.author.handle,
      handle: `@${post.author.handle}`,
      avatar: post.author.avatar,
    },
    content: {
      text: post.record.text,
      images: images.length > 0 ? images : undefined,
      video,
    },
    engagement: {
      likes: post.likeCount || 0,
      replies: post.replyCount || 0,
      reposts: post.repostCount || 0,
    },
    timestamp: post.record.createdAt,
    url,
    reply: post.record.reply,
  };
}
