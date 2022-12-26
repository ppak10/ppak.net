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

export const StyledCover = styled.div`
  position: fixed;
`;
