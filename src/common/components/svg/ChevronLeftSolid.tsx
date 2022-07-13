/**
 * ChevronLeftSolid.tsx
 * Chevron Left Solid SVG
 */

// Node Modules
import { string } from 'prop-types';
import { FC } from 'react';
import styled from 'styled-components';

// Styled Components
export const StyledChevronLeftSolid = styled.svg``;

// Types
interface Props {
  className?: string;
  viewBox?: string;
}

const ChevronLeftSolid: FC<Props> = ({ className, viewBox }) => (
  <svg
    className={className}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"/>
  </svg>
);

export default ChevronLeftSolid;

ChevronLeftSolid.defaultProps = {
  viewBox: '0 0 320 512',
};

ChevronLeftSolid.propTypes = {
  className: string,
  viewBox: string,
};
