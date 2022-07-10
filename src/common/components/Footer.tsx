/**
 * Footer.tsx
 */

// Node Modules
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';

// Constants
const SVG_HEIGHT = 30;
const SVG_WIDTH = 30;

// Styled Components
const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5em;
`;

const StyledBrandLinks = styled.ul`
  display: flex;
  gap: 1em;
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

// TODO: Add social links
const Footer: FC = () => (
  <StyledFooter>
    <h3>Peter Pak 2022</h3>
    <StyledBrandLinks>
      <li>
        <a href="https://angel.co/u/ppak" rel="noreferrer" target="_blank">
          <Image
            alt="angel.co SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/angellist-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://dev.to/ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="dev.to SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/dev-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="github.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/github-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="gitlab.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/gitlab-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://medium.com/@ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="medium.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/medium-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://www.reddit.com/user/_ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="reddit.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/reddit-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ppak10/" rel="noreferrer" target="_blank">
          <Image
            alt="linkedin.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/linkedin-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://www.npmjs.com/~ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="npmjs.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/npm-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/10521456/ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="npmjs.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/stack-overflow-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/ppak10" rel="noreferrer" target="_blank">
          <Image
            alt="youtube.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/youtube-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
      <li>
        <a href="https://steamcommunity.com/id/ppak10/" rel="noreferrer" target="_blank">
          <Image
            alt="steamcommunity.com SVG"
            height={SVG_HEIGHT}
            src="/bucket/svg/brand/steam-brands.svg"
            width={SVG_WIDTH}
          />
        </a>
      </li>
    </StyledBrandLinks>
  </StyledFooter>
);

export default Footer;
