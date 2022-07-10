/**
 * index.tsx
 * Main page for displaying projects.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// Constants
// Thumbnails should have 4:3 aspect ratio to appear correctly.
const THUMBNAIL_HEIGHT = 230;
const THUMBNAIL_WIDTH = 307;

// Styled Components
import { StyledListItem } from 'common/styled';
const StyledProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  padding: 0px;

  ${StyledListItem} {
    align-items: center;
    min-width: 300px;
    flex: 1;

    h3 {
      margin: 0px;
    }

    img {
      border-radius: 0.25em;
    }
  }
`;

const Projects: NextPage = () => {
  return (
    <StyledProjects>
      <StyledListItem>
        <Link href="/projects/morty_helmet">
          <a>
            <h3>
              Morty Helmet
            </h3>
          </a>
        </Link>
        <Image
          alt="3D render of Morty helmet."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/morty_helmet/thumbnail.jpg"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/breville_hopper">
          <a>
            <h3>
              Breville Hopper
            </h3>
          </a>
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
          <a>
            <h3>
              ThinkPad Dock Stand Attachment
            </h3>
          </a>
        </Link>
        <Image
          alt="Dock and power supply holder print attach to Lenovo adjustable notebook stand."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/magsafe_charger_case">
          <a>
            <h3>
              iPhone MagSafe Charger Case
            </h3>
          </a>
        </Link>
        <Image
          alt="Apple iPhone magsafe charger enclosed in printed case."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/magsafe_charger_case/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/cabinet_stilt">
          <a>
            <h3>
              Cabinet Stilt
            </h3>
          </a>
        </Link>
        <Image
          alt="Robot vacuum exiting space underneath cabinet provided by printed lifts."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/dodecahedral_dice">
          <a>
            <h3>
              Dodecahedral Dice
            </h3>
          </a>
        </Link>
        <Image
          alt="3 sides of large 12 sided dodecahedral dice."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/dodecahedral_dice/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/chess_piece_container">
          <a>
            <h3>
              Chess Piece Container
            </h3>
          </a>
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
          <a>
            <h3>
              TEX Yoda II Case
            </h3>
          </a>
        </Link>
        <Image
          alt="TEX Yoda II keyboard along with case parts."
          height={THUMBNAIL_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/thumbnail.JPEG"
          width={THUMBNAIL_WIDTH}
        />
      </StyledListItem>
    </StyledProjects>
  );
};

export default Projects;
