import { apiKeysApi } from '@/api/api-keys/api';
import { ApiKeyResponseType, ApiKeysResponseListType } from '@/api/api-keys/schema';
import { Mutation } from '@/components/react-query/Mutation';
import { Button } from '@/components/ui/button';
import { QUERY_KEYS } from '@/constants/queries';
import { useOverlay } from '@/contexts/overlay';
import * as styles from '@/features/merchant/api-keys/styles/api-key.css';
import { useCopy } from '@/hooks/useCopy';
import { Copy, Eye, EyeOff, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import ApiKeyDetailDialog from './ApiKeyDetailDialog';
import { Table, TableBody, TableCell, TableRow } from './ApiKeyTable';

export const ApiKeyList = ({
  apiKeyList,
  userId,
}: {
  apiKeyList: ApiKeysResponseListType;
  userId: number;
}) => {
  const { openOverlay: openDetailDialog } = useOverlay();
  const handleCopy = useCopy();

  return (
    <Table>
      <TableBody>
        {apiKeyList.length > 0 ? (
          apiKeyList.map((apiKey) => (
            <TableRow key={apiKey.id}>
              {/* id */}
              <TableCell>{apiKey.id}</TableCell>

              {/* client key */}
              <TableCell>
                <div className={styles.keyCellContent}>
                  <span>{apiKey.key}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      handleCopy({ key: apiKey.key, message: 'API 키가 복사되었습니다.' })
                    }
                    className={styles.keyCellButton}
                  >
                    <Copy size={16} />
                  </Button>
                </div>
              </TableCell>

              {/* secret key */}
              <TableCell>
                <SecretKeyCell apiKey={apiKey} />
              </TableCell>

              {/* action */}
              <TableCell>
                <Mutation
                  mutationKey={QUERY_KEYS.API_KEYS.REISSUE}
                  mutationFn={() =>
                    apiKeysApi.reissue({ merchantId: userId, currentKey: apiKey.key })
                  }
                  onSuccess={() => {
                    toast.success('API 키가 재발급되었습니다.');
                  }}
                  meta={{
                    invalidates: [QUERY_KEYS.API_KEYS.LIST],
                  }}
                >
                  {({ mutate: reissueApiKey }) => (
                    <Mutation
                      mutationKey={QUERY_KEYS.API_KEYS.DELETE}
                      mutationFn={() => apiKeysApi.delete({ key: apiKey.key })}
                      onSuccess={() => {
                        toast.success('API 키가 삭제되었습니다.');
                      }}
                      meta={{
                        invalidates: [QUERY_KEYS.API_KEYS.LIST],
                      }}
                    >
                      {({ mutate: deleteApiKey }) => (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            openDetailDialog((props) => (
                              <ApiKeyDetailDialog
                                {...props}
                                apiKey={apiKey}
                                onReissue={() => reissueApiKey()}
                                onDelete={() => deleteApiKey()}
                              />
                            ))
                          }
                        >
                          <MoreHorizontal size={16} />
                        </Button>
                      )}
                    </Mutation>
                  )}
                </Mutation>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} style={{ textAlign: 'center' }}>
              발급된 API 키가 없습니다.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export const SecretKeyCell = ({ apiKey }: { apiKey: ApiKeyResponseType }) => {
  const [visibleSecretKeys, setVisibleSecretKeys] = useState<Record<string, boolean>>({});

  const toggleSecretKeyVisibility = (apiKeyId: number) => {
    setVisibleSecretKeys((prev) => ({
      ...prev,
      [apiKeyId]: !prev[apiKeyId],
    }));
  };

  const maskSecretKey = (secretKey: string, isVisible: boolean) => {
    if (isVisible) return secretKey;

    // 앞의 8자리는 보여주고 나머지는 마스킹
    const visibleLength = 8;
    const prefix = secretKey.slice(0, visibleLength);
    const masked = secretKey.slice(visibleLength).replace(/[^_]/g, '•');

    return prefix + masked;
  };

  return (
    <div className={styles.keyCellContent}>
      <span>{maskSecretKey(apiKey.secret, visibleSecretKeys[apiKey.id])}</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toggleSecretKeyVisibility(apiKey.id)}
        className={styles.keyCellButton}
      >
        {visibleSecretKeys[apiKey.id] ? <EyeOff size={16} /> : <Eye size={16} />}
      </Button>
    </div>
  );
};
