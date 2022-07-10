/**
 * styled.ts
 */

// Node Modules
import styled from 'styled-components';

export const StyledPrintPreviewsSection = styled.section<{
  printPreviewsRight?: boolean;
}>`
  display: grid;
  grid-gap: 1em 2.5em;
  grid-template-rows: min-content 1fr;

  ${({ printPreviewsRight }) => printPreviewsRight ? `
      grid-template-areas: "heading print-previews" "paragraph print-previews";
      grid-template-columns: 2fr 1fr;
    ` : `
      grid-template-areas: "print-previews heading" "print-previews paragraph";
      grid-template-columns: 1fr 2fr;
    `
  }

  p {
    align-self: center;
    margin: 0px;
  }

  @media (max-width: ${({ theme }) => theme.size.tablet }) {
    grid-template-areas:
      "heading"
      "print-previews"
      "paragraph";
    grid-template-columns: 1fr;
  }
`;

export const StyledPrintPreviewSection = styled.section<{right?: boolean}>`
  display: grid;
  grid-template-areas:
    "print-preview heading"
    "print-preview paragraph";
  grid-template-columns: 1fr 2fr;
  grid-template-rows: min-content 1fr;
  grid-gap: 1em 2.5em;

  ${({ right }) => right ? `
      grid-template-areas: "heading print-preview" "paragraph print-preview";
      grid-template-columns: 2fr 1fr;
    ` : `
      grid-template-areas: "print-preview heading" "print-preview paragraph";
      grid-template-columns: 1fr 2fr;
    `
  }

  @media (max-width: ${({ theme }) => theme.size.tablet }) {
    grid-template-areas:
      "heading"
      "print-preview"
      "paragraph";
    grid-template-columns: 1fr;
  }
`;