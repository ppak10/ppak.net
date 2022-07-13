/**
 * breville_hopper.tsx
 * Breville espresso machine hopper extension.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PageLinks from 'common/components/PageLinks';
import Portal from 'common/components/Portal';
import PrintPreviews from 'react_three/components/PrintPreviews';

// Constants
// const DEBOSSED_TEXT = `
//  /+\     |FF|-|                /__\              \FFFFFFFF/-/    \FFFFFFFF/-/   \MMMMMMMM/-/   \HHHHHHHH/-/  \CCCCCCCC/-/ 
//  |C|     /FF\-|      /_\       |MM|     |EE|]     \MMMMMM/-/      \FFFFFF/-/     \MMMMMM/-/     \HHHHHH/-/    \CCCCCC/-/
//  |C|    /FFFF\       |H|       |MM|   __|EE|__   __\EEEE/__      __\EEEE/__     __\EEEE/__     __\EEEE/__    __\EEEE/__
// Cream    Foam    Half & Half   Milk   Espresso   Cappuccino    Dry Cappuccino   Flat White     Cafe Breve     Con Pana
// `;

const DEBOSSED_TEXT_WEBSAFE = `
 /+\\     |FF|-|                /__\\              \\FFFFFFFF/-/    \\FFFFFFFF/-/   \\MMMMMMMM/-/   \\HHHHHHHH/-/  \\CCCCCCCC/-/ 
 |C|     /FF\\-|      /_\\       |MM|     |EE|]     \\MMMMMM/-/      \\FFFFFF/-/     \\MMMMMM/-/     \\HHHHHH/-/    \\CCCCCC/-/
 |C|    /FFFF\\       |H|       |MM|   __|EE|__   __\\EEEE/__      __\\EEEE/__     __\\EEEE/__     __\\EEEE/__    __\\EEEE/__
Cream    Foam    Half & Half   Milk   Espresso   Cappuccino    Dry Cappuccino   Flat White     Cafe Breve     Con Pana
`;

const IMAGE_WIDTH = 992;
const IMAGE_HEIGHT = 744;

const PRINT_PREVIEWS_HOPPER = [
  {
    buttonText: 'Mk1',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk1.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk1.stl',
  },
  {
    buttonText: 'Mk2',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk2.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk2.stl',
  },
  {
    buttonText: 'Mk3',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk3.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk3.stl',
  },
  {
    buttonText: 'Mk4 V1',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk4v1.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk4v1.stl',
  },
  {
    buttonText: 'Mk4 V2',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk4v2.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk4v2.stl',
  },
  {
    buttonText: 'Mk5 V1',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk5v1.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk5v1.stl',
  },
  {
    buttonText: 'Mk5 V2',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk5v2.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk5v2.stl',
  },
  {
    buttonText: 'Mk6',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk6.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk6.stl',
  },
  {
    buttonText: 'Mk7 V1',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v1.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v1.stl',
  },
  {
    buttonText: 'Mk7 V2',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v2.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v2.stl',
  },
  {
    buttonText: 'Mk7 V3',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v3.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v3.stl',
  },
  {
    buttonText: 'Mk7 V4',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v4.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v4.stl',
  },
  {
    buttonText: 'Mk7 V5',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v5.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v5.stl',
  },
  {
    buttonText: 'Mk7 V6',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v6.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v6.stl',
  },
  {
    buttonText: 'Mk7 V7',
    gcodeUrl: '/bucket/gcode/project/breville_hopper/mk7v7.gcode',
    stlUrl: '/bucket/stl/project/breville_hopper/mk7v7.stl',
  },
];

// Enums
import { PortalElementId } from 'common/enums';

// Styled Components
import { StyledPrintPreviewsSection } from 'react_three/styled';
const StyledBrevilleHopper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  h2 {
    background-color: beige;
    margin: 0px;
    padding: 1em 0px;
    position: sticky;
    top: 0px;

    // z-index must be higher than carousel buttons
    z-index: 1;
  }

  pre {
    overflow-x: auto;
  }
`;

const BrevilleHopper: NextPage = () => (
  <StyledBrevilleHopper>
    <Portal portalElementId={PortalElementId.PageLinks}>
      <PageLinks>
        <ol>
          <li>
            <h2>
              <a href="#mk1">Mark 1</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#mk2">Mark 2</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#mk3">Mark 3</a>
            </h2>
          </li>
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
          <li>
            <h2>Mark 5</h2>
            <ol>
              <li>
                <a>
                  <h3>
                    <a href="#mk5v1">Version 1</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk5v2">Version 2</a>
                  </h3>
                </a>
              </li>
            </ol>
          </li>
          <li>
            <h2>
              <a href="#mk6">Mark 6</a>
            </h2>
          </li>
          <li>
            <h2>Mark 7</h2>
            <ol>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v1a">Version 1a</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v1b">Version 1b</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v2">Version 2</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v3">Version 3</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v4a">Version 4a</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v4b">Version 4b</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v5">Version 5</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v6">Version 6</a>
                  </h3>
                </a>
              </li>
              <li>
                <a>
                  <h3>
                    <a href="#mk7v7">Version 7</a>
                  </h3>
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </PageLinks>
    </Portal>
    <StyledPrintPreviewsSection>
      <h1 style={{ gridArea: 'heading' }}>Breville Hopper</h1>
      <p style={{ gridArea: 'paragraph' }}>
        &emsp;The Breville espresso machine comes with a rather small hopper to
        store coffee beans before they are fed to the grinder. I built an
        extension to the existing coffee bean hopper that would increase its
        capacity while also fitting in current location, below the cabinet. 
        As my first printing project, I went through multiple design iterations
        to better serve the constraints and commonly used accessories for this
        machine. In addition, this project served as a canvas to explore and
        test the capabilities of software such as Fusion 360 and Ultimaker
        slicer.
      </p>
      <PrintPreviews ordered printPreviews={PRINT_PREVIEWS_HOPPER} />
    </StyledPrintPreviewsSection>

    {/* Mk1 */}
    <h2 id="mk1">Mark 1</h2>
    <p>
      &emsp;For my first design I measured the distance between the top of the
      existing coffee bean hopper and the bottom of the cabinet door to be
      around 60 mm. For this I designed a simple cylinder to extend the existing
      hopper cylinder with as small lip to secure it in place. This print was
      successful and fit well on top of the machine, however the lip was not
      long enough to keep it secure and with the lid attach, it blocked the
      cabinet door from opening.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Hopper on kitchen placemant."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk1/IMG_0645.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper extending existing coffee bean hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk1/IMG_0646.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper with lid."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk1/IMG_0651.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper with lid."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk1/IMG_0656.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper with lid blocking cabinet door."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk1/IMG_0647.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Cylindrical extension placed on top of existing hopper. (Mark 1)
      </figcaption>
    </figure>

    {/* Mk2 */}
    <h2 id="mk2">Mark 2</h2>
    <p>
      &emsp;The second iteration of this design aimed to use more of the
      available horizontal space but also embed the lid portion into the print
      in order to allow the cabinet door to close. This print did not use any
      support for its overhangs and thus ran into issues towards the end where
      the lip was printed.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of neck printing errors."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3477.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side View of neck printing errors."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3480.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Another Side View of neck printing errors."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3481.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3477.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Another top view of hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3478.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Errors in printing due to abrupt step in neck area. (Mark 2)
      </figcaption>
    </figure>
    <p>
      &emsp;The results of this print did proved useful as it showed that the
      lid would fit in the inset portion of the hopper. Along with a correctly
      printed lip, would also fit well on the machine and no longer prevent the
      cabinet door from opening.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of hopper with lid."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3482.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of hopper with lid."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3483.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of hopper placed on existing hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3486.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper placed on existing hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3487.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper with lid no longer blocking cabinet door."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk2/IMG_3488.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Hopper with lid in intended spot just below cabinet. (Mark 2)
      </figcaption>
    </figure>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk2.mp4">
        Video of cabinet above hopper opening.
      </video>
      <figcaption>
        Hopper with lid no longer prevents cabinet door from opening. (Mark 2)
      </figcaption>
    </figure>
    <p>
      &emsp;Since this print could not be used with the Breville espresso
      machine, I decided to use it to resolve another issue I had with my cat,
      Vale. Vale like to play with his water bowl and tip it over from time to
      time making a big mess. This print utilized similar dimensions just larger
      than the water bowl its self and due to the slope, Vale now has a harder
      time flipping the bowl over.
    </p>
    <figure>
      <Image
        alt="Print used for anti-flip around cat water bowl."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/breville_hopper/mk2/IMG_0710(1).JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        This print coincedently has appropriate dimesion to be repurposed as
        anti-flip barrier for my cat&apos;s water bowl. (Mark 2)
      </figcaption>
    </figure>
    
    {/* Mk 3 */}
    <h2 id="mk3">Mark 3</h2>
    <p>
      &emsp;This version of the print was updated to use a larger 200 mm
      cylindrical diameter to further increase the amount beans it can store.
      This was printed right side up but ran into issues towards the end where
      the lid inset portion had significant overhang. Some of the filament
      around this area was not able to adhere correctly to its intended area and
      were left as stringy residue.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Stringy filament encountered during printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0659.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Timestamp when defect was encountered."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0661.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="End result of printing process on printer with defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0665.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of printed hopper defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0667.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Another top view of printed hopper defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0668.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of printed hopper defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0669.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Successfully printed hopper with several defects. (Mark 3)
      </figcaption>
    </figure>
    <p>
      &emsp;The existing lid fits well in the provided inset and a small notch
      was placed in the side to make removing the lid easier. This print was the
      first iteration to successfully attach to the existing hopper and extend
      the space to store coffee beans.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of hopper with lid on Breville machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0671.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of hopper with lid on Breville machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0672.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper with lid on Breville machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0670.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper with lid on Breville machine with coffee beans."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk3/IMG_0676.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Hopper fits well on Breville machine and functions as intended. (Mark 3)
      </figcaption>
    </figure>

    {/* Mk4 V1  */}
    <h2 id="mk4v1">Mark 4 Version 1</h2>
    <p>
      &emsp;This iteration of the print aimed to improve the extension&apos;s
      placement on the hopper with rubber O-rings while also utilizing a larger
      220 mm diameter. For this I followed this tutorial to remove some of the
      factory restraints on the slicer software.
    </p>
    <figure>
      <iframe
        src="https://www.youtube.com/embed/Il1sierB4Yk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          aspectRatio: '16 / 9',
          minWidth: 310,
        }}
      />
      <figcaption>
        Tutorial for removing keep out areas on Ultimaker.
      </figcaption>
    </figure>
    <p>
      &emsp;The print encountered some defects early while printing the sloped
      portions of the funnel but successfully finished printing utilizing the
      maximum print area.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Some stringy filament still encountered during printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_0677.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Wider view of printer during printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_0679.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print completed successfully."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_0680.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Print utilizing maximum 220 mm x 220 mm area with some defects.
        (Mark 4 Version 1)
      </figcaption>
    </figure>
    <p>
      &emsp;The finished print however did not fit on the hopper area as the
      rubber O-rings placed in the printed neck grooves was too large. This was
      noted and in future prints would be accounted for with greater tolerance.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="O-ring on hopper is too large to fit on machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_0684.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view with o-ring on hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_0685.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="2.00mm o-ring caliper measurement with cat"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk4v1/IMG_3495.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Tolerance for o-ring groove was not sufficient enough to fit.
        (Mark 4 Version 1)
      </figcaption>
    </figure>

    {/* Mk4 V2 */}
    <h2 id="mk4v2">Mark 4 Version 2</h2>
    <p>
      &emsp;This version attempts to see what would occur if a 240 mm diameter
      was used on a 220 mm x 220 mm maximum print bed. As seen below, the
      printer is physically not be able to extend further than what is available
      and for some of those curved portions would result in a straight line. The
      print was stopped mid way as the funnel portion did not end up printing
      properly either.
    </p>
    <figure>
      <Image
        alt="240mm x 240mm area print failed."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/breville_hopper/mk4v2/IMG_0687.JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Print utilizing 240 mm x 240 mm area was not successful.
        (Mark 4 Version 2)
      </figcaption>
    </figure>

    {/* Mk5 V1 */}
    <h2 id="mk5v1">Mark 5 Version 1</h2>
    <p>
      &emsp;This version reverts back to a design similar to that of Mark 3
      with a greater emphasis on updating the sloped interior and exterior
      portions to print with less defects. Unfortunately the adjustments to the
      exterior funnel portion of the print was not enough to prevent defects but
      the interior slope towards the top printed correctly.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Funnel portion of neck still has stringy defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0689.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of funnel portion of neck defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0690.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Interior funnel portion of neck does not have defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0692.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Later view of stringy defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0693.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Later view of printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0695.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0696.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0698.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0699.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of defects after completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0700.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of defects after completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0702.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view after defects have been trimmed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0703.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Total elapsed print time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v1/IMG_0701.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of print and defects during and after print process.
        (Mark 5 Version 1)
      </figcaption>
    </figure>

    {/* Mk5 V2 */}
    <h2 id="mk5v2">Mark 5 Version 2</h2>
    <p>
      &emsp;This version aims to fix the defects issue on the exterior portion
      of the funnel by increasing the angle of the funnel. Along with this
      debossed content was added around the side of the print to displaying the
      following recipes.
    </p>
    <pre>{DEBOSSED_TEXT_WEBSAFE}</pre>
    <figure>
      <Carousel>
        <Image
          alt="Fewer defects encountered during neck printing."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0704.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of interior neck defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0705.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of debossing."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0706.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Left corner view of debossing."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0708.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Right corner view of debossing."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0710.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of debossing in completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0716.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0717.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0719.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0718.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of printing process and completed print with elapsed time.
        (Mark 5 Version 2)
      </figcaption>
    </figure>
    <p>
      &emsp;The print was successful and the increased tolerance for the O-rings
      allowed the extension to fit in the machine, albet very tightly. In the
      next print the tolerance around the O-ring will be further increased.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="View of o-ring placed in recessed neck area."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0720.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of hopper attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0721.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Closer view or o-ring on hopper when attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0722.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of cabinet door opened when hopper is attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk5v2/IMG_0723.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Hopper placed on machine. (Mark 5 Version 2)
      </figcaption>
    </figure>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk5v2.mp4">
        Video displaying the debossing on hopper.
      </video>
      <figcaption>
        Views of debossed recipes.
      </figcaption>
    </figure>

    {/* Mk6 */}
    <h2 id="mk6">Mark 6</h2>
    <p>
      &emsp;This iteration aims to utilize the full printable area of the 220 mm
      x 220 mm print bed with square dimensions. The circular neck portion of
      the print was kept the same and used the loft tool to generate the funnel
      portion. Along with this insets were created for other accessories such as
      the brush and grounds comb.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Defects encountered during neck printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0725.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Closer view of defects encountered during neck printing process."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0726.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of printing of funnel portion of neck."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0727.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of later portion of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0728.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0731.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Total elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0732.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views during print process and elapsed time. (Mark 6)
      </figcaption>
    </figure>
    <p>
      &emsp;The print finished in just over a day and with minimal defects which
      occurred during the neck portion. The brush accessory was a little too
      long to fit in place and the inset for the handle portion will need
      extended. The space for the O-ring was just enough and was able to fit
      snuggly in the machine when twisted in place.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Interior view of top portion of hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0733.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper with accessories in place."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0734.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Brush accessory is a bit too large for created slot."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0735.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper placed on machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0736.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper placed on machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0737.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of hopper placed on machine with o-rings visible."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk6/IMG_0738.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Print with accessories in place and secured on the machine. (Mark 6)
      </figcaption>
    </figure>

    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk6.mp4">
        Video displaying cabinet closing with hopper.
      </video>
      <figcaption>
        Cabinet closing with hopper in place. 
      </figcaption>
    </figure>

    {/* Mk7 V1a */}
    <h2 id="mk7v1a">Mark 7 Version 1a</h2>
    <p>
      &emsp;This iteration sets aside the insets for the brush and grounds
      trimmer for a later version and focuses on providing a space to store the
      filter basket. The print ran into issues early on where adhesion to the
      print bed started failing on the right side early, probably due to
      improper leveling. Along with this, this design produced a lot more
      stringy defects probably due to some of the abrupt offsets. This time
      around the grooves of the O-rings were made a little too large as the
      print seems to slide in and out of place too easily.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Initial adhesion layers for printing along with leftovers from previous prints."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0741.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Defects already present during lower portion of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0742.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Additional layers seems have less defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0744.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Lower portion of the print seems to exhibit uneven printing."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0749.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Right side of adhesion layer has lifted from the print bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0750.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0751.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of defects within completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0753.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bottom view of hopper removed from print bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0754.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up of hopper bottom with printing defects."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0755.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Total elapsed time for print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0752.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Completed print with close ups on defects. (Mark 7 Version 1a)
      </figcaption>
    </figure>
    <p>
      &emsp;The space for the filter basket was adequate enough to secure them
      in place but were a little too tight as removing them for use also ends up
      lifting the print. In the next iteration of this print the slots for the
      filter basket will have greater tolerances and less unneccessary material
      surrounding it.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Side view of hopper with filter holder placed in slot."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0756.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up view of o-rings placed in grooves."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0757.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of the back of machine where hopper blocks water removal."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0761.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of hopper with filter holders placed in slots."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0758.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper with lid attached."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1a/IMG_0759.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Hopper placed on machine. (Mark 7 Version 1a)
      </figcaption>
    </figure>

    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk7v1a.mp4">
        Video displaying cabinet closing with hopper.
      </video>
      <figcaption>
        Cabinet is able to close with print in place. (Mark 7 Version 1a)
      </figcaption>
    </figure>

    {/* Mk7 V1b */}
    <h2 id="mk7v1b">Mark 7 Version 1b</h2>
    <p>
      &emsp;This version of the print takes the same model but prints it upside
      down to see if this would create less defects. Unfortunately, changing the
      way it was printed did not resolve some of the issues that were inherit in
      the design.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Prints top down to allow for flat ceiling of hopper."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0762.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Adds support for inset for lid area."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0763.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Later stage of print with support for inset for lid area."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0766.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up of seperation between support and lid area."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0767.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Later stage of print during funnel section."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0769.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Small adhesion failure with visible seam of defect."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0770.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Printing defects during circular portion of funnel."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0771.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished printing result."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0772.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Interal view of defects during circular funnel portion."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0774.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up on partial removal of lid support."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0775.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of lid inset with fully removed support."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0776.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elasped time of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v1b/IMG_0773.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Close up views of defects in finished print and elapsed time.
        (Mark 7 Version 1b)
      </figcaption>
    </figure>

    {/* Mk7 V2 */}
    <h2 id="mk7v2">Mark 7 Version 2</h2>
    <p>
      &emsp;This iteration removes the extra two filter basket slots on the
      right side of the print since we only have a total of two. Along with this
      the dimensions of this prints were reduced to 180 mm in width to look
      better on the espresso machine. This print ended up unused as the funnel
      portion were not thick enough to allow the individual layers to adhere to
      on another.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Print during early stage."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0777.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished printing result."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0778.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of finished printing result."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0779.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print with support on lid inset."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0784.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of print with support cleanly removed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0785.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up view of neck defects during print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0781.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of defects in funnel portion of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0780.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of light passing through defects in funnel."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0783.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elasped time of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v2/IMG_0782.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        View of defects in finished print. (Mark 7 Version 2)
      </figcaption>
    </figure>

    {/* Mk7 V3 */}
    <h2 id="mk7v3">Mark 7 Version 3</h2>
    <p>
      &emsp;The removal of the finished print from the included print bed was
      often time consuming as it needs to be done carefully in order to not
      damage the print when scraping away from the rigid print bed. To address
      this I purchased a flexible magnetic print bed which made it easy to
      remove from the printer and the final print.
    </p>
    <figure>
      <Image
        alt="Magnetic print bed for Ender 3 listing on Amazon.com"
        height="681"
        src="/bucket/jpeg/project/breville_hopper/mk7v3/ender_3_magnetic_print_bed.JPG"
        width="1230"
      />
      <figcaption>
        Amazon.com listing for Ender 3 magnetic print bed. (Mark 7 Version 3)
      </figcaption>
    </figure>
    <p>
      &emsp;Unfortunately this print encountered the first thermal runaway error
      which at the time I attributed to an improper installation of the new
      print bed. During this issue, the printer would emit a continuous tone
      loud as a fire alarm in order to alert the user to turn off the machine.
      After further research, this error is encountered when the printer is
      unable to accurately control the temperature of either the print bed or
      extruder nozzle. The main cause of this error is possibly due to the
      thermoresistor is improperly attached to the heat source. For this I
      believed that the new magnetic print bed and the adhesive attachment might
      have contributed to this issue and thus removed and reattached the new
      print bed.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Print beginning on magnetic bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0787.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Early stage of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0001(3).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Later stage of print resumed after thermal runaway."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0002(3).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Thermal runaway error."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0003(2).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Print encountered a thermal runaway error and was resumed after
        restarting printer. (Mark 7 Version 3)
      </figcaption>
    </figure>
    <p>
      &emsp;The print however was sufficiently completed enough for me to test
      out how the filter baskets would fit.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="View of filter holders on partially completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0004(3).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of partially completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0005.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Close up on filter holder."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v3/IMG_0006.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        View of accessories on partially completed print. (Mark 7 Version 3)
      </figcaption>
    </figure>

    {/* Mk7 V4a */}
    <h2 id="mk7v4a">Mark 7 Version 4a</h2>
    <p>
      &emsp;Unfortunately the magnetic print bed on this print was not securely
      attached to the print bed and shifted during the printing process. I did
      not know at the time but this was caused due to my attempt to readjust the
      magnetic adhesion layer on the print bed.
    </p>
    <figure>
      <Image
        alt="Print failure due to shift in print bed."
        height={IMAGE_HEIGHT}
        src="/bucket/jpeg/project/breville_hopper/mk7v4a/IMG_0007(2).JPEG"
        width={IMAGE_WIDTH}
      />
      <figcaption>
        Magnetic print bed has shifted causing print failure.
        (Mark 7 Version 4a)
      </figcaption>
    </figure>

    {/* Mk7 V4b */}
    <h2 id="mk7v4b">Mark 7 Version 4b</h2>
    <p>
      &emsp;This iteration updates the angle of the funnel portion in order to
      print properly and removes the section of the filter basket holder. The
      magnetic print bed was secured with paper clips used on previous prints.
      This proved adqueate enough to keep the print bed from moving away but
      was not able to prevent the issue of print bowing out on the edges.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Magnetic print bed attached with clips."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0008(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Small adhesion failure on sides of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0010.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Middle portion of magnetic bed has lifted away from printing platform."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0011.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Bits of excess support exposed later in print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0012.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Funnel portion of print has printed successfully."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0014(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Neck portion of print has printed successfully."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0015(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of completed print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0016(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of elapsed time."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0017(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Completed print and elapsed time. (Mark 7 Version 4b)
      </figcaption>
    </figure>
    <p>
      &emsp;The print used the same O-rings and ended up fitting well onto the
      espresso machine along with providing slots for hanging up the filter
      baskets.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="O-Rings fit well on inset in neck."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0018.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper fits well on machine along with filter holder."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0019(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper on machine"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0020(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of hopper on machine along with filter holder."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0021.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="O-Rings on neck do not slip when secured to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0022.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper leaves enough space to allow for water reservoir is removed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0023.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Hopper is slightly lifted from machine when filter holder is removed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v4b/IMG_0025(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Additional notes on finished print. (Mark 7 Version 4b)
      </figcaption>
    </figure>

    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk7v4b.mp4">
        Video displaying cabinet closing with hopper on machine.
      </video>
      <figcaption>
        Cabinet close with hopper attached. (Mark 7 Version 4b)
      </figcaption>
    </figure>

    {/* Mk7 V5 */}
    <h2 id="mk7v5">Mark 7 Version 5</h2>
    <p>
      &emsp;At this point I was confident that the magnetic print caused the
      bowing issue so I reverted back to using the rigid non-magnetic print bed.
      I attached this in the same way with paper clips but forget to level the
      print bed. As a result, the extruder nozzle was far too close to the print
      bed and ended up fusing the print to the print bed. This made the removal
      process of the final print difficult and ended up damaging the print.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Beginning stage of print with embossing for bush area."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0029(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0032(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of finished print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0033(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time of print."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0034(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="View of print bed after print removal."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0044(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of print with damages from print bed removal."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0035(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of finished print with accessories attached."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v5/IMG_0037(1).JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of print and damage during removal from print bed.
        (Mark 7 Version 5)
      </figcaption>
    </figure>

    {/* Mk7 V6 */}
    <h2 id="mk7v6">Mark 7 Version 6</h2>
    <p>
      &emsp;At this pointer I had no other option but to give the magnetic print
      bed another chance as I had ruined the included one in the previous print.
      While doing this I figured out that I had attaching the adhesive portion
      of the print bed improperly by rotating 90°. As such to the magnetic print
      bed also had to be rotated 90° and the lift portion cut off in order to be
      secured properly. This encountered a strange issue where the filament for
      the spool got stuck and ended up preventing the filament from flowing to
      the extruder; The printer did not know this and continued printing without
      the filament. The print was completed enough to show that the brush inset
      was just a bit too large and should be made a bit smaller.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Correct placement of magnetic printing bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0038(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Removed extra overhang on magnetic print bed to fit properly."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0039(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Beginning stage of print on magnetic print bed."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0040.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Print continues however filament doesn't flow."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0041.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Filament spool got stuck and caused print to fail."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0042(1).JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Brush inset was a little too large and adjusted to be slightly smaller"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v6/IMG_0045.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Failed print showed that space around brush inset was a adequate enough
        to fit but still little bit too large. (Mark 7 Version 6)
      </figcaption>
    </figure>

    {/* Mk7 V7 */}
    <h2 id="mk7v7">Mark 7 Version 7</h2>
    <p>
      &emsp;This version of the print adds in the slot for rectangular grounds
      scraper to the front of the print and debossing indicators for filter
      basket and grounds scraper.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="View of finished print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0050.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of finished print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0051.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Underside of finished print with support attached"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0053.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Elapsed time for print"
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0052.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Finished print and elapsed time. (Mark 7 Version 7)
      </figcaption>
    </figure>
    <p>
      The print completed with minimal defects as the loft in the funnel portion
      was updated well enough to accomodate the subsequent layers. The slots for
      the accessories and lid were printed with enough tolerance to allow easy
      placement and removal. The space for the filter basket holder was
      increased so that the slot can be used with the filter basket in place.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Top view of finished print with accessories attached."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0054.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of finished print with accessories attached."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0055.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Front view of hopper attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0056.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Top view of hopper attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0057.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Corner view hopper attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0060.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Side view of filter baskets on hopper while attached to machine."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0058.JPEG"
          width={IMAGE_WIDTH}
        />
        <Image
          alt="Space available for water reservoir removal."
          height={IMAGE_HEIGHT}
          src="/bucket/jpeg/project/breville_hopper/mk7v7/IMG_0059.JPEG"
          width={IMAGE_WIDTH}
        />
      </Carousel>
      <figcaption>
        Views of hopper with accessories attached while on machine.
        (Mark 7 Version 7)
      </figcaption>
    </figure>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/project/breville_hopper/mk7v7.mp4">
        Video displaying cabinet closing with hopper on machine.
      </video>
      <figcaption>
        Cabinet door is able to close with print in place. (Mark 7 Version 7)
      </figcaption>
    </figure>
    <p>
      &emsp;As a first project I used a lot of filament to create multiple
      iterations of the print with small changes and in hindsight a smaller
      project may have suited better. Through this process I refined the way I
      developed models in Fusion 360 to from re-inputing the same measurements
      to using the included tools such as history to save time by iterating on
      the existing designs. I am satisfied with the outcome of this project and
      impressed by the accuracy and tolerances that can be achieved with the 3D
      printer. I am interested in further exploring this tool and other
      solutions I can build with this technology.
    </p>
  </StyledBrevilleHopper>
);

export default BrevilleHopper;
