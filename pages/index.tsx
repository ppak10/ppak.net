/**
 * index.tsx
 * Home page for next.js app.
 */

// Node Modules
import type { NextPage } from 'next';
import styled from 'styled-components';

// Styled Components
const StyledHome = styled.div`
`;

const Home: NextPage = () => (
  <StyledHome>
    <h1>Welcome!</h1>
    <h2>Check out some of my work and projects</h2>
  </StyledHome>
);

export default Home
