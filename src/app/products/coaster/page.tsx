/**
 * page.tsx
 * Page component for Coaster product listing
 */

// Node Modules
import { FC } from 'react';

// Components
import ModelViewer from 'components/ModelViewer';
import CoasterLogo from 'components/logos/ppak_net/Coaster';
import BackgroundVideo from 'components/BackgroundVideo';
import { Badge } from 'components/ui/badge';

const Coaster: FC = () => (
  <div>
    <BackgroundVideo src="/coaster_background.webm" type="video/webm">
      <CoasterLogo
        stroke="white"
        fill="white"
        className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
      />
    </BackgroundVideo>
    <div className="max-w-6xl mx-auto my-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* 3D Model Viewer */}
        <div className="w-full h-[600px] bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <ModelViewer modelPath="/CoasterHex.glb" />
        </div>

        {/* Product Information */}
        <div className="space-y-6 mt-24">
          <div>
            <h1 className="text-4xl font-semibold mb-4">Coaster v1.0</h1>
            <p>Designed by me. Perfected for you.</p>
          </div>
          <div className="border-t pt-4">
            <p>Stainless Steel | Aluminum | Nylon</p>
          </div>

          <Badge>Out of Stock</Badge>
        </div>
      </div>
    </div>
  </div>
);

export default Coaster;
