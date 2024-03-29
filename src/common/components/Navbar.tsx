/**
 * Navbar.tsx
 * Navbar component used in `_app.tsx` component.
 */

// Node Modules
import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

// Styled Components
const StyledNavbar = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  transition-duration: 250ms;

  h1, h2 {
    margin: 0px;
  }

  button {
    cursor: pointer;

    :focus {
      ~ ul {
        visibility: visible;
      }
    }
  }

  ul {
    display: flex;
    gap: 1em;
    list-style: none;
  }

  @media (min-width: ${({ theme }) => theme.size.tablet }) {
    padding-bottom: 2.5em;
  }
`;

const Navbar: FC<{className?: string}> = ({ className }) => (
  <StyledNavbar className={className}>
    <Link href="/">
      <h1>ppak.net</h1>
    </Link>
    <ul>
      <li>
        <Link href="/projects">
          <h2>Projects</h2>
        </Link>
      </li>
      <li>
        <Link href="/work/lou">
          <h2>Work</h2>
        </Link>
      </li>
    </ul>
  </StyledNavbar>
);

export default Navbar;
