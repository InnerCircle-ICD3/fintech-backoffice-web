import { CardHeader } from '@/components/card-header';
import AdminSection from '@/components/layout/section/admin';
import { SuspenseQuery } from '@/components/react-query/SuspenseQuery';
import Card from '@/components/ui/card';
import { apiKeyQueryOptions } from '@/queries/api-keys';
import { sdkKeyQueryOptions } from '@/queries/sdk-key';
import { useUserId } from '@/stores/auth';
import { Suspense } from 'react';
import { ApiKeyCreateButton } from './components/ApiKeyCreateButton';
import { ApiKeyList } from './components/ApiKeyList';
import SdkKeyInfo from './components/SdkKeyInfo';
import { SdkRegenerateButton } from './components/SdkRegenerateButton';
import * as styles from './styles/api-key.css';

const ApiKeysPage = () => {
  const userId = useUserId();

  return (
    <AdminSection label="API 키">
      <Suspense fallback={<div>Loading...</div>}>
        {/* SDK 키 */}
        <SuspenseQuery {...sdkKeyQueryOptions()}>
          {({ data }) => (
            <Card className={styles.container}>
              <CardHeader
                title="결제위젯 연동 키"
                description="결제 위젯으로 연동할 때 사용하는 SDK 키에요. 회원가입 시 자동으로 발급돼요."
                action={<SdkRegenerateButton />}
              />
              <SdkKeyInfo sdkKey={data.sdkKey} />
            </Card>
          )}
        </SuspenseQuery>

        {/* API 키 목록 */}
        {userId !== null && (
          <SuspenseQuery {...apiKeyQueryOptions(userId)}>
            {({ data }) => (
              <Card className={styles.container}>
                <CardHeader
                  title="API 개별 연동 키"
                  description="결제 시스템과 연동하기 위한 API 키를 관리해요."
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
