/**
 * hairbrush_holders.tsx
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

const PRINT_PREVIEWS_HAIRBRUSH_HOLDERS = [
  {
    buttonText: 'Cylindrical',
    gcodeUrl: '/bucket/gcode/project/hairbrush_holders/cylindrical.gcode',
    stlUrl: '/bucket/stl/project/hairbrush_holders/cylindrical.stl',
  },
  {
    buttonText: 'Oval',
    gcodeUrl: '/bucket/gcode/project/hairbrush_holders/oval_v2.gcode',
    stlUrl: '/bucket/stl/project/hairbrush_holders/oval_v2.stl',
  },
]

// Styled Components
import {
  StyledPrintPreviewSection,
  StyledPrintPreviewsSection
} from 'react_three/styled';

const StyledHairbrushHolders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  pre {
    margin: auto;
    max-width: 100%;

    @media (min-width: ${({ theme }) => theme.size.tablet}) {
      // Increases font size to double for tablet size or greater.
      font-size: 1.25em;
    }
  }
`;

const HairbrushHolders: NextPage = () => (
  <StyledHairbrushHolders>
    <StyledPrintPreviewsSection>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_HAIRBRUSH_HOLDERS} />
      <h1 style={{ gridArea: 'heading' }}>Hairbrush Holders</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;These hairbrush holders were a small weekend project done with the
        intent of tidying up the bathroom counter by providing space to store
        these commonly used items within arms reach. These hairbrush holders
        will be designed to accomodate the cylindrical and oval shapes of the
        brush and will be secured to the side of the sink. This will be the
        first type of print I adhere to a surface using adhesives sufficient
        enough to support itself and contents for a significant period of time.
      </p>
    </StyledPrintPreviewsSection>
    <figure>
      <Image
        alt="Hairbrush and other clutter on sink."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/hairbrush_holders/IMG_0768(1).JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Hairbrushes along with other clutter around the sink.
      </figcaption>
    </figure>
    <StyledPrintPreviewSection right>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/hairbrush_holders/cylindrical.gcode"
        stlUrl="/bucket/stl/project/hairbrush_holders/cylindrical.stl"
      />
      <h2 style={{ gridArea: 'heading' }}>Cylindrical Brush</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;This print is intended to be mounted and hold the cylindrical
        hairbrush providing enough space to expose the brush handle. The brush
        head has a diameter of around <code>60 mm</code> and a height of
        around <code>115 mm</code> and with these dimensions an appropriate
        space was created to fit the brush. A hole was also left towards the
        bottom to allow hair and dust to fall through. Lastly a square (
        <code>26.50 mm</code> x <code>26.50 mm</code> x <code>1.50 mm</code>
        ) for the adhesion sticker was inset into the print to keep the print
        flush with the surface.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;This print was completed in just under 9 hours and utilizes a low
      quality extruder width of around <code>0.28 mm</code> since there were no
      real intricate details to capture in this print. Towards the end of this
      print the space gray color filament was close to running out and thus the
      print was paused and filament swapped with the available light gray. This
      is quite visible in the print but does not detract from the integrity of
      the final print.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0834.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0835.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print (with visible filament swap seam) and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The hairbrush fits well into the holder and does not fall through
      the hole towards the bottom. The holder used a diameter of&nbsp;
      <code>65 mm</code> for the measured head diameter of <code>60 mm</code>,
      thus fits pretty loosely. This is fine as it still achieves the goal of
      providing a slot to store the hairbrush besides the sink countertop.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0841.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print with cylindrical hairbrush in holder."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0843.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back side of finished print with inset for stickers."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0842.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Adhesive stickers."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0840.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print with adhesive stickers in place."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0844.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Different angles of finished print with brush and stickers.
      </figcaption>
    </figure>
    <p>
      &emsp;The stickers however had a measured height of around&nbsp;
      <code>1.80 mm</code> but an inset of a depth of <code>1.50 mm</code> was
      used here to expose enough of the sticker to the intended surface. This
      proved to work well as the print is secured to be flush with the medicine
      cabinet. I believe that this is because there is small&nbsp;
      <code>0.02 mm</code> of space between the print an cabinet.
    </p>
    <pre>
      1.80 mm [sticker height] - (1.50 mm [sticker inset] + 0.28 mm [extruder
      width]) = 0.02 mm [space]
    </pre>
    <figure>
      <Image
        alt="Print secured in place next to medicine cabinet."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/hairbrush_holders/IMG_0846.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Cylindrical hairbrush holder in place next to medicine cabinet.
      </figcaption>
    </figure>
  </StyledHairbrushHolders>
);

export default HairbrushHolders;
