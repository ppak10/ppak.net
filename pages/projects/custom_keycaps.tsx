/**
 * custom_keycaps.tsx
 * 39-601 Special Topics: Additive Manufacturing Processing and Product
 * Development project.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PageLinks from 'common/components/PageLinks';
import Portal from 'common/components/Portal';
import PrintPreview from 'react_three/components/PrintPreview';
import PrintPreviews from 'react_three/components/PrintPreviews';

// Constants
const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

const PRINT_PREVIEWS_CUSTOM_KEYCAPS = [
  {
    buttonText: 'Pacman Ghost Keycap',
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/ghost_preview.stl',
  },
  {
    buttonText: 'Cat Sleeping Keycap',
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/cat_sleeping_preview.stl',
  },
  {
    buttonText: 'Dog Keycap',
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/dog_preview.stl',
  },
  {
    buttonText: 'Cat Sitting Keycap',
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/cat_sitting_preview.stl',
  },
  {
    buttonText: 'Heart Keycap',
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/heart_preview.stl',
  },
  {
    buttonText: 'Turkey Keycap',
    stlMeshRotation: [-Math.PI / 2, 0, Math.PI / 2],
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/turkey_preview.stl',
  },
  {
    buttonText: 'Shift Keycap',
    stlMeshRotation: [-Math.PI / 2, 0, Math.PI / 2],
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/shift_topology_preview.stl',
  },
  {
    buttonText: 'Caps Lock Christmas Tree Keycap',
    stlMeshRotation: [-Math.PI / 2, 0, Math.PI / 2],
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/capslock_christmas_topology_preview.stl',
  },
]

// Enums
import { PortalElementId } from 'common/enums';

// Styled Components
import { StyledPrintPreviewsSection } from 'react_three/styled';
const StyledCustomKeycaps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CustomKeycaps: NextPage = () => (
  <StyledCustomKeycaps>
    <Portal portalElementId={PortalElementId.PageLinks}>
      <PageLinks>
        <ol>
	  <h1>
	    <a href="#title">Custom Keycaps</a>
	  </h1>
          <li>
            <h2>Mark 4</h2>
            <ol>
              <li>
                <a>
                  <h3>
                    <a href="#mk4v1">Version 1</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk4v2">Version 2</a>
                  </h3>
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </PageLinks>
    </Portal>
    <StyledPrintPreviewsSection>
      <PrintPreviews ordered printPreviews={PRINT_PREVIEWS_CUSTOM_KEYCAPS} />
      <h1 id="title" style={{ gridArea: 'heading' }}>Custom Keycaps</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;For our Additive Manufacturing course (39-601 Special Topics:
        Additive Manufacturing Processing and Product Development) our group was
        tasked with developing a product that could leverage the advantages of
	additive manufacturing compared to conventional manufacturing. To
	satisfy this constraint the product needed to be low volume, high
	priced, and complex enough to such that 3D printing is preferable to
	injection molding. For this we decided to work on creating customizable
	keycaps as this product satisfied all of the previously mentioned
	requirements.
      </p>
    </StyledPrintPreviewsSection>
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
  </StyledCustomKeycaps>
);

export default CustomKeycaps;
