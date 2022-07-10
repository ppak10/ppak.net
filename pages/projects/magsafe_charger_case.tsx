/**
 * magsafe_charger_case.tsx
 * Magsafe charger case project.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PrintPreview from 'react_three/components/PrintPreview';
import PrintPreviews from 'react_three/components/PrintPreviews';

// Constants
const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

const PRINT_PREVIEWS_CASE = [
  {
    buttonText: 'Mk1',
    stlUrl: '/bucket/stl/project/magsafe_charger_case/mk1.stl',
  },
  {
    buttonText: 'Mk2 V1',
    stlUrl: '/bucket/stl/project/magsafe_charger_case/mk2v1.stl',
  },
  {
    buttonText: 'Mk2 V2',
    stlUrl: '/bucket/stl/project/magsafe_charger_case/mk2v2.stl',
  }
];

// Styled Components
import {
  StyledPrintPreviewSection,
  StyledPrintPreviewsSection
} from 'react_three/styled';

const StyledMagsafeChargerCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const MagsafeChargerCase: NextPage = () => (
  <StyledMagsafeChargerCase>
    <StyledPrintPreviewsSection>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_CASE} />
      <h1 style={{ gridArea: 'heading' }}>iPhone MagSafe Charger Case</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;I wanted to avoid the issue with tangled cables when tossing the
        charger into my pocket or backpack. For this I printed a case with the
        goal of being small enough to fit in my pocket while being accessible
        enough to use while in the case.
      </p>
    </StyledPrintPreviewsSection>
    <StyledPrintPreviewSection right>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/magsafe_charger_case/mk1.gcode"
        stlUrl="/bucket/stl/project/magsafe_charger_case/mk1.stl"
      />
      <h2 style={{ gridArea: 'heading' }}>Mark 1</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;This print utilized higher tolerances around cable management as
        it was meant to test out initial measurements. I also added some
        debossing and printed this vertically to capture interior space without
        need to add in support. However, due to the low surface adhesion of this
        print bed, it fell over and failed.
      </p>
    </StyledPrintPreviewSection>
    <figure>
      <Carousel>
        <Image
          alt="View of failed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk1/IMG_0304.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Knocked over print in view of wasted filament."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk1/IMG_0305.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk1/IMG_0306.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        View of failed print and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The print fell over mid-print and continued printing until I
      eventually intervened and turned off the printer. The adhesion to the
      print bed is usually pretty strong however due to the design of this case
      there was less space for adhesion.
    </p>
    <figure>
      <Image
        alt="Charger utilized with failed print."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/magsafe_charger_case/mk1/IMG_0307.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        MagSafe charger and cables inserted in remaining print.
      </figcaption>
    </figure>
    <p>
      &emsp;The print was not an entire loss as the MagSafe charger portion of
      the case was completed enough to show that measurements were correct. If
      printed again in the future, it may be successful if printed horizontally
      without support as the space should be small enough to bridge filament.
    </p>
    <StyledPrintPreviewSection>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/magsafe_charger_case/mk2v1.gcode"
        stlUrl="/bucket/stl/project/magsafe_charger_case/mk2v1.stl"
      />
      <h2 style={{ gridArea: 'heading' }}>Mark 2 Version 1</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;This case was redesigned to build on top of the measurements of
        the previous print and utilize a smaller form factor. The area
        underneath the MagSafe charger would house the extra cable and utilize a
        magnet to keep the puck in place. Due to the small form factor, the
        cables needed to be organized in a specific way to stay in place. As
        such it is meant to be used in the case while only exposing the needed
        amount of cable.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;Since this print was relatively small, it took just less than two
      hours to print. A slot was desinged for a spare the magnet in order to
      keep the puck portion of the MagSafe charger in place. The area for the
      cables was a bit too small and little extra had to be kept outside the
      case. In the next print, the design will be updated in order to add more
      space for the cable so the puck ends up flush with the case.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="View of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v1/IMG_0308.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v1/IMG_0309.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Charger utilized with print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v1/IMG_0310.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished Print and elapsed time along with charger inserted.
      </figcaption>
    </figure>
    <StyledPrintPreviewSection>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/magsafe_charger_case/mk2v2.gcode"
        stlUrl="/bucket/stl/project/magsafe_charger_case/mk2v2.stl"
      />
      <h2 style={{ gridArea: 'heading' }}>Mark 2 Version 2</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The design was slightly updated to add more space for cable
        storage while keeping the dimensions of the print pretty much the same.
        The extra space allowed for the entirely of the cable to be kept inside
        the case as long as the cable was properly wrapped. However, charging
        inside the case would not be possible with the magnet as it seems to
        interfere with charging.
      </p>
    </StyledPrintPreviewSection>
    <figure>
      <Carousel>
        <Image
          alt="View of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v2/IMG_0311(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v2/IMG_0312(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        View of print and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The print was updated to add extra space for the cable along with
      increasing filet and chamfers. This ended up successful but the tedious
      nature of wrapping the cable properly made removal / insertion of the
      charger rather impractical, since if done improperly the puck does not end
      up flush with the rest of the case. As such it was designed to allow a
      small portion of the cable exposed to connect to an outlet while keeping
      the remainder in the case.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Cable placed in area under charger."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v2/IMG_0313(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Charger utilized with print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/magsafe_charger_case/mk2v2/IMG_0314(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        MagSafe charger and cables inserted in print.
      </figcaption>
    </figure>
    <p>
      &emsp;Unfortunately an issue occurred when trying to secure the puck
      portion of the MagSafe charger in place with the magnet as it would not
      charge. This was not tested beforehand and only realized when assembling
      the separate parts of this project. The case can be used without the
      magent to keep the puck in place but defeats some of the designs as that
      space could have been used to house the cable instead. With this
      knowledge, I may revisit this project in the future with a different
      design.
    </p>
  </StyledMagsafeChargerCase>
);

export default MagsafeChargerCase;
