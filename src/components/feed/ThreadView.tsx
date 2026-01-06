/**
 * ThreadView.tsx
 * Component for displaying a thread of posts.
 */

'use client';

import type { Thread } from 'lib/utils/threadGrouping';
import { BlueskyPost } from './BlueskyPost';
import { InstagramPost } from './InstagramPost';

interface ThreadViewProps {
  thread: Thread;
}

export function ThreadView({ thread }: ThreadViewProps) {
  const { posts } = thread;

  if (posts.length === 1) {
    // Single post, render normally
    const post = posts[0];
    return post.platform === 'bluesky' ? (
      <BlueskyPost post={post} />
    ) : (
      <InstagramPost post={post} />
    );
  }

  // Multiple posts in thread
  return (
    <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {posts.map((post, index) => (
        <div key={post.id}>
          <div className={index > 0 ? 'border-t-4 border-black' : ''}>
            {post.platform === 'bluesky' ? (
              <BlueskyPost post={post} isInThread={true} isLastInThread={index === posts.length - 1} />
            ) : (
              <InstagramPost post={post} />
            )}
          </div>
          {index < posts.length - 1 && (
            <div className="flex items-center gap-2 bg-gray-100 px-6 py-2">
              <div className="h-0.5 w-8 bg-black"></div>
              <span className="text-sm font-bold text-gray-600">Thread continues</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
