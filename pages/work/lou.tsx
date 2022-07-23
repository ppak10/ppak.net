/**
 * lou.tsx
 * Outlines work done at Lou.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';
import PageLinks from 'common/components/PageLinks';
import Portal from 'common/components/Portal';

// Constants
const LANDING_PAGE_MOCKUP_WIDTH = 1504;
const LOU_BUILDER_MOCKUP_WIDTH = 2559;
const LOU_BUILDER_MOCKUP_HEIGHT = 1378;

const PLACEMENT_GRID = `
+-------------+---------------+--------------+
|  Top Left   |  Top Center   |  Top Right   |
+-------------+---------------+--------------+
| Middle Left | Middle Center | Middle Right |
+-------------+---------------+--------------+
| Bottom Left | Bottom Center | Bottom Right |
+-------------+---------------+--------------+
`;

const PLACEMENT_ENUM = `
/**
 * @description
 * Placments declared using bit shifting for complex conditionals.
 * +------------------+--------------------+-------------------+---+
 * |         8        |          16        |         32        | + |
 * +------------------+--------------------+-------------------+---+
 * |   Top Left (9)   |  Top Center (17)   |  Top Right (33)   | 1 |  
 * +------------------+--------------------+-------------------+---+
 * | Middle Left (10) | Middle Center (18) | Middle Right (34) | 2 | 
 * +------------------+--------------------+-------------------+---+
 * | Bottom Left (12) | Bottom Center (20) | Bottom Right (36) | 4 | 
 * +------------------+--------------------+-------------------+---+
 * 
 * @example Determining placement from dimensional values.
 * const dimensionsToPlacement = (dimensions): Placement => {
 *   // Placement will be returned unchanged if no conditionals are met.
 *   let placement = Placement.Custom; // 000000 = 0
 *   
 *   // Vertical
 *   if (dimensions.top === '0px') {
 *     placement += Placement.Top; // 000001 = 1
 *   } else if (dimensions.top === '50%') {
 *     placement += Placement.Middle; // 000010 = 2
 *   } else if (dimensions.bottom === '0px') {
 *     placement += Placement.Bottom; // 000100 = 4
 *   }
 * 
 *   // Horizontal
 *   if (dimensions.left === '0px') {
 *     placement += Placement.Left; // 001000 = 8
 *   } else if (dimensions.left === '50%') {
 *     placement += Placement.Center; // 010000 = 16
 *   } else if (dimensions.right === '0px') {
 *     placement += Placement.Right; // 100000 = 32
 *   }
 * 
 *   return placement; // Placement.TopLeft === 1 + 8
 * }
 */
export enum Placement {
  Custom = 0, // 000000 = 0

  Top = 1 << 0, // 000001 = 1
  Middle = 1 << 1, // 000010 = 2
  Bottom = 1 << 2, // 000100 = 4

  Left = 1 << 3, // 001000 = 8
  Center = 1 << 4, // 010000 = 16
  Right = 1 << 5, // 100000 = 32

  TopLeft = Top | Left, // 001001 = 9             (1 + 8 = 9)
  TopCenter = Top | Center, // 010001 = 17        (1 + 16 = 17)
  TopRight = Top | Right, // 100001 = 33          (1 + 32 = 33)

  MiddleLeft = Middle | Left, // 001010 = 10      (2 + 8 = 10)
  MiddleCenter = Middle | Center, // 010010 = 18  (2 + 16 = 18)
  MiddleRight = Middle | Right, // 100010 = 34    (2 + 32 = 34)

  BottomLeft = Bottom | Left, // 001100 = 12      (4 + 8 = 12)
  BottomCenter = Bottom | Center, // 010100 = 20  (4 + 16 = 20)
  BottomRight = Bottom | Right, // 100100 = 36    (4 + 32 = 36)
}
`;

// Enums
import { PortalElementId } from 'common/enums';

// Styled Components
const StyledLou = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  pre {
    // Specifically for react-syntax highlighter
    border-radius: 0.5em;

    margin: auto;
    max-width: 100%;

    @media (min-width: ${({ theme }) => theme.size.tablet}) {
      // Increases font size to double for tablet size or greater.
      font-size: 2em;
    }
  }
`;

