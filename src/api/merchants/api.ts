import { createApiEndpoint } from '@/services/api-factory';
import {
  MerchantDeleteResponseSchema,
  MerchantDeleteResponseType,
  MerchantInfoResponseSchema,
  MerchantModifyRequestSchema,
  MerchantModifyRequestType,
  MerchantModifyResponseSchema,
  MerchantModifyResponseType,
  type MerchantInfoResponseType,
} from './schema';

/**
 * 가맹점 API 엔드포인트
 */
export const merchantsApi = {
  get: createApiEndpoint<undefined, MerchantInfoResponseType>({
    path: '/merchants/info',
    method: 'get',
    requestSchema: undefined,
    responseSchema: MerchantInfoResponseSchema,
  }),
  update: createApiEndpoint<MerchantModifyRequestType, MerchantModifyResponseType>({
    path: '/merchants/modify',
    method: 'put',
    requestSchema: MerchantModifyRequestSchema,
    responseSchema: MerchantModifyResponseSchema,
  }),
  delete: createApiEndpoint<undefined, MerchantDeleteResponseType>({
    path: '/merchants/delete',
    method: 'delete',
    responseSchema: MerchantDeleteResponseSchema,
  }),
};
