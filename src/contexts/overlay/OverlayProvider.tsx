import { v4 as uuid } from 'uuid';
import type { PropsWithChildren } from 'react';

import { memo, useCallback, useState } from 'react';
import { type OpenOverlayFn, OverlayContext, type OverlayState } from './overlay-context';

export function OverlayProvider({ children }: PropsWithChildren) {
  const [Overlays, setOverlays] = useState<Record<string, OverlayState>>(Object.create(null));

  const openOverlay: OpenOverlayFn = useCallback((renderOverlay) => {
    const OverlayId = uuid();

    const closeOverlay = () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setOverlays(({ [OverlayId]: OverlayToRemove, ...Overlays }) => Overlays);
    };

    setOverlays((Overlays) => ({
      ...Overlays,
      [OverlayId]: {
        isOpen: true,
        renderOverlay,
        onRequestClose: closeOverlay,
      },
    }));

    return closeOverlay;
  }, []);

  return (
    <OverlayContext.Provider value={openOverlay}>
      {children}
      <div id="overlay-root">
        {Object.entries(Overlays).map(([key, state]) => (
          <OverlayWrapper key={key} {...state} />
        ))}
      </div>
    </OverlayContext.Provider>
  );
}

const OverlayWrapper = memo(function OverlayWrapper({ renderOverlay, ...props }: OverlayState) {
  return renderOverlay(props);
});
