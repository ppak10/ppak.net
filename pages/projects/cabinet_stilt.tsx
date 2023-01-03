/**
 * cabinet_stilt.tsx
 * Print to lift up cabinet to allow robot vacuum to go under.
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
const StyledCabinetStilt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CabinetStilt: NextPage = () => (
  <StyledCabinetStilt>
    <StyledPrintPreviewSection>
      <PrintPreview
        gcodeScale={3}
        gcodeUrl="/bucket/gcode/project/cabinet_stilt.gcode"
        stlScale={3}
        stlUrl="/bucket/stl/project/cabinet_stilt.stl"
      />
      <h1 style={{ gridArea: 'heading' }}>Cabinet Bench Stilts</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;I ran into an issue where the robot vacuum bought to clean up
        dust and litter in my room was not cleaning up the area underneath the
        cabinet bench due to its low clearance. To fix this I designed and
        printed shoes to act as stilts to provide enough clearance to allow the
        vacuum to reach that area.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp; The vacuum would often clean the area around the cabinet bench and
      partially clean the area underneath until the intake would prevent it from
      going any further.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/cabinet_stilt/robo_vac_blocked_trimmed.mp4">
        Video displaying robo-vac blocked from going underneath cabinet.
      </video>
      <figcaption>
        The top of the robot vacuum prevents it from going further.
      </figcaption>
    </figure>
    <p>
      &emsp;The minimum additional clearance required for the robot vacuum to
      enter the space underneath the cabinet bench was measured to be
      approximately 15.75 mm as this was the height of the intake on the robot
      vacuum. Felt stickers left over from IKEA furniture assembly were used
      alongside this print to provide additional clearance and floor protection
      when the bench is moved. These felt stickers have a thickness of 2.65mm
      and a diameter of 37.00 mm and were taken into consideration when
      designing the print.
    </p>
    <figure>
      <Image
        alt="Robo-vac prevented from accessing space underneath cabinet."
        height={IMAGE_HEIGHT}
        width={IMAGE_WIDTH}
        src="/bucket/jpeg/project/cabinet_stilt/IMG_0404.JPEG"
      />
      <figcaption>
        Current space under cabinet it too small to allow robo-vac from cleaning.
      </figcaption>
    </figure>
    <p>
      &emsp;This print was significant as this was the first expected to bear
      significant load. For this reason the infill used was increased to 70% as
      opposed to the 10% I have used in other projects. Along with this, the
      dimensions for one cabinet bench stilt was small such that four can be
      printed in a single go (which took around 17 hours). The prints were
      successful and felt stickers were applied in the recessed bottom portion
      which were printed without scaffolding.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0405.JPEG"
        />
        <Image
          alt="Elapsed time."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0406(1).JPEG"
        />
        <Image
          alt="Detached print"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0408.JPEG"
        />
        <Image
          alt="Felt sticker applied to prints."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0407.JPEG"
        />
      </Carousel>
      <figcaption>
        Finished prints with felt stickers attached.
      </figcaption>
    </figure>
    <p>
      &emsp;The finished cabinet bench stilts were then applied and more than
      fully supported its weight (approximately 200+ lbs) along with other items
      placed on top.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Cabinet leg before before print."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0409.JPEG"
        />
        <Image
          alt="Cabinet leg after adding print."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/cabinet_stilt/IMG_0414(1).JPEG"
        />
      </Carousel>
      <figcaption>
        Before and after images of print added to cabinet leg.
      </figcaption>
    </figure>
    <p>
      &emsp;It also provides more than enough space for the robot vacuum to go
      underneath and clean the previously unreachable area.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/cabinet_stilt/robo_vac_not_blocked_trimmed.mp4">
        Video displaying robo-vac no longer blocked from going underneath cabinet.
      </video>
      <figcaption>
        Cabinet has been lifted to provide more space for robo-vac.
      </figcaption>
    </figure>
  </StyledCabinetStilt>
);

export default CabinetStilt;
