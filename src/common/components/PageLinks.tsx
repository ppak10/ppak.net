/**
 * PageLinks.tsx
 * Common component for page links.
 */

// Node Modules
import { arrayOf, element, oneOfType, string } from 'prop-types';
import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';

// Components
import ChevronLeftSolid from 'common/components/svg/ChevronLeftSolid';
import ChevronRightSolid from 'common/components/svg/ChevronRightSolid';

// Styled Components
const StyledPageLinksContent = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow-y: auto;
  padding: 0em 1em;
  width: 100%;

  ol {
    list-style: none;
  }
`;

const StyledPageLinks = styled.nav<{isShown: boolean}>`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transform: translateX(${({ isShown }) => isShown ? '0px': '-100%' });
  transition-duration: 250ms;

  button {
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    cursor: pointer;
    height: 10em;
    position: absolute;
    right: 0px;
    top: 5em;
    width: 3.5em;

    // Small issue on mobile in space between button and content.
    transform: translateX(99%);

    @media (max-width: ${({ theme }) => theme.size.mobile}) {
      // Smaller button as to not display over text on mobile devices.
      width: 1.75em;
    }

    svg {
      width: 1em;

      @media (max-width: ${({ theme }) => theme.size.mobile}) {
        // Small offset for iphone and other mobile devices.
        transform: translateX(-50%);
      }
    }

    path {
      transition-duration: 250ms;
    }

    :hover:enabled {
      path {
        fill: rgba(0, 0, 0, 0.5);
      }
    }
  }

  // TODO: Add in better transitions.
  ${StyledPageLinksContent} {
    display: ${({ isShown }) => isShown ? 'flex': 'none'};
    width: max-content;
  }

  h1 {
    display: ${({ isShown }) => isShown ? 'flex': 'none'};
  }
`;

// Types
interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}

const PageLinks: FC<Props> = ({ children, className }) => {
  // Hooks
  const [isShown, setIsShown] = useState(false);

  // Callbacks
  const handleClick = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <StyledPageLinks className={className} isShown={isShown}>
      <button onClick={handleClick}>
        {isShown ? <ChevronLeftSolid /> : <ChevronRightSolid />}
      </button>
      <h1>Table of Contents</h1>
      <StyledPageLinksContent>
        {children}
      </StyledPageLinksContent>
    </StyledPageLinks>
  );
};

export default PageLinks;

PageLinks.propTypes = {
  className: string,
  children: oneOfType([arrayOf(element), element]),
};
