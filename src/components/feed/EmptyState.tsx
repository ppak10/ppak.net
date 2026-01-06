/**
 * EmptyState.tsx
 * Empty state component with neobrutalism styling.
 */

'use client';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = 'No posts available' }: EmptyStateProps) {
  return (
    <div className="border-4 border-black bg-[#fbbf24] p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-4 text-6xl">📭</div>
      <h3 className="mb-2 text-2xl font-black">{message}</h3>
      <p className="font-medium text-gray-700">
        Check back later for new content!
      </p>
    </div>
  );
}
