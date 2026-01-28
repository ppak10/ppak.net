/**
 * youtube.ts
 * YouTube Data API integration for fetching channel videos.
 */

import type {
  YouTubeVideo,
  YouTubeChannelResponse,
  YouTubePlaylistResponse,
  YouTubeVideoStatsResponse,
} from './types';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_HANDLE = '@ppak10';
const TIMEOUT_MS = 5000;

/**
 * Fetches videos from a YouTube channel.
 * @param apiKey - YouTube Data API key
 * @param limit - Number of videos to fetch (default: 10)
 * @returns Array of YouTubeVideo objects, or null on failure
 */
export async function fetchYouTubeVideos(
  apiKey: string,
  limit: number = 10
): Promise<YouTubeVideo[] | null> {
  if (!apiKey) {
    console.error('YouTube API key is required');
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    // Step 1: Get channel info and uploads playlist ID
    const channelResponse = await fetch(
      `${YOUTUBE_API_URL}/channels?forHandle=${encodeURIComponent(YOUTUBE_HANDLE)}&part=contentDetails,snippet&key=${apiKey}`,
      {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
        next: { revalidate: 300 },
      }
    );

    if (!channelResponse.ok) {
      console.error(
        `YouTube Channel API error: ${channelResponse.status} ${channelResponse.statusText}`
      );
      clearTimeout(timeoutId);
      return null;
    }

    const channelData: YouTubeChannelResponse = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      console.warn('YouTube channel not found');
      clearTimeout(timeoutId);
      return null;
    }

    const channel = channelData.items[0];
    const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;
    const channelTitle = channel.snippet.title;
    const channelHandle = channel.snippet.customUrl || YOUTUBE_HANDLE;
    const channelAvatar = channel.snippet.thumbnails.default.url;

    // Step 2: Get videos from uploads playlist
    const playlistResponse = await fetch(
      `${YOUTUBE_API_URL}/playlistItems?playlistId=${uploadsPlaylistId}&part=snippet&maxResults=${limit}&key=${apiKey}`,
      {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
        next: { revalidate: 300 },
      }
    );

    clearTimeout(timeoutId);

    if (!playlistResponse.ok) {
      console.error(
        `YouTube Playlist API error: ${playlistResponse.status} ${playlistResponse.statusText}`
      );
      return null;
    }

    const playlistData: YouTubePlaylistResponse = await playlistResponse.json();

    if (!playlistData.items || playlistData.items.length === 0) {
      console.warn('No YouTube videos found');
      return [];
    }

    // Step 3: Get video statistics
    const videoIds = playlistData.items
      .map(item => item.snippet.resourceId.videoId)
      .join(',');

    const statsResponse = await fetch(
      `${YOUTUBE_API_URL}/videos?id=${videoIds}&part=statistics&key=${apiKey}`,
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: 300 },
      }
    );

    let statsMap = new Map<
      string,
      { views: number; likes: number; comments: number }
    >();

    if (statsResponse.ok) {
      const statsData: YouTubeVideoStatsResponse = await statsResponse.json();
      statsData.items.forEach(item => {
        statsMap.set(item.id, {
          views: parseInt(item.statistics.viewCount || '0', 10),
          likes: parseInt(item.statistics.likeCount || '0', 10),
          comments: parseInt(item.statistics.commentCount || '0', 10),
        });
      });
    }

    // Transform to unified format
    return playlistData.items.map(item =>
      transformYouTubeVideo(
        item,
        channelTitle,
        channelHandle,
        channelAvatar,
        statsMap
      )
    );
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('YouTube API request timed out');
      } else {
        console.error('YouTube API error:', error.message);
      }
    }
    return null;
  }
}

/**
 * Transforms a YouTube playlist item to the unified YouTubeVideo format.
 */
function transformYouTubeVideo(
  item: YouTubePlaylistResponse['items'][0],
  channelTitle: string,
  channelHandle: string,
  channelAvatar: string,
  statsMap: Map<string, { views: number; likes: number; comments: number }>
): YouTubeVideo {
  const { snippet } = item;
  const videoId = snippet.resourceId.videoId;
  const stats = statsMap.get(videoId) || { views: 0, likes: 0, comments: 0 };

  // Get best available thumbnail
  const thumbnail =
    snippet.thumbnails.maxres?.url ||
    snippet.thumbnails.high?.url ||
    snippet.thumbnails.medium?.url ||
    snippet.thumbnails.default?.url ||
    '';

  return {
    id: videoId,
    platform: 'youtube',
    author: {
      name: channelTitle,
      handle: channelHandle,
      avatar: channelAvatar,
    },
    content: {
      title: snippet.title,
      text: snippet.description,
      thumbnail,
    },
    engagement: {
      views: stats.views,
      likes: stats.likes,
      comments: stats.comments,
    },
    timestamp: snippet.publishedAt,
    url: `https://www.youtube.com/watch?v=${videoId}`,
  };
}
