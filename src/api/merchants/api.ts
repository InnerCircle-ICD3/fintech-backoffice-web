import { createApiEndpoint } from '@/services/api-factory';
import {
  ApiKeyRequestSchema,
  ApiKeyRequestType,
  ApiKeysResponseSchema,
  ApiKeysResponseType,
  MerchantInfoResponseSchema,
  type MerchantInfoResponseType,
} from './schema';

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
  getApiKeys: createApiEndpoint<ApiKeyRequestType, ApiKeysResponseType>({
    path: '/merchants/api-keys',
    method: 'get',
    requestSchema: ApiKeyRequestSchema,
    responseSchema: ApiKeysResponseSchema,
  }),
  createApiKeys: createApiEndpoint<ApiKeyRequestType, ApiKeysResponseType>({
    path: '/merchants/api-keys/merchantId',
    method: 'post',
    requestSchema: ApiKeyRequestSchema,
    responseSchema: ApiKeysResponseSchema,
  }),
  reissueApiKeys: createApiEndpoint<ApiKeyRequestType, ApiKeysResponseType>({
    path: '/merchants/api-keys/merchantId/reissue',
    method: 'post',
    requestSchema: ApiKeyRequestSchema,
    responseSchema: ApiKeysResponseSchema,
  }),
  deleteApiKeys: createApiEndpoint<ApiKeyRequestType, ApiKeysResponseType>({
    path: '/merchants/api-keys/key',
    method: 'delete',
    requestSchema: ApiKeyRequestSchema,
    responseSchema: ApiKeysResponseSchema,
  }),
};
