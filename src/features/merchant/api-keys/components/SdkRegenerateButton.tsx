import { sdkApi } from '@/api/sdk/api';
import { Mutation } from '@/components/react-query/Mutation';
import { Button } from '@/components/ui/button';
import { QUERY_KEYS } from '@/constants/queries';
import { useOverlay } from '@/contexts/overlay';
import * as styles from '@/features/merchant/api-keys/styles/api-key.css';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

export const SdkRegenerateButton = () => {
  const { openConfirmation } = useOverlay();

  return (
    <Mutation
      mutationKey={QUERY_KEYS.SDK.REGENERATE}
      mutationFn={() => sdkApi.regenerate()}
      onSuccess={() => {
        toast.success('SDK 키가 재발급되었습니다.');
      }}
      meta={{
        invalidates: [QUERY_KEYS.SDK.KEY],
      }}
    >
      {({ mutate, isPending }) => (
        <div className={styles.tableHeaderButton}>
          <Button
            variant="secondary"
            className={styles.tableHeaderButtonIcon}
            onClick={() =>
              openConfirmation({
                title: 'SDK 키 재발급',
                body: 'SDK 키를 재발급하시겠어요?',
                onSubmit: () => mutate(),
              })
            }
            disabled={isPending}
          >
            <RefreshCw size={16} />
            재발급
          </Button>
        </div>
      )}
    </Mutation>
  );
};
