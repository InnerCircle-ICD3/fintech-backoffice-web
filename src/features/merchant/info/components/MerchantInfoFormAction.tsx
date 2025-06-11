import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import * as styles from './merchant-info.css';

interface EditButtonsProps {
  onCancel: () => void;
  isSubmitting: boolean;
  isValid: boolean;
}

const EditButtons = ({ onCancel, isSubmitting, isValid }: EditButtonsProps) => (
  <div className={styles.buttonContainer}>
    <Button type="button" variant="secondary" onClick={onCancel} disabled={isSubmitting}>
      취소
    </Button>
    <Button type="submit" variant="primary" disabled={!isValid || isSubmitting}>
      {isSubmitting ? '저장 중...' : '저장'}
    </Button>
  </div>
);

interface ModifyButtonProps {
  onClick: () => void;
}

const ModifyButton = ({ onClick }: ModifyButtonProps) => (
  <Button width="fit" variant="primary" onClick={onClick}>
    <div className={styles.buttonIcon}>
      <Pencil size={16} />
      정보 수정
    </div>
  </Button>
);

const MerchantInfoFormAction = {
  EditButtons,
  ModifyButton,
};

export default MerchantInfoFormAction;
