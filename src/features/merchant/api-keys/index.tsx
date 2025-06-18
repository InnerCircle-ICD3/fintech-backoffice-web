import { CardHeader } from '@/components/card-header';
import AdminSection from '@/components/layout/section/admin';
import { SuspenseQuery } from '@/components/react-query/SuspenseQuery';
import Card from '@/components/ui/card';
import { apiKeyQueryOptions, sdkKeyQueryOptions } from '@/queries/api-keys';
import { useUserId } from '@/stores/auth';
import { Suspense } from 'react';
import { ApiKeyCreateButton } from './components/ApiKeyCreateButton';
import { ApiKeyList } from './components/ApiKeySection';
import SdkKeySection from './components/SdkKeySection';
import * as styles from './styles/api-key.css';

const ApiKeysPage = () => {
  const userId = useUserId();

  return (
    <AdminSection label="API 키">
      {/* SDK 키 */}
      <Suspense fallback={<div>Loading...</div>}>
        <SuspenseQuery {...sdkKeyQueryOptions()}>
          {({ data }) => <SdkKeySection sdkKey={data.sdkKey} />}
        </SuspenseQuery>

        {/* API 키 목록 */}
        {userId !== null && (
          <SuspenseQuery {...apiKeyQueryOptions(userId)}>
            {({ data }) => (
              <Card className={styles.container}>
                <CardHeader
                  title="API 개별 연동 키"
                  description="결제 시스템과 연동하기 위한 API 키를 관리합니다."
                  action={<ApiKeyCreateButton userId={userId} />}
                />
                <ApiKeyList apiKeyList={data} userId={userId} />
              </Card>
            )}
          </SuspenseQuery>
        )}
      </Suspense>
    </AdminSection>
  );
};

export default ApiKeysPage;
