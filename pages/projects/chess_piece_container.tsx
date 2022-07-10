/**
 * chess_piece_container.tsx
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PrintPreviews from 'react_three/components/PrintPreviews';

// Constants
const PRINT_PREVIEWS_CASE = [
  {
    buttonText: 'Cats Case',
    stlUrl: '/bucket/stl/project/chess_piece_container/cat_container.stl',
  },
  {
    buttonText: 'Dogs Case',
    stlUrl: '/bucket/stl/project/chess_piece_container/dog_container.stl',
  }
];

const PRINT_PREVIEWS_CATS = [
  {
    buttonText: 'Case',
    stlUrl: '/bucket/stl/project/chess_piece_container/cat_container.stl',
  },
  {
    buttonText: 'Bottom',
    gcodeUrl: '/bucket/gcode/project/chess_piece_container/cat_base.gcode',
    stlUrl: '/bucket/stl/project/chess_piece_container/cat_base.stl',
  },
  {
    buttonText: 'Top',
    gcodeUrl: '/bucket/gcode/project/chess_piece_container/cat_cover.gcode',
    stlUrl: '/bucket/stl/project/chess_piece_container/cat_cover.stl',
  },
];

const PRINT_PREVIEWS_DOGS = [
  {
    buttonText: 'Case',
    stlUrl: '/bucket/stl/project/chess_piece_container/dog_container.stl',
  },
  {
    buttonText: 'Bottom',
    gcodeUrl: '/bucket/gcode/project/chess_piece_container/dog_base.gcode',
    stlUrl: '/bucket/stl/project/chess_piece_container/dog_base.stl',
  },
  {
    buttonText: 'Top',
    gcodeUrl: '/bucket/gcode/project/chess_piece_container/dog_cover.gcode',
    stlUrl: '/bucket/stl/project/chess_piece_container/dog_cover.stl',
  },
];

const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

const SVG_HEIGHT = 30;
const SVG_WIDTH = 30;

// Styled Components
import { StyledPrintPreviewsSection } from 'react_three/styled';
const StyledChessPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledChessPieceSVGs = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
`;

const ChessPieceContainer: NextPage = () => (
  <StyledChessPieceContainer>
    <StyledPrintPreviewsSection>
      <h1 style={{ gridArea: 'heading' }}>Chess Piece Container</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;For Christmas we recieved a nice set of resin cast chess pieces of
        cats and dogs. The pieces themselves are pretty sturdy but would
        accumulate damage if simply tossed into a drawer, it would be nice to
        have a case to protect them. The following containers function as cases
        for the cats and dogs chess pieces and can be combined together to form
        a makeshift chessboard.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_CASE} />
    </StyledPrintPreviewsSection>
    <p>
      &emsp;The chess pieces were packaged with plastic tray that was formed to
      tightly secure the pieces inside cardboard box. The box here can also act
      as a chessboard with the checkerboard pattern it displays, hence
      influencing me to adopt a similar functional design with my print. The
      issue occurs once the game is finished when attempting to place the pieces
      back their respective slots as there is no clear indicator for where each
      piece should go.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Information card for chess pieces and crediting original designer."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0679(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Cats and Dogs chess pieces on original container."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0660(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Included container for Cats and Dogs chess pieces."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0743(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Information card, original box, and plastic container molded for each
        piece.
      </figcaption>
    </figure>
    <StyledPrintPreviewsSection printPreviewsRight>
      <h2 style={{ gridArea: 'heading'}}>Cat Chess Piece Container</h2>
      <p style={{ gridArea: 'paragraph'}}>
        &emsp;The case for the cat pieces was designed to provide slots for
        each individual piece with varying height to allow cover to fit
        properly. Both the bottom and top portions of the case utilize debossing
        to provide general information and indicators for each specific piece.
        The case is primarily meant for light stationary use as the separate
        portions are held together with magnets.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_CATS} />
    </StyledPrintPreviewsSection>
    <p>
      &emsp;For the bottom portion of this case, slots for the cat pieces were
      extruded into the body for each specific piece type in order to keep the
      pieces at a consistent height. Each of the cat pieces have a consistent
      square base of around 33.50 mm in width and a slot width of 35 mm was used
      to accomidate variances. An initial slot was sketched out and with the
      rectangular pattern tool, the remaining 15 slots were created. This method
      was also used on the outside of the case to create the 4 x 4 checkerboard
      in order for this print to be utilized as a corner in the chessboard.
    </p>
    <StyledChessPieceSVGs>
      <Image
        alt="Pawn SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-pawn-regular.svg"
        width={SVG_WIDTH}
      />
      <Image
        alt="Rook SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-rook-regular.svg"
        width={SVG_WIDTH}
      />
      <Image
        alt="Knight SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-knight-regular.svg"
        width={SVG_WIDTH}
      />
      <Image
        alt="Bishop SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-bishop-regular.svg"
        width={SVG_WIDTH}
      />
      <Image
        alt="Queen SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-queen-regular.svg"
        width={SVG_WIDTH}
      />
      <Image
        alt="King SVG"
        height={SVG_HEIGHT}
        src="/bucket/svg/project/chess_piece_container/chess-king-regular.svg"
        width={SVG_WIDTH}
      />
    </StyledChessPieceSVGs>
    <p>
      &emsp;Each piece type varies in height ranging from 20 mm for a pawn to
      40 mm for the king. To accommodate this, the slots for each piece type
      were extruded accordingly to keep the tops of each pieces at the same
      height.  In order to indicate where each piece should go, the svg icons
      above were debossed into the each of their respective slots.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0672(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0673(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0674(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print and elapsed time of bottom portion of cats chess piece case.
      </figcaption>
    </figure>
    <p>
      &emsp;This took around two and a half days and used approximately
      300 grams of PLA filament. This print and the following prints were
      configured to use 0.12 mm extruder width and 10% infil with support for
      necessary areas.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Debossed chess piece svgs in slots."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0675(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Checkerboard pattern on case bottom for chessboard corner."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0676(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of cats pieces in case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0677(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of cats pieces in case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0678(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Cat chess pieces on chessboard corner."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0685(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Top and bottom views of the print alongside cat chess pieces.
      </figcaption>
    </figure>
    <p>
      &emsp;In order to keep the top and bottom portions of the case secured to
      each other holes were cut into the corners of each print to hold magnets
      in place. The magnets here come from an old Geomag toy used to create 3D
      shapes but have recently fallen out of use. Instead of discarding these,
      I repurposed them to be used in this case as they still function as slim,
      yet strong magnets.
    </p>
    <figure>
      <Image
        alt="Example of shape created with magnet toy."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/chess_piece_container/IMG_0686(1).JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Example of Geomag toy repurposed for these prints.
      </figcaption>
    </figure>
    <p>
      &emsp;The top portion of this case was a bit more simple as it utilizes
      the same rectangular pattern from the previous print to create the
      checkerboard pattern, however in this case it is on the top. The holes for
      the magnets (~27 mm in height, 7.30 mm in diameter) were kept the same and
      also utilized on these corners as well. This print utilizes debossing
      heavily as the front, back, and inside of the cover has text applied to
      it.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0711(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0713(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finish print and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The text from information card included with the chess pieces along
      with credit to the designer was debossed on to the exterior and interior
      of the print. This removed some material but added significant time to the
      print and data to the .stl and .gcode files. In anycase, the printer was
      able to handle this extra work and resorting to the smallest available
      extruder width helped with capturing the details of small text.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Front view of debossed content in top cover."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0714(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of debossed content in top cover."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0715(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Inside view of debossed content in top cover."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0716(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of debossed content on top cover.
      </figcaption>
    </figure>
    <StyledPrintPreviewsSection>
      <h2 style={{ gridArea: 'heading' }}>Dog Chess Piece Container</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The case for the dog chess pieces copies a lot of the design
        features of the cats chess piece container. The only change in this case
        was to accommodate the circular base of the dog chess pieces as opposed
        to the square cat chess pieces. For this the same process utilizing
        rectangular pattern tool was repeated and the depth of each slot was
        customize for its intended piece.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_DOGS} />
    </StyledPrintPreviewsSection>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0722(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0723(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finish print of the bottom portion of dog pieces case and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;After around 3 days of printing and 300+ grams of filament, the
      bottom portion of the case housing the dog chess pieces finished printing.
      The pieces fit well in their respective slots which had an average
      diameter of 33 mm, although some pieces needed a little bit more force to
      be put in place due to some pieces having more of an oval base.
    </p>
    <figure>
      <Image
        alt="Finished dog case bottom portion print with pieces in place"
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/chess_piece_container/IMG_0725(1).JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Dog chess pieces placed in their respective slots.
      </figcaption>
    </figure>
    <p>
      &emsp;The top cover of the dog chess pieces case is pretty much identical
      to that of the cats chess piece case where the only difference is in the
      content of the debossed text. As such, the print time was relatively the
      same as the other cover print with the same amount of filament.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0731(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0732(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finish print of the top portion of dog pieces case and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The difficult part of finalizing each print was removing the support
      around some of the debossed text while minimizing the damage done to the
      print. Fortunately, the smaller text does not utilize support but the text
      for the Dog and Cat labels utilized a small amount of support contributed
      to print scratches when trying to remove them. In the future I will
      probably spend more time in the slicer to indicate areas on the print that
      should not have printed support.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished case prints displaying titles."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0733(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished case prints displaying piece descriptions."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0734(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished case prints assembled into a chessboard."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/chess_piece_container/IMG_0735(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished prints assembled into case and chessboard configuration.
      </figcaption>
    </figure>
    <p>
      &emsp;The prints were finally assembled with the last step being to insert
      the magnets into their given slots. The magnets help keep the top and
      bottom portions of the print in place in case configuration but also aided
      in securing the corners when in the chessboard configuration. In the end
      this project was a success as it fulfilled the need for keeping custom
      chess safe while the additional functionality of utilizing the container
      provided an added bonus.
    </p>
  </StyledChessPieceContainer>
);

export default ChessPieceContainer;
