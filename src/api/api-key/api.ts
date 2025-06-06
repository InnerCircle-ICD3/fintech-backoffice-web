import { createApiEndpoint } from '@/services/api-factory';
import { z } from 'zod';
import {
  ApiKeyDeleteRequestSchema,
  ApiKeyReissueRequestSchema,
  ApiKeysResponseSchema,
  type ApiKeyDeleteRequestType,
  type ApiKeyReissueRequestType,
  type ApiKeysResponseType,
} from './schema';

/**
 * api-keys API 엔드포인트
 */
export const apiKeysApi = {
  /** API 키 조회 */
  get: createApiEndpoint<undefined, ApiKeysResponseType>({
    path: '/merchants/api-keys/merchantId',
    method: 'get',
    requestSchema: undefined,
    responseSchema: ApiKeysResponseSchema,
  }),

  /** API 키 재발급 */
  reissue: createApiEndpoint<ApiKeyReissueRequestType, ApiKeysResponseType>({
    path: '/merchants/api-keys/merchantId/reissue',
    method: 'post',
    requestSchema: ApiKeyReissueRequestSchema,
    responseSchema: ApiKeysResponseSchema,
  }),

  /** API 키 비활성화 */
  delete: createApiEndpoint<ApiKeyDeleteRequestType, void>({
    path: '/merchants/api-keys/key',
    method: 'delete',
    requestSchema: ApiKeyDeleteRequestSchema,
    responseSchema: z.void(),
  }),
};
