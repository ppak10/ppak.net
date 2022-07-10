/**
 * CanvasStl.tsx
 * Breville Hopper component for displaying .stl models with three.js.
 */

// Node Modules
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Canvas, Euler } from '@react-three/fiber'
import { string } from 'prop-types';
import { FC, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BufferGeometry } from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

// Styled Components
const StyledCanvasStl = styled.div`
  height: 1000px;
  width: 1000px;
`;

const StyledCanvas = styled(Canvas)`
  background-color: #eee;
`;

// Types
interface CanvasStlProp {
  className?: string;
  meshRotation?: Euler;
  url: string;
}

const CanvasStl: FC<CanvasStlProp> = ({ className, meshRotation, url }) => {
  // Hooks
  const [geometry, setGeometry] = useState<BufferGeometry>();

  useEffect(() => {
    // Utilizes STL loader to set geometry from .stl url to state.
    const stlLoader = new STLLoader();
    stlLoader.load(url, geo => { setGeometry(geo) })
  }, [url]);

  return (
    <StyledCanvasStl className={className}>
      <StyledCanvas orthographic={true}>
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[500, 500, 500]}>
            <pointLight castShadow={true} intensity={0.5} position={[-1000, 0, 1000]}/>
            <pointLight castShadow={true} intensity={0.5} position={[1000, 0, 1000]}/>
          </OrthographicCamera>
            <mesh geometry={geometry} scale={4} rotation={meshRotation}>
              <meshStandardMaterial color="#757575" />
            </mesh>
          <OrbitControls />
        </Suspense>
      </StyledCanvas>
    </StyledCanvasStl>
  );
};

export default CanvasStl;

CanvasStl.defaultProps = {
  meshRotation: [-Math.PI / 2, 0, 0],
};

CanvasStl.propTypes = {
  className: string,
  url: string.isRequired,
};
