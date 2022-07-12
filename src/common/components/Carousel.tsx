/**
 * Carousel.tsx
 * Common component for displaying images.
 */

// Node Modules
import { arrayOf, element, string } from 'prop-types';
import {
  FC,
  ReactNode,
  UIEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

// Components
import CircleChevronLeftSolid from 'common/components/svg/CircleChevronLeftSolid';
import CircleChevronRightSolid from 'common/components/svg/CircleChevronRightSolid';

// Styled Components
const StyledCarousel = styled.div`
  position: relative;
`;

const StyledCarouselImages = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  // Expects user to use buttons for image carousel except while on phone.
  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    overflow-x: scroll;
  }

  // Applies styles to <Image /> component.
  span {
    min-width: 100%;
    scroll-snap-align: start;
  }
`;

const StyledCarouselButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2em;
  height: 2em;
  position: absolute;
  top: 50%;
  transition-duration: 250ms;
  transform: translateY(-50%);
  width: 2em;

  // Done to fix safari ipad issue of buttons not being able to be pressed.
  z-index: 2;

  path {
    fill: white;
    transition-duration: 250ms;
  }

  // Hides buttons when on mobile.
  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    display: none;
  }

  :disabled {
    display: none;
  }

  :hover:enabled {
    path {
      fill: gray;
    }
  }
`;

// Types
interface Props {
  children: ReactNode[]; // Expects a list of <Image />, not just one or none.
  className?: string;
}

const Carousel: FC<Props> = ({ children, className }) => {
  // Hooks
  const ref = useRef<HTMLDivElement>(null);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      setScrollLeft(current.scrollLeft);
      setScrollWidth(current.scrollWidth);
      setClientWidth(current.clientWidth);

      // TODO: Add in resize listener.
    }
  }, []);

  // Callbacks
  const handleLeftClick = () => {
    if (ref.current && scrollLeft) {
      ref.current.scrollLeft -= clientWidth;
    }
  };

  const handleRightClick = () => {
    if (ref.current && scrollLeft < scrollWidth - clientWidth) {
      ref.current.scrollLeft += clientWidth;
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    setScrollLeft((e.target as HTMLDivElement).scrollLeft);
  };

  return (
    <StyledCarousel className={className}>
      <StyledCarouselImages ref={ref} onScroll={handleScroll}>
        {children}
      </StyledCarouselImages>
      <StyledCarouselButton
        disabled={!scrollLeft}
        onClick={handleLeftClick}
        style={{ left: '5%' }}
      >
        <CircleChevronLeftSolid />
      </StyledCarouselButton>
      <StyledCarouselButton
        disabled={scrollLeft >= scrollWidth - clientWidth}
        onClick={handleRightClick}
        style={{ right: '5%' }}
      >
        <CircleChevronRightSolid />
      </StyledCarouselButton>
    </StyledCarousel>
  );
};

export default Carousel;

Carousel.propTypes = {
  children: arrayOf(element).isRequired,
  className: string,
};