const DraftJSLink: FC = () => (
  <a href="https://draftjs.org/" rel="noreferrer" target="_blank">
    <code>
      draft-js
    </code>
  </a>
);

const MegadraftLink: FC = () => (
  <a href="https://megadraft.io/" rel="noreferrer" target="_blank">
    <code>
      megadraft
    </code>
  </a>
);

const ReactColorLink: FC = () => (
  <a
    href="https://www.npmjs.com/package/react-color"
    rel="noreferrer"
    target="_blank"
  >
    <code>
      react-color
    </code>
  </a>
);

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
          <li>
            <h2>
              <a href="#builderRedesign">Builder Redesign</a>
            </h2>
            <ol>
              <li>
                <h3>
                  <a href="#builderRedesign:draft-components@0.0.1">
                    <code>
                      draft-components@0.0.1
                    </code>
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#builderRedesign:themes">
                    Themes
                  </a>
                </h3>
              </li>
            </ol>
          </li>
          <li>
            <h2>
              <a href="#workflowRevisions">Workflow Revisions</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#widgets">Widgets</a>
            </h2>
            <ol>
              <li>
                <h3>
                  <a href="#widgets:placement">Placement</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#widgets:draft-components@1.0.0">
                    <code>
                      draft-components@1.0.0
                    </code>
                  </a>
                </h3>
              </li>
            </ol>
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
      Dashboard, Landing Page, and API. Some of my most notable contributions
      included the&nbsp;
      <a href="#landingPageRedesign">Landing Page Redesign</a>,&nbsp;
      <a href="#builderRedesign">Builder Redesign</a>,&nbsp;
      <a href="#widgets">Widgets</a>&nbsp;
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
        // 450 x 450 but too small so 1000 x 1000 preserves aspect ratio.
        height="1000"
        src="/bucket/jpeg/work/lou/IMG_3568.JPG"
        width="1000"
      />
      <figcaption>
        Create an experience from one of Lou&apos;s pre-built templates.
      </figcaption>
    </figure>

    {/* Builder Redesign */}
    <h2 id="builderRedesign">Builder Redesign</h2>
    <p>
      &emsp;The Builder extension provides a fairly intuitive user interface but
      its current implementation limits the potential features that can be added
      on top of it. In this state before its redesign, the extension provides a
      WYSIWYG (What You See Is What You Get) editor for editing content within
      an experience restricted inside an <code>&lt;iframe&gt;</code>, sufficient
      for its existing scope but limiting in potential features. Some of these
      difficulties include dealing with the height, width, positioning, and user
      interactions of the experience steps along with that of the&nbsp;
      <code>&lt;iframe&gt;</code> parent. With this in mind, we decided to move
      away from the contraints of an <code>&lt;iframe&gt;</code> and instead
      utilize the&nbsp;
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"
        rel="noreferrer"
        target="_blank"
      >
        Shadow DOM
      </a>
      &nbsp;to keep the experience step components isolated away from the
      host&apos;s website, however these also came with its own set of
      challenges.
    </p>
    <p>
      &emsp;In addition to these structural refactoring, we also wanted to
      enhance the user experience by providing a set of customizable features
      such as colors, fonts, and themes. For this we needed to upgrade our
      implementation of our rich text editor so that these complex features can
      be added in. Along with this other small touches such as hover previews for
      created experiences were implemented to provide a more fluid user
      experience. As shown in the mock-ups below, the build flow of an
      experience was redesigned to make use of these new features and aid in
      creating a new experience.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Redesigned home page for Lou Builder Chrome extension."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3570.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Redesigned build tab for Lou Builder Chrome extension."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3571.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Redesigned deliver tab for Lou Builder Chrome extension."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3572.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Redesigned segment tab for Lou Builder Chrome extension."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3573.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Redesigned publish tab for Lou Builder Chrome extension."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3574.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
      </Carousel>
      <figcaption>
        Mockups for proposed Lou Builder Chrome extension redesign.
      </figcaption>
    </figure>
    <p>
      &emsp;This ended up being one of the larger projects that spanned over the
      course of a couple of months and completely changed the Lou Builder Chrome
      extension to provide a nicer and more comprehensive user experience.
    </p>

    {/* Builder Redesign: draft-components */}
    <h2 id="builderRedesign:draft-components@0.0.1">
      Builder Redesign: <code>draft-components@0.0.1</code>
    </h2>
    <p>
      &emsp;The first part of this project involved updating our implementation
      of the WYSIWYG (What You See Is What You Get) editor to utilize further
      customizable features such as color and fonts. For this we have been using
      a third party wrapper of the package <DraftJSLink /> called&nbsp;
      <MegadraftLink /> which has been sufficient for us at this point. However
      with the goals features of this project, we quickly ran into the
      limitations of <MegadraftLink /> and opted to directly use <DraftJSLink />
      &nbsp;itself. This was feasable since the content is stored the same&nbsp;
      <DraftJSLink /> format in both of the packages and did not need to worry
      about migrating existing data to a new type of format.
    </p>
    <p>
      &emsp;Since <DraftJSLink /> replaced <MegadraftLink /> as our core
      dependency for our rich text editor, the included out-of-the-box features
      such as the basic controls that we previously used were no longer
      available. This meant recreating the basic controls (i.e.
      <strong>Bold</strong>, <i>Italics</i>, <u>Underline</u>, etc.) along with
      new controls for font family and font color. For this we created our own
      package to house our components created using <DraftJSLink /> which we
      named <code>@lou-assistant/draft-components</code>.
    </p>
    <figure>
      <Image
        alt="Redesigned experience step toolbar component with updated controls."
        height="543"
        src="/bucket/jpeg/work/lou/IMG_3575(1).JPG"
        width="965"
      />
      <figcaption>
        Mockup for redesigned toolbar controls including those for color and
        font.
      </figcaption>
    </figure>
    <p>
      &emsp;In order to provide a font family that is as close or exactly that
      of the one used on the host site, we use an API provided by&nbsp;
      <a href="https://fonts.google.com/" rel="noreferrer" target="_blank">
        Google Fonts
      </a>
      &nbsp;to provide access to hundreds of free fonts. To do this we follow
      the API documentation to use the npm package,&nbsp;
      <a
        href="https://www.npmjs.com/package/webfontloader"
        rel="noreferrer"
        target="_blank"
      >
        <code>
          webfontloader
        </code>
      </a>
      &nbsp;to load in the appropriate files to initialize the desired font
      family. As for finding the perfect font, a search dropdown component was
      created to allow the user to type in a desired fornt and peruse through a
      list of matching results. This search component was integrated into the
      toolbar alongside the custom font functionality for the WYSIWYG editor.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/work/lou/font_family_search.mp4">
        Video displaying use of custom Google Font in Lou Builder.
      </video>
      <figcaption>
        Utilizing Tangerine Google Font in Experience Step.
      </figcaption>
    </figure>
    <p>
      &emsp;For the font and highlight colors we used the npm package&nbsp;
      <ReactColorLink /> as our color picker component to input or select a
      color from the host website. At this point we ran into incompatibility
      issues with the Shadow DOM and some of our core dependencies such
      including <ReactColorLink /> and <DraftJSLink />. Since moving away from
      using the Shadow DOM was not an option, the packages were forked and
      support for use within the Shadow DOM was added in. This was a major
      hurdle to overcome and once this was done a small amount of polishing and
      bug fixing was all that was necessary to implement this new editor into
      the builder. With these components published as a package, we were able to
      easily use this in our other products such as the Dashboard website and
      Assistant script.
    </p>

    {/* Builder Redesign: Themes */}
    <h2 id="builderRedesign:themes">
      Builder Redesign: Themes
    </h2>
    <p>
      &emsp;When building experiences, our users typically end up using the same
      styles that match their company&apos;s and it can be tedious to enter the
      same configurations each time. The Themes feature will solve this problem
      which allows for the commonly used company presets to be saved and used
      when creating other experiences with the Lou Builder. The configurations
      for these company style presets can be accessed mainly through the
      Dashboard page where when saved can be utilized through the Lou Builder.
    </p>
    <figure>
      <Image
        alt="Component for displaying available and created themes."
        height="636"
        src="/bucket/jpeg/work/lou/IMG_3578.JPG"
        width="1336"
      />
      <figcaption>
        Dashboard component for viewing created themes and creating new ones.
      </figcaption>
    </figure>
    <figure>
      <Image
        alt="Component for displaying available and created themes."
        height="1667"
        src="/bucket/jpeg/work/lou/IMG_3579.JPG"
        width="1633"
      />
      <figcaption>
        Dashboard page for editing and updating selected theme.
      </figcaption>
    </figure>

    {/* Workflow Revisions */}
    <h2 id="workflowRevisions">
      Workflow Revisions
    </h2>
    <p>
      &emsp;On the server we refer to experiences as <code>workflows</code> and
      record the changes made whenever saved as <code>revisions</code>. This is
      useful for archival purposes and for our own analytics when considering
      which new projects would have greatest impact. For this admin feature we
      want to provide a page on the KPI Dashboard to search and view&nbsp;
      <code>workflows</code> along with their respective <code>revisions</code>.
      On this feature I spent some time working on the API to build a paginated
      route to retrieve the appropriate <code>revisions</code>. This route is
      then called from the Dashboard and with some tweaks to the exisiting
      components, the experience can be viewed at the time of the&nbsp;
      <code>revision</code>. This feature gave me a taste of building out
      improvements to the back-end and integrating these changes on front-end
      applications such as the Builder and Dashboard.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Page component displaying first workflow revision."
          height="888"
          src="/bucket/jpeg/work/lou/IMG_3580.JPG"
          width="821"
        />
        <Image
          alt="Page component displaying current workflow revision."
          height="888"
          src="/bucket/jpeg/work/lou/IMG_3581.JPG"
          width="821"
        />
      </Carousel>
      <figcaption>
        Dashboard KPI page component for displaying example revisions.
      </figcaption>
    </figure>
    
    {/* Widgets */}
    <h2 id="widgets">
      Widgets
    </h2>
    <p>
      &emsp;Along with general workflow experiences such as Tours and
      Announcements, we want to provide our customers with a more persistant
      experience feature between page visits. After completing a Tour or
      Announcement, users would benefit from additional guidance on exploring
      platform features that might not be extremely obvious. For this we built
      out a new creatable experience type alongside <code>workflows</code>,
      called <code>widgets</code>. With <code>widgets</code>, experiences can be
      created to address a number of situations ranging from simple messages to
      checklists which indicates progress through connected experiences.
    </p>
    <p>
      &emsp;This projects revamps the process for creating an experience
      through the Lou Builder by further broadening the customizability of an
      experience. The most prominent of these changes is the new Blocks
      structure of a <code>widget</code>, which allows customizability in the
      type (i.e. Checklist Item, Progress, Rich Text, etc.) and ordering of the
      content within. Other additions include the ability to connect workflows
      to checklist items, persisting experience state, new toolbar components
      for the Builder, and updated Sidebar pages for the Lou Builder. The
      ambitious scope of this project made it one of the largest I have worked
      on to this date as it was essentially a whole new product with prior
      knowledge from developing <code>workflows</code>. Due to this, the project
      was done on and off over the course of multiple quarters as to address
      some of the immediate concerns of our existing customers. In the end, we
      were able to complete this project and push out a new product that our
      customers enjoy using.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Lou Builder toolbar for widget container component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3589.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget trigger component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3588.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget content component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3587.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget progress component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3586.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget checklist item component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3585.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget spacer component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3584.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
        <Image
          alt="Lou Builder toolbar for widget divider component."
          height={LOU_BUILDER_MOCKUP_HEIGHT}
          src="/bucket/jpeg/work/lou/IMG_3591.JPG"
          width={LOU_BUILDER_MOCKUP_WIDTH}
        />
      </Carousel>
      <figcaption>
        Mock-ups for proposed <code>widget</code> blocks and features for Lou
        Builder.
      </figcaption>
    </figure>

    {/* Widgets: Placement */}
    <h2 id="widgets:placement">
      Widgets: Placement
    </h2>
    <p>
      &emsp;A <code>widget</code> is customizable such that it can be placed
      anywhere on the site but for ease of use we provide a 3 x 3
      &nbsp;<code>placement</code> grid inside the Lou Builder toolbar for quick
      access to <code>placements</code> ranging from the top left corner to the
      bottom right corner. In conjunction with this, inputs for providing values
      for <code>top</code>, <code>left</code>, <code>right</code>,
      &nbsp;<code>bottom</code> <code>positions</code> can be used to further
      specify where the <code>widget</code> should be put. Because
      &nbsp;<code>widgets</code> can use precision greater than that of
      &nbsp;<code>placements</code> , the <code>position</code> values are
      stored and primarily used. It is only when the <code>widget</code>
      &nbsp;experiences are edited that these <code>positions</code> are also
      converted into <code>placement</code> values to be used within the Lou
      Builder&apos;s toolbar 3 x 3 grid.
    </p>
    <figure>
      <Image
        alt="Lou Builder toolbar for styling widget container component."
        height={LOU_BUILDER_MOCKUP_HEIGHT}
        src="/bucket/jpeg/work/lou/IMG_3592.JPG"
        width={LOU_BUILDER_MOCKUP_WIDTH}
      />
      <figcaption>
        Mock-up of Lou Builder toolbar for styling <code>widget</code>
        &nbsp;container.
      </figcaption>
    </figure>
    <p>
      &emsp;As mentioned before, the area of the screen in which the
      &nbsp;<code>widget</code> is placed is primarily determined by the
      &nbsp;<code>position</code> values. The <code>position</code> values (i.e.
      &nbsp;<code>string</code> values for css properties such as
      &nbsp;<code>top</code>, <code>left</code>, <code>right</code>,
      &nbsp;<code>bottom</code>) needed to be converted into their appropriate
      &nbsp;<code>placement</code> values. These <code>placement</code> values
      would represent a 3 x 3 grid and as such would resemble something like the
      following.
    </p>
    <pre>{PLACEMENT_GRID}</pre>
    <p>
      &emsp;<code>Placement</code> values in this grid are determined by a
      combination of <code>position</code> values that match either
      &nbsp;<code>0px</code> or <code>50%</code> (<code>Top</code>,
      &nbsp;<code>Left</code>, <code>Bottom</code>, <code>Right</code>, or
      &nbsp;<code>Middle</code>, <code>Center</code> respectively). Since this
      3 x 3 grid uses a combination of these <code>placement</code> values, we
      need to be able to know if the <code>position</code> values are a valid
      combination. (i.e. A <code>position</code> where the css values for
      &nbsp;<code>top</code> is <code>0px</code> and <code>left</code> is
      &nbsp;<code>50%</code> would correspond to a <code>placement</code> of
      &nbsp;<code>TopCenter</code>). One possible approach to checking these
      combinations could be to extensively check every possible combination in
      order to provide the associated <code>placement</code>. Another approach
      would be to leverage the
      &nbsp;<a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators"
        rel="noreferrer"
        target="_blank"
      >
        Bitwise shift operators
      </a>
      &nbsp;in conjunction with
      &nbsp;<a
        href="https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members"
        rel="noreferrer"
        target="_blank"
      >
        TypeScript <code>enums</code>
      </a>
      &nbsp;to check the individual values and determine if they add up into a
      valid combination.
    </p>
    <SyntaxHighlighter language="typescript" style={docco}>
      {PLACEMENT_ENUM}
    </SyntaxHighlighter>
    <p>
      &emsp;In short, each of these <code>enums</code> can be added to another
      matching <code>enum</code> and the sum of these two would result in a
      separate but valid <code>enum</code>. This then can be used to populate
      the 3 x 3 grid within the toolbar to indicate that the following
      &nbsp;<code>positions</code> match the appropriate <code>placement</code>.
      The converse of this is applicable as selecting a <code>placement</code>
      &nbsp; will also provide the appropriate <code>positions</code>. The
      toolbar will also place itself appropriately alongside the
      &nbsp;<code>widget</code> container so that it visible regardless of
      <code>placement</code>.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Bottom right placement of widget container."
          height="535"
          src="/bucket/jpeg/work/lou/IMG_3594.JPG"
          width="1063"
        />
        <Image
          alt="Middle right placement of widget container."
          height="534"
          src="/bucket/jpeg/work/lou/IMG_3595.JPG"
          width="1060"
        />
        <Image
          alt="Middle center placement of widget container."
          height="535"
          src="/bucket/jpeg/work/lou/IMG_3596.JPG"
          width="1062"
        />
      </Carousel>
      <figcaption>
        Displays <code>placements</code> of <code>widget</code> container and
        associated <code>positions</code> and toolbar.
      </figcaption>
    </figure>
    <p>
      &emsp;I give credit to
      &nbsp;<a
        href="https://www.youtube.com/c/rollthedyc3"
        rel="noreferrer"
        target="_blank"
      >
        dyc3
      </a>
      &nbsp;for introducing me to applications of bitwise operators while I
      watching one of his code review videos. This proved useful and applicable
      to this project as it solves a similar problem of dealing with complex
      states such as <code>placements</code> in the 3 x 3 grid.
    </p>
    <figure>
      <iframe
        src="https://www.youtube.com/embed/LleJbZ3FOPU?start=2563"
        style={{
          aspectRatio: '16 / 9',
          minWidth: 300,
        }}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <figcaption>
        Applications of bitwise operators in Yandere Simulator code review.
      </figcaption>
    </figure>

    {/* Widgets: draft-components@1.0.0 */}
    <h2 id="widgets:draft-components@1.0.0">
      Widgets:&nbsp;
      <code>
        draft-components@1.0.0
      </code>
    </h2>
    <p>
      &emsp;For <code>workflow</code> related experiences only one
      &nbsp;<code>draft-js</code> editor was utilized at a given time. With this
      assumption, much of the functions and components in
      &nbsp;<code>draft-components@0.0.1</code> were constructed with far too
      much overhead to be practical if used multiple times within a parent
      element. The outline of this new <code>widget</code> features includes the
      &nbsp;<code>blocks</code> structure where multiple instances of the
      &nbsp;<code>draft-js</code> editor would need to be used alongside each
      other in <code>blocks</code> such as Checklist Item or Content. For this
      new feature, much of the content inside of <code>draft-components</code>
      &nbsp;would be refactored and redesigned to make it easier to use multiple
      instances of the <code>draft-js</code> editor alongside each other.
    </p>
    <figure>
      <Image
        alt="Checklist item block alongside toolbar for styles."
        height="498"
        src="/bucket/jpeg/work/lou/IMG_3597.JPG"
        width="1074"
      />
      <figcaption>
        Multiple instances of the <code>draft-js</code> editor will be used in
        this <code>widget</code> in Checklist Item and Content blocks.
      </figcaption>
    </figure>
  </StyledLou>
);

export default Lou;
