/**
 * types.ts
 * Shared type definitions for social media feed integrations.
 */

export interface BasePost {
  id: string;
  platform: 'bluesky' | 'instagram';
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
    reposts?: number;
  };
  timestamp: string; // ISO 8601 format
  url: string; // Link to original post
}

export interface BlueskyPost extends BasePost {
  platform: 'bluesky';
  engagement: {
    likes: number;
    replies: number;
    reposts: number;
  };
  reply?: {
    parent: {
      uri: string;
    };
    root: {
      uri: string;
    };
  };
}

export interface InstagramPost extends BasePost {
  platform: 'instagram';
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

export type SocialPost = BlueskyPost | InstagramPost;

export interface FeedResponse {
  posts: SocialPost[];
  errors: {
    platform: 'bluesky' | 'instagram';
    message: string;
  }[];
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

// Instagram API response types
export interface InstagramMediaResponse {
  data: InstagramMediaItem[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export interface InstagramMediaItem {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  username?: string;
}
