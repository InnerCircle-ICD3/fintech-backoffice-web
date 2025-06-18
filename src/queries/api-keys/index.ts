import { apiKeysApi } from '@/api/api-keys/api';
import { sdkApi } from '@/api/sdk/api';
import { QUERY_KEYS } from '@/constants/queries';
import { queryOptions } from '@tanstack/react-query';

export const sdkKeyQueryOptions = () =>
  queryOptions({
    queryKey: QUERY_KEYS.SDK.KEY,
    queryFn: () => sdkApi.get(),
  });

export const apiKeyQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.API_KEYS.LIST,
    queryFn: () =>
      apiKeysApi.get({
        merchantId: userId,
      }),
  });
