/**
 * instagram.ts
 * Instagram Graph API integration for fetching user media.
 */

import type {
  InstagramPost,
  InstagramMediaResponse,
  InstagramMediaItem,
} from './types';

const INSTAGRAM_API_URL = 'https://graph.instagram.com';
const TIMEOUT_MS = 5000;

/**
 * Fetches posts from an Instagram user's media feed.
 * @param accessToken - Instagram Graph API access token
 * @param limit - Number of posts to fetch (default: 20)
 * @returns Array of InstagramPost objects, or null on failure
 */
export async function fetchInstagramPosts(
  accessToken: string,
  limit: number = 20
): Promise<InstagramPost[] | null> {
  if (!accessToken || accessToken === 'your-long-lived-access-token-here') {
    console.warn('Instagram access token not configured');
    return null;
  }

  try {
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    // Fetch user media
    const fields = [
      'id',
      'caption',
      'media_type',
      'media_url',
      'permalink',
      'timestamp',
      'like_count',
      'comments_count',
      'username',
    ].join(',');

    const url = `${INSTAGRAM_API_URL}/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Instagram API error: ${response.status} ${response.statusText}`, errorText);

      // Provide helpful error messages
      if (response.status === 401) {
        console.error('Instagram token is invalid or expired. Please refresh your access token.');
      } else if (response.status === 429) {
        console.error('Instagram API rate limit exceeded. Please try again later.');
      }

      return null;
    }

    const data: InstagramMediaResponse = await response.json();

    if (!data.data || data.data.length === 0) {
      console.warn('No Instagram posts found');
      return [];
    }

    // Transform to unified format
    return data.data.map(transformInstagramPost);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Instagram API request timed out');
      } else {
        console.error('Instagram API error:', error.message);
      }
    }
    return null;
  }
}

/**
 * Transforms an Instagram media item to the unified InstagramPost format.
 */
function transformInstagramPost(item: InstagramMediaItem): InstagramPost {
  // Extract media URL(s)
  const images: string[] = [];
  let video: { url: string; thumbnail?: string } | undefined;

  if (item.media_type === 'IMAGE' || item.media_type === 'CAROUSEL_ALBUM') {
    images.push(item.media_url);
  } else if (item.media_type === 'VIDEO') {
    video = {
      url: item.media_url,
      thumbnail: item.media_url, // Instagram doesn't provide separate thumbnail
    };
  }

  return {
    id: item.id,
    platform: 'instagram',
    mediaType: item.media_type,
    author: {
      name: item.username || 'Instagram User',
      handle: `@${item.username || 'unknown'}`,
      avatar: undefined, // Instagram Graph API doesn't provide user avatar in media endpoint
    },
    content: {
      text: item.caption || '',
      images: images.length > 0 ? images : undefined,
      video,
    },
    engagement: {
      likes: item.like_count || 0,
      replies: item.comments_count || 0,
    },
    timestamp: item.timestamp,
    url: item.permalink,
  };
}
