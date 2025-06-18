import { apiKeysApi } from '@/api/api-keys/api';
import { Mutation } from '@/components/react-query/Mutation';
import { Button } from '@/components/ui/button';
import { QUERY_KEYS } from '@/constants/queries';
import { useOverlay } from '@/contexts/overlay';
import * as styles from '@/features/merchant/api-keys/styles/api-key.css';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { ApiKeyCreateDialog } from './ApiKeyCreateDialog';

interface ApiKeyCreateButtonProps {
  userId: number;
}

export const ApiKeyCreateButton = ({ userId }: ApiKeyCreateButtonProps) => {
  const { openOverlay: openCreateDialog } = useOverlay();

  return (
    <Mutation
      mutationKey={QUERY_KEYS.API_KEYS.CREATE}
      mutationFn={() => apiKeysApi.create({ merchantId: userId })}
      onSuccess={() => {
        toast.success('API 키가 생성되었습니다.');
      }}
      meta={{
        invalidates: [QUERY_KEYS.API_KEYS.LIST],
      }}
    >
      {({ mutate, isPending }) => (
        <div className={styles.tableHeaderButton}>
          <Button
            variant="primary"
            className={styles.tableHeaderButtonIcon}
            onClick={() =>
              openCreateDialog((props) => <ApiKeyCreateDialog {...props} onSubmit={mutate} />)
            }
            disabled={isPending}
          >
            <Plus size={16} />
            API 키 발급
          </Button>
        </div>
      )}
    </Mutation>
  );
};
