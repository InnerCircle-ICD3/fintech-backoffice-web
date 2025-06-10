import { apiKeysApi } from '@/api/api-keys/api';
import { ApiKeysResponseListType } from '@/api/api-keys/schema';
import { CardHeader } from '@/components/card-header';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { QUERY_KEYS } from '@/constants/queries';
import { useOverlay } from '@/contexts/overlay';
import { MerchantInfoType } from '@/queries';
import { useMutation } from '@tanstack/react-query';
import { Copy, Eye, EyeOff, MoreHorizontal, Plus } from 'lucide-react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'sonner';
import * as styles from './api-key.css';
import { ApiKeyCreateDialog } from './ApiKeyCreateDialog';
import ApiKeyDetailDialog from './ApiKeyDetailDialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

interface ApiKeySectionProps {
  apiKeyList: ApiKeysResponseListType;
}

const ApiKeySection = ({ apiKeyList }: ApiKeySectionProps) => {
  const merchantInfo = useOutletContext<MerchantInfoType>();
  const [visibleSecretKeys, setVisibleSecretKeys] = useState<Record<string, boolean>>({});
  const { openOverlay: openCreateDialog } = useOverlay();
  const { openOverlay: openDetailDialog } = useOverlay();

  const handleCopy = async (key: string) => {
    await navigator.clipboard.writeText(key);
    toast.success('API 키가 복사되었습니다.');
  };

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

  const { mutate: reissueApiKey } = useMutation({
    mutationKey: [QUERY_KEYS.API_KEYS.REISSUE],
    mutationFn: (key: string) =>
      apiKeysApi.reissue(undefined, {
        merchantId: String(merchantInfo.merchantId),
        currentKey: key,
      }),
    onSuccess: () => {
      toast.success('API 키가 재발급되었습니다.');
    },
    meta: {
      invalidates: [QUERY_KEYS.API_KEYS.LIST],
    },
  });

  const { mutate: deleteApiKey } = useMutation({
    mutationKey: [QUERY_KEYS.API_KEYS.DELETE],
    mutationFn: (key: string) =>
      apiKeysApi.delete(undefined, {
        key,
      }),
    onSuccess: () => {
      toast.success('API 키가 삭제되었습니다.');
    },
    meta: {
      invalidates: [QUERY_KEYS.API_KEYS.LIST],
    },
  });

  return (
    <Card className={styles.container}>
      <CardHeader
        title="API 개별 연동 키"
        description="결제 시스템과 연동하기 위한 API 키를 관리합니다."
        action={
          <div className={styles.tableHeaderButton}>
            <Button
              variant="primary"
              className={styles.tableHeaderButtonIcon}
              onClick={() =>
                openCreateDialog((props) => (
                  <ApiKeyCreateDialog {...props} merchantInfo={merchantInfo} />
                ))
              }
            >
              <Plus size={16} />
              API 키 발급
            </Button>
          </div>
        }
      />
      <div className={styles.content}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>API 키</TableHead>
              <TableHead>Secret 키</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiKeyList.map((apiKey) => (
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
                      onClick={() => handleCopy(apiKey.key)}
                      className={styles.keyCellButton}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                </TableCell>

                {/* secret key */}
                <TableCell>
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
                </TableCell>

                {/* action */}
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      openDetailDialog((props) => (
                        <ApiKeyDetailDialog
                          {...props}
                          apiKey={apiKey}
                          onReissue={() => reissueApiKey(apiKey.key)}
                          onDelete={() => deleteApiKey(apiKey.key)}
                        />
                      ))
                    }
                  >
                    <MoreHorizontal size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ApiKeySection;
