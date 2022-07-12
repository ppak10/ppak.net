/**
 * CircleChevronLeftSolid.tsx
 * Circle Chevron Left Solid
 */

// Node Modules
import { string } from 'prop-types';
import { FC } from 'react';
import styled from 'styled-components';

// Styled Components
export const StyledCircleChevronLeftSolid = styled.svg``;

// Types
interface Props {
  className?: string;
  viewBox?: string;
}

const CircleChevronLeftSolid: FC<Props> = ({ className, viewBox }) => (
  <svg
    className={className}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z" />
  </svg>
);

export default CircleChevronLeftSolid;

CircleChevronLeftSolid.defaultProps = {
  viewBox: '0 0 512 512',
};

CircleChevronLeftSolid.propTypes = {
  className: string,
  viewBox: string,
};
