/**
 * reddit.ts
 * Reddit API integration for fetching user posts.
 */

import type {
  RedditPost,
  RedditListingResponse,
  RedditPostData,
} from './types';

const REDDIT_USERNAME = '_ppak10';
const TIMEOUT_MS = 5000;

/**
 * Fetches posts from a Reddit user's profile.
 * Uses the public JSON endpoint (no authentication required).
 * @param limit - Number of posts to fetch (default: 10)
 * @returns Array of RedditPost objects, or null on failure
 */
export async function fetchRedditPosts(
  limit: number = 10
): Promise<RedditPost[] | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(
      `https://www.reddit.com/u/${REDDIT_USERNAME}/submitted.json?limit=${limit}&raw_json=1`,
      {
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
          // Reddit requires a user agent
          'User-Agent': 'ppak.net/1.0',
        },
        next: { revalidate: 300 },
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(
        `Reddit API error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data: RedditListingResponse = await response.json();

    if (!data.data?.children || data.data.children.length === 0) {
      console.warn('No Reddit posts found');
      return [];
    }

    // Transform to unified format
    return data.data.children.map(child => transformRedditPost(child.data));
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Reddit API request timed out');
      } else {
        console.error('Reddit API error:', error.message);
      }
    }
    return null;
  }
}

/**
 * Determines the post type based on Reddit post data.
 */
function getPostType(
  post: RedditPostData
): 'text' | 'link' | 'image' | 'video' | 'gallery' {
  if (post.is_video) return 'video';
  if (post.is_gallery) return 'gallery';
  if (post.post_hint === 'image') return 'image';
  if (post.post_hint === 'hosted:video' || post.post_hint === 'rich:video')
    return 'video';
  if (post.post_hint === 'link') return 'link';
  if (post.selftext) return 'text';
  if (post.url && !post.url.includes('reddit.com')) return 'link';
  return 'text';
}

/**
 * Transforms a Reddit post to the unified RedditPost format.
 */
function transformRedditPost(post: RedditPostData): RedditPost {
  const postType = getPostType(post);

  // Extract images
  let images: string[] | undefined;
  if (postType === 'gallery' && post.gallery_data && post.media_metadata) {
    images = post.gallery_data.items
      .map(item => post.media_metadata?.[item.media_id]?.s?.u)
      .filter((url): url is string => !!url);
  } else if (postType === 'image' && post.url) {
    images = [post.url];
  } else if (post.preview?.images?.[0]?.source?.url) {
    // Use preview image for link posts
    images = [post.preview.images[0].source.url];
  }

  // Extract video
  let video: { url: string; thumbnail?: string } | undefined;
  if (postType === 'video' && post.media?.reddit_video?.fallback_url) {
    video = {
      url: post.media.reddit_video.fallback_url,
      thumbnail: post.thumbnail !== 'default' ? post.thumbnail : undefined,
    };
  }

  // Get thumbnail for non-image/video posts
  let thumbnail: string | undefined;
  if (
    post.thumbnail &&
    post.thumbnail !== 'self' &&
    post.thumbnail !== 'default' &&
    post.thumbnail !== 'nsfw' &&
    post.thumbnail !== 'spoiler'
  ) {
    thumbnail = post.thumbnail;
  }

  // External link
  let link: string | undefined;
  if (
    postType === 'link' &&
    post.url &&
    !post.url.includes('reddit.com') &&
    !post.url.includes('i.redd.it') &&
    !post.url.includes('v.redd.it')
  ) {
    link = post.url;
  }

  return {
    id: post.id,
    platform: 'reddit',
    author: {
      name: post.author,
      handle: `u/${post.author}`,
    },
    content: {
      title: post.title,
      text: post.selftext || '',
      thumbnail,
      images,
      video,
      link,
    },
    subreddit: post.subreddit_name_prefixed,
    postType,
    engagement: {
      upvotes: post.score,
      comments: post.num_comments,
      upvoteRatio: post.upvote_ratio,
    },
    timestamp: new Date(post.created_utc * 1000).toISOString(),
    url: `https://reddit.com${post.permalink}`,
  };
}
