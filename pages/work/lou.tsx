/**
 * lou.tsx
 * Outlines work done at Lou.
 */

// Node Modules
import type { NextPage } from 'next';
import styled from 'styled-components';

// Styled Components
const StyledLou = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Lou: NextPage = () => (
  <StyledLou>
    <h1>Lou</h1>
  </StyledLou>
);

export default Lou;
