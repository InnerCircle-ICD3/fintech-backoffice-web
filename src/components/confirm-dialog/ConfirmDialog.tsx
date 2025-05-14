import type { ReactNode } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog/AlertDialog';
import type { OverlayProps } from '@/contexts/overlay/overlay-context';

export interface ConfirmDialogProps {
  title: ReactNode;
  body?: ReactNode;
  actionButtonText?: string;
  cancelButtonText?: string;
  onSubmit: () => void;
}

export const ConfirmDialog = ({
  title,
  body,
  actionButtonText,
  cancelButtonText,
  onSubmit,
  isOpen,
  onRequestClose,
}: ConfirmDialogProps & OverlayProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{body}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onRequestClose()}>
            {cancelButtonText || '취소'}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onRequestClose();
              onSubmit();
            }}
          >
            {actionButtonText || '확인'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
