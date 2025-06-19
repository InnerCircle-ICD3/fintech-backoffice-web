import { sdkApi } from '@/api/sdk/api';
import { QUERY_KEYS } from '@/constants/queries';
import { queryOptions } from '@tanstack/react-query';

export const sdkKeyQueryOptions = () =>
  queryOptions({
    queryKey: QUERY_KEYS.SDK.KEY,
    queryFn: () => sdkApi.get(),
  });
