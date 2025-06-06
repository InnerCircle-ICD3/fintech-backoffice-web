import { apiKeysApi } from '@/api/api-keys/api';
import { sdkApi } from '@/api/sdk/api';
import AdminSection from '@/components/layout/section/admin';
import { QUERY_KEYS } from '@/constants/queries';
import { MerchantInfoType } from '@/queries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import ApiKeySection from './components/ApiKeySection';
import SdkKeySection from './components/SdkKeySection';

const ApiKeysPage = () => {
  const merchantInfo = useOutletContext<MerchantInfoType>();

  const {
    data: { sdkKey },
  } = useSuspenseQuery({
    queryKey: QUERY_KEYS.SDK.KEY,
    queryFn: () => sdkApi.get(),
  });

  const { data: apiKeyList } = useSuspenseQuery({
    queryKey: QUERY_KEYS.API_KEYS.LIST,
    queryFn: () =>
      apiKeysApi.get(undefined, {
        merchantId: merchantInfo.merchantId,
      }),
  });

  return (
    <AdminSection label="API 키">
      <Suspense fallback={<div>Loading...</div>}>
        <SdkKeySection sdkKey={sdkKey} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ApiKeySection apiKeyList={apiKeyList} />
      </Suspense>
    </AdminSection>
  );
};

export default ApiKeysPage;
