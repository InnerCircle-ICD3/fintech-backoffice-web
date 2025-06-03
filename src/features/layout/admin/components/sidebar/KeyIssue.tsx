import { merchantsApi } from '@/api/merchants/api';
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
import {
  footerMenuButton,
  keyFormsContainer,
  keyIssueButtonSubmitButton,
  keyIssueFormContainer,
  keyIssueInputContainer,
} from './sidebar.css';

type KeyType = 'SDK' | 'API';

interface KeyInputProps {
  keyValue: string;
  onCopy: () => void;
}

interface KeyIssueFormProps {
  type: KeyType;
  keyValue: string;
  isLoading?: boolean;
  onIssue: () => void;
}

const KeyIssueInput = ({ keyValue, onCopy }: KeyInputProps) => (
  <div className={keyIssueInputContainer}>
    <Input
      value={keyValue}
      readOnly
      suffix={
        <Button variant="ghost" size="sm" onClick={onCopy}>
          <Copy size={16} />
        </Button>
      }
    />
  </div>
);

const KeyIssueForm = ({ type, keyValue, isLoading, onIssue }: KeyIssueFormProps) => (
  <div className={keyIssueFormContainer}>
    {keyValue && (
      <KeyIssueInput
        keyValue={keyValue}
        onCopy={() => {
          navigator.clipboard.writeText(keyValue);
          toast.success(`${type} 키가 복사되었습니다.`);
        }}
      />
    )}
    <Button onClick={onIssue} disabled={isLoading} className={keyIssueButtonSubmitButton}>
      {keyValue ? `${type} 재발급 하기` : `${type} 발급하기`}
    </Button>
  </div>
);

export const KeyIssueButton = ({ onSdkKeyIssue }: { onSdkKeyIssue: () => void }) => {
  return (
    <Button variant="ghost" onClick={onSdkKeyIssue} className={footerMenuButton}>
      <KeyRound size={16} />
      <Text>키 발급</Text>
    </Button>
  );
};

export const KeyIssueDialog = ({
  merchantInfo,
  isOpen,
  onRequestClose,
}: OverlayProps & { merchantInfo: MerchantInfo }) => {
  const [sdkKey, setSdkKey] = useState('');
  const [apiKey, setApiKey] = useState('');

  const { mutate: createSdkKey, isPending: isLoadingSdk } = useMutation({
    mutationFn: () => sdkApi.issue({ merchantId: merchantInfo.merchantId }),
    onSuccess: (data) => {
      setSdkKey(data.sdkKey);
      navigator.clipboard.writeText(data.sdkKey);
      toast.success('SDK 키가 발급되었습니다.');
    },
  });

  const { mutate: createApiKey, isPending: isLoadingApi } = useMutation({
    mutationFn: () =>
      merchantsApi.createApiKeys(undefined, { merchantId: merchantInfo.merchantId }),
    onSuccess: (data) => {
      setApiKey(data.key);
      navigator.clipboard.writeText(data.key);
      toast.success('API 키가 발급되었습니다.');
    },
  });

  return (
    <Dialog open={isOpen} onOpenChange={onRequestClose}>
      <DialogContent style={{ width: '400px' }}>
        <DialogHeader>
          <DialogTitle>키 발급</DialogTitle>
          <DialogDescription>아래 버튼을 클릭하면 키가 발급됩니다.</DialogDescription>
        </DialogHeader>

        <div className={keyFormsContainer}>
          <KeyIssueForm
            type="SDK"
            keyValue={sdkKey}
            isLoading={isLoadingSdk}
            onIssue={() => createSdkKey()}
          />

          <KeyIssueForm
            type="API"
            keyValue={apiKey}
            isLoading={isLoadingApi}
            onIssue={() => createApiKey()}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const KeyIssue = {
  Button: KeyIssueButton,
  Dialog: KeyIssueDialog,
} as const;
