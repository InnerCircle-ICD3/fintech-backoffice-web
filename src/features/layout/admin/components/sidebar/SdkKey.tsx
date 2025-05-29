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
import type { OverlayProps } from '@/contexts/overlay/overlay-context';
import type { MerchantInfo } from '@/queries';
import { useMutation } from '@tanstack/react-query';
import { Copy, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { footerMenuButton, sdkKeyButtonSubmitButton, sdkKeyCopyButton } from './sidebar.css';

export const SdkKeyButton = ({ onSdkKeyIssue }: { onSdkKeyIssue: () => void }) => {
  return (
    <Button variant="ghost" onClick={() => onSdkKeyIssue()} className={footerMenuButton}>
      <KeyRound size={16} />
      <Text>SDK 키 발급</Text>
    </Button>
  );
};

export const SdkKeyDialog = ({
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

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '400px' }}>
        <DialogHeader>
          <DialogTitle>SDK 키 발급</DialogTitle>
          <DialogDescription>아래 버튼을 클릭하면 SDK 키가 발급됩니다.</DialogDescription>
        </DialogHeader>
        {sdkKey ? (
          <SdkKeyInput
            sdkKey={sdkKey}
            onCopy={() => {
              navigator.clipboard.writeText(sdkKey);
              toast.success('SDK 키가 복사되었습니다.');
            }}
          />
        ) : null}
        <Button
          onClick={() => createSdkKey({ merchantId: merchantInfo.merchantId })}
          size="sm"
          className={sdkKeyButtonSubmitButton}
        >
          {sdkKey ? 'SDK 재발급 하기' : 'SDK 발급하기'}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

interface SdkKeyInputProps {
  sdkKey: string;
  onCopy: () => void;
}

const SdkKeyInput = ({ sdkKey, onCopy }: SdkKeyInputProps) => {
  return (
    <Input
      type="text"
      readOnly
      value={sdkKey || ''}
      suffix={
        <Button variant="ghost" size={'sm'} className={sdkKeyCopyButton} onClick={() => onCopy()}>
          <Copy size={16} />
        </Button>
      }
    />
  );
};

export const SdkKey = {
  Button: SdkKeyButton,
  Dialog: SdkKeyDialog,
} as const;
