/**
 * ThreadView.tsx
 * Component for displaying a thread of posts.
 */

'use client';

import type { Thread } from 'lib/utils/threadGrouping';
import { BlueskyPost } from './BlueskyPost';
import { YouTubeVideoCard } from './YouTubeVideo';
import { RedditPostCard } from './RedditPost';

interface ThreadViewProps {
  thread: Thread;
}

export function ThreadView({ thread }: ThreadViewProps) {
  const { posts } = thread;

  if (posts.length === 1) {
    // Single post, render based on platform
    const post = posts[0];
    if (post.platform === 'youtube') {
      return <YouTubeVideoCard post={post} />;
    }
    if (post.platform === 'reddit') {
      return <RedditPostCard post={post} />;
    }
    return <BlueskyPost post={post} />;
  }

  // Multiple posts in thread (only Bluesky supports threads)
  return (
    <div className="border-2 border-border bg-background shadow-shadow-lg">
      {posts.map((post, index) => (
        <div key={post.id}>
          <div className={index > 0 ? 'border-t-4 border-border' : ''}>
            {post.platform === 'bluesky' ? (
              <BlueskyPost
                post={post}
                isInThread={true}
                isFirstInThread={index === 0}
                isLastInThread={index === posts.length - 1}
              />
            ) : post.platform === 'youtube' ? (
              <YouTubeVideoCard post={post} />
            ) : (
              <RedditPostCard post={post} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
