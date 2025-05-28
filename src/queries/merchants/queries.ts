import { merchantsApi } from '@/api/merchants/api';
import { QUERY_KEYS } from '@/constants/queries';
import type { QueryClient } from '@tanstack/react-query';
import type { LoaderFunction } from 'react-router-dom';
import { formatMerchantInfo } from './format';

/** queryClient.ensureQueryData는 select 옵션을 실행하지 않는 문제가 있음 */
const merchantInfoQuery = {
  queryKey: QUERY_KEYS.MERCHANT.INFO,
  queryFn: async () => {
    const response = await merchantsApi.getInfo();
    return formatMerchantInfo(response);
  },
};
export const merchantLoader =
  (queryClient: QueryClient): LoaderFunction =>
  async () => {
    return queryClient.ensureQueryData(merchantInfoQuery);
  };
