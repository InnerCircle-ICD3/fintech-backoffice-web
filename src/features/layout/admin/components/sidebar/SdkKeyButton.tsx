import { sdkApi } from '@/api/sdk/api';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import Text from '@/components/ui/text';
import { useOverlay } from '@/contexts/overlay';
import { OverlayProps } from '@/contexts/overlay/overlay-context';
import { MerchantInfo } from '@/queries';
import * as styles from '@/styles/lnb.css';
import { footerMenuButton } from '@/styles/lnb.css';
import { useMutation } from '@tanstack/react-query';
import { Copy, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'sonner';

const SdkKeyButton = () => {
  const merchantInfo = useLoaderData() as MerchantInfo;
  const { openOverlay } = useOverlay();

  return (
    <Button
      variant="ghost"
      onClick={() =>
        openOverlay((props) => <SdkKeyDialog merchantInfo={merchantInfo} {...props} />)
      }
      className={footerMenuButton}
    >
      <KeyRound size={16} />
      <Text>SDK 키 발급</Text>
    </Button>
  );
};

const SdkKeyDialog = ({
  merchantInfo,
  isOpen,
  onRequestClose,
}: OverlayProps & { merchantInfo: MerchantInfo }) => {
  const [sdkKey, setSdkKey] = useState('');

  const { mutate: createSdkKey } = useMutation({
    mutationFn: sdkApi.issue,
    onSuccess: (data) => {
      setSdkKey(data.sdkKey);
      navigator.clipboard.writeText(data.sdkKey);
      toast.success('SDK 키가 발급되었습니다.');
    },
  });

  const handleSubmit = async () => {
    createSdkKey({ merchantId: merchantInfo.merchantId });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '400px' }}>
        <DialogHeader>
          <DialogTitle>SDK 키 발급</DialogTitle>
          <DialogDescription>아래 버튼을 클릭하면 SDK 키가 발급됩니다.</DialogDescription>
        </DialogHeader>
        <Input
          type="text"
          readOnly
          value={sdkKey || ''}
          suffix={
            <Button
              variant="ghost"
              size={'sm'}
              className={styles.sdkKeyCopyButton}
              onClick={() => {
                navigator.clipboard.writeText(sdkKey);
                toast.success('SDK 키가 복사되었습니다.');
              }}
            >
              <Copy size={16} />
            </Button>
          }
        />
        <Button onClick={handleSubmit} size="sm" className={styles.sdkKeyButtonSubmitButton}>
          {sdkKey ? 'SDK 재발급 하기' : 'SDK 발급하기'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SdkKeyButton;
