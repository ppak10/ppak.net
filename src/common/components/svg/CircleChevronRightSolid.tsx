/**
 * CircleChevronRightSolid.tsx
 * Circle Chevron Right Solid
 */

// Node Modules
import { string } from 'prop-types';
import { FC } from 'react';
import styled from 'styled-components';

// Styled Components
export const StyledCircleChevronRightSolid = styled.svg``;

// Types
interface Props {
  className?: string;
  viewBox?: string;
}

const CircleChevronRightSolid: FC<Props> = ({ className, viewBox }) => (
  <svg
    className={className}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"/>
  </svg>
);

export default CircleChevronRightSolid;

CircleChevronRightSolid.defaultProps = {
  viewBox: '0 0 512 512',
};

CircleChevronRightSolid.propTypes = {
  className: string,
  viewBox: string,
};