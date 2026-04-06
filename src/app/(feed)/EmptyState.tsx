/**
 * EmptyState.tsx
 * Empty state component with neobrutalism styling.
 */

'use client';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = 'No posts available',
}: EmptyStateProps) {
  return (
    <div className="border-2 border-border bg-main p-12 text-center shadow-shadow-lg">
      <div className="mb-4 text-6xl">📭</div>
      <h3 className="mb-2 text-2xl font-black">{message}</h3>
      <p className="font-medium text-foreground/70">
        Check back later for new content!
      </p>
    </div>
  );
}
