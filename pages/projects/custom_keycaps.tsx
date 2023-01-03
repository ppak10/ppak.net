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

const PRINT_PREVIEWS_8_9 = [
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

const PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_2 = [
  {
    buttonText: 'Turkey Keycap',
    stlMeshRotation: [-Math.PI / 2, 0, Math.PI / 2],
    stlScale: 6,
    stlUrl: '/bucket/stl/project/custom_keycaps/turkey_preview.stl',
  },
  ...PRINT_PREVIEWS_8_9,
]

const PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_3 = [
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
]

const PRINT_PREVIEWS_CUSTOM_KEYCAPS = [
  ...PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_3,
  ...PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_2,
]

// Enums
import { PortalElementId } from 'common/enums';

// Styled Components
import {
  StyledPrintPreviewSection,
  StyledPrintPreviewsSection,
} from 'react_three/styled';
const StyledCustomKeycaps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CrealityEnder5PlusLink: FC = () => (
  <a
    href="https://store.creality.com/products/ender-5-plus-3d-printer"
    target="_blank"
  >
    Creality Ender 5 Plus
  </a>
);

const Dremel3D40Link: FC = () => (
  <a
    href="https://3pitech.com/products/dremel-digilab-3d40-flx-3d-printer"
    target="_blank"
  >
    Dremel 3D40-FLX
  </a>
);

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

const MeshmixerLink: FC = () => (
  <a
    href="https://www.meshmixer.com/"
    rel="noreferrer"
    target="_blank"
  >
    Meshmixer
  </a>
);

const PreformLink: FC = () => (
  <a
    href="https://formlabs.com/software/"
    rel="noreferrer"
    target="_blank"
  >
    Preform
  </a>
);

const ThingiverseLink: FC = () => (
  <a
    href="https://www.thingiverse.com/"
    rel="noreferrer"
    target="_blank"
  >
    Thingiverse
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
	      <a href="#part1">Design Project: Part 1</a>
	    </h1>
	    <ul>
	      <li>
	        <h2>
	          <a href="#print1">Print 1</a>
	        </h2>
	      </li>
	    </ul>
          </li>
          <li>
            <h1>
	      <a href="#part2">Design Project: Part 2</a>
	    </h1>
	    <ul>
	      <li>
	        <h2>
	          <a href="#print2">Print 2</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print3">Print 3</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#prints4&6">Prints 4 & 6</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print5">Print 5</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print7">Print 7</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#prints8&9">Prints 8 & 9</a>
	        </h2>
	      </li>
	    </ul>
          </li>
	  <li>
	    <h1>
	      <a href="#part3">Design Project: Part 3</a>
	    </h1>
	    <ul>
	      <li>
	        <h2>
	          <a href="#print10">Print 10</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print11">Print 11</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print12">Print 12</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print13">Print 13</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#prints14&15">Prints 14 & 15</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#meshmixer_prints">Meshmixer Prints</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print16">Print 16</a>
	        </h2>
	      </li>
	      <li>
	        <h2>
	          <a href="#print17">Print 17</a>
	        </h2>
	      </li>
	    </ul>
	  </li>
	  <li>
	    <h1>
	      <a href="#case">Gift Case</a>
	    </h1>
	  </li>
	  <li>
	    <h1>
	      <a href="#future_work">Future Work</a>
	    </h1>
	  </li>
        </ol>
      </PageLinks>
    </Portal>
    <StyledPrintPreviewsSection>
      <PrintPreviews
	ordered
	printPreviews={PRINT_PREVIEWS_CUSTOM_KEYCAPS}
      />
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
      &nbsp;(FDM), <Dremel3D40Link /> (FDM), and <Form2Link /> (SLA); Of which
      we primarily used the Form 2 for its ability to capture fine details of up
      to 25 microns.
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
      <h1 id="part1" style={{ gridArea: 'heading' }}>Design Project: Part 1</h1>
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

    <h2 id="print1">Print 1</h2>
    <p>
      &emsp;The resulting print from this quick sketch produced a tiny keycap
      due to the eyeballed measurements of sample images that were found online.
      The print itself took around 30 minutes in the <Form2Link /> SLA printer
      with the first version failing due to the lack of adequate thickness.
      The second version was prepared with greater thickness and resulted in a
      print the better resembled a keycap.
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
        Prints of keycaps Version 1 and Version 2.
      </figcaption>
    </figure>

    <StyledPrintPreviewsSection>
      <PrintPreviews
	ordered
	printPreviews={PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_2}
      />
      <h1 id="part2" style={{ gridArea: 'heading' }}>Design Project: Part 2</h1>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;In the second part of this project we focused on two of the
	proposed products as outlined by the&nbsp;
	<a
      	  href="/bucket/pdf/project/custom_keycaps/part_2.pdf"
      	  target="_blank"
      	>
	  project guidelines
      	</a>
	. In our&nbsp;
	<a
      	  href="/bucket/pdf/project/custom_keycaps/part_2_group_8.pdf"
      	  target="_blank"
      	>
	  report
      	</a>
	&nbsp;We chose to continue with the topology optimized drone bodies and
	custom keycaps. For this our group's CAD specialist,&nbsp;
	<FrancisoMaderaLink />, modeled several keycaps with texturing and
	debossing which are quite difficult to achieve with injection molding.
	These keycaps were printed with the same <Form2Link /> SLA printer
	along with tests done on the <Dremel3D40Link /> and&nbsp;
	<CrealityEnder5PlusLink />.
      </p>
    </StyledPrintPreviewsSection>

    <h2 id="print2">Print 2</h2>
    <p>
      &emsp;This keycap was designed with dimensions obtained from an existing
      keycap with the MX switch specification. We chose to deboss a turkey on
      the top of the keycap to gauge user engagement around holiday themed
      keycaps. As part of the course's design project,&nbsp;
      <a
        href="https://www.thingiverse.com/thing:5606834"
        rel="noreferrer"
        target="_blank"
      >
        Thingiverse
      </a>
      &nbsp;and&nbsp;
      <a
        href="https://pinshape.com/items/113365-3d-printed-thanksgiving-keycap"
        rel="noreferrer"
        target="_blank"
      >
        Pinshape
      </a>
      &nbsp;pages were created for this Turkey Keycap in order to gauge market
      demand for this product.
    </p>
    <p>
      &emsp;The print was prepared and sliced with the <PreformLink /> software
      from Formlabs with the support autogenerated for Gray resin and a layer
      thickness of 0.025mm. The finished print was then washed and soaked in
      isopropyl alcohol for 1 and 10 minutes respectively. Afterwards the
      supports were removed and the print was UV post cured for 15 minutes at
      60 &deg;C.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Preform side view of keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print2_1.PNG"
        />
        <Image
          alt="Another Preform side view of keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print2_2.PNG"
        />
        <Image
          alt="Preform view of keycap bottom."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print2_3.PNG"
        />
        <Image
          alt="Preform view of keycap top."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print2_4.PNG"
        />
      </Carousel>
      <figcaption>
	<PreformLink /> slicer views of Turkey Keycap for Gray resin.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="View of gray Turkey Keycap top."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0984.HEIC"
        />
        <Image
          alt="View of gray Turkey Keycap bottom."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0985.HEIC"
        />
        <Image
          alt="Side by side view of Turkey Keycap and doubleshot keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/print2_side_by_side.HEIC"
        />
      </Carousel>
      <figcaption>
	Views of finished keycaps along with side by side comparison.
      </figcaption>
    </figure>
    <p>
      &emsp;The resulting print captured the fine texturing along the sides of
      the keycap and the debossing of the turkey imagery on the top of the
      keycap. However, there were many visible imperfection generated from the
      support touchpoints and the hasty removal of the support. The greatest
      issue was that the keycap did not fit with the MX switch as it was
      slightly smaller than the connector. We believed this to be mainly an
      issue that arose during the UV post curing as the dimensions of the
      keycap were accurate.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/custom_keycaps/print2_no_fit.mp4">
	Video of print 2 of keycap not fitting on MX switch.
      </video>
      <figcaption>
	Turkey Keycap after UV post curing does not fit on MX switch connector.
      </figcaption>
    </figure>

    <h2 id="print3">Print 3</h2>
    <p>
      &emsp;For this print we wanted to test how the <Dremel3D40Link /> FDM
      printer would fair with capturing the fine texturing and connector
      details. The Turkey Keycap was printed with white PLA filament with
      support placement around the connector as outlined in the slicing
      software.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Turkey Keycap bottom view without supports"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print3_1.PNG"
        />
        <Image
          alt="Turkey Keycap top view without supports"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print3_4.PNG"
        />
        <Image
          alt="Turkey Keycap bottom view with supports"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print3_2.PNG"
        />
        <Image
          alt="Turkey Keycap top view with supports"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print3_3.PNG"
        />
      </Carousel>
      <figcaption>
	Views of Turkey Keycap in slicer software before printing with&nbsp;
	<Dremel3D40Link /> FDM printer.
      </figcaption>
    </figure>
    <p>
      &emsp;This print unfortunately was not able to capture the texturing
      detail of the keycap due to its rather large layer height of 0.1 mm. The
      placement and rigidity of the supports made it rather difficult to remove
      from the keycap and prevent us from testing whether or not the keycap
      would fit with the MX switch. The lackluster results of this print
      provided reason to forgo the <Dremel3D40Link /> in favor of other
      printers capable of reaching higher resolutions.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of white Turkey Keycap printed with dremel"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0986.HEIC"
        />
        <Image
          alt="Bottom view of white Turkey Keycap printed with dremel"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0987.HEIC"
        />
      </Carousel>
      <figcaption>
	Top and bottom views of white Turkey Keycap with partially removed
	supports.
      </figcaption>
    </figure>

    <h2 id="prints4&6">Prints 4 & 6</h2>
    <p>
      &emsp;Prints 4 and 6 were done with the <CrealityEnder5PlusLink /> FDM
      printer which is also capable of a print accuracy of 0.1 mm. However due
      to its less frequent use in a research lab setting, the prints from this
      machine captured more of the fine details. The following prints were
      printed without supports on the glass bed and on a raft as shown in the
      Creality slicer screenshots.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Bottom view of white Turkey Keycap printed with Ender 5"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print4_1.PNG"
        />
        <Image
          alt="Top view of white Turkey Keycap printed with Ender 5"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print4_2.PNG"
        />
        <Image
          alt="Top view of white Turkey Keycap printed with Ender 5 on a raft"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print6_1.PNG"
        />
        <Image
          alt="Bottom view of white Turkey Keycap printed with Ender 5 on a raft"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print6_2.PNG"
        />
      </Carousel>
      <figcaption>
	Prints of Turkey Keycap with <CrealityEnder5PlusLink /> printer with
	and without raft adhesion.
      </figcaption>
    </figure>
    <p>
      &emsp;The prints from the <CrealityEnder5PlusLink /> did a far better job
      of capturing the fine details of the Turkey Keycap. The raft resulted in
      a worse surface than the print which was directly printed on the glass.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Turkey Keycap printed on Ender 5 without raft"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0991.HEIC"
        />
        <Image
          alt="Turkey Keycap printed on Ender 5 with raft"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_0993.HEIC"
        />
      </Carousel>
      <figcaption>
	Finished keycap prints on printing bed with and without raft adhesion.
      </figcaption>
    </figure>
    <p>
      &emsp;The resulting print was the first keycap to fit with the MX switch
      of the mechanical keyboard further confirming that the dimensions are
      correct and the possible shrinkage occured during the UV post curing
      process.
    </p>
    <figure>
      <Image
        alt="Ender 5 printed keycap attached to keyboard"
        height={IMAGE_HEIGHT}
        width={IMAGE_WIDTH}
        src="/bucket/heic/project/custom_keycaps/IMG_0995.HEIC"
      />
      <figcaption>
	<CrealityEnder5PlusLink /> printed Turkey Keycap attached to keyboard.
      </figcaption>
    </figure>

    <h2 id="print5">Print 5</h2>
    <p>
      &emsp;This print builds off the issues discovered in the previous SLA
      attempt (<a href="#print2">Print 2</a>) and explores if a couple
      parameter changes would resolve issues. For this minimal supports were
      used to secure the keycap and the resin color was switched to clear. In
      addition the UV post curing step was skipped to confirm the hypothesis
      that the keycap would fit without this step.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Preform view of the front of Turkey Keycap"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print5_1.PNG"
        />
        <Image
          alt="Preform view of the back of Turkey Keycap"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print5_2.PNG"
        />
        <Image
          alt="Preform view of the supports for the Turkey Keycap"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print5_3.PNG"
        />
      </Carousel>
      <figcaption>
	<PreformLink /> views of the Turkey Keycap with minimal supports.
      </figcaption>
    </figure>
    <p>
      &emsp;The resulting Turkey Keycap fit well onto the keyboard and supports
      the claim that warping occurs during the UV post curing stage. Another
      theory we had was that the gray resin has different density causing it to
      shrink more than that of the clear resin. This theory, however, was not
      tested as all the subsequent print were done with the clear resin.
    </p>
    <figure>
      <Image
        alt="Form 2 printed keycap on keyboard without UV post curing."
        height={IMAGE_HEIGHT}
        width={IMAGE_WIDTH}
        src="/bucket/heic/project/custom_keycaps/IMG_0994.HEIC"
      />
      <figcaption>
	<Form2Link /> printed Turkey Keycap fit on keyboard without UV post
	curing.
      </figcaption>
    </figure>

    <StyledPrintPreviewSection>
      <PrintPreview
	stlMeshRotation={[-Math.PI / 2, 0, Math.PI / 2]}
	stlScale={150}
	stlPosition={[-50, -225, 0]}
	stlUrl="/bucket/stl/project/custom_keycaps/capslock_christmas.stl"
      />
      <h2 id="print7" style={{ gridArea: 'heading' }}>Print 7</h2>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;This new keycap embosses a christmas tree on the top surface and
	extends the spacing to fit the dimensions of a Caps Lock keycap. The
	sides of this keycap lack the texturing of the previous prints however
	this will be added in the subsequent prints.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;This model was sliced in the <PreformLink /> software and the
      supports were autogenerated with the keycap tilted at a slight angle.
      This slight tilt was intended to remove any of the excess resin residue
      that would collect when printing completely vertically.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Front view of Christmas Tree Keycap in Preform."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print7_1.PNG"
        />
        <Image
          alt="Back view of Christmas Tree Keycap in Preform."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print7_2.PNG"
        />
      </Carousel>
      <figcaption>
	Views of Christmas Tree Keycap and supports in <PreformLink /> slicer.
      </figcaption>
    </figure>
    <p>
      &emsp;This print however failed and this was most likely due to the fact
      that the resin tray for this specific printer was faulty. Another
      possible factor was that the supports were inadequate, however, this
      would seem to be less of a factor.
    </p>

    <StyledPrintPreviewsSection>
      <PrintPreviews ordered printPreviews={PRINT_PREVIEWS_8_9} />
      <h2 id="prints8&9" style={{ gridArea: 'heading' }}>Prints 8 & 9</h2>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;For the final couple of prints for <a href="#part2">Part 2</a> of
	this project, we printed the Christmas Tree Keycap updated with
	texturing from <a href="#print7">Print 7</a> and a new Shift Keycap
	with similar texturing. Both of these keycaps were printed in the
	following two prints with the latter printing duplicates to test out
	the batch printing capabilities of the <Form2Link /> SLA printer. Both
	the Shift Keycap and the Caps Lock Keycap skipped the UV post curing
	process for now.
      </p>
    </StyledPrintPreviewsSection>
    <p>
      &emsp;For the first of these prints (Print 8), one instance of the
      textured Christmas Tree Caps Lock Keycap and the textured Shift Keycap
      were printed. The supports for each of these keycaps were autogenerated
      and oriented vertically to maximize the chance of a successful print. The
      next print (Print 9) builds on this and doubles the quantity of each
      keycap since the previous print worked well.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Front view of Shift and Caps Lock Keycaps in Preform (Print 8)"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print8_2.PNG"
        />
        <Image
          alt="Back view of Shift and Caps Lock Keycaps in Preform (Print 8)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print8_1.PNG"
        />
        <Image
          alt="Front view of Shift and Caps Lock Keycaps in Preform (Print 9)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print9_1.PNG"
        />
        <Image
          alt="Back view of Shift and Caps Lock Keycaps in Preform (Print 9)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/png/project/custom_keycaps/print9_2.PNG"
        />
      </Carousel>
      <figcaption>
	Front and Back views of Shift and Caps Locks Keycaps layout in&nbsp;
	<PreformLink /> slicing software.
      </figcaption>
    </figure>
    <p>
      &emsp;The resulting prints were successful and captured the fine details
      and texturing of both keycaps. Also since most of the supports were
      attached to the flat surface of the print, the textured areas did not
      experience any defects from the support removal process. Since both of
      these prints did not experience any UV post curing, there was no warping
      of the part and they both fit well on the keyboard.
    </p>
    <figure>
      <Carousel>
	<Image
      	  alt="Finished Keycaps still attached to print bed."
      	  height={IMAGE_HEIGHT}
      	  width={IMAGE_WIDTH}
      	  src="/bucket/heic/project/custom_keycaps/IMG_1022.HEIC"
      	/>
	<Image
      	  alt="Image of the printed Shift and Caps Lock Keycaps."
      	  height={IMAGE_HEIGHT}
      	  width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1020.jpeg"
      	/>
	<Image
      	  alt="Caps Lock and Shift Keycaps attached to keyboard."
      	  height={IMAGE_HEIGHT}
      	  width={IMAGE_WIDTH}
      	  src="/bucket/heic/project/custom_keycaps/IMG_1023.HEIC"
      	/>
	<Image
      	  alt="Caps Lock and Shift Keycaps attached to keyboard."
      	  height={IMAGE_HEIGHT}
      	  width={IMAGE_WIDTH}
      	  src="/bucket/heic/project/custom_keycaps/IMG_1025.HEIC"
      	/>
      </Carousel>
      <figcaption>
	Images of finished Caps Lock and Shift Keycaps at various stages.
      </figcaption>
    </figure>

    <h1 id="part3">Design Project: Part 3</h1>
    <p>
      &emsp;For this last portion of the design project, the&nbsp;
      <a
      	href="/bucket/pdf/project/custom_keycaps/part_3.pdf"
      	target="_blank"
      >
	project guidelines
      </a>
      &nbsp;had us focus on one of the two proposed products outlined in our
      previous design project proposal. In this final&nbsp;
      <a
      	href="/bucket/pdf/project/custom_keycaps/part_3_group_8.pdf"
      	target="_blank"
      >
	report
      </a>
      &nbsp;we decided to move forward with the custom keycaps and fine tune
      the manufacturing process associated with these prints. Specifically we
      focused on the perfecting the UV post curing process and optimizing the
      orientations within the <PreformLink /> slicer to reduce the resin that
      would accumulate on the top of each keycap.
    </p>

    <StyledPrintPreviewSection>
      <PrintPreview
	stlMeshRotation={[-Math.PI / 2, 0, Math.PI]}
	stlScale={6}
	stlPosition={[75, 0, 0]}
	stlUrl="/bucket/stl/project/custom_keycaps/bare_keycap.STL"
      />
      <h2 id="print10" style={{ gridArea: 'heading' }}>Print 10</h2>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;This keycap is the base model used for the Turkey Keycap without
	any of the texturing and debossing. We want to determine the best angle
	to print these keycaps without accumulating excess resin and retaining
	the model's structure. For this print, a 4 x 4 grid of keycaps was
	printed with angles along the X and Y axis rotated by 15&deg;.
      </p>
    </StyledPrintPreviewSection>
    <figure>
      <Image
	alt="Grid layout of Keycaps in Preform."
        height={489}
        width={990}
        src="/bucket/png/project/custom_keycaps/print10_1.PNG"
      />
      <figcaption>
	View of grid layout in <PreformLink /> slicer.
      </figcaption>
    </figure>
    <p>
      &emsp;The keycaps in this print were angled to a maximum of 45&deg; in
      each X and Y direction in order to gauge to what degree of rotation was
      necessary to reduce the accumulated resin. This was done with the bare
      keycap model to increase build rate and more clearly see the defects on
      what should be a smooth surface. Each keycap was labeled with its
      corresponding rotation on the raft and organized as seen below.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Layout of rotated keycaps (Front View)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1046.JPEG"
        />
        <Image
          alt="Layout of rotated keycaps (Side View)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1047.HEIC"
        />
        <Image
          alt="Rotated keycaps placed on cardboard."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1076.JPEG"
        />
      </Carousel>
      <figcaption>
	Images of Bare Keycaps orientated at varying angles.
      </figcaption>
    </figure>

    <h2 id="print11">Print 11</h2>
    <p>
      &emsp;This next print investigates this same issue however with a subset
      of the previous rotations. In this print the Y axis was held constant at
      0&deg; and the X axis was rotated from 0&deg; to -45&deg; in 15&deg;
      increments. This was done with the Bare Keycap and the Shift Keycap which
      kept its texturing.
    </p>
    <figure>
      <Image
	alt="Grid layout of Shift and Bare Keycaps in Preform."
        height={677}
        width={1216}
        src="/bucket/png/project/custom_keycaps/print11_1.PNG"
      />
      <figcaption>
	View of angled Shift and Bare Keycaps in <PreformLink /> slicer.
      </figcaption>
    </figure>
    <p>
      &emsp;This print was a success and provided valuable information
      regarding the ideal alignment of the keycaps. Like before the Shift
      Keycaps skipped the UV post curing process so that printing orientation
      could remain a primary focus here. The Bare Keycaps were cured just to
      see if there were any significant changes to the keycap after the UV post
      curing process.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="View of Shift and Bare Keycaps in Form2 Printing Bed (Angle 1)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1048.JPEG"
        />
        <Image
          alt="View of Shift and Bare Keycaps in Form2 Printing Bed (Angle 2)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1049.JPEG"
        />
        <Image
          alt="View of Shift and Bare Keycaps in Form2 Printing Bed (Angle 3)."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1050.JPEG"
        />
      </Carousel>
      <figcaption>
	Various images of printed keycaps still attached to <Form2Link />&nbsp;
	printing bed.
      </figcaption>
    </figure>
    <figure>
      <Image
	alt="Layout of Shift and Bare Keycaps on cardboard."
        height={4032}
        width={3024}
        src="/bucket/jpeg/project/custom_keycaps/IMG_1077.JPEG"
      />
      <figcaption>
	Layout of Shift and Bare Keycaps with orientation increments of 15&deg;.
      </figcaption>
    </figure>
    <p>
      &emsp;One notable difference that was seen with the differences in
      orientation along the X axis as that the MX connecter started to lose
      accuracy when the keycap was rotated. This -45&deg; orientation rotated
      the connector to print as a "X" rather than a "+" and lost much of the
      fine details around the points of connection. This made us realize that
      only a slight angle was needed along the Y axis to remove the excess
      resin and printing with 0&deg; rotation along the X axis was the best
      solution.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="0 degree rotation of the Shift Keycap"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1081.HEIC"
        />
        <Image
          alt="-45 degree rotation of the Shift Keycap"
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1082.HEIC"
        />
      </Carousel>
      <figcaption>
	View of the "+" printing direction (0&deg; rotation) and "X" printing
	direction (-45&deg; rotation).
      </figcaption>
    </figure>

    <h2 id="print12">Print 12</h2>
    <p>
      &emsp;After investigating the issue of resin build up on the tops of the
      keycaps, the next issue in question was the UV post curing and the
      appropriate scale needed to account for the shrinkage. This was done by
      testing out scales settings of 1.00, 1.010, 1.020, and 1.025 in the&nbsp;
      <PreformLink /> slicer with 2 Shift Keycaps printed at each scale. This
      allowed us to have a set of UV post cured and as is set of keycaps at
      each scale for a corresponding control and experimental sample.
    </p>
    <figure>
      <Image
	alt="Varying scales of the Shift Keycap in Preform"
        height={404}
        width={1484}
        src="/bucket/png/project/custom_keycaps/print12_1.PNG"
      />
      <figcaption>
	View of Shift Keycaps of varying scales in <PreformLink /> slicer.
      </figcaption>
    </figure>
    <p>
      &emsp;Once printed, one set of keycaps were UV post cured with the
      supports still attached as it was noticed that the inclusion of the
      supports prevented warping during this UV post curing process. However,
      there still remained the issue of significant "yellowing" of the clear
      print during the UV post curing process that a adequate solution for had
      yet to be determined.
    </p>
    <figure>
      <Image
	alt="Side by Side comparision of UV post cured and as is keycaps"
        height={IMAGE_HEIGHT}
	width={IMAGE_WIDTH}
	src="/bucket/heic/project/custom_keycaps/IMG_1057.HEIC"
      />
      <figcaption>
	Side by side comparisons of UV post cured and as is Shift Key caps.
      </figcaption>
    </figure>
    <p>
      &emsp;The UV post curing process was done at 60 &deg;C for 15 minutes
      with the supports of the prints still attached. It was noticed that for
      prints with higher length to width ratios, the bending and warping of the
      keycap during the UV post curing process was more pronounced. Keeping
      the supports on seems to have mitigated this issue since the supports
      also act as a mechanism to retain the build up of residual stress.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/custom_keycaps/uv_post_curing.mp4">
	Video of UV post curing on Shift Keycaps.
      </video>
      <figcaption>
	UV post curing process for Shift Keycaps with supports still attached.
      </figcaption>
    </figure>
    <p>
      &emsp;With the as is Shift Keycaps it was found that the ductility of the
      MX connector allowed for a range of scales to fit. However, with the UV
      post curing the connector becomes more brittle and the range of fitting
      keycaps narrows to a scale of 1.020.
    </p>
    <figure>
      <Image
	alt="Varying Shift Keycap with their scales denoted."
        height={IMAGE_HEIGHT}
	width={IMAGE_WIDTH}
	src="/bucket/jpeg/project/custom_keycaps/IMG_1078.JPEG"
      />
      <figcaption>
	UV post cured and as is Shift Keycaps with their varying sizes.
      </figcaption>
    </figure>

    <h2 id="print13">Print 13</h2>
    <p>
      &emsp;With the determined scale adjustment of 1.020 from the previous
      print producing adequate fittings, these settings were applied to the
      Turkey Keycaps in a 6 x 5 grid for a total of 30 keycaps per batch. The
      keycaps were placed a slight angle of 15&deg; such that resin would not
      collect on the top surface.
    </p>
    <figure>
      <Image
	alt="6 x 5 layout of Turkey Keycaps in Preform."
        height={413}
	width={962}
	src="/bucket/png/project/custom_keycaps/print13_1.PNG"
      />
      <figcaption>
	6 x 5 layout of Turkey Keycaps angled at 15&deg; in <PreformLink />
      </figcaption>
    </figure>
    <p>
      &emsp;The resulting print was successful and each keycap captured the
      fine details and texturing. These prints were then washed and exposed to
      the UV post curing process however did not fit on the keyboard. This was
      an unexpected result as the same scale of 1.020 from the previous print
      was adequate enough to secure the Shift Keycap in place. One glaring
      mistake in the process was assuming that the two different keycaps would
      exhibit the same shrinkage from the UV post curing process. This issue
      would be further investigated in the next prints where different scales
      for each type of keycap would be tested.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Turkey Keycaps attached to printing bed on Form 2 printer."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1060.JPEG"
        />
        <Image
          alt="Keycaps removed from printing bed and drying from alchol wash."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1061.JPEG"
        />
        <Image
          alt="Close up of the front of Turkey Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1062.JPEG"
        />
        <Image
          alt="Close up of the back of Turkey Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1063.JPEG"
        />
        <Image
          alt="UV post curing of the Turkey Keycaps."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1065.JPEG"
        />
      </Carousel>
      <figcaption>
	Finished Turkey Keycap prints and various stages of post treatment
	process.
      </figcaption>
    </figure>

    <h2 id="prints14&15">Prints 14 & 15</h2>
    <p>
      &emsp;For the next couple of prints, a range of scales would be tested to
      determine the appropriate fit for each keycap. This was done within two
      separate prints where the first (Print 14) would test a wide range from
      1.000 to 1.025 and the latter (Print 15) would test finer increments of
      0.005 for each. The keycaps of both prints were arranged to maximize the
      density of the total keycaps that could be printed in each batch.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Print 14 layout."
          height={412}
          width={997}
          src="/bucket/png/project/custom_keycaps/print14_1.PNG"
        />
        <Image
          alt="Print 15 layout."
          height={597}
          width={1011}
          src="/bucket/png/project/custom_keycaps/print15_1.PNG"
        />
      </Carousel>
      <figcaption>
	<PreformLink /> layouts of prints 14 and 15.
      </figcaption>
    </figure>
    <p>
      &emsp;After UV post curing, the results for both prints showed similar
      results were Shift and Caps Lock Keycaps withiin the range of 1.015 and
      1.025 fit well on the MX connector. However the keycaps for the original
      Turkey Keycap would still not fit on the keyboard leading us to believe
      that another factor was contributing to possible uneven warping of the
      keycap.
    </p>
    <figure>
      <Image
        alt="Layout of keycaps on printing bed."
        height={2268}
        width={4032}
        src="/bucket/jpeg/project/custom_keycaps/IMG_1068.JPEG"
      />
      <figcaption>
	Layout of all keycaps of varying scale (Print 14).
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Print 15 attached to printing bed in Form 2."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1074.JPEG"
        />
        <Image
          alt="Washed prints removed from printing bed."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1075.JPEG"
        />
      </Carousel>
      <figcaption>
	A finer subset of keycaps at various scales (Print 15).
      </figcaption>
    </figure>

    <StyledPrintPreviewsSection>
      <PrintPreviews
	ordered
	printPreviews={PRINT_PREVIEWS_CUSTOM_KEYCAPS_PART_3}
      />
      <h2 id="meshmixer_prints" style={{ gridArea: 'heading' }}>
	Meshmixer Prints (Prints 16, 17, 18)
      </h2>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;For the following prints, figures from <ThingiverseLink /> were
	appended to the Turkey Keycap using a modeling software called&nbsp;
	<MeshmixerLink />. These figures include the&nbsp;
	<a
  	  href="https://www.thingiverse.com/thing:557527"
  	  rel="noreferrer"
  	  target="_blank"
  	>
	  Pacman Ghost
  	</a>
	,&nbsp;
	<a
  	  href="https://www.thingiverse.com/thing:4597731"
  	  rel="noreferrer"
  	  target="_blank"
  	>
	  Sleeping Cat
  	</a>
	,&nbsp;
	<a
  	  href="https://www.thingiverse.com/thing:4694712"
  	  rel="noreferrer"
  	  target="_blank"
  	>
	  Dog
  	</a>
	,&nbsp; and&nbsp;
	<a
  	  href="https://www.thingiverse.com/thing:2638185"
  	  rel="noreferrer"
  	  target="_blank"
  	>
	  Heart
  	</a>
	&nbsp;models, further supporting the product's niche as an additively
	manufactured product rather than one that is injection molded. For all
	of these prints, the <Form2Link /> printer displayed its ability to
	capture the fine details such as the fur on the animal models and the
	veins and arteries of the anatomical heart model. The clear resin here
	also shines well here as the LED's from the keyboard illuminate the
	figure and keycap when attached to the keyboard.
      </p>
    </StyledPrintPreviewsSection>

    <h2 id="print16">Print 16</h2>
    <p>
      &emsp;The first of these prints uses the Pacman Ghost Keycap and prints
      it at the same angle as the keycaps from the previous prints to reduce
      resin build up. This was done in a batch of 20 with 4 x 5 layout of the
      keycaps.
    </p>
    <figure>
      <Image
        alt="Layout of keycaps on printing bed."
        height={456}
        width={1018}
        src="/bucket/png/project/custom_keycaps/print16_1.PNG"
      />
      <figcaption>
	4 x 5 Layout of Pacman Ghost Keycaps (Print 16).
      </figcaption>
    </figure>
    <p>
      &emsp;The print was rather successful, however the yield of good keycaps
      from this print was around 60% with several damaged and incomplete
      keycaps.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Print 16 still attached to printing bed in Form 2."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1091.JPEG"
        />
        <Image
          alt="Layout of prints with varying quality on print bed."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/jpeg/project/custom_keycaps/IMG_1092.JPEG"
        />
        <Image
          alt="Range of quality from batch print."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1094.HEIC"
        />
        <Image
          alt="A good quality keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1095.HEIC"
        />
        <Image
          alt="A bad quality keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1096.HEIC"
        />
      </Carousel>
      <figcaption>
	Finished Pacman Ghost Keycaps of varying quality.
      </figcaption>
    </figure>
    <p>
      &emsp;When attached to the keyboard the clear resin allows for the light
      from the LEDs to scatter throughout the print. This creates a beautiful
      array of keycaps with the range of colors these keyboards are able to
      display.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Blue Pacman Ghost Keycaps."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1103.HEIC"
        />
        <Image
          alt="Orange Pacman Ghost Keycaps."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1104.HEIC"
        />
        <Image
          alt="Single orange Pacman Ghost Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
          src="/bucket/heic/project/custom_keycaps/IMG_1105.HEIC"
        />
      </Carousel>
      <figcaption>
	Pacman Ghost Keycaps lit up with varying colors.
      </figcaption>
    </figure>

    <h2 id="print17">Print 17</h2>
    <p>
      &emsp;For this print we decided to align the keycap with the switch
      placed parallel to the build direction. This was intended to see if the
      consitent printing angle of the "+" MX switch would provide consistent
      shrinkage during the UV post curing process. In addition to the Pacman
      Ghost Keycap, a print for an Anatomical Heart Keycap was tested as well.
      This layout saved space around the printing bed, however required more
      supports for each keycap with a total of 23 keycaps in this batch; 15
      Pacman Ghost and 8 Anatomical Heart Keycaps.
    </p>
    <figure>
      <Image
        alt="Layout of Anatomical Heart and Pacman Ghost Keycaps."
        height={375}
        width={904}
        src="/bucket/png/project/custom_keycaps/print17_1.PNG"
      />
      <figcaption>
	Layout of Anatomical Heart and Pacman Ghost Keycaps in <PreformLink />.
      </figcaption>
    </figure>
    <p>
      &emsp;The print for this was successful and each keycap from this batch
      was usable. The orientation of the keycap did follow the expected
      behavior with the UV post curing treatment uniformly shrinking around the
      MX switch. Our analysis of this outcome makes us believe that the UV post
      curing around the other previous Turkey Keycaps was angled preventing it
      from fitting properly on the keyboard.
    </p>
    <figure>
      <Image
        alt="Print bed of Anatomical Heart and Pacman Ghost Keycaps."
        height={3024}
        width={4032}
        src="/bucket/jpeg/project/custom_keycaps/IMG_1133.JPEG"
      />
      <figcaption>
	Anatomical Heart and Pacman Ghost Keycaps printed in the completely
	vertical orientation.
      </figcaption>
    </figure>

    <h2 id="print18">Print 18</h2>
    <p>
      &emsp;These last keycaps add figurines for a sleeping cat and sitting dog
      on the Turkey Keycap. These keycaps were organized similar to the
      previous iterations with the a total of 20 keycaps organized on the
      printing bed with a couple duplicates for each.
    </p>
    <figure>
      <Image
        alt="Layout of Cat, Dog, Heart, and Ghost Keycaps."
        height={635}
        width={1294}
        src="/bucket/png/project/custom_keycaps/print18_1.PNG"
      />
      <figcaption>
	Layout of all 4 types of keycaps in <PreformLink />.
      </figcaption>
    </figure>
    <p>
      &emsp;Each of the keycaps from the print were successfully removed from
      the print bed and washed with an alcohol bath. These prints were then
      arranged by type with 6 Dog Keycaps, 6 Cat Keycaps, 5 Ghost Keycaps and
      5 Heart Keycaps.
    </p>
    <figure>
      <Carousel>
	<Image
      	  alt="Cat, Dog, Heart, and Ghost Keycaps drying from alcohol bath."
      	  height={4032}
      	  width={3024}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1121.JPEG"
      	/>
      	<Image
      	  alt="Keycaps arranged by type."
      	  height={4032}
      	  width={3024}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1126.JPEG"
      	/>
      </Carousel>
      <figcaption>
	Keycaps dried and arranged from alcohol bath.
      </figcaption>
    </figure>
    <p>
      &emsp;The removal of the supports were done after the UV post curing
      process and prevent serious deformation of the print in any weak areas.
      Supports do leave a significant amount of imperfections around the
      touchpoints and further work would be done to minimize the total amount
      of supports and touch point size. Regardless, the resulting print
      displayed fine detail and look even nicer under specific lighting
      conditions.
    </p>
    <figure>
      <Carousel>
	<Image
      	  alt="Ghost Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1125.JPEG"
      	/>
      	<Image
      	  alt="Ghost Keycap above light."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1129.JPEG"
      	/>
	<Image
      	  alt="Cat Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1123.JPEG"
      	/>
      	<Image
      	  alt="Cat Keycap above light."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1127.JPEG"
      	/>
	<Image
      	  alt="Dog Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1124.JPEG"
      	/>
      	<Image
      	  alt="Dog Keycap above light."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1130.JPEG"
      	/>
	<Image
      	  alt="Heart Keycap."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1122.JPEG"
      	/>
      	<Image
      	  alt="Heart Keycap above light."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/IMG_1128.JPEG"
      	/>
      </Carousel>
      <figcaption>
	Various keycaps with and without specific lighting conditions.
      </figcaption>
    </figure>

    <StyledPrintPreviewSection>
      <PrintPreview
	stlUrl="/bucket/stl/project/custom_keycaps/gift_box.stl"
	gcodeUrl="/bucket/gcode/project/custom_keycaps/gift_box.gcode"
      />
      <h1 id="case">Gift Case</h1>
      <p style={{ gridArea: 'paragraph' }}>
	&emsp;For Christmas I intended to print a batch of these custom keycaps
	and give them to loved ones as gifts. For this I needed to create a
	gift case to display the keycaps and provide protection during travel.
	A hinged box with extruded placements for the keycaps provided a simple
	print in place box to house the keycaps without the need for additional
	parts. Additional decorations such as the embossed Christmas tree was
	added to give the gift some flair.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;This design is primarily based off of Kevin Kennedy's tutorial for
      creating a simple hinged box with Fusion 360 with slight modifications to
      house the custom keycaps.
    </p>
    <figure>
      <iframe
        src="https://www.youtube.com/embed/iSBsBTMsGTk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ aspectRatio: '16 / 9' }}
      />
      <figcaption>
        Tutorial for creating a simple hinged box.
      </figcaption>
    </figure>
    <p>
      &emsp;The model was sliced and grouped into batches of 3 to maximize use
      of the printing bed and took just over 24 hours to completely print. The
      box provided adequate housing for the custom keycaps and worked great as
      Christmas gifts.
    </p>
    <figure>
      <Carousel>
	<Image
      	  alt="Cases on print bed."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/cases.jpeg"
      	/>
	<Image
      	  alt="Elapsed time."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/elapsed.jpeg"
      	/>
	<Image
      	  alt="Case with keycaps."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/case.jpeg"
      	/>
	<Image
      	  alt="Cat Keycaps on keyboard."
          height={IMAGE_HEIGHT}
          width={IMAGE_WIDTH}
      	  src="/bucket/jpeg/project/custom_keycaps/cats.jpeg"
      	/>
      </Carousel>
      <figcaption>
	Keycaps on printed case and keyboard.
      </figcaption>
    </figure>

    <h1 id="future_work">Future Work</h1>
    <p>
      &emsp;The process for creating custom keycaps has provided many insights
      into the complexity involved with fabricating the designed product. There
      are many nuances into refining the processing parameters of SLA printing
      so that the surfaces and structure of the print are satisfactory.
    </p>
    <p>
      &emsp;One of the areas that could use more investigation is the
      optimization of the supports so that the print is supported while
      improving the surface finish of the print. Another would be exploring
      additional surface treatments such as acetone vapor polishing which would
      smooth appropriate keycaps such as the Ghost Keycap.
    </p>
  </StyledCustomKeycaps>
);

export default CustomKeycaps;
