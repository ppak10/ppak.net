/**
 * index.tsx
 * Home page for next.js app.
 */

// Node Modules
// import { createClient } from 'contentful';
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import Link from 'next/link';
// import { useEffect } from 'react';
import styled from 'styled-components';

// Constants
// Thumbnails should have 4:3 aspect ratio to appear correctly.
const THUMBNAIL_HEIGHT = 230;
const THUMBNAIL_WIDTH = 307;

// Styled Components
import { StyledListItem, StyledProjects } from 'common/styled';

const StyledHome = styled.div`
`;

const Home: NextPage = () => {

  // useEffect(() => {
  //   // const contentful = require('contentful')
  //   const client = createClient({
  //     space: 'n62kcoo4niox',
  //     environment: 'master', // defaults to 'master' if not set
  //     accessToken: 'DvTvqWA46uOKM1dIopVH59xiuJyuJOFBNRZx3GSLugQ'
  //   })

  //   client.getEntries()
  //   .then((response) => console.log(response.items))
  //   .catch(console.error)
  // }, []);

  return (
    <StyledHome>
      <h1>Welcome!</h1>
      <h2>Check out my favorite projects</h2>
      <StyledProjects>
        <StyledListItem>
          <Link href="/projects/custom_keycaps">
            <h3>
              Custom Keycaps
            </h3>
          </Link>
          <Image
            alt="Dark image of custom pacman ghost keycap"
            height={THUMBNAIL_HEIGHT}
            width={THUMBNAIL_WIDTH}
            src="/bucket/heic/project/custom_keycaps/thumbnail.heic"
          />
        </StyledListItem>
        <StyledListItem>
          <Link href="/projects/breville_hopper">
            <h3>
              Breville Hopper
            </h3>
          </Link>
          <Image
            alt="Coffee bean hopper extension print attached to Breville espresso maker."
            height={THUMBNAIL_HEIGHT}
            width={THUMBNAIL_WIDTH}
            src="/bucket/jpeg/project/breville_hopper/thumbnail.JPEG"
          />
        </StyledListItem>
        <StyledListItem>
          <Link href="/projects/lenovo_adjustable_notebook_stand">
            <h3>
              ThinkPad Dock Stand Attachment
            </h3>
          </Link>
          <Image
            alt="Dock and power supply holder print attach to Lenovo adjustable notebook stand."
            height={THUMBNAIL_HEIGHT}
            width={THUMBNAIL_WIDTH}
            src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/thumbnail.JPEG"
          />
        </StyledListItem>
        <StyledListItem>
          <Link href="/projects/chess_piece_container">
            <h3>
              Chess Piece Container
            </h3>
          </Link>
          <Image
            alt="Dog and cat chess pieces in their respective containers"
            height={THUMBNAIL_HEIGHT}
            src="/bucket/jpeg/project/chess_piece_container/thumbnail.JPEG"
            width={THUMBNAIL_WIDTH}
          />
        </StyledListItem>
        <StyledListItem>
          <Link href="/projects/tex_yoda_2_case">
            <h3>
              TEX Yoda II Case
            </h3>
          </Link>
          <Image
            alt="TEX Yoda II keyboard along with case parts."
            height={THUMBNAIL_HEIGHT}
            src="/bucket/jpeg/project/tex_yoda_2_case/thumbnail.JPEG"
            width={THUMBNAIL_WIDTH}
          />
        </StyledListItem>
      </StyledProjects>
    </StyledHome>
  );
}

export default Home
