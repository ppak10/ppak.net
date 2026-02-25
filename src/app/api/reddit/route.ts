/**
 * route.ts
 * API for retrieving posts from Reddit
 */

// Node Modules
import { NextRequest, NextResponse } from 'next/server';
import { fetchRedditPosts } from 'lib/api/reddit';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const result = await fetchRedditPosts(limit);

    if (result === null) {
      return NextResponse.json(
        { error: 'Failed to fetch Reddit posts' },
        { status: 500 }
      );
    }

    return NextResponse.json({ posts: result });
  } catch (error) {
    console.error('Reddit API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};
