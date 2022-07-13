/**
 * Portal.tsx
 * Component to provide portal to corresponding root element given id.
 * <{@link https://github.com/vercel/next.js/blob/canary/examples/with-portals/components/ClientOnlyPortal.js}>
 */

// Node Modules
import { arrayOf, element, oneOf, oneOfType } from 'prop-types';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Enums
import { PortalElementId } from 'common/enums';

// Types
interface Props {
  children: ReactNode;
  portalElementId?: PortalElementId;
}

/**
 * @description Defaults to modal portal.
 * @param {PortalElementId} portalElementId
 * @returns 
 */
const Portal: FC<Props> = ({ children, portalElementId }) => {
  const ref = useRef<DocumentFragment | Element | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById(portalElementId as string);
    setMounted(true);
  }, [portalElementId])

  return mounted
    ? createPortal(children, ref.current as DocumentFragment | Element)
    : null;
}

export default Portal;

Portal.defaultProps = {
  portalElementId: PortalElementId.Modal,
};

Portal.propTypes = {
  children: oneOfType([arrayOf(element), element]),
  portalElementId: oneOf(Object.values(PortalElementId)),
};
