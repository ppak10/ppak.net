/**
 * API route for fetching Bluesky posts.
 * This allows client-side components to fetch more posts.
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchBlueskyPosts } from 'lib/api/bluesky';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const cursor = searchParams.get('cursor') || undefined;
  const limit = parseInt(searchParams.get('limit') || '20', 10);

  try {
    const result = await fetchBlueskyPosts(limit, cursor);

    if (result === null) {
      return NextResponse.json(
        { error: 'Failed to fetch Bluesky posts' },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Bluesky API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
