/**
 * index.tsx
 * Main page for displaying projects.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import Link from 'next/link';

// Constants
// Thumbnails should have 4:3 aspect ratio to appear correctly.
const THUMBNAIL_HEIGHT = 230;
const THUMBNAIL_WIDTH = 307;

// Styled Components
import { StyledListItem, StyledProjects } from 'common/styled';

const Projects: NextPage = () => {
  return (
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
      <StyledListItem>
        <Link href="/projects/magsafe_charger_case">
          <h3>
            iPhone MagSafe Charger Case
          </h3>
        </Link>
        <Image
          alt="Apple iPhone magsafe charger enclosed in printed case."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/magsafe_charger_case/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/morty_helmet">
          <h3>
            Morty Helmet
          </h3>
        </Link>
        <Image
          alt="3D render of Morty helmet."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/morty_helmet/thumbnail.jpg"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/cabinet_stilt">
          <h3>
            Cabinet Stilt
          </h3>
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
          <h3>
            Dodecahedral Dice
          </h3>
        </Link>
        <Image
          alt="3 sides of large 12 sided dodecahedral dice."
          height={THUMBNAIL_HEIGHT}
          width={THUMBNAIL_WIDTH}
          src="/bucket/jpeg/project/dodecahedral_dice/thumbnail.JPEG"
        />
      </StyledListItem>
      <StyledListItem>
        <Link href="/projects/hairbrush_holders">
          <h3>
            Hairbrush Holders
          </h3>
        </Link>
        <Image
          alt="Hairbrush holders in their respective places on the sink."
          height={THUMBNAIL_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/thumbnail.JPEG"
          width={THUMBNAIL_WIDTH}
        />
      </StyledListItem>
    </StyledProjects>
  );
};

export default Projects;
