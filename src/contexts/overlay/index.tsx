import type { ConfirmDialogProps } from '@/components/confirm-dialog';
import ConfirmDialog from '@/components/confirm-dialog';
import { useCallback, useContext } from 'react';
import { OverlayContext } from './overlay-context';

export function useOverlay() {
  const openOverlay = useContext(OverlayContext);

  const openConfirmation = useCallback(
    (confirmProps: ConfirmDialogProps) => {
      openOverlay((props) => <ConfirmDialog {...confirmProps} {...props} />);
    },
    [openOverlay]
  );

  return { openOverlay, openConfirmation };
}
