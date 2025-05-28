import { createApiEndpoint } from '@/services/api-factory';
import { MerchantInfoResponseSchema, type MerchantInfoResponseType } from './schema';

/**
 * 가맹점 API 엔드포인트
 */
export const merchantsApi = {
  getInfo: createApiEndpoint<undefined, MerchantInfoResponseType>({
    path: '/merchants/info',
    method: 'get',
    requestSchema: undefined,
    responseSchema: MerchantInfoResponseSchema,
  }),
};
