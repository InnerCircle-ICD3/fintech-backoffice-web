import { ApiKeyResponseType } from '@/api/api-keys/schema';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useOverlay } from '@/contexts/overlay';
import * as styles from '@/features/merchant/api-keys/styles/api-key-detail.css';
import { format } from 'date-fns';
import { RefreshCw, Trash2 } from 'lucide-react';

interface ApiKeyDetailDialogProps {
  apiKey: ApiKeyResponseType;
  isOpen: boolean;
  onRequestClose: () => void;
  onReissue: () => void;
  onDelete: () => void;
}

const ApiKeyDetailDialog = ({
  apiKey,
  isOpen,
  onRequestClose,
  onReissue,
  onDelete,
}: ApiKeyDetailDialogProps) => {
  const { openConfirmation } = useOverlay();

  const formatDate = (date: string) => {
    return format(new Date(date), 'yyyy/MM/dd');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '460px' }}>
        <DialogHeader>
          <DialogTitle>API 키 상세 정보</DialogTitle>
          <DialogDescription>API 키의 상세 정보를 확인할 수 있습니다.</DialogDescription>
        </DialogHeader>

        <div className={styles.content}>
          <div className={styles.infoItem}>
            <span className={styles.label}>ID</span>
            <span className={styles.value}>{apiKey.key}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>상태</span>
            <span
              className={`${styles.value} ${apiKey.active ? styles.statusActive : styles.statusInactive}`}
            >
              {apiKey.active ? '활성' : '비활성'}
            </span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>생성일</span>
            <span className={styles.value}>{formatDate(apiKey.createdAt)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>만료일</span>
            <span className={styles.value}>{formatDate(apiKey.expiredAt)}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            onClick={() => {
              openConfirmation({
                title: 'API 키 재발급',
                body: 'API 키를 재발급하시겠어요?',
                onSubmit: () => {
                  onReissue();
                  onRequestClose();
                },
              });
            }}
            className={styles.actionButton}
          >
            <RefreshCw size={16} />
            재발급
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              openConfirmation({
                title: 'API 키 삭제',
                body: 'API 키를 삭제하시겠어요?',
                onSubmit: () => {
                  onDelete();
                  onRequestClose();
                },
              });
            }}
            className={styles.actionButton}
          >
            <Trash2 size={16} />
            삭제
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDetailDialog;
