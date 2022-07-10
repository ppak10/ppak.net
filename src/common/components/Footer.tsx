/**
 * Footer.tsx
 */

// Node Modules
import Image from 'next/image';
import { FC, useState } from 'react';
import styled from 'styled-components';

// Public
import angellistSVG from 'public/svg/brand/angellist-brands.svg';
import devSVG from 'public/svg/brand/dev-brands.svg';
import githubSVG from 'public/svg/brand/github-brands.svg';
import gitlabSVG from 'public/svg/brand/gitlab-brands.svg';
import linkedinSVG from 'public/svg/brand/linkedin-brands.svg';
import mediumSVG from 'public/svg/brand/medium-brands.svg';
import npmSVG from 'public/svg/brand/npm-brands.svg';
import redditSVG from 'public/svg/brand/reddit-brands.svg';
import stackoverflowSVG from 'public/svg/brand/stack-overflow-brands.svg';
import steamSVG from 'public/svg/brand/steam-brands.svg';
import youtubeSVG from 'public/svg/brand/youtube-brands.svg';

import chevronDownSVG from 'public/svg/common/chevron-down-solid.svg';
import chevronUpSVG from 'public/svg/common/chevron-up-solid.svg';

// Styled Components
const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  padding: 2.5em;

  button {
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    gap: 0.5em;
    display: flex;
    white-space: nowrap;

    h4 {
      margin: 0px;
    }
  }
`;

const StyledBrandLinks = styled.ul`
  align-items: center;
  display: flex;
  gap: 1em;
  justify-content: center;
  list-style: none;
  margin: 0px;
  padding: 0px;

  li {
    height: fit-content;
    width: 2.5em;
  }
`;

const StyledOtherBrandLinks = styled(StyledBrandLinks)<{isShown: boolean}>`
  flex-wrap: wrap;

  visibility: ${({ isShown }) => isShown ? 'visible' : 'hidden'};
`;

// TODO: Add social links
const Footer: FC = () => {
  // Hooks
  const [otherLinksIsShown, setOtherLinksIsShown] = useState(false);

  // Callbacks
  const handleSeeMore = () => {
    setOtherLinksIsShown((prevState) => !prevState);
  };

  return (
    <StyledFooter>
      <h3>Peter Pak 2022</h3>
      <StyledBrandLinks>
        <li>
          <a href="https://angel.co/u/ppak" rel="noreferrer" target="_blank">
            <Image alt="angel.co SVG" src={angellistSVG} />
          </a>
        </li>
        <li>
          <a href="https://github.com/ppak10" rel="noreferrer" target="_blank">
            <Image alt="github.com SVG" src={githubSVG} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ppak10/" rel="noreferrer" target="_blank">
            <Image alt="linkedin.com SVG" src={linkedinSVG} />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/10521456/ppak10" rel="noreferrer" target="_blank">
            <Image alt="stackoverflow.com SVG" src={stackoverflowSVG} />
          </a>
        </li>
      </StyledBrandLinks>
      <button onClick={handleSeeMore}>
        <h4>{otherLinksIsShown ? 'Hide' : 'See More'}</h4>
        <Image
          alt="chevron"
          height="15"
          src={otherLinksIsShown ? chevronUpSVG : chevronDownSVG}
          width="15"
        />
      </button>
      <StyledOtherBrandLinks isShown={otherLinksIsShown}>
        <li>
          <a href="https://dev.to/ppak10" rel="noreferrer" target="_blank">
            <Image alt="dev.to SVG" src={devSVG} />
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/ppak10" rel="noreferrer" target="_blank">
            <Image alt="gitlab.com SVG" src={gitlabSVG} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/@ppak10" rel="noreferrer" target="_blank">
            <Image alt="medium.com SVG" src={mediumSVG} />
          </a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~ppak10" rel="noreferrer" target="_blank">
            <Image alt="npmjs.com SVG" src={npmSVG} />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/_ppak10" rel="noreferrer" target="_blank">
            <Image alt="reddit.com SVG" src={redditSVG} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/ppak10" rel="noreferrer" target="_blank">
            <Image alt="youtube.com SVG" src={youtubeSVG} />
          </a>
        </li>
        <li>
          <a href="https://steamcommunity.com/id/ppak10/" rel="noreferrer" target="_blank">
            <Image alt="steamcommunity.com SVG" src={steamSVG} />
          </a>
        </li>
      </StyledOtherBrandLinks>
    </StyledFooter>
  );
}

export default Footer;
