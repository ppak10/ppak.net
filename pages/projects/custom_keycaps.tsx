/**
 * custom_keycaps.tsx
 * 39-601 Special Topics: Additive Manufacturing Processing and Product
 * Development project.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import { FC } from 'react';
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

const PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_1 = [
  {
    buttonText: 'Version 1',
    stlMeshRotation: [-Math.PI / 2, 0, Math.PI / 2],
    stlScale: 150,
    stlUrl: '/bucket/stl/project/custom_keycaps/part1v1.stl',
  },
  {
    buttonText: 'Version 2',
    stlMeshRotation: [0, 0, 0],
    stlScale: 150,
    stlUrl: '/bucket/stl/project/custom_keycaps/part1v2.stl',
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

const FrancisoMaderaLink: FC = () => (
  <a
    href="https://www.linkedin.com/in/franciscomadera/"
    rel="noreferrer"
    target="_blank"
  >
    Francisco Madera
  </a>
);

const Form2Link: FC = () => (
  <a
    href="https://formlabs.com/3d-printers/form-2/"
    rel="noreferrer"
    target="_blank"
  >
    Form 2
  </a>
);

const CustomKeycaps: NextPage = () => (
  <StyledCustomKeycaps>
    <Portal portalElementId={PortalElementId.PageLinks}>
      <PageLinks>
        <ol>
	  <li>
	    <h1>
	      <a href="#title">Custom Keycaps</a>
	    </h1>
	  </li>
          <li>
            <h1>
	      <a href="#part1">Part 1</a>
	    </h1>
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
      &emsp;This project consisted of three different parts (or milestones),
      the first being a comparison of several ideas / designs which would be
      researched and gauged in their competitiveness to conventional
      manufacturing methods. The next part of this project would be to improve
      on the initial design and filter the possible designs down to 2. The
      final part of this project was to choose a final design and produce
      physical prototypes.
    </p>
    <p>
      &emsp;For this project we were limited to polymer processes such as
      Stereolithography (SLA) and Fuse Deposition Modeling (FDM). This allowed
      us to work with the machines at&nbsp;
      <a
	href="https://engineering.cmu.edu/techspark/about/index.html"
	target="_blank"
      >
	TechSpark
      </a>
      &nbsp;which included the&nbsp;
      <a
	href="https://www.stratasys.com/en/3d-printers/printer-catalog/fdm-printers/f123-series-printers/"
	target="_blank"
      >
	Stratasys F170
      </a>
      &nbsp;(FDM),&nbsp;
      <a
	href="https://3pitech.com/products/dremel-digilab-3d40-flx-3d-printer"
	target="_blank"
      >
	Dremel 3D40-FLX
      </a>
      &nbsp;(FDM), and&nbsp;
      <Form2Link />
      &nbsp;(SLA); Of which we primarily used the Form 2 for its ability to
      capture fine details of up to 25 microns.
    </p>
    <figure>
      <Image
        alt="Image of the Form 2 printer available at TechSpark."
        height={4032}
        width={3024}
        src="/bucket/heic/project/custom_keycaps/form_2_techspark.HEIC"
      />
      <figcaption>
	TechSpark's Form 2 SLA machine we primarily used to print custom keycaps.
      </figcaption>
    </figure>
    <StyledPrintPreviewsSection>
      <PrintPreviews
	ordered
	printPreviews={PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_1}
      />
      <h1 id="part1" style={{ gridArea: 'heading' }}>Part 1</h1>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;The first part of this project required us to follow the&nbsp;
	<a
      	  href="/bucket/pdf/project/custom_keycaps/part_1.pdf"
      	  target="_blank"
      	>
	  project guidelines
      	</a>
	&nbsp;and propose three possible products which we could develop
	solutions for specific to additive manufacturing. For this we
	chose topology optimized drones, custom glasses frames, and custom
	keycaps. Our&nbsp;
	<a
      	  href="/bucket/pdf/project/custom_keycaps/part_1_group_8.pdf"
      	  target="_blank"
      	>
	  report
      	</a>
	&nbsp;outlines the market fit and proposed implementations and a rough
	CAD model of our most promising product which was the custom keycap. A
	quick basic model of the keycap was sketched by our group's designer,
	&nbsp;<FrancisoMaderaLink />, and printed using the <Form2Link /> SLA
	printer.
      </p>
    </StyledPrintPreviewsSection>
    <p>
      &emsp;The resulting print from this quick sketch produced a tiny keycap
      due to the eyeballed measurements of sample images that were found online.
      The print itself took around 30 minutes in the <Form2Link /> SLA printer
      with the first version failing due to the lack of support. The second
      version was prepared with more supports and created a print the better
      resembled a keycap.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print attached to printer"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0943.HEIC"
        />
        <Image
          alt="Keycap Version 1 (failed still attached to supports)"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_3796.HEIC"
        />
        <Image
          alt="Keycap Version 1 (backside)"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_3797.HEIC"
        />
        <Image
          alt="Keycap Version 2 "
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_3793.HEIC"
        />
        <Image
          alt="Keycap Version 1 and Keycap Version 2"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_3798.HEIC"
        />
      </Carousel>
      <figcaption>
        Prints of keycaps version 1 and version 2.
      </figcaption>
    </figure>
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
