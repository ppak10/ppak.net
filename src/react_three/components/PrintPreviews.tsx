/**
 * PrintPreviews.tsx
 * Print preview component to display multiple assembled views of a print
 */

// Node Modules
import { bool, string } from 'prop-types';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

// Components
import PrintPreview from 'react_three/components/PrintPreview';

// Styled Components
const StyledPrintPreviews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  grid-area: print-previews;

  button {
    border-radius: 0.5em;
    border-style: none;
    background-color: transparent;
    font-size: 1.5em;
    transition-duration: 250ms;

    :hover:enabled {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`;

const StyledPrintPreviewsIndividualButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  gap: 1em;
`;

const StyledPrintPreviewsOrderedButtons = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// Types
import { Props as PrintPreviewProps } from 'react_three/components/PrintPreview';
interface PrintPreview extends PrintPreviewProps {
  buttonText: string;
}
interface Props {
  className?: string;
  ordered?: boolean;
  printPreviews: PrintPreview[];
}

// Utils
const removeButtonTextProp = (printPreview: PrintPreview) => {
  // Removes button text prop that is not valid for `<PrintPreview />`.
  const { buttonText, ...rest } = printPreview;
  return rest;
};

const PrintPreviews: FC<Props> = ({ className, ordered, printPreviews }) => {
  // Hooks
  const [printPreviewIndex, setPrintPreviewIndex] = useState(0);
  const [printPreviewProps, setPrintPreviewProps] = useState(
    removeButtonTextProp(printPreviews[printPreviewIndex])
  );

  useEffect(() => {
    // Updates props passed to print preview when index is changed.
    setPrintPreviewProps(removeButtonTextProp(printPreviews[printPreviewIndex]));
  }, [printPreviewIndex, printPreviews]);

  // JSX
  const printPreviewButtonsJSX = ordered ? (
    <StyledPrintPreviewsOrderedButtons>
      <button
        disabled={printPreviewIndex === 0}
        onClick={() => setPrintPreviewIndex((prevState) => prevState - 1)}
      >
        «
      </button>
      {printPreviews[printPreviewIndex].buttonText}
      <button
        disabled={printPreviewIndex === printPreviews.length - 1}
        onClick={() => setPrintPreviewIndex((prevState) => prevState + 1)}
      >
        »
      </button>
    </StyledPrintPreviewsOrderedButtons>
  ) : (
    <StyledPrintPreviewsIndividualButtons>
      {printPreviews.map((printPreview, index) => (
        <button
          disabled={index === printPreviewIndex}
          key={index}
          onClick={() => setPrintPreviewIndex(index)}
        >
          {printPreview.buttonText}
        </button>
      ))}
    </StyledPrintPreviewsIndividualButtons>
  );

  return (
    <StyledPrintPreviews className={className}>
      {printPreviewButtonsJSX}
      <PrintPreview {...printPreviewProps} />
    </StyledPrintPreviews>
  );
};

export default PrintPreviews;

PrintPreviews.propTypes = {
  className: string,
  ordered: bool,
};
