'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Stage } from '@react-three/drei';
import { Suspense } from 'react';

interface ModelProps {
  modelPath: string;
}

function Model({ modelPath }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export default function ModelViewer({
  modelPath,
  className = '',
}: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="rounded-lg"
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <Model modelPath={modelPath} />
          </Stage>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minDistance={0.1}
            maxDistance={0.25}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
