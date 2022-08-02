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
];

const PRINT_PREVIEWS_OVAL_HAIRBRUSH_HOLDER = [
  {
    buttonText: 'V1',
    gcodeUrl: '/bucket/gcode/project/hairbrush_holders/oval_v1.gcode',
    stlUrl: '/bucket/stl/project/hairbrush_holders/oval_v1.stl',
  },
  {
    buttonText: 'V2',
    gcodeUrl: '/bucket/gcode/project/hairbrush_holders/oval_v2.gcode',
    stlUrl: '/bucket/stl/project/hairbrush_holders/oval_v2.stl',
  },
];

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
    overflow: auto;

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
      <h2 style={{ gridArea: 'heading' }}>Cylindrical Hairbrush</h2>
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
    <StyledPrintPreviewsSection>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_OVAL_HAIRBRUSH_HOLDER} />
      <h1 style={{ gridArea: 'heading' }}>Oval Hairbrush</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The &quot;oval&quot; hairbrush has bristles that protrude from the
        oval brush head in a cresent shape. The length from the head of the
        brush and the end of the bristle was measured to be approximately&nbsp;
        <code>45 mm</code>. The width of the brush head is approximately&nbsp;
        <code>65 mm</code> and along with the height dimensions, these values
        were used with the arc tool in Fusion 360 was used to sketch out the
        cresent slot for the brush head. The first version of this design did
        not include the <code>15 mm</code> of space to account for the sink
        counter overhang and to account for this <code>20 mm</code> of extra
        space was added to that side of the print.
      </p>
    </StyledPrintPreviewsSection>
    <figure>
      <Image
        alt="Intended placement of print."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/hairbrush_holders/IMG_0845.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Print was meant to be placed alongside counter.
      </figcaption>
    </figure>
    <p>
      &emsp;The print here uses the same settings as the previous hairbrush
      holder (<code>0.28 mm</code> extruder width and <code>10%</code> infill).
      The print time was estimated to take just over 14 hours and was completed
      in just under 13 and a half hours. Adding this extra material between the
      surfaces added around an extra 3 hours of print time as V1 had an
      estimated completion time of 11 hours and 19 minutes.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Front view of finished print on bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0847.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0848.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The print finished correctly with a couple of small defects between
      some of the layers. Overall, the space made for the brush and adhesive
      stickers fit very well.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Front view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0849.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0850.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of finished print with stickers in place."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/hairbrush_holders/IMG_0851.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;Instead of next to the sink counter, the brush holder was placed
      inside the sink cabinet as it would be directly outside of view. This is a
      design consideration I did not think of until I sought outside feedback
      and will take this into consideration for my future projects.
    </p>
    <figure>
      <Image
        alt="Print placed underneath counter"
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/hairbrush_holders/IMG_0852.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Print placed inside sink cabinet door, away from view.
      </figcaption>
    </figure>
    <p>
      &emsp;With these hairbrush holders in place, the sink counter is a bit
      tidier. For a home improvement projects like this, I will make sure to
      involve the considerations of the home owner during the design process to
      best fit their constraints.
    </p>
    <figure>
      <Image
        alt="Clean sink countertop"
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/hairbrush_holders/IMG_0854.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Counter top is a bit cleaner without the clutter of hairbrushes.
      </figcaption>
    </figure>
  </StyledHairbrushHolders>
);

export default HairbrushHolders;
