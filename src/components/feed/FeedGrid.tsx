/**
 * FeedGrid.tsx
 * Main feed grid layout component.
 */

'use client';

import type { SocialPost, FeedResponse } from 'lib/api/types';
import { ErrorState } from './ErrorState';
import { EmptyState } from './EmptyState';
import { ThreadView } from './ThreadView';
import { groupPostsIntoThreads } from 'lib/utils/threadGrouping';

interface FeedGridProps {
  posts: SocialPost[];
  errors: FeedResponse['errors'];
}

export default function FeedGrid({ posts, errors }: FeedGridProps) {
  const hasErrors = errors.length > 0;
  const hasPosts = posts.length > 0;

  // Group posts into threads
  const threads = groupPostsIntoThreads(posts);

  return (
    <div className="space-y-6">
      {/* Display Errors */}
      {hasErrors && (
        <div className="space-y-4">
          {errors.map((error, index) => (
            <ErrorState
              key={index}
              platform={error.platform}
              message={error.message}
            />
          ))}
        </div>
      )}

      {/* Display Threads or Empty State */}
      {hasPosts ? (
        <div className="grid gap-6 grid-cols-1">
          {threads.map((thread) => (
            <ThreadView key={thread.id} thread={thread} />
          ))}
        </div>
      ) : (
        !hasErrors && <EmptyState />
      )}
    </div>
  );
}
