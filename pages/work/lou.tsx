/**
 * lou.tsx
 * Outlines work done at Lou.
 */

// Node Modules
import 'rc-slider/assets/index.css';
import type { NextPage } from 'next';
import Image from 'next/image';
import Slider from 'rc-slider';
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

const VARIANTS_SCREEN_SIZE_VALUES_EXAMPLES = `
min               max     min                max
 |---variantLeft---|       |---variantRight---|
null             400px   401px              1000px
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

const ContextLink: FC = () => (
  <a
    href="https://reactjs.org/docs/context.html"
    rel="noreferrer"
    target="_blank"
  >
    <code>
      Context
    </code>
  </a>
);

const DraftJSLink: FC = () => (
  <a href="https://draftjs.org/" rel="noreferrer" target="_blank">
    <code>
      draft-js
    </code>
  </a>
);

const EditorStateLink: FC = () => (
  <a
    href="https://draftjs.org/docs/api-reference-editor-state/"
    rel="noreferrer"
    target="_blank"
  >
    <code>
      EditorState
    </code>
  </a>
);

const GoogleFontsLink: FC = () => (
  <a href="https://fonts.google.com/" rel="noreferrer" target="_blank">
    Google Fonts
  </a>
);

const LouSDKTrackLink: FC = () => (
  <a
    href="https://www.louassist.com/docs/javascript-sdk/track"
    rel="noreferrer"
    target="_blank"
  >
    <code>
      Lou.track()
    </code>
  </a>
)

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

const RCSliderLink: FC = () => (
  <a
    href="https://www.npmjs.com/package/rc-slider"
    rel="noreferrer"
    target="_blank"
  >
    <code>
      rc-slider
    </code>
  </a>
);

const ReduxLink: FC = () => (
  <a href="https://redux.js.org/" rel="noreferrer" target="_blank">
    <code>
      Redux
    </code>
  </a>
);

const StyledComponentsLink: FC = () => (
  <a href="https://styled-components.com/" rel="noreferrer" target="_blank">
    <code>
      styled-components
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
              <a href="#templates">Templates</a>
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
              <a href="#goals">Goals</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#workflowProfileHeader">Workflow Profile Header</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#workflowBannerStep">
                Workflow Banner Step
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#a/bTesting">
                A / B Testing
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a href="#widgets">Widgets</a>
            </h2>
            <ol>
              <li>
                <h3>
                  <code>
                    <a href="#widgets:placement">Placement</a>
                  </code>
                </h3>
              </li>
              <li>
                <h3>
                  <code>
                    <a href="#widgets:draft-components@1.0.0">
                      draft-components@1.0.0
                    </a>
                  </code>
                </h3>
              </li>
              <li>
                <h3>
                  <code>
                    <a href="#widgets:blocks">Blocks</a>
                  </code>
                </h3>
                <ol>
                  <li>
                    <h4>
                      <a href="#widgets:blocks-content">Content</a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="#widgets:blocks-progress">Progress</a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="#widgets:blocks-checklistItem">Checklist Item</a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="#widgets:blocks-spacer">Spacer</a>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      <a href="#widgets:blocks-divider">Divider</a>
                    </h4>
                  </li>
                </ol>
              </li>
              <li>
                <h3>
                  <a href="#widgets:outline">Outline</a>
                </h3>
              </li>
            </ol>
          </li>
          <li>
            <h2>
              <a href="#workflowScreenSize">Workflow Screen Size</a>
            </h2>
            <ol>
              <li>
                <h3>
                  <code>
                    <a href="#workflowScreenSize:variant">Variant</a>
                  </code>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#workflowScreenSize:slider">Slider</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#workflowScreenSize:default">Default</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#workflowScreenSize:footer">Footer</a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="#workflowScreenSize:window">Window</a>
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
      included the <a href="#builderRedesign">Builder Redesign</a>,&nbsp;
      <a href="#widgets">Widgets</a>,&nbsp;
      <a href="#workflowScreenSize">Workflow Screen Size</a>,&nbsp;
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
    <p>
      &emsp;Later on the Pricing Page was updated to provide a more interactive
      experience to the client as a slider was introduced to display how pricing
      would change according to the amount of MAUs (Monthly Active Users). This
      along with small changes to the Home Page were implemented to achieve a
      more modern look.
    </p>
    <figure>
      <Image
        alt="Updated Pricing Page."
        height="2396"
        src="/bucket/jpeg/work/lou/IMG_3638.jpg"
        width="1413"
      />
      <figcaption>
        Pricing page updated to include MAUs slider.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Updated Pricing Table of the Pricing Page."
          height="2384"
          src="/bucket/jpeg/work/lou/IMG_3637.jpg"
          width="1808"
        />
        <Image
          alt="Updated Home Page."
          height="2424"
          src="/bucket/jpeg/work/lou/IMG_3636.jpg"
          width="1885"
        />
        <Image
          alt="Updated Products section of the home page."
          height="2401"
          src="/bucket/jpeg/work/lou/IMG_3635.jpg"
          width="1892"
        />
      </Carousel>
      <figcaption>
        Extended Pricing Table and small changes to Home Page.
      </figcaption>
    </figure>

    {/* Templates */}
    <h2 id="templates">Templates</h2>
    <p>
      &emsp;This feature is specific to the Builder where it made creating
      onboarding Experiences for new a client easier by selecting from a
      fitting template. From this, the created experience can be edited or added
      upon to better fit the customer&apos;s website. This is an improvement on
      the previous implementation of a blank Experience as it removes the
      friction encounter when creating the first Experience.
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
    <p>
      &emsp;Templates were later on updated to have its own dedicated page
      within the sidebar as the variety of different Experience types and thus
      Templates had grown so large. Having this page specific to Experience
      Templates provided room to expand its functionality such that a Template
      option can preview its first step when hovered upon. This allows the
      client to see what would be created before selecting a specific option. 
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/work/lou/templates_page.mp4">
        Video displaying previewing and selection of Template options.
      </video>
      <figcaption>
        A Template for an Experience can be previewed before selection.
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
      with the goals features of this project, we quickly ran into the&nbsp;
      limitations of <MegadraftLink /> and opted to directly use
      <DraftJSLink /> itself. This was feasable since the content is stored the
      same <DraftJSLink /> format in both of the packages and did not need to
      worry about migrating existing data to a new type of format.
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
      <GoogleFontsLink /> to provide access to hundreds of free fonts. To do
      this we follow the API documentation to use the npm package,&nbsp;
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
    <h2 id="builderRedesign:themes">Builder Redesign: Themes</h2>
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
    <h2 id="workflowRevisions">Workflow Revisions</h2>
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

    <h2 id="goals">Goals</h2>
    <p>
      &emsp;Another feature that clients have asked for is the ability to create
      goals associated with experiences or when a specific event is created. To
      achieve this a Django app for handling events was created so that a
      specific goal can be marked as completed if the event with the
      corresponding name exists. With this the client is able to get insight
      into user segments and how they respond to the created experiences.
    </p>
    <p>
      &emsp;The initial iteration of this goal form is built inside the existing
      sidebar page for building out experiences. For this Goals have their own
      dedicated tab in which the Title, Description, and Event Name can be
      attributed to it. Along with this the tab allows for a created Goal to be
      associated with the experience but the ability to create and attach an
      event is notably missing here. This is done intentionally as at this point
      the events can only be created through the <LouSDKTrackLink /> function in
      our SDK provided when the user installs our script. This limited the
      accessibility of this feature to those familiar with our SDK but was
      enough to get the feature published.
    </p>
    <figure>
      <Image
        alt="Goals form on dedicated tab for workflow."
        // height="961"
        height="2000"
        src="/bucket/jpeg/work/lou/IMG_3627.JPG"
        // width="478"
        width="1000"
      />
      <figcaption>
        Initial implementation for creating a Goal on its own specific tab.
      </figcaption>
    </figure>
    <p>
      &emsp;For these goals to be useful, the client needs to access the
      accrued information and metrics from the users that complete these goals.
      For this the experience page was updated to display the associated metrics
      alongside the other general analytics.
    </p>
    <figure>
      <Image
        alt="Dashboard page to track analytics associated with Goals."
        height="946"
        src="/bucket/jpeg/work/lou/IMG_3628.JPG"
        width="1205"
      />
      <figcaption>
        Dashboard page to track analytics associated with Goals.
      </figcaption>
    </figure>
    <p>
      &emsp;The Goals feature in its existing state allows for the collection of
      metrics associated with the attached experience. The issue it runs into is
      the accessiblity of this feature is quite limited due to its exclusive use
      through the Lou SDK&apos;s <LouSDKTrackLink /> function. The next update
      to this feature would move the form to its own page and extend its uses to
      4 different Goal types: Click Action, Hover Action, Page Load Action, and
      Custom Action.
    </p>
    <p>
      &emsp;The Click and Hover Action Goal types allows for the client to
      select an eleement for the website and use that to send an event if it is
      clicked or hovered upon respectively. The Page Load Action Goal type will
      create an event to complete a goal when the URL for a specified page is
      loaded. Lastly the Custom Action Goal allows for the client to use the
      existing way of creating events through the Lou SDK&apos;s&nbsp;
      <LouSDKTrackLink /> function. Each of these Goals will need an Event Name
      provided to it that will be used to determine if the Goal is completed. In
      addition a more readable title should be provided as this is displayed
      when selecting a Goal to associate with an Experience. 
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Goal page form for creating a Click Action Goal."
          height="706"
          src="/bucket/jpeg/work/lou/IMG_3629.JPG"
          width="694"
        />
        <Image
          alt="Goal page form for creating a Hover Action Goal."
          height="695"
          src="/bucket/jpeg/work/lou/IMG_3630.JPG"
          width="689"
        />
        <Image
          alt="Goal page form for creating a Page Load Action Goal."
          height="715"
          src="/bucket/jpeg/work/lou/IMG_3633.JPG"
          width="693"
        />
        <Image
          alt="Goal page form for creating a Custom Action Goal."
          height="650"
          src="/bucket/jpeg/work/lou/IMG_3632.JPG"
          width="689"
        />
      </Carousel>
      <figcaption>
        Different types of goals that can be created through the Lou Builder.
      </figcaption>
    </figure>
    <p>
      &emsp;While creating the Goal, many of the fields are autogenerated for
      the client&apos;s benefit all of which can be edited. The Event Name uses
      a UUID as to create a unique identifier different from any created before.
      Once the Goal is created it is automatically selected to be used with the
      experience the user is currently working on.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/work/lou/goals_page.mp4">
        Video displaying the use of goals page to create goals on Lou Builder.
      </video>
      <figcaption>
        The different types of goals that can be created through the Builder.
      </figcaption>
    </figure>
    <p>
      &emsp;With the enhancements to the Goal feature, it is made more
      accessible and convenient to use while creating an Experience making it
      appropriate to classify as &quot;Code Free&quot;.
    </p>

    {/* Workflow Profile Header */}
    <h2 id="workflowProfileHeader">Workflow Profile Header</h2>
    <p>
      &emsp;In order to provide a more personalized Experience, the option to
      include more information about the client is available through Profile
      Headers. This Profile Header will allow for an image, first name, and
      company name to be displayed on each step of the Experience to the user.
      The aim for this feature is to give the end user of this Experience to
      feel like confident and comfortable by the guidance provided as there is
      now a face and name to attach to it.
    </p>
    <figure>
      <Image
        alt="Experience utilizing profile header."
        height={272 * 4}
        src="/bucket/jpeg/work/lou/IMG_3643.JPG"
        width={373 * 4}
      />
      <figcaption>
        Experience Modal utilizing default Profile Header.
      </figcaption>
    </figure>
    <p>
      &emsp;The first issue that needed to be addressed here is updating the
      Dashboard so that the client is able to input the appropriate details such
      as the client&apos;s name and image. For this a route was created to
      appropriately handle image uploading and attach this uploaded image to the
      profile data for the company member. Once the image was uploaded to our
      AWS Bucket, the corresponding URL is then attached to the profile data and
      utilized as the image for the Profile Header.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Dashboard page for updating profile details."
          height="845"
          src="/bucket/jpeg/work/lou/IMG_3639.JPG"
          width="1584"
        />
        <Image
          alt="Option to upload image to profile."
          height="826"
          src="/bucket/jpeg/work/lou/IMG_3640.JPG"
          width="1592"
        />
      </Carousel>
      <figcaption>
        Dashboard profile page to update profile details and upload image.
      </figcaption>
    </figure>
    <p>
      &emsp;On the Lou Builder this feature is accessible through a simple
      toggle where if enabled, the Profile Header is place at the top of every
      Experience step.
    </p>
    <figure>
      <Image
        alt="Lou Builder toolbar for experience and toggling profile header."
        height={523 * 2}
        src="/bucket/jpeg/work/lou/IMG_3641.JPG"
        width={667 * 2}
      />
      <figcaption>
        Toolbar for toggling on Profile Header.
      </figcaption>
    </figure>

    {/* Workflow Banner Step */}
    <h2 id="workflowBannerStep">Workflow Banner Step</h2>
    <p>
      &emsp;So far the experiences have consisted of either Modal or Tooltip
      like steps of which help guide the user through the features available in
      the client&apos;s platform. These have been sufficient for most use cases
      but some situations would benefit from a Banner like Step in order to
      immediately get the user&apos;s attention. For this Banners builds on top
      of the existing structure for a <code>workflow</code> with the addition of
      special placement to the top and bottom of the page along with alignment
      of buttons to the left or right side of the Banner.
    </p>
    <figure>
      <Image
        alt="Option to create Banner Experience from Lou Builder Template."
        height="1369"
        src="/bucket/jpeg/work/lou/IMG_3644.JPG"
        width="2559"
      />
      <figcaption>
        Lou Builder page to create Banner Experience from Template.
      </figcaption>
    </figure>
    <p>
      &emsp;Creating a Banner Experience is virtually the same as any other
      Experience through the Lou Builder with a couple of different fields in
      the toolbar. The Banner Step can be used in combination with other Step
      types such as Modals or Tooltips as to provide an additional tool for
      creating experiences in the client&apos;s toolkit.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Toolbar inside the Lou Builder to customize Banner Step."
          height="1365"
          src="/bucket/jpeg/work/lou/IMG_3645.JPG"
          width="2542"
        />
        <Image
          alt="Option to place Banner Step on the bottom of the page."
          height="1365"
          src="/bucket/jpeg/work/lou/IMG_3646.JPG"
          width="2540"
        />
        <Image
          alt="Options for customizing buttons on Banner Step."
          height="1366"
          src="/bucket/jpeg/work/lou/IMG_3647.JPG"
          width="2543"
        />
      </Carousel>
      <figcaption>
        Special customization options for the Banner Step such as placement and
        buttons.
      </figcaption>
    </figure>

    {/* A / B Testing */}
    <h2 id="a/bTesting">A / B Testing</h2>
    <p>
      &emsp;A / B Testing allows for clients to see if the experience that was
      created has an impact on their users. For this feature it utilizes the
      previous Goals feature as metrics regarding completetion rate can be use
      to measure the effectiveness of an Experience.
    </p>
    <p>
      &emsp;To display the metrics of the A / B testing feature, another card
      specific to this is included below the other existing metrics for an
      Experience in the Dashboard. Here the card is divided into two sections of
      Group A and Group B where one is shown the Experience and the other is not
      respectively. The metrics then show the users&apos; response with or
      without being shown the Experience with the percentage metric shown inside
      the Donut Pie Chart. The results of each group can be compared to each
      other differences between the two can be interpreted accordingly.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Initial dashboard metrics for Experience without A / B Testing."
          height="828"
          src="/bucket/jpeg/work/lou/IMG_3648.JPG"
          width="1401"
        />
        <Image
          alt="Dashboard metrics for Experience with A / B testing turned on."
          height="816"
          src="/bucket/jpeg/work/lou/IMG_3649.JPG"
          width="1535"
        />
      </Carousel>
      <figcaption>
        Dashboard analytics page for Experience displaying A / B Test Metrics.
      </figcaption>
    </figure>
    <p>
      &emsp;As for enabling this feature, it can be done inside the Lou Builder
      and is as simple as toggling a switch.
    </p>
    <figure>
      <Image
        alt="Lou Builder page for enabling A / B testing."
        height="927"
        src="/bucket/jpeg/work/lou/IMG_3651.JPG"
        width="1180"
      />
      <figcaption>
        A / B testing can be enabled through the last experience page of the Lou
        Builder.
      </figcaption>
    </figure>
    
    {/* Widgets */}
    <h2 id="widgets">Widgets</h2>
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
    <h2 id="widgets:placement">Widgets: <code>Placement</code></h2>
    <p>
      &emsp;A <code>widget</code> is customizable such that it can be placed
      anywhere on the site but for ease of use we provide a 3 x 3
      &nbsp;<code>placement</code> grid inside the Lou Builder toolbar for quick
      access to <code>placements</code> ranging from the top left corner to the
      bottom right corner. In conjunction with this, inputs for providing values
      for <code>top</code>, <code>left</code>, <code>right</code>,&nbsp;
      <code>bottom</code> <code>positions</code> can be used to further specify
      where the <code>widget</code> should be put. Because&nbsp;
      <code>widgets</code> can use precision greater than that of&nbsp;
      <code>placements</code> , the <code>position</code> values are stored and
      primarily used. It is only when the <code>widget</code> experiences are
      edited that these <code>positions</code> are also converted into&nbsp;
      <code>placement</code> values to be used within the Lou Builder&apos;s
      toolbar 3 x 3 grid.
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
      &emsp;As mentioned before, the area of the screen in which the&nbsp;
      <code>widget</code> is placed is primarily determined by the&nbsp;
      <code>position</code> values. The <code>position</code> values (i.e.&nbsp;
      <code>string</code> values for css properties such as&nbsp;
      <code>top</code>, <code>left</code>, <code>right</code>,&nbsp;
      <code>bottom</code>) needed to be converted into their appropriate&nbsp;
      <code>placement</code> values. These <code>placement</code> values would
      represent a 3 x 3 grid and as such would resemble something like the
      following.
    </p>
    <pre>{PLACEMENT_GRID}</pre>
    <p>
      &emsp;<code>Placement</code> values in this grid are determined by a
      combination of <code>position</code> values that match either&nbsp;
      <code>0px</code> or <code>50%</code> (<code>Top</code>,&nbsp;
      <code>Left</code>, <code>Bottom</code>, <code>Right</code>, or&nbsp;
      <code>Middle</code>, <code>Center</code> respectively). Since this 3 x 3
      grid uses a combination of these <code>placement</code> values, we need to
      be able to know if the <code>position</code> values are a valid
      combination. (i.e. A <code>position</code> where the css values for&nbsp;
      <code>top</code> is <code>0px</code> and <code>left</code> is&nbsp;
      <code>50%</code> would correspond to a <code>placement</code> of&nbsp;
      <code>TopCenter</code>). One possible approach to checking these
      combinations could be to extensively check every possible combination in
      order to provide the associated <code>placement</code>. Another approach
      would be to leverage the&nbsp;
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators"
        rel="noreferrer"
        target="_blank"
      >
        Bitwise shift operators
      </a>
      &nbsp;in conjunction with&nbsp;
      <a
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
      the 3 x 3 grid within the toolbar to indicate that the following&nbsp;
      <code>positions</code> match the appropriate <code>placement</code>.
      The converse of this is applicable as selecting a <code>placement</code>
      &nbsp;will also provide the appropriate <code>positions</code>. The
      toolbar will also place itself appropriately alongside the&nbsp;
      <code>widget</code> container so that it visible regardless of&nbsp;
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
      &emsp;I credit&nbsp;
      <a
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
      Widgets: <code>draft-components@1.0.0</code>
    </h2>
    <p>
      &emsp;For <code>workflow</code> related experiences only one&nbsp;
      <DraftJSLink /> editor was utilized at a given time. With this assumption,
      much of the functions and components in&nbsp;
      <code>draft-components@0.0.1</code> were constructed with far too much
      overhead to be practical if used multiple times within a parent element.
      The outline of this new <code>widget</code> features includes the&nbsp;
      <code>blocks</code> structure where multiple instances of the&nbsp;
      <DraftJSLink /> editor would need to be used alongside each other in&nbsp;
      <code>blocks</code> such as Checklist Item or Content. For this new
      feature, much of the content inside of <code>draft-components</code> would
      be refactored and redesigned to make it easier to use multiple instances
      of the <DraftJSLink /> editor alongside each other.
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
    <p>
      &emsp;In its current state, <code>draft-components@0.0.1</code> heavily
      utilizes React&apos;s <ContextLink /> API for its state management. This
      is used primarily to dispatch actions and denote the current&nbsp;
      <EditorStateLink /> through the toolbar controls. This follows a design
      similar to the <code>action</code>, <code>reducer</code>,&nbsp;
      <code>store</code> seen in a state management package called&nbsp;
      <ReduxLink />. This provided some needed structure when exploring some of
      the features and API in <DraftJSLink />, however added significant
      overhead to each editor instance.
    </p>
    <p>
      &emsp;The heaviest portion of this overhead is in the&nbsp;
      <code>&lt;Provider /&gt;</code> component required to wrap each&nbsp;
      <DraftJSLink /> editor component separately. Because of this requirement,
      it would be difficult to intialize / remove multiple&nbsp;
      <code>&lt;Provider /&gt;</code> components depending on the amount of
      applicable <code>blocks</code> are used. A better approach would be to
      move the state management for <EditorStateLink /> outside the package that
      way it only needs to be initialized when needed. This would also allow for
      multiple <EditorStateLink /> instances to be managed in a parent component
      making it extenisble to the <code>blocks</code> structure for a&nbsp;
      <code>widget</code>.
    </p>
    <p>
      &emsp;One way of looking at this redesign to&nbsp;
      <code>draft-components</code> would be that it now provides the tools to
      assemble an editor instead of providing it out of the box. This has its
      drawbacks where more assembly is required in some cases such as the Lou
      Builder, but provides a simplier experience in most other cases. With
      this, <code>draft-components</code> provides a simple component export
      for <code>&lt;Editor /&gt;</code>, the state of which can be controlled
      through <code>props</code> instead of a&nbsp;
      <code>&lt;Provider /&gt;</code> parent component. This new design replaces
      the previous but since the relegated design is still in use with&nbsp;
      <code>workflow</code> experiences those exports have been moved into
      a <code>legacy</code> folder to be addressed at a future date.
    </p>

    {/* Widgets: Blocks */}
    <h2 id="widgets:blocks">Widgets: <code>Blocks</code></h2>
    <p>
      &emsp;The <code>blocks</code> structure that is utilized with&nbsp;
      <code>widgets</code> provides a new level of customizability and
      personalization to experiences. Customers have access to greater degree of
      freedom when building experiences in that they are able to select and
      arrange the appropriate <code>blocks</code> in any desired configuration.
      The <code>blocks</code> provide the basic content editor along with other
      specialized functions such as progress, checkboxes, and dividers; enabling
      additional interactive functionality. These new features allows for our
      customers to build out experiences as close to their ideal design while
      introducing new possible ways to interact with the user.
    </p>
    <figure>
      <Carousel>
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
        Mock-ups for proposed <code>widget</code> blocks (Content, Progress,
        Checklist Item, Spacer, and Divider respectively).
      </figcaption>
    </figure>
    <p>
      &emsp;<code>Blocks</code> can be added directly from the toolbar through a
      dedicated page displaying the possible options and reached limits for
      types such as Progress <code>block</code> (Only one Progress block is
      allowed per <code>widget</code> since it does not make sense to allow
      multiple). In the example below a Divider block is added and rearranged to
      be moved below the Progress <code>block</code> and then removed. This
      outlines a small snippet of the user flow and freedom provided when
      building a <code>widget</code> such that quickly trying out new ideas is
      quite accessible.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Lou Builder toolbar page for adding widget block."
          height="494"
          src="/bucket/jpeg/work/lou/IMG_3598.JPG"
          width="1000"
        />
        <Image
          alt="Widget with newly added Divider block."
          height="544"
          src="/bucket/jpeg/work/lou/IMG_3600.JPG"
          width="1010"
        />
        <Image
          alt="Divider block moved down one block."
          height="526"
          src="/bucket/jpeg/work/lou/IMG_3601.JPG"
          width="997"
        />
        <Image
          alt="Widget after block as been removed."
          height="503"
          src="/bucket/jpeg/work/lou/IMG_3602.JPG"
          width="965"
        />
      </Carousel>
      <figcaption>
        Example flow of adding a Divider <code>block</code>, moving it down, and
        deleting it.
      </figcaption>
    </figure>

    {/* Widgets: Blocks - Content */}
    <h2 id="widgets:blocks-content">Widgets: <code>Blocks</code> - Content</h2>
    <p>
      &emsp;The Content <code>block</code> is a newer iteration of the core rich
      text editor used with <code>workflow</code> experiences. This version of
      the editor utilizes the changes in <code>draft-components@1.0.0</code> to
      provide a more responsive and faster building experience. Along with this,
      the popular <GoogleFontsLink /> search and text color features have been
      ported over so that no compromises are made between the two versions. For
      its use in <code>widgets</code>, this <code>block</code> acts as the basic
      building block for adding text and images viewable to the user.
    </p>
    <figure>
      <Image
        alt="Content block and Lou builder toolbar page."
        height="494"
        src="/bucket/jpeg/work/lou/IMG_3599.JPG"
        width="1074"
      />
      <figcaption>
        Content <code>block</code> in <code>widget</code> with corresponding
        toolbar styles page.
      </figcaption>
    </figure>

    {/* Widgets: Blocks - Progress */}
    <h2 id="widgets:blocks-progress">Widget: <code>Blocks</code> - Progress</h2>
    <p>
      &emsp;The Progress <code>block</code> is a new addition as it provides a
      dynamic indicator to the user denoting the progress through checklist
      items as they are completed. In this <code>block</code> basic information
      such as the amount of completed checklist items and color of the progress
      bar can be customized to match that of the customer&apos;s designs.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Progress block and associated toolbar styles page."
          height="501"
          src="/bucket/jpeg/work/lou/IMG_3603.JPG"
          width="977"
        />
        <Image
          alt="Toggling off the show step count switch."
          height="503"
          src="/bucket/jpeg/work/lou/IMG_3604.JPG"
          width="968"
        />
        <Image
          alt="Checklist item previewed with toggled completetion."
          height="494"
          src="/bucket/jpeg/work/lou/IMG_3605.JPG"
          width="1076"
        />
        <Image
          alt="Updating color and step count switch."
          height="493"
          src="/bucket/jpeg/work/lou/IMG_3606.JPG"
          width="962"
        />
        <Image
          alt="Checklist item previewed with toggled completetion with changes."
          height="495"
          src="/bucket/jpeg/work/lou/IMG_3607.JPG"
          width="1073"
        />
      </Carousel>
      <figcaption>
        Example of changes to Progress <code>block</code> and previewed with
        Checklist Item completion.
      </figcaption>
    </figure>
    <p>
      &emsp;In order to display the completion of Checklist Items, the state of
      this needs to kept and updated somewhere. The Progress <code>block</code>
      &nbsp;component is kept simple by remaining a stateless component as it
      only visually indicates what is fed to it through <code>props</code>. The
      completion state is kept in the parent component and is managed to stay in
      sync with the data provided by the server, local storage, and user
      interactions. This <code>block</code> will update in realtime as Checklist
      Items are marked as completed or if Checklist Item <code>blocks</code>
      &nbsp;are added or removed. There is a limit of one Progress&nbsp;
      <code>block</code> per <code>widget</code> as having multiple
      Progress <code>blocks</code> would serve no additional purpose.
    </p>

    {/* Widgets: Blocks - Checklist Item */}
    <h2 id="widgets:blocks-checklistItem">
      Widget: <code>Blocks</code> - Checklist Item
    </h2>
    <p>
      &emsp;The Checklist Item <code>block</code> is the flagship feature
      for <code>widgets</code> as it provides the same customizable editor used
      for the Content <code>block</code> alongside the dynamic state properites
      of the Progress <code>block</code>. A Checklist Item helps guide the user
      through the process of onboarding by providing an indicator of completed
      experiences or tasks alongside the remaining ones. 
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Styles toolbar tab for checklist item block."
          height="499"
          src="/bucket/jpeg/work/lou/IMG_3608.JPG"
          width="1072"
        />
        <Image
          alt="Checklist item previewed as completed."
          height="498"
          src="/bucket/jpeg/work/lou/IMG_3609.JPG"
          width="1074"
        />
        <Image
          alt="Actions toolbar tab for checklist item block."
          height="494"
          src="/bucket/jpeg/work/lou/IMG_3610.JPG"
          width="970"
        />
      </Carousel>
      <figcaption>
        Toolbar tabs and preview state of Checklist Item <code>block</code>.
      </figcaption>
    </figure>
    <p>
      &emsp;Similar to how the Content <code>block</code> is able to have its
      text styled through the <DraftJSLink /> editor, the Checklist Item&nbsp;
      <code>block</code> has all of that same functionality. This&nbsp;
      <code>block</code> in addition to content allows for the customer to
      change the color of the checkmark to a more appropriate one to better fit
      with the company&apos;s theme. This change can then be seen when
      previewed as complete so that the checkmark is displayed along with the
      expected <s>strikethrough</s> for text content. This &quot;Preview as
      completed&quot; directly updates the state of a checklist allowing other
      <code>blocks</code> that display such as the Progress <code>block</code>
      &nbsp;to also update accordingly.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Selecting a workflow experience to link to checklist item."
          height="507"
          src="/bucket/jpeg/work/lou/IMG_3611.JPG"
          width="974"
        />
        <Image
          alt="Redirecting to start url when this link is clicked."
          height="508"
          src="/bucket/jpeg/work/lou/IMG_3612.JPG"
          width="971"
        />
        <Image
          alt="Changing this checklist item to be completed when goal is done."
          height="505"
          src="/bucket/jpeg/work/lou/IMG_3613.JPG"
          width="971"
        />
      </Carousel>
      <figcaption>
        The different ways to customize checklist item actions to start an
        experience when clicked and mark as complete.
      </figcaption>
    </figure>
    <p>
      &emsp;Checklist Items can have a <code>workflow</code> experience linked
      to it allowing for this experience to be started when clicked. This is
      useful for cases where an experience shows up only once or is more
      applicable to user interaction. The option to redirect the user to the
      appropriate URL is also possible with this action in order to provide the
      intended experience. For most cases with a connected experience the
      corresponding Checklist Item will automatically display its checked state
      when completed. However, for some other cases it is more desirable to
      connect the completion state of the Checklist Item to a separate Goal or
      just allow the user to manually mark it as complete. Both of these cases
      can be configured / combined for these Checklist Items providing a variety
      of different interaction avenues.
    </p>
    <p>
      &emsp;As this <code>block</code> is our flagship and most complex feature
      in the aptly named Checklist Experience (a.k.a. <code>widgets</code>), at
      launch the actions for a Checklist Item are available only to paying
      customers. Styling for the Checklist Item <code>block</code> and all other
      features within the different <code>block</code> types are accessible to
      everyone. This feature proved to be our most capable addition as it
      provides a medium for our customers to leverage their library of
      experiences in a dynamic and interactive center for the user.
    </p>

    {/* Widgets: Blocks - Spacer */}
    <h2 id="widgets:blocks-spacer">Widget: <code>Blocks</code> - Spacer</h2>
    <p>
      &emsp;The Spacer <code>block</code> is a simple component that is used
      inbetween <code>blocks</code> to provide customizable spacing through
      adjustment of the Spacer <code>block</code> height.
    </p>
    <figure>
      <Image
        alt="Spacer widget block component used alongside other blocks."
        height="528"
        src="/bucket/jpeg/work/lou/IMG_3614.JPG"
        width="971"
      />
      <figcaption>
        Spacer <code>block</code> alongside other <code>blocks</code> with
        toolbar styles page.
      </figcaption>
    </figure>

    {/* Widgets: Blocks - Divider */}
    <h2 id="widgets:blocks-divider">Widget: <code>Blocks</code> - Divider</h2>
    <p>
      &emsp;The Divider <code>block</code> is very much like the aforementioned
      spacer <code>block</code> in that it provides distinction between&nbsp;
      <code>blocks</code> through a solid divider line. This <code>block</code>
      &nbsp;has customizable attributes ranging from its line thickness, line
      color, space above, and space below.
    </p>
    <figure>
      <Image
        alt="Divider widget block component used alongside other blocks."
        height="546"
        src="/bucket/jpeg/work/lou/IMG_3615.JPG"
        width="1080"
      />
      <figcaption>
        Divider <code>block</code> alongside inputs in toolbar styles page.
      </figcaption>
    </figure>

    {/* Widgets: Outline */}
    <h2 id="widgets:outline">Widget: Outline</h2>
    <p>
      &emsp;The Lou Builder provides an interface to build out these&nbsp;
      <code>widgets</code> in an intuitive and interactive way. One of these
      attributes is the outline present around the <code>block</code> or&nbsp;
      <code>container</code> which is used to indicate hover or focus on the
      item that is to be edited. This tool also provides a couple of additional
      functions of which include displaying the <code>block</code> type, buttons
      to adjust ordering of <code>block</code>, and button to delete&nbsp;
      <code>block</code>. By clicking on specific parts of the&nbsp;
      <code>widget</code>, our client is able to navigate through the many of
      their created <code>blocks</code> and go about editing with the tools
      provided in the toolbar.
    </p>
    <figure>
      <video autoPlay loop muted src="/bucket/mp4/work/lou/widget_outline.mp4">
        Video displaying use of widget outline component in builder.
      </video>
      <figcaption>
        The Lou Builder provides a helpful dynamic outline when creating /
        editing a <code>widget</code>.
      </figcaption>
    </figure>
    <p>
      &emsp;This outline feature can be divided into two separate parts; one
      outline for the <code>block</code> or item that is focused upon and
      another outline for the client is currently hovering over. Both of these
      outlines share a couple of common features such as dynamically changing
      the height, width, and positioning based on their target (i.e.&nbsp;
      <code>blocks</code> and <code>container</code>). These outlines also
      leverages the capabilities of <StyledComponentsLink /> to create the
      transition styles that provide fluid movement between the items which
      are hovered or focused upon.
    </p>
    <p>
      &emsp;The hover outline is the basic component for providing an slight
      outline around the <code>block</code> or <code>container</code> that will
      be focused upon when clicked. One way to provide this outline would be to
      utilize the <code>border</code> CSS Properties for each element but this
      would mean that the outlines for each <code>block</code> would be a
      separate element. This would make it overly difficult to emulate the fluid
      motion for the outline since each outline would be tied to a&nbsp;
      <code>block</code> or <code>container</code>.
    </p>
    <p>
      &emsp;Another approach would be to have a single outline component which
      would make the fluid motion feasible with just the CSS Property&nbsp;
      <code>transition-duration: 250ms;</code>. This makes the styling for these
      transitions fairly straightfoward but shifts the brunt of the load to be
      done using React. This is primarily done by listening to mouse events
      which will provide height, width, and position, details about the target
      element. With this information, the state of the outline component will be
      updated to display at the correct position through the appropriate mouse
      events.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/widget_outline_hover.mp4"
      >
        Video displaying use of widget outline for hovering in builder.
      </video>
      <figcaption>
        The hover outline indicates which <code>block</code> will be focused
        upon when clicked.
      </figcaption>
    </figure>
    <p>
      &emsp;The focus outline extends and builds off of the structure of the
      hover outline by using the same logic and adding in a couple features.
      Tweaks were made to the React logic to manage some of the edge cases when
      selecting text or using the associated buttons. The outline component uses
      a pseudo element to provide the text associate with the&nbsp;
      <code>block</code> type such as the Checklist Item, Content, and etc.
      Along with this the buttons on the side of provide options to move
      the <code>block</code> up, down, or remove it completely. Other small
      touches include hiding hover outline on focused outlines and removing the
      appropriate up and down buttons when necessary.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/widget_outline_focus.mp4"
      >
        Video displaying use of widget outline for focused blocks in builder.
      </video>
      <figcaption>
        The focus outline provides the &quot;Move Up&quot; and &quot;Move
        Down&quot; buttons along with the button to delete the&nbsp;
        <code>block</code>.
      </figcaption>
    </figure>
    <p>
      &emsp;This addition proved to be a fairly complex feature for the Lou
      Builder as there were a couple of different ways to achieve the desired
      outcome, each with their tradeoffs. Opting to use React for the outline
      logic proved to work well with this feature as it provided a fast,
      responsive outline transitions while adhering to a design that is
      extensible to changes.
    </p>

    {/* Workflow Screen Size */}
    <h2 id="workflowScreenSize">Workflow Screen Size</h2>
    <p>
      &emsp;Up to this point all Experiences have been the same regardless of
      the screen size of the browser when viewed. For instances where the screen
      size is smaller than <code>700px</code> (i.e. Mobile and Tablet devices),
      the Experience has been hidden and not shown to the user. This is done
      since we cannot guarantee that the Experience will show up as the client
      intended for some of these screen sizes as the layout of the website may
      have changed to accomodate the smaller screen size. In this Screen Size
      feature for Experiences (more specifically <code>Workflows</code>) we want
      allow the client to create Experiences that are customized appropriately
      for each size range of the screen, allowing the Experience to be shown on
      a range of devices from Mobile to Desktop.
    </p>
    <p>
      &emsp;In order to achieve this the <code>Workflow</code> Model is updated
      and extended to essentially allow multiple Experiences to be stored inside
      one <code>Workflow</code>. These &quot;Experiences&quot; would only show
      up under certain size range conditions and could have different&nbsp;
      <code>Workflow Steps</code> associated with it. As such, internally we
      refer to these as <code>Variants</code> as a variant of the experience is
      displayed when a certian screen size is met. In addition to this, the UI
      for the Lou Builder needed to redesigned in a way to indicate that the
      client is making changes to a specific variant of the Experience. For this
      portions of the build process such as the browser window and sidebar pages
      were overhauled to properly indicate which <code>variant</code> was being
      changed.
    </p>
    <figure>
      <Carousel>
        <Image
          alt="Mockup of uncustomized default screen sizes."
          height="958"
          src="/bucket/jpeg/work/lou/IMG_3655.JPG"
          width="1795"
        />
        <Image
          alt="Mockup of customized default screen sizes."
          height="958"
          src="/bucket/jpeg/work/lou/IMG_3656.JPG"
          width="1795"
        />
        <Image
          alt="Mockup of current Experience with multiple screen sizes."
          height="958"
          src="/bucket/jpeg/work/lou/IMG_3657.JPG"
          width="1795"
        />
        <Image
          alt="Mockup of adding in new screen size."
          height="958"
          src="/bucket/jpeg/work/lou/IMG_3658.JPG"
          width="1795"
        />
      </Carousel>
      <figcaption>
        Mockups for updating <code>Workflow</code> to utilize screen size ranges
        on the Lou Builder.
      </figcaption>
    </figure>

    {/* Workflow Screen Size: Variant */}
    <h2 id="workflowScreenSize:variant">
      Workflow Screen Size: <code>Variant</code>
    </h2>
    <p>
      &emsp;<code>Workflows</code> were initially made to have only one set
      of <code>steps</code> that would be shown to the user during the
      Experience. As mentioned before, <code>workflows</code> would be updated
      to allow for more than one set of <code>steps</code> to be associated with
      an Experience leading this to be referred to as a&nbsp;
      <code>workflow variant</code>. For this some things needed to be taken
      into consideration, one of which was migrating the existing&nbsp;
      <code>workflows</code> to utilize additional screen size ranges.
    </p>
    <p>
      &emsp;For this case previously existing <code>workflows</code> would
      behave exactly the same as before. The only change the client will see is
      the configuration that was implicitly set (i.e. Experience is not shown
      for screen sizes under <code>700px</code>) is now configurable.
    </p>
    <figure>
      <Image
        alt="Modal for adjusting screen size ranges for existing workflow."
        height="1364"
        src="/bucket/jpeg/work/lou/IMG_3659.JPG"
        width="2555"
      />
      <figcaption>
        Existing <code>workflows</code> will have the following screen size
        configuration.
      </figcaption>
    </figure>
    <p>
      &emsp;The model for <code>variants</code> is similar to that of a&nbsp;
      <code>workflow</code> in that it references many of the same models
      for <code>goal</code>, <code>steps</code>, and <code>type</code>. To allow
      for specific display conditions, a couple of extra keys are included of
      which include <code>screenSizeRangeMaxWidth</code>, <code>screenSizeRangeMinWidth</code>,
      and <code>screenSizeRangeType</code>. These values are used to identify
      the screen size range in which this <code>variant</code> will appear and
      can be adjusted accordingly.
    </p>

    {/* Workflow Screen Size: Slider */}
    <h2 id="workflowScreenSize:slider">
      Workflow Screen Size: Slider
    </h2>
    <p>
      &emsp;Each <code>variant</code> associated with a screen size range has a
      minimum width that the Experience will show up under and a maximum width
      that it would stop appearing at. Another assumption made with this&nbsp;
      <code>variant</code> structure is that they are adjacent to one another.
      This would mean that the <code>screenSizeRangeMaxWidth</code> value would
      be <code>1px</code> less than the&nbsp;
      <code>screenSizeRangeMinWidth</code> value to the <code>variant</code> to
      the right.
    </p>
    <pre>
      {VARIANTS_SCREEN_SIZE_VALUES_EXAMPLES}
    </pre>
    <p>
      &emsp;With this considerations in mind and the designs laid out in the
      mockups, a range slider would suit best as an interface to manage the
      screen size ranges of each <code>variant</code>. Unfortunately the native
      HTML element&nbsp;
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range"
        rel="noreferrer"
        target="_blank"
      >
        <code>&lt;input&nbsp;type=&quot;range&quot;&gt;</code>
      </a>
      &nbsp;does not support multiple range sliders and a specialized component
      for this had to be created or imported. For this <RCSliderLink /> package
      proved to be a solid solution as it provided a simple component for
      managing multiple different range sliders seamlessly with plently of
      exposed <code>props</code> to customize to our needs.
    </p>
    <Slider
      range
      count={3}
      defaultValue={[20, 40, 60, 80]}
      pushable
      trackStyle={[{ backgroundColor: 'red' }, { backgroundColor: 'green' }]}
      handleStyle={[{ backgroundColor: 'yellow' }, { backgroundColor: 'gray' }]}
      railStyle={{ backgroundColor: 'black' }}
    />
    <a
      href="https://slider-react-component.vercel.app/demo/range"
      rel="noreferrer"
      target="_blank"
    >
      <code>rc-slider</code> Multi Range with Custom track example.
    </a>
    <p>
      &emsp;As for the values that these &quot;Thumbs&quot; represent, two
      adjacent <code>screenSizeRangeMinWidth</code> and&nbsp;
      <code>screenSizeRangeMaxWidth</code> values can be derived through the
      assumption that values are only <code>1px</code> apart. With this, an
      array of <code>screenSizeRangeMinWidth</code> is provided to the&nbsp;
      <code>&lt;Slider /&gt;</code> component imported from <RCSliderLink /> and
      the callback values can be utilized as the expected screen size range
      values.
    </p>
    <p>
      &emsp;This then updates the appropriate values and the changes are
      reflected in the interface for each <code>variant</code> above the slider.
      The CSS for each list item providing information regarding each&nbsp;
      <code>variant</code> is updated to provide width values matching the
      &quot;Thumb&quot; placements within the slider below. The
      appropriate <code>width</code> and <code>margin-left</code> values are
      calculated by determining the percentage of space each&nbsp;
      <code>variant&apos;s</code> screen size range take relative to the total
      maximum width. The result is a slider that provides more visual feedback
      to the screen size range of each <code>variant</code>.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/slider_moving.mp4"
      >
        Video displaying screen size range descriptions adjusting to slider
        movement.
      </video>
      <figcaption>
        Information and size regarding the <code>variant</code> screen size
        range is also updated when the slider is moved.
      </figcaption>
    </figure>
    <p>
      &emsp;Another small feature behavior implemented within the slider is the
      ability to directly input the desired screen size ranges into the
      &quot;Thumbs&quot; of the slider. This is useful for many cases as clients
      usually have their screen size breakpoints already predefined within their
      website. This would allow for the client to simply enter these values into
      the &quot;Thumbs&quot; instead of arduously arraging the slider to their
      desired layout. This is achieved through the utilizing the exposed&nbsp;
      <code>&lt;Slider.Handle /&gt;</code> component from <RCSliderLink /> and
      customizing it to allow an <code>&lt;input /&gt;</code> element to be
      positioned within. Within the component for the custom &quot;thumb&quot;,
      the same callback for handing value changes is utilized for our&nbsp;
      <code>&lt;input /&gt;</code> element is used but debounced so that it
      waits 1 second from the last user input to update screen size range
      values.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/slider_input.mp4"
      >
        Video displaying screen size range &quot;thumbs&quot; allowing user
        input for width values.
      </video>
      <figcaption>
        Each of the slider &quot;thumbs&quot; allow for the client to directly
        input the desired values.
      </figcaption>
    </figure>
    <p>
      &emsp;Along with the <code>&lt;input /&gt;</code> element recently
      added <code>variants</code> also include an option to delete. This is
      useful for in cases where an added <code>variant</code> is no longer
      desired and should be easily removed. Notably the option to delete already
      existing (saved) <code>variants</code> is absent. This is a user
      constraint implemented to prevent the client from accidently deleting
      a <code>variant</code> that they spent considerable time building. Another
      constraint is that only the first or last slider &quot;thumb&quot; can be
      deleted at a time. This is a cursory check to make sure that each screen
      size range is adjacent to one another.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/slider_delete.mp4"
      >
        Video displaying deleting behavior within screen size range slider.
      </video>
      <figcaption>
        Only recently added screen size ranges on the ends of the slider can be
        deleted.
      </figcaption>
    </figure>
    <p>
      &emsp;Lastly the behavior to add in new screen size ranges is provided
      through as dropdown menu which provides the options of adding preset
      ranges for mobile, tablet, or desktop accordingly.
    </p>
    <p>
      &emsp;There are many ways to create a simple dropdown component and the
      easiest way is to utilize the <code>useState</code> API from react to
      manage the display state of the dropdown through a button. This works as
      long as the button element is pressed but does not hide the dropdown if
      anything else is clicked. An approach to solve this issue would be to
      attach an event listeners higher up in the document to update the
      corresponding state for the dropdown but this comes at the cost of
      simplicity as managing this behavior can become a headache quite easily.
      Another approach would be to avoid state entirely and manage the display
      state of the dropdown with CSS. To achieve this the pseudo class for &nbsp;
      <code>:focus</code> is utilized as a toggle for the&nbsp;
      <code>visibility</code> property such that the dropdown appears when the
      button is focused upon. The <code>visibility</code> CSS property is use
      instead of the similar looking <code>display</code> CSS property to allow
      for the callbacks within the dropdown to execute before disappearing. With
      this the state management within the dropdown is no longer an issue and
      the behavior of the dropdown are as expected.
    </p>
    <p>
      &emsp;Back to the slider, adding new <code>variants</code> through the
      previously mentioned dropdown will append the new <code>variant</code> to
      the appropriate end. (i.e. mobile will be placed toward the left and
      desktop will be placed to the right.) When adding a new&nbsp;
      <code>variant</code> the properties of the previous&nbsp;
      <code>variant</code> such as steps are copied to the new. This is done
      since we expect that the client will make a minor of changes to the
      Experience to accomodate the respective screen size.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/slider_add.mp4"
      >
        Video displaying add behavior within screen size range slider.
      </video>
      <figcaption>
        <code>Variants</code> can be added to either side of the slider
        depending on the selected type.
      </figcaption>
    </figure>

    {/* Workflow Screen Size: Default */}
    <h2 id="workflowScreenSize:default">
      Workflow Screen Size: Default
    </h2>
    <p>
      &emsp;As with styles for Experiences, default screen size ranges can be
      applied to an Experience immediately after creation. This allows the
      client to save the commonly used screen size ranges such as their own
      breakpoints and reuse them in future <code>workflows</code>. For this
      convenience is key and as such the default screen sizes can be directly
      edited within the Lou Builder, saving the client from the need to switch
      between their site and Lou Dashboard browser tabs.
    </p>
    <p>
      &emsp;Once the option to edit the default screen sizes is selected, the
      modal shrinks and a scroll up transition is applied to the slider. This
      animated change between the two is done to better convey that the client
      is now updating default screen sizes as the sliders look and function the
      same. In the provided slider, the default screen size ranges can be
      configured similar to a typical <code>workflow</code> with the only
      difference here being that there is a limit of 5 different ranges. Once the
      default values are saved, these default screen size range values can be
      applied to the <code>workflow</code> and saved.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/range_default.mp4"
      >
        Video displaying updating range defaults within the Lou Builder.
      </video>
      <figcaption>
        Default screen size ranges can be applied on a newly created&nbsp;
        <code>workflow</code> and these default values can be updated as well.
      </figcaption>
    </figure>
    <p>
      &emsp;These default values can also be seen within the Lou Dashboard in
      the Design page alongside the&nbsp;
      <a href="#builderRedesign:themes">Themes</a> feature used to automatically
      style Experiences.
    </p>
    <figure>
      <Image
        alt="Dashboard page displaying the default screen size range."
        height="659"
        src="/bucket/jpeg/work/lou/IMG_3665.JPG"
        width="1625"
      />
      <figcaption>
        The default values for screen size ranges can be configured within the
        Lou Builder and viewed on the Dashboard.
      </figcaption>
    </figure>

    {/* Workflow Screen Size: Footer */}
    <h2 id="workflowScreenSize:footer">
      Workflow Screen Size: Footer
    </h2>
    <p>
      &emsp;Since there are multiple <code>variants</code> and corresponding
      steps with each a clear indicator is needed to denote which&nbsp;
      <code>variant</code> is being built. For this a footer component is
      implemented in on the Build Tab of the sidebar listing all the&nbsp;
      <code>variants</code> associated with the <code>workflow</code>. With this
      footer component the client is able to navigate through the existing&nbsp;
      <code>variants</code> with left and right chevron buttons. These buttons
      will appear only if the amount of created <code>variants</code> (3+)
      overflow past the width of the sidebar and make use of manipulating
      the <code>scrollLeft</code> value to display the appropriate&nbsp;
      <code>variant</code>.
    </p>
    <p>
      &emsp;In addition to selecting which <code>variant</code> to focus on
      building, the option to delete is present on the top right of first and
      last <code>variant</code> list items. This option is present here as
      opposed to the previously mentioned&nbsp;
      <a href="#workflowScreenSize:slider">Slider</a> in order to provide a
      confirmation check to the client before deleting the selected&nbsp;
      <code>variant</code>.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/build_tab_footer.mp4"
      >
        Video displaying use of the build tab footer and its possible actions.
      </video>
      <figcaption>
        <code>Variants</code> can be managed within the footer of the Build Tab.
      </figcaption>
    </figure>

    {/* Workflow Screen Size: Window */}
    <h2 id="workflowScreenSize:window">
      Workflow Screen Size: Window
    </h2>
    <p>
      &emsp;In order to provide the client a environment that they would expect
      their Experience to appear on, the browser window automatically adjust to
      the associated screen size range. This allows the elements on the website
      to respond as expected when shown on devices with different widths. This
      behavior is only possible through the exposed chrome extension APIs which
      allow the Lou Builder to dictate the dimensions of the browser window.
    </p>
    <figure>
      <video
        autoPlay
        loop
        muted
        src="/bucket/mp4/work/lou/screen_size_resize.mp4"
      >
        Video displaying window resizing to the appropriate screen size range.
      </video>
      <figcaption>
        The browser window will resize to the appropriate width for each&nbsp;
        <code>variant</code>.
      </figcaption>
    </figure>
  </StyledLou>
);

export default Lou;
