/**
 * Carousel.tsx
 * Common component for displaying images.
 */

// Node Modules
import { arrayOf, element, string } from 'prop-types';
import {
  ChangeEvent,
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
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  // Hides the scrollbar for firefox.
  scrollbar-width: none;

  ::-webkit-scrollbar {
    // Hides scrollbar for chrome and edge browsers.
    height: 0px;
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
      fill: rgba(255, 255, 255, 0.8);
    }
  }
`;

/**
 * @author <{@link https://moderncss.dev/pure-css-custom-styled-radio-buttons/}>
 */
const StyledCarouselIndicators = styled.div`
  display: flex;
  gap: 0.5em;
  justify-content: center;
  padding: 1em;

  input[type="radio"] {
    -webkit-appearance: none;

    appearance: none;
    border-color: gray;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.15em;
    display: grid;
    font-size: 1.5em;
    height: 1em;
    margin: 0px;
    place-content: center;
    transition-duration: 250ms;
    width: 1em;

    :hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

  input[type="radio"]::before {
    border-radius: 50%;
    box-shadow: inset 1em 1em gray;
    content: "";
    height: 1em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    width: 1em;
  }

  input[type="radio"]:checked::before {
    transform: scale(1);
  }
`;

// Types
interface Props {
  /**
   * Expects a list of <Image />, not just one or none (No more than 10 images).
   * If too many images are included, the indicators on the bottom will overflow
   */
  children: ReactNode[];
  className?: string;
}

const Carousel: FC<Props> = ({ children, className }) => {
  // Hooks
  const ref = useRef<HTMLDivElement>(null);

  const [scrollIndex, setScrollIndex] = useState(0);
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (ref.current) {
      ref.current.scrollLeft = parseInt(value);
    }
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollLeft } = e.target as HTMLDivElement;
    setScrollLeft(scrollLeft);
    setScrollIndex(Math.floor(scrollLeft/clientWidth));
  };

  // JSX
  const indexRadioInputsJSX = children.map((_, index) => (
    <input
      checked={scrollIndex === index}
      key={index}
      onChange={handleInputChange}
      type="radio"
      value={index * clientWidth}
    />
  ));

  return (
    <StyledCarousel className={className}>
      <StyledCarouselImages ref={ref} onScroll={handleScroll}>
        {children}
      </StyledCarouselImages>
      <StyledCarouselIndicators>
        {indexRadioInputsJSX}
      </StyledCarouselIndicators>
      {/* These buttons seem to disappear on touch screens for some reason. */}
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
