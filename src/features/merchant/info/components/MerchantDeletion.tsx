import { merchantsApi } from '@/api/merchants/api';
import { CardHeader } from '@/components/card-header';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { useOverlay } from '@/contexts/overlay';
import { useClearTokens } from '@/stores/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as styles from './merchant-deletion.css';

const MerchantDeletion = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { openConfirmation } = useOverlay();
  const clearTokens = useClearTokens();

  const { mutate: deleteMerchant, isPending } = useMutation({
    mutationFn: () => merchantsApi.delete(),
    onSuccess: () => {
      clearTokens();
      queryClient.invalidateQueries({
        predicate: () => true,
      });
      navigate('/auth/login');
    },
  });

  const handleDeleteMerchant = () => {
    openConfirmation({
      title: '가맹점 탈퇴 하시겠습니까?',
      body: '가맹점 탈퇴 시 모든 결제 정보와 정산 내역이 삭제됩니다.',
      actionButtonText: '확인',
      cancelButtonText: '취소',
      onSubmit: () => deleteMerchant(),
    });
  };

  return (
    <Card className={styles.cardContainer}>
      <CardHeader
        title="가맹점 탈퇴"
        description="가맹점 계정을 삭제하고 서비스 이용을 중단합니다."
      />

      <div className={styles.contentWrapper}>
        <div className={styles.noticeContainer}>
          <ul className={styles.noticeList}>
            <li className={styles.noticeItem}>
              가맹점 탈퇴 시 모든 결제 정보와 정산 내역이 삭제됩니다.
            </li>
            <li className={styles.noticeItem}>발급된 API 키와 SDK 키는 즉시 비활성화됩니다.</li>
            <li className={styles.noticeItem}>
              진행 중인 정산이 있는 경우 정산 완료 후 탈퇴가 가능합니다.
            </li>
            <li className={styles.noticeItem}>탈퇴 후 데이터는 복구할 수 없습니다.</li>
          </ul>
        </div>

        <div className={styles.buttonWrapper}>
          <Button
            width="fit"
            variant="destructive"
            onClick={() => handleDeleteMerchant()}
            disabled={isPending}
          >
            <div className={styles.buttonIcon}>
              <Trash size={16} />
              가맹점 탈퇴
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MerchantDeletion;
