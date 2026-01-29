/**
 * types.ts
 * Shared type definitions for social media feed integrations.
 */

export interface BlueskyPost {
  id: string;
  platform: 'bluesky';
  author: {
    name: string;
    handle: string;
    avatar?: string;
  };
  content: {
    text: string;
    images?: string[];
    video?: {
      url: string;
      thumbnail?: string;
    };
  };
  engagement: {
    likes: number;
    replies: number;
    reposts: number;
  };
  timestamp: string; // ISO 8601 format
  url: string; // Link to original post
  reply?: {
    parent: {
      uri: string;
    };
    root: {
      uri: string;
    };
  };
}

export interface YouTubeVideo {
  id: string;
  platform: 'youtube';
  author: {
    name: string;
    handle: string;
    avatar?: string;
  };
  content: {
    title: string;
    text: string;
    thumbnail: string;
  };
  engagement: {
    views: number;
    likes: number;
    comments: number;
  };
  timestamp: string; // ISO 8601 format
  url: string; // Link to original video
}

export interface RedditPost {
  id: string;
  platform: 'reddit';
  author: {
    name: string;
    handle: string;
    avatar?: string;
  };
  content: {
    title: string;
    text: string;
    thumbnail?: string;
    images?: string[];
    video?: {
      url: string;
      thumbnail?: string;
    };
    link?: string;
  };
  subreddit: string;
  postType: 'text' | 'link' | 'image' | 'video' | 'gallery';
  engagement: {
    upvotes: number;
    comments: number;
    upvoteRatio: number;
  };
  timestamp: string; // ISO 8601 format
  url: string; // Link to original post
}

export type SocialPost = BlueskyPost | YouTubeVideo | RedditPost;

export interface FeedResponse {
  posts: SocialPost[];
  errors: {
    platform: 'bluesky' | 'youtube' | 'reddit';
    message: string;
  }[];
}

// Reddit API response types
export interface RedditListingResponse {
  data: {
    children: Array<{
      data: RedditPostData;
    }>;
    after?: string;
  };
}

export interface RedditPostData {
  id: string;
  name: string;
  title: string;
  selftext: string;
  author: string;
  subreddit: string;
  subreddit_name_prefixed: string;
  permalink: string;
  url: string;
  thumbnail: string;
  created_utc: number;
  score: number;
  upvote_ratio: number;
  num_comments: number;
  is_video: boolean;
  is_gallery?: boolean;
  post_hint?: string;
  media?: {
    reddit_video?: {
      fallback_url: string;
      dash_url?: string;
    };
  };
  preview?: {
    images: Array<{
      source: {
        url: string;
        width: number;
        height: number;
      };
      resolutions: Array<{
        url: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  gallery_data?: {
    items: Array<{
      media_id: string;
    }>;
  };
  media_metadata?: Record<
    string,
    {
      s: {
        u: string;
      };
    }
  >;
}

// YouTube API response types
export interface YouTubeChannelResponse {
  items: Array<{
    contentDetails: {
      relatedPlaylists: {
        uploads: string;
      };
    };
    snippet: {
      title: string;
      customUrl?: string;
      thumbnails: {
        default: { url: string };
      };
    };
  }>;
}

export interface YouTubePlaylistResponse {
  items: YouTubePlaylistItem[];
  nextPageToken?: string;
}

export interface YouTubePlaylistItem {
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      default?: { url: string };
      medium?: { url: string };
      high?: { url: string };
      maxres?: { url: string };
    };
    resourceId: {
      videoId: string;
    };
    channelTitle: string;
  };
}

export interface YouTubeVideoStatsResponse {
  items: Array<{
    id: string;
    statistics: {
      viewCount: string;
      likeCount: string;
      commentCount: string;
    };
  }>;
}

// Bluesky API response types
export interface BlueskyFeedResponse {
  feed: BlueskyFeedItem[];
  cursor?: string;
}

export interface BlueskyFeedItem {
  post: {
    uri: string;
    cid: string;
    author: {
      did: string;
      handle: string;
      displayName?: string;
      avatar?: string;
    };
    record: {
      text: string;
      createdAt: string;
      reply?: {
        parent: {
          uri: string;
        };
        root: {
          uri: string;
        };
      };
      embed?: {
        images?: Array<{
          fullsize: string;
          thumb: string;
          alt?: string;
        }>;
      };
    };
    embed?: {
      $type?: string;
      // For app.bsky.embed.images#view
      images?: Array<{
        fullsize: string;
        thumb: string;
        alt?: string;
      }>;
      // For app.bsky.embed.video#view
      cid?: string;
      playlist?: string;
      thumbnail?: string;
      alt?: string;
      aspectRatio?: {
        width: number;
        height: number;
      };
      // For app.bsky.embed.external#view
      external?: {
        uri: string;
        title: string;
        description: string;
        thumb?: string;
      };
    };
    replyCount: number;
    repostCount: number;
    likeCount: number;
  };
  reply?: {
    parent: BlueskyFeedItem['post'];
    root: BlueskyFeedItem['post'];
  };
}
