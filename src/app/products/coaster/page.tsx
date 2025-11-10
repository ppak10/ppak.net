import ModelViewer from 'components/ModelViewer';
import LogoCoaster from 'components/LogoCoaster';

export default function CoasterPage() {
  return (
    <div>
      {/* Hero Section with Background Video */}
      <div className="relative h-screen w-full overflow-hidden bg-[#fef6e4]">
        {/* Background Video - Fixed Position */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover"
        >
          <source src="/coaster_background.webm" type="video/webm" />
        </video>

        {/* Content Overlay on Hero */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 sm:p-8">
          <div className="mx-auto max-w-2xl">
            <LogoCoaster height={68*4} width={150*4} stroke="white" fill="white" />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto my-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* 3D Model Viewer */}
          <div className="w-full h-[600px] bg-neutral-50 dark:bg-neutral-900 rounded-lg">
            <ModelViewer modelPath="/CoasterHex.glb" />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Product Description
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                A beautifully designed hexagonal coaster. Rotate and zoom the
                3D model to explore the design from all angles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Hexagonal design</li>
                <li>Durable construction</li>
                <li>Modern aesthetic</li>
              </ul>
            </div>

            <div className="text-sm text-neutral-600 dark:text-neutral-400 border-t pt-4">
              <p className="font-medium mb-2">How to interact with the model:</p>
              <ul className="space-y-1">
                <li>" Click and drag to rotate</li>
                <li>" Scroll to zoom in/out</li>
                <li>" Right-click and drag to pan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
