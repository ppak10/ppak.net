/**
 * lou.tsx
 * Outlines work done at Lou.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PageLinks from 'common/components/PageLinks';
import Portal from 'common/components/Portal';

// Constants
const LANDING_PAGE_MOCKUP_WIDTH = 1504;

// Enums
import { PortalElementId } from 'common/enums';

// Styled Components
const StyledLou = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Lou: NextPage = () => (
  <StyledLou>
    <Portal portalElementId={PortalElementId.PageLinks}>
      <PageLinks>
        <ol>
          <li>
            <h2>
              <a href="#turnkeySegments">Turnkey Segments</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#landingPageRedesign">Landing Page Redesign</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#tourTemplates">Tour Templates</a>
            </h2>
          </li>
        </ol>
      </PageLinks>
    </Portal>

    <h1>Lou</h1>
    <p>
      &emsp;At Lou we build out tools to help customers onboard users onto their
      platform in order to provide a better user experience and increase user
      retention. One of these tools is the Lou Builder which is a Chrome browser
      extension that allows the customer to build an onboarding experience right
      on top of the website with little to no code at all. During my time at Lou
      I worked mainly on features for the Builder extension and also made
      improvements to our other services such as the Assistant Script,
      Dashboard, Landing Page, and API. These included such things as User
      Segments, 
    </p>

    {/* Turnkey Segments */}
    <h2 id="turnkeySegments">Turnkey Segments</h2>
    <p>
      &emsp;For my first project I worked on creating &quot;Turn Key&quot;
      segments (which allows customers to identify and group users) so that
      using this feature is available out of the box. For this I worked on
      creating front-end components to display these items on both the dashboard
      and builder extension. My contributions to this feature focused mainly on
      updating the styles and served as a nice first project to get my
      development environment up and ready.
    </p>
    <figure>
      <Image
        alt="Dashboard page for segments displaying turn key segments."
        height="915"
        src="/bucket/jpeg/work/lou/IMG_3559.JPG"
        width="1312"
      />
      <figcaption>
        Dashboard Segments page displaying Turnkey Segment list items.
      </figcaption>
    </figure>

    {/* Landing Page Redesign */}
    <h2 id="landingPageRedesign">Landing Page Redesign</h2>
    <p>
      &emsp;This project I worked on updating the landing page to provide pixel
      perfect and responsive implementations of the provided mock-ups. For this
      I utilized CSS grid properties to handle each of the sections and divide
      them into columns and rows. With appropriate media queries I updated each
      page to either scale each section or organize the sections into a single
      column to fit on mobile and tablet devices.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Home Page V2"
          height="4453"
          src="/bucket/jpeg/work/lou/IMG_3560.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Home Page Menu V2"
          height="4416"
          src="/bucket/jpeg/work/lou/IMG_3561.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Experience Page V2"
          height="3163"
          src="/bucket/jpeg/work/lou/IMG_3562.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Build Page V2"
          height="2477"
          src="/bucket/jpeg/work/lou/IMG_3563.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Personalize Page V2"
          height="2507"
          src="/bucket/jpeg/work/lou/IMG_3564.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Analyze Page V2"
          height="2507"
          src="/bucket/jpeg/work/lou/IMG_3565.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
        <Image
          alt="Pricing Page V2"
          height="1617"
          src="/bucket/jpeg/work/lou/IMG_3566.JPG"
          width={LANDING_PAGE_MOCKUP_WIDTH}
        />
      </Carousel>
      <figcaption>
        Mock-ups used for each page.
      </figcaption>
    </figure>

    {/* Tour Templates */}
    <h2 id="tourTemplates">Tour Templates</h2>
    <p>
      &emsp;This feature is specific to the Builder where it made creating
      onboarding experiences for new a customer easier by selecting from a
      fitting template. From this, the created experience can be edited or added
      upon to better fit the customer&apos;s website.
    </p>
    <figure>
      <Image
        alt="Lou Builder create from template example"
        height="700"
        src="/bucket/jpeg/work/lou/IMG_3568.JPG"
        width="449"
      />
      <figcaption>
        Create an experience from one of Lou&apos;s pre-built templates.
      </figcaption>
    </figure>
  </StyledLou>
);

export default Lou;
