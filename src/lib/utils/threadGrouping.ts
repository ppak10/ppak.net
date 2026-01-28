/**
 * threadGrouping.ts
 * Utilities for grouping posts into threads.
 */

import type { SocialPost, BlueskyPost } from 'lib/api/types';

export interface Thread {
  id: string;
  posts: SocialPost[];
  rootUri?: string;
}

/**
 * Groups posts into threads based on reply relationships.
 * Bluesky posts that are part of the same conversation are grouped together.
 * YouTube videos and Reddit posts are always standalone.
 */
export function groupPostsIntoThreads(posts: SocialPost[]): Thread[] {
  const threads: Thread[] = [];
  const processedPostIds = new Set<string>();

  // First pass: identify root posts and their threads
  const threadMap = new Map<string, SocialPost[]>();

  posts.forEach(post => {
    if (post.platform === 'bluesky') {
      const blueskyPost = post as BlueskyPost;

      if (blueskyPost.reply?.root?.uri) {
        // This is a reply, group it with its root
        const rootUri = blueskyPost.reply.root.uri;
        if (!threadMap.has(rootUri)) {
          threadMap.set(rootUri, []);
        }
        threadMap.get(rootUri)!.push(post);
      } else {
        // This is a root post, check if it has replies coming later
        const postUri = `at://${blueskyPost.author.handle.replace('@', '')}/app.bsky.feed.post/${post.id}`;
        if (!threadMap.has(postUri)) {
          threadMap.set(postUri, []);
        }
        threadMap.get(postUri)!.unshift(post); // Add root post at the beginning
      }
    } else {
      // Non-Bluesky posts (YouTube) are standalone
      threadMap.set(`${post.platform}-${post.id}`, [post]);
    }
  });

  // Second pass: create threads from the map
  threadMap.forEach((threadPosts, rootUri) => {
    if (threadPosts.length > 0) {
      // Sort posts in thread by timestamp
      threadPosts.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

      threads.push({
        id: rootUri,
        posts: threadPosts,
        rootUri: rootUri.startsWith('at://') ? rootUri : undefined,
      });

      threadPosts.forEach(post => processedPostIds.add(post.id));
    }
  });

  // Sort threads by the timestamp of the most recent post in each thread
  threads.sort((a, b) => {
    const aLatest = Math.max(
      ...a.posts.map(p => new Date(p.timestamp).getTime())
    );
    const bLatest = Math.max(
      ...b.posts.map(p => new Date(p.timestamp).getTime())
    );
    return bLatest - aLatest;
  });

  return threads;
}
