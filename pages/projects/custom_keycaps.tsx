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

const PreformLink: FC = () => (
  <a
    href="https://formlabs.com/software/"
    rel="noreferrer"
    target="_blank"
  >
    Preform
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
	      <a href="#part2">Part 2</a>
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
      <h1 id="part2" style={{ gridArea: 'heading' }}>Part 2</h1>
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
  </StyledCustomKeycaps>
);

export default CustomKeycaps;
