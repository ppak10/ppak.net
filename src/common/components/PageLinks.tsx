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
const StyledPageLinks = styled.nav<{isShown: boolean}>`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transform: translateX(${({ isShown }) => isShown ? '-100%' : '0px'});
  transition-duration: 250ms;
  width: 250px;

  button {
    background-color: white;
    border: none;
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    cursor: pointer;
    height: 5em;
    position: absolute;
    right: 0px;
    top: 0px;
    transform: translateX(100%);
    width: 5em;

    svg {
      width: 1em;
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
`;

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
        {isShown ? <ChevronRightSolid /> : <ChevronLeftSolid />}
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
