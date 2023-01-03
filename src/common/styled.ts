/**
 * styled.ts
 * Commonly used styled components.
 */

// Node Modules
import styled from 'styled-components';

// Styled Components
export const StyledListItem = styled.li`
  background-color: white;
  border-radius: 0.5em;
  box-shadow: 0.25em 0.25em 1em 0.1em lightgray;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.75em;
  position: relative;
  transition-duration: 250ms;

  :hover {
    // Gives the slight appearance of moving closer to the cursor on hover.
    transform: translate(0.15em, -0.15em);
  }
`;

export const StyledProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  padding: 0px;

  ${StyledListItem} {
    align-items: center;
    min-width: 300px;
    flex: 1;

    h3 {
      margin: 0px;
    }

    img {
      border-radius: 0.25em;
    }

  }

  // Hacky fix to prevent last list item from expanding entire column width.
  ${StyledListItem}:last-child, ${StyledListItem}:nth-last-child(2){
    flex: unset;
  }
`;
