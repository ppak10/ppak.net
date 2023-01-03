/**
 * tex_yoda_2_case.tsx
 * Case for tex yoda 2, printed in 4 parts.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PrintPreviews from 'react_three/components/PrintPreviews';

// Constants
const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

const SVG_HEIGHT = 100;
const SVG_WIDTH = 200;

const PRINT_PREVIEWS_CASE = [
  {
    buttonText: 'Case',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/top_bottom.stl',
  },
  {
    buttonText: 'Top',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/top.stl',
  },
  {
    buttonText: 'Bottom',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/bottom.stl',
  },
];

const PRINT_PREVIEWS_BOTTOM = [
  {
    buttonText: 'Assembled',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/bottom.stl',
  },
  {
    buttonText: 'Left',
    gcodeScale: 0.8,
    gcodeUrl: '/bucket/gcode/project/tex_yoda_2_case/bottom_left.gcode',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/bottom_left.stl',
  },
  {
    buttonText: 'Right',
    gcodeScale: 0.8,
    gcodeUrl: '/bucket/gcode/project/tex_yoda_2_case/bottom_right.gcode',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/bottom_right.stl',
  },
];

const PRINT_PREVIEWS_TOP = [
  {
    buttonText: 'Assembled',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/top.stl',
  },
  {
    buttonText: 'Left',
    gcodeScale: 0.8,
    gcodeUrl: '/bucket/gcode/project/tex_yoda_2_case/top_left.gcode',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/top_left.stl',
  },
  {
    buttonText: 'Right',
    gcodeScale: 0.8,
    gcodeUrl: '/bucket/gcode/project/tex_yoda_2_case/top_right.gcode',
    stlScale: 0.8,
    stlUrl: '/bucket/stl/project/tex_yoda_2_case/top_right.stl',
  },
];

// Styled Components
import { StyledPrintPreviewsSection } from 'react_three/styled';
const StyledTEXYoda2Case = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const TEXYoda2Case: NextPage = () => (
  <StyledTEXYoda2Case>
    <StyledPrintPreviewsSection>
      <h1 style={{ gridArea: 'heading' }}>TEX Yoda 2 Case</h1>
      <p style={{ gridArea: 'paragraph'}}>
        &emsp;The original packaging that the keyboard came in was rather large
        and flimsy and not meant for prolonged use. As such, a dedicated case
        for this keyboard would be one that provides more storage space along
        with a suitable cover to provide adequate protection. Due to the size of
        the keyboard, a single print for the bottom an top portions were divided
        and printed separately and assembled.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_CASE} />
    </StyledPrintPreviewsSection>
    <p>
      &emsp;In order for this print to fit on the 200 mm x 200 mm area of the
      printing bed the top and bottom portions of the print were cut in half and
      printed separately. Borrowing a technique commonly used in carpentry, this
      print used a dovetail cut so the separate parts can be assembled after
      print and for this I followed the tutorial listed below. 
    </p>
    <figure>
      <iframe
        src="https://www.youtube.com/embed/zim50mPv6fw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <figcaption>
        Tutorial for cutting model with a dovetail. 
      </figcaption>
    </figure>
    <p>
      &emsp;Using this dovetail technique the print was able to fit in the space
      provided by the print bed but required 4 separate print instead of 2.
    </p>
    <StyledPrintPreviewsSection>
      <h1 style={{ gridArea: 'heading' }}>Bottom Cover</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The bottom portion of this print accommodates the rubber stoppers
        attached to the bottom of the keyboard with divots placed in their
        expected locations. This was printed was printed in two parts, left and
        right, with the separate portions assembled with the dovetail cut. The
        measurements used for this print proved adequate enought to fit the
        keyboard even with the low tolerance of this print.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_BOTTOM} />
    </StyledPrintPreviewsSection>
    <p>
      &emsp;For this print a copy of the keyboard was measured out in Fusion 360
      and this model was used as a negative copy for the case. The critical
      portion of this model are the footers on the bottom which need additional
      depth removed for the case. These areas acted as support over the cavity
      (approximately 25 mm in depth) for storing accessories relavent to the
      keyboard.
    </p>
    <p>
      &emsp;By splitting the bottom portion in two with a dovetail cut, the
      entire keyboard can fit inside the assembled bottom portion of the print.
      Each side of the bottom portion took just over a day to print using
      approximately 130 grams of filament with an extruder width of 0.12 mm.
      On a side note, the dovetail is 0.12 mm in width to account for the
      extruder width. If the print utilized an extruder width of 0.20 mm, the
      dovetail cut print would need to also be updated.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print of the bottom right side of the keyboard case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0747(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0748(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print of the bottom left side of the keyboard case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0757(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0758(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished left and right portions of the print along with elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The separate pieces of this print were assembled together along the
      dovetail cut and were hammered in place. The pieces fit together well and
      did not need any further adhesive to keep the pieces together, removing
      the connected pieces would however be a significant challenge if ever
      attempted.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Left and right portions of the case side by side before assembly."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0759(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Left and right portions of the case assembled."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0760.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Keyboard placed in assembed bottom portion of the case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0761(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Left and right portions of bottom cover assembled to support keyboard.
      </figcaption>
    </figure>
    <p>
      &emsp;The keyboard itself fits well on top of the assembled print but
      does not fit perfectly. This could be adjusted in the future with greater
      tolerances around the divots for the keyboard rubber feet.
    </p>
    <StyledPrintPreviewsSection>
      <h1 style={{ gridArea: 'heading' }}>Top Cover</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The lid portion of the case was also printed in two parts and
        connected later with the dovetail cut. To secure the keyboard, the space
        around the lower keys was slightly extruded and the rest of the keycaps
        had space cut for it. Lastly this portion was connected to the bottom
        with a total of eight magents used and inserted into each corner.
      </p>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_TOP} />
    </StyledPrintPreviewsSection>
    <p>
      &emsp;The printing process for the lid portion was similar to the bottom
      portions as each took just over a day and approximately 130 grams of
      filament. The extruder width was kept the same at 0.12 mm with the
      following logo extruded on the right portion of the lid.
    </p>
    <Image
      alt="TEX logo used on lid"
      height={SVG_HEIGHT}
      src="/bucket/svg/project/tex_yoda_2_case/tex_logo.svg"
      width={SVG_WIDTH}
    />
    <figure>
      <Carousel>
        <Image
          alt="Finished top right portion of the case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0763(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0764.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top left portion print placed on case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0770(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed print time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0771(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished prints and elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;The prints for both sides of the lid were assembled together similar
      to that of the bottom portion. Magnets were then added to the corner holes
      allowing for the lid to be secured with / without the keyboard in place.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top right portion print placed on case."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0765(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Left and right portions of print before assembly."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0772(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Case lid assembled."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0773(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Assembled lid attached to bottom portion of the case.
      </figcaption>
    </figure>
    <p>
      &emsp;I added a couple of stickers to the top of the lid and tested
      opening and closing the case. The main issue I ran into was that the lid
      held on to the keyboard, lifting it out of the case when removed. I found
      a way around this by bending the lid up to release the keyboard so I only
      lift up the lid when pulling up. The bottom portion of the print would
      have also benefited from including slots to help when detaching the lid.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Case with keyboard and lid attached"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0776(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Case with keyboard and lid removed"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/tex_yoda_2_case/IMG_0777(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Keyboard case in open and closed position.
      </figcaption>
    </figure>
    <p>
      &emsp;In all I am pleased with the way this project turned out as I now
      have a place that I can house my expensive keyboard. I learned how to cut
      up a print so that it will fit on my print bed and assemble it later
      through the use of a dovetail cut. In the future I hope to build out a
      similar case for another keyboard but utilize a larger printer so I do not
      have to assemble it from multiple pieces.
    </p>
  </StyledTEXYoda2Case>
);

export default TEXYoda2Case;
