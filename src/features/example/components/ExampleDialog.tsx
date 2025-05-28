import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useOverlay } from '@/contexts/overlay';
import { OverlayProps } from '@/contexts/overlay/overlay-context';

export const ExampleDialog = () => {
  const { openOverlay, openConfirmation } = useOverlay();

  return (
    <div>
      <h2>Dialog</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* 컨펌용 */}
        <Button
          size="sm"
          onClick={() =>
            openConfirmation({
              title: 'Are you absolutely sure?',
              body: 'Are you sure you want to delete this provider? It can’t be undone.',
              actionButtonText: '확인',
              cancelButtonText: '취소',
              onSubmit: () => console.log('Submitted'),
            })
          }
        >
          Open Confirm Dialog
        </Button>
        {/* 커스텀용 */}
        <Button size="sm" onClick={() => openOverlay((props) => <CustomModalDemo {...props} />)}>
          Open Custom Dialog
        </Button>
      </div>
    </div>
  );
};

const CustomModalDemo = ({ isOpen, onRequestClose }: OverlayProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '400px' }}>
        <DialogHeader>
          <DialogTitle>테스트 모달 제목</DialogTitle>
          <DialogDescription>테스트 모달 설명</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => onRequestClose()}>확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
