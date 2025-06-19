import { apiKeysApi } from '@/api/api-keys/api';
import { QUERY_KEYS } from '@/constants/queries';
import { queryOptions } from '@tanstack/react-query';

export const apiKeyQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.API_KEYS.LIST,
    queryFn: () =>
      apiKeysApi.get({
        merchantId: userId,
      }),
  });
