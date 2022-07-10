/**
 * lenovo_adjustable_notebook_stand.tsx
 * Lenovo adjustable notebook stand project page component.
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

const PRINT_PREVIEWS_DOCK = [
  {
    buttonText: 'Workstation',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1.stl',
  },
  {
    buttonText: 'Ultra',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6.stl',
  },
];

const PRINT_PREVIEWS_CLIP = [
  {
    buttonText: 'V1',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1.stl',
  },
  {
    buttonText: 'V2',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2.stl',
  },
  {
    buttonText: 'V3',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3.stl',
  },
]

const PRINT_PREVIEWS_ULTRA = [
  {
    buttonText: 'V1',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1.stl',
  },
  {
    buttonText: 'V2',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2.stl',
  },
  {
    buttonText: 'V3',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3.stl',
  },
  {
    buttonText: 'V4',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4.stl',
  },
  {
    buttonText: 'V5',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5.stl',
  },
  {
    buttonText: 'V6',
    gcodeUrl: '/bucket/gcode/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6.gcode',
    stlUrl: '/bucket/stl/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6.stl',
  },
]

// Styled Components
import {
  StyledPrintPreviewSection,
  StyledPrintPreviewsSection
} from 'react_three/styled';

const StyledLenovoAjustableNotebookStand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const LenovoAdjustableNotebookStand: NextPage = () => (
  <StyledLenovoAjustableNotebookStand>
    <StyledPrintPreviewsSection>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_DOCK} />
      <h1 style={{ gridArea: 'heading' }}>ThinkPad Dock Stand Attachment</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;ThinkPad laptops have a nice ecosystem of accessories that can be
        used to enhance the work experience one of which is a dock which allows
        for a set of input devices to be quickly connected. Another is a laptop
        stand which is height adjustable and can act as a base for the dock
        itself. Unfortunately, the dock I use with my T480 is not compatible
        with this stand unless a special print is designed for it.
      </p>
    </StyledPrintPreviewsSection>
    <p>
      &emsp;This laptop stand was intended to support the docks attached to the
      previous family of ThinkPads and because of this I considered purchasing a
      workstation in that generation. To test this out I purchased a workstation
      dock compatible with the p50 / p51 laptop that I would consider using
      since it would be on the higher end of the performance available. However,
      it turns out that all docks except for the workstation dock is compatible
      with the laptop stand and thus required me to design a solution.
    </p>
    <StyledPrintPreviewSection right>
      <PrintPreview
        gcodeUrl="/bucket/gcode/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1.gcode"
        stlUrl="/bucket/stl/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1.stl"
      />
      <h2 style={{ gridArea: 'heading' }}>Workstation Dock</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;This print utilized higher tolerances around cable management as
        it was meant to test out initial measurements. I also added some
        debossing and printed this vertically to capture interior space without
        need to add in support. However, due to the low surface adhesion of this
        print bed, it fell over and failed.
      </p>
    </StyledPrintPreviewSection>
    <p>
      &emsp;The main issue with placing these docks on the laptop stand is that
      they tend to slide down / move around during when securing / removing the
      laptop to the dock. To resolve this issue, one solution I thought of was
      to add a simple block below the dock to prevent it from sliding down and
      securing it in place with the other laptop stand attachments.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Right side of block for think pad."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3458.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom Corner side of block for think pad."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3469.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front side of block for think pad."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3460.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom side of block for think pad."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3462.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of block to support thinkpad workstation dock.
      </figcaption>
    </figure>
    <p>
      &emsp;The print was properly completed however the PLA filament used here
      ended up less pliable than expected. For this print I expected that it
      would bend just enough to fit on the grooves in the laptop stand without
      deforming plastically. Unfortunately the print was far too rigid and the
      nub portion of the print needed to be removed.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Block attached to thinkpad stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3470.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of block attached to thinkpad stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3472.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of block attached to thinkpad stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3473.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Additional side view of block attached to thinkpad stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/workstation_dock/mk1/IMG_3476.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        View of block attached to stand however material is too stiff to allow
        block to properly attach.
      </figcaption>
    </figure>
    <p>
      &emsp;Due to the portions of the print that needed to be removed in order
      to fit on the stand, it could no longer be secured in place without
      permanently attaching it to the laptop stand. I decided to move away from
      trying to design a print for the workstation laptop I wanted and instead
      work on a print to accomodate the T480 laptop I did have.
    </p>
    <StyledPrintPreviewsSection>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_CLIP} />
      <h2 style={{ gridArea: 'heading' }}>Laptop Stand Clip</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The laptop stand includes a clip to provide support for the
        missing space on the stand if not used with a supported dock. For this I
        plan on using the dimensions of this clip as the base for designing the
        attachment for the ultra dock for my T480. The different versions here
        add incremental changes to adjust tolerances in order to be properly
        used with the laptop stand.
      </p>
    </StyledPrintPreviewsSection>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0077.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0078.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side View of finished print with support attached."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0080.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0079(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of insert for laptop stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0095(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of insert."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0099.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of insert in laptop stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v1/IMG_0091.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Print for insert in laptop stand does not fit due to fill between rails.
        (Version 1)
      </figcaption>
    </figure>
    <p>
      &emsp;This first print used initial measurements from the existing clip
      and was used to test whether it would fit in the existing laptop stand
      slot. The rails for the initial clip were not taken into account and the
      extra material in the space between prevents this clip from entering its
      intended slot.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2/IMG_0100.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2/IMG_0101.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Insert in laptop stand but not locked in due to end cap angle."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2/IMG_0102.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Non matching angle for end cap."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v2/IMG_0103.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Print slides in but does not fit properly due to end cap angle.
        (Version 2)
      </figcaption>
    </figure>
    <p>
      &emsp;The design for this clip was updated to account for the space
      required in order to slide in the laptop stand. The clip did not end up
      locking in place due to the angle of the end cap mismatching that of the
      laptop stand.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished print for no dock laptop insert."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3/IMG_0104.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3/IMG_0105.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print used in notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3/IMG_0106(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of print securely locked in place."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3/IMG_0107.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of print displaying minor step between components."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/no_dock/mk1v3/IMG_0108(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print used with notebook stand.
      </figcaption>
    </figure>
    <p>
      &emsp;The thickness of the insert portion of the clip was increased to
      decrease the amount of movement available when placed into slot. The angle
      of the end cap was updated so that it matched that of the laptop stand and
      now the clip is able to lock into place. There is still room for other
      small improvements however those can be addressed in future prints for the
      ultra dock.
    </p>
    <StyledPrintPreviewsSection printPreviewsRight>
      <PrintPreviews printPreviews={PRINT_PREVIEWS_ULTRA} />
      <h2 style={{ gridArea: 'heading' }}>Ultra Dock Clip</h2>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The clip here gradually adds more material to secure the ultra
        dock more securely with each version. The final version accounts for the
        moving parts of the dock such as the slide and also keep other ancillary
        parts of the dock, such as the power supply, secure. For the most part
        this redesigned clip for the ultra dock serves the purpose of keeping
        the dock in place during the securing / removal process of the laptop.
      </p>
    </StyledPrintPreviewsSection>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1/IMG_0109(2).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1/IMG_0110(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of print inserted into notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1/IMG_0111.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of print for ultra dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1/IMG_0112.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Corner back view of print for ultra dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v1/IMG_0113.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of finished print utilized with ultra dock. (Version 1)
      </figcaption>
    </figure>
    <p>
      &emsp;This version of the ultra dock clip provides a small update to the
      existing clip by just adding a bit more material to account for the larger
      dock size. This print by itself allows the dock to be place on top of the
      laptop stand properly but still needs to be secured.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2/IMG_0236(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2/IMG_0238(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of print inserted into notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2/IMG_0239(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of print for ultra dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v2/IMG_0240(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print with side cover to test out keyhole measurements.
        (Version 2)
      </figcaption>
    </figure>
    <p>
      &emsp;The keyhole for the ultra dock were measured and the material around
      that area was accurately removed to allow access with the side cover
      present. The side cover also provided a small amount of overhang to the
      dock in order to keep it secured in place, though the rubber stopper on
      the bottom of the dock makes the fit a little too tight.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0242(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0243.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print attached to ultra dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0244.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of print attached to dock side."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0245.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of print showing labels around keyhole."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0246(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of print attached exposing kensington lock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v3/IMG_0247(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Updated print with extended overhang and additional holes. (Version 3)
      </figcaption>
    </figure>
    <p>
      &emsp;This version extends the cover over the dock while adding in holes
      to expose the Kensington lock and labels around the keyhole. The holes for
      LED indicators and the power button had the correct height placement but
      needed to be moved a bit more to the right. From the overly tight fit from
      the previous print, the area around the rubber steps on the dock was
      increased. However this was not enough as once the print was attached to
      the laptop stand with the dock, it had to be destructively removed as the
      fit was too tight.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4/IMG_0250(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4/IMG_0251(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print attached to notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4/IMG_0252(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4/IMG_0253(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v4/IMG_0254.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of print attached to notebook stand. (Version 4)
      </figcaption>
    </figure>
    <p>
      &emsp;This print removes the place underneath the dock to allow for the
      rubber steps on the dock to directly contact the laptop stand and as a
      result the dock is able to be easily added and removed. The radius around
      the top portion of the dock cover was increased to fully display the
      labels and power button. The lower portion of the print needs more
      reinforcement in order to provide stronger support for the dock to prevent
      that portion of the print from bending. This print is the first to use
      space gray PLA filament since it matches the intented color scheme and is
      also cheaper.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5/IMG_0258(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5/IMG_0259(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print attached to notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5/IMG_0260(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5/IMG_0261.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v5/IMG_0262.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of finished print attached to notebook stand. (Version 5)
      </figcaption>
    </figure>
    <p>
      &emsp;This version adds a couple incremental changes to previously
      successful design. For this chamfers were finally added around the print
      and more material was added towards the lower portion of the print to
      mitigate the bending issue. It also further increased the tolerance
      between the dock and the print so that they do not fit too tightly.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Finished view of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0268.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0269.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print attached to notebook stand."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0270.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0271.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0272(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Dock and adapter view of attached print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0273.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of finished print attached to notebook stand. (Version 6)
      </figcaption>
    </figure>
    <p>
      &emsp;This print adds space underneath the clip to house the power adpater
      as more material was necessary to eliminate bending. This increased angle
      also added sufficient space to cover the portion for the power adapter.
      One issue that could be addressed in a future versions would be decreasing
      the overly large tolerance for the AC power adapter plug. Another issue is
      that the print seems to display lines between the design sections which
      could be addressed later in a complete redesign.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Laptop in use while attached to dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0274(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Back view of laptop in use while attached to dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0276.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Adapter view of laptop in use while attached to dock."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/lenovo_adjustable_notebook_stand/ultra_dock/mk1v6/IMG_0277.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of laptop in use with finished print.
      </figcaption>
    </figure>
    <p>
      &emsp;When designing the model for this project, I had to make use of
      constraints in Fusion 360 which I previously considered an afterthrought.
      For a project like this with many percise measurements, constraints and
      use of separate components made going back to tweak iterations a bit more
      accessible. In the future I plan on following this type of structure and
      possibly revisiting this project with a further improved version of the
      ultra dock clip.
    </p>
  </StyledLenovoAjustableNotebookStand>
);

export default LenovoAdjustableNotebookStand;
