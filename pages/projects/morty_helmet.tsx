/**
 * morty_helmet.tsx
 * Cosplay helmet made for halloween events.
 */

// Node Modules
import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

// Components
import Carousel from 'common/components/Carousel';

// Constants
const IMAGE_HEIGHT_LANDSCAPE = 1836;
const IMAGE_WIDTH_LANDSCAPE = 3264;

const IMAGE_HEIGHT_PORTRAIT = 3264;
const IMAGE_WIDTH_PORTRAIT = 1836;

// Styled Components
const StyledMortyHelmet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const MortyHelmet: NextPage = () => (
  <StyledMortyHelmet>
    <figure>
      <Image
        alt="Ebay listing for light globe used as base for helmet"
        height="446"
        src="/bucket/jpeg/project/morty_helmet/ebay_light_globe.jpg"
        width="913"
      />
      <figcaption>
        Similar ebay listing of light globe I used for base.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Additional material is removed around the neck area to allow head to fit through"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_133424.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Removed material is sufficient for head to fit through"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_133545.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
      </Carousel>
      <figcaption>
        Started off using a light globe as the base for the helmet cutting away
        material around the next to allow head to fit through.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="A portion for the mouth was cut out to allow viewing."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_142038.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Helmet was taken outside and painted to match Morty's face."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_143400.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Painted helmet then had foam stickers applied to the inside of the neck."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_152709.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Image used as template alongside painted helmet"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_165613.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
      </Carousel>
      <figcaption>
        A portion of the helmet was removed to make space for the mouth and the
        exterior of the helmet was painted to the same color as Morty&apos;s
        skin.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Image used as template alongside painted helmet"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160722_163508.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="An acrylic plane was melted to fit alonside mouth opening"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160723_123658.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
      </Carousel>
      <figcaption>
        A screen door mesh was originally intended to be used as a cover for the
        mouth, however did not adhere well to the curved surface to an acrylic
        pane was used instead.
      </figcaption>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="The helmet was sprayed with adhesive and cloth was applied."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160723_140317.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Foam padding was applied to outline the hair."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160723_161434.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="The helment was repainted with the same yellow color."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160725_120905.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
      </Carousel>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Great Stuff foam was used to provide support for hair."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160725_120918.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Side profile of covered foam."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160725_201402.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Front profile of covered foam."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160725_201412.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Space around hair was covered for spray painting"
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160725_202100.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
        <Image
          alt="Hole was cut in the back of the head to accomodate fan."
          height={IMAGE_HEIGHT_PORTRAIT}
          src="/bucket/jpeg/project/morty_helmet/20160731_133437.jpg"
          width={IMAGE_WIDTH_PORTRAIT}
        />
      </Carousel>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Space outlined for battery pack cut out."
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160731_134608.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
        <Image
          alt="Fan inserted along with wiring."
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160808_124039.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
        <Image
          alt="Construction helmet used as base for securing helmet."
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160825_171508.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
      </Carousel>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="LEDs attached and inserted in for light up eyes."
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160820_153926.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
        <Image
          alt="Eyes attached to helmet and lit up in the dark"
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160825_165736.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
      </Carousel>
    </figure>
    <figure>
      <Carousel>
        <Image
          alt="Finished Helmet"
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160825_171431.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
        <Image
          alt="Finished Helmet on Rick and Morty Table"
          height={IMAGE_HEIGHT_LANDSCAPE}
          src="/bucket/jpeg/project/morty_helmet/20160825_171257.jpg"
          width={IMAGE_WIDTH_LANDSCAPE}
        />
      </Carousel>
    </figure>
  </StyledMortyHelmet>
);

export default MortyHelmet;
