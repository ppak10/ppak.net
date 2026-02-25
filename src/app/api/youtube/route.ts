/**
 * route.ts
 * API for retrieving videos from YouTube
 */

// Node Modules
import { NextRequest, NextResponse } from 'next/server';
import { fetchYouTubeVideos } from 'lib/api/youtube';

export const dynamic = 'force-dynamic';

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const result = await fetchYouTubeVideos(
      process.env.YOUTUBE_API_KEY || '',
      limit
    );

    if (result === null) {
      return NextResponse.json(
        { error: 'Failed to fetch YouTube videos' },
        { status: 500 }
      );
    }

    return NextResponse.json({ posts: result });
  } catch (error) {
    console.error('YouTube API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
};
