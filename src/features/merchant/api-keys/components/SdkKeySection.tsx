import { sdkApi } from '@/api/sdk/api';
import { CardHeader } from '@/components/card-header';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useMutation } from '@tanstack/react-query';
import { Copy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import * as styles from './sdk-key.css';

interface SdkKeySectionProps {
  sdkKey: string;
}

const SdkKeySection = ({ sdkKey }: SdkKeySectionProps) => {
  const [isActive, setIsActive] = useState(true);

  const { mutate: activateSdkKey } = useMutation({
    mutationFn: () => sdkApi.activate(),
    onSuccess: () => {
      setIsActive(true);
      toast.success('SDK 키가 활성화되었습니다.');
    },
  });

  const { mutate: deactivateSdkKey } = useMutation({
    mutationFn: () => sdkApi.deactivate(),
    onSuccess: () => {
      setIsActive(false);
      toast.success('SDK 키가 비활성화되었습니다.');
    },
  });

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sdkKey);
    toast.success('SDK 키가 복사되었습니다.');
  };

  const handleToggleActive = (checked: boolean) => {
    if (checked) {
      activateSdkKey();
    } else {
      deactivateSdkKey();
    }
  };

  return (
    <Card className={styles.container}>
      <CardHeader
        title="결제위젯 연동 키"
        description="결제 위젯으로 연동할 때 사용하는 SDK 키에요. 회원가입 시 자동으로 발급돼요."
      />
      <div className={styles.content}>
        <div className={styles.keySection}>
          <Label>SDK 키</Label>
          <div className={styles.sdkKeyContent}>
            <Input
              value={sdkKey}
              readOnly
              suffix={
                <Button variant="ghost" size="sm" onClick={handleCopy}>
                  <Copy size={16} />
                </Button>
              }
              className={styles.input}
            />
            <div className={styles.statusWrapper}>
              <div
                className={`${styles.statusBadge} ${isActive ? styles.active : styles.inactive}`}
              >
                {isActive ? '활성' : '비활성'}
              </div>
              <Switch
                size={'lg'}
                checked={isActive}
                onCheckedChange={handleToggleActive}
                aria-label="SDK 키 상태 토글"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SdkKeySection;
