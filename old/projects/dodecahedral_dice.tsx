/**
 * dodecahedral_dice.tsx
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PrintPreview from 'react_three/components/PrintPreview';

// Constants
const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

// Styled Components
import { StyledPrintPreviewSection } from 'react_three/styled';
const StyledDodecahedralDice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const DodecahedralDice: NextPage = () => (
  <StyledDodecahedralDice>
    <StyledPrintPreviewSection>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/dodecahedral_dice.gcode"
        stlScale={3}
        stlUrl="/bucket/stl/project/dodecahedral_dice.stl"
      />
      <h1 style={{ gridArea: 'heading' }}>Dodecahedral Dice</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;A quick tutorial I followed to create a large scale
        dodecaheral dice with Fusion 360 exploring some of the available surface
        tools and constraints.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;This tutorial provided directions for creating a solid body through
      surface tools. With the example of a dodecahedron, I used the polygon tool
      to sketch out a pentagon from the center origin point for the first side.
      For the second side I copied and rotated the surface body 116.6° along one
      of the first sides used the circular pattern along the origin to repeat
      this 5 times. With the bottom half made I flipped and copied to create the
      top half and moved it in place with point to point.
    </p>
    <p>
      &emsp;With the surface bodies in place, I stitched them together to create
      a solid body filets could be applied to 2 mm for rounded edges. Lastly the
      numbers of the dice were applied through selecting a surface and adding
      the appropriate text. With the sketches in place, I cut each of the
      numbers into the solid body using the extrude tool.
    </p>
    <figure>
      <iframe
        src="https://www.youtube.com/embed/iUGoevQzW-g"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ aspectRatio: '16 / 9' }}
      />
      <figcaption>
        Tutorial for creating a dodecahedral dice.
      </figcaption>
    </figure>
    <p>
      &emsp;For this print I configured the slicer to upscale the model by
      around 200% with minimal infill and scaffolding for supporting some of the
      extruded portions. I also set the extruder width to the lowest setting
      in order to smooth out the filet edges.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/dodecahedral_dice/IMG_0424.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed print time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/dodecahedral_dice/IMG_0425.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image 
          alt="Finish print detached from scaffolding."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/dodecahedral_dice/IMG_0427.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print (200% scale, 10% infill, 0.12mm extruder width) and
        elapsed time.
      </figcaption>
    </figure>
    <p>
      &emsp;Though this print provided no practical purpose, it did teach me
      some new tools I could use in Fusion 360 in future projects.
    </p>
  </StyledDodecahedralDice>
);

export default DodecahedralDice;
