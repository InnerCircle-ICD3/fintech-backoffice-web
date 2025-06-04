import { merchantsApi } from '@/api/merchants/api';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { useMutation } from '@tanstack/react-query';
import { Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CardHeader } from './CardHeader';
import * as styles from './merchant-deletion.css';

const MerchantDeletion = () => {
  const navigate = useNavigate();

  const { mutate: deleteMerchant } = useMutation({
    mutationFn: () => {
      return merchantsApi.delete();
    },
    onSuccess: () => {
      navigate('/login');
    },
  });

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
          <Button width="fit" variant="destructive">
            <Trash size={16} />
            가맹점 탈퇴
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MerchantDeletion;
