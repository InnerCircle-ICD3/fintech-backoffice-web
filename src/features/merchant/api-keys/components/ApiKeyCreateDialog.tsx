import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { OverlayProps } from '@/contexts/overlay/overlay-context';
import * as styles from '@/features/merchant/api-keys/styles/api-key-create-dialog.css';
import { TriangleAlert } from 'lucide-react';

interface ApiKeyCreateDialogProps extends OverlayProps {
  onSubmit: () => void;
}

export const ApiKeyCreateDialog = ({
  isOpen,
  onRequestClose,
  onSubmit,
}: ApiKeyCreateDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '460px' }}>
        <DialogHeader>
          <DialogTitle>API 키 발급</DialogTitle>
          <DialogDescription>
            새로운 API 키를 발급하시겠어요? 발급된 키는 다시 발급할 수 없어요.
          </DialogDescription>
          <div className={styles.noticeContainer}>
            <h2 className={styles.noticeTitle}>
              <TriangleAlert size={16} />
              주의 사항
            </h2>
            <ul className={styles.noticeList}>
              <li className={styles.noticeItem}>API 키는 발급 후 즉시 사용 가능합니다.</li>
              <li className={styles.noticeItem}>Secret 키는 최초 발급 시에만 확인 가능합니다.</li>
              <li className={styles.noticeItem}>발급 후 반드시 안전한 곳에 보관하세요.</li>
            </ul>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={onRequestClose}>
            취소
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              onSubmit();
              onRequestClose();
            }}
          >
            발급하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
