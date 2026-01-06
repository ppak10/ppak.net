/**
 * ErrorState.tsx
 * Error display component with neobrutalism styling.
 */

'use client';

interface ErrorStateProps {
  platform: string;
  message: string;
}

export function ErrorState({ platform, message }: ErrorStateProps) {
  return (
    <div className="border-4 border-black bg-red-200 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-2xl">⚠️</span>
        <h3 className="text-xl font-black capitalize">
          {platform} Error
        </h3>
      </div>
      <p className="font-medium text-gray-800">
        {message}
      </p>
      <p className="mt-2 text-sm font-medium text-gray-600">
        Don&apos;t worry! Posts from other platforms will still be displayed.
      </p>
    </div>
  );
}
