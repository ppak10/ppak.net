/**
 * CanvasGCode.tsx
 * Canvas component to display Gcode
 */

// Node Modules
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas, Euler, useLoader } from '@react-three/fiber'
import { string } from 'prop-types';
import { FC, Suspense, } from 'react';
import styled from 'styled-components';
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader';

// Styled Components
const StyledCanvasGCode = styled.div`
  height: 1000px;
  width: 1000px;
`;

const StyledCanvas = styled(Canvas)`
  background-color: #000;
`;

// Types
interface CanvasGCodeProp {
  className?: string;
  meshRotation?: Euler;
  url: string;
}

interface SceneProps {
  url: string;
}

const Scene: FC<SceneProps> = ({ url }) => {
  const gcode = useLoader(GCodeLoader, url)
  return <primitive object={gcode} scale={3} />;
}

Scene.propTypes = {
  url: string.isRequired,
};

const CanvasGCode: FC<CanvasGCodeProp> = ({ className, url }) => {

  return (
    <StyledCanvasGCode className={className}>
      <StyledCanvas orthographic={true}>
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[500, 500, 500]} />
          <Scene url={url} />
          <OrbitControls />
        </Suspense>
      </StyledCanvas>
    </StyledCanvasGCode>
  );
};

export default CanvasGCode;

CanvasGCode.propTypes = {
  className: string,
  url: string.isRequired,
};
