/**
 * bluesky.py
 * API for retrieving posts from bluesky
 */

// Node Modules
import { NextRequest, NextResponse } from 'next/server';
import { fetchBlueskyPosts } from 'lib/api/bluesky';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
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
};
