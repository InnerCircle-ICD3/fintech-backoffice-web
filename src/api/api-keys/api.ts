import { createApiEndpoint } from '@/services/api-factory';
import { backofficeApiInstance } from '@/services/api-instance';
import { z } from 'zod';
import {
  ApiKeyDeleteRequestSchema,
  ApiKeyReissueRequestSchema,
  ApiKeyResponseType,
  ApiKeySchema,
  ApiKeysRequestSchema,
  ApiKeysRequestType,
  ApiKeysResponseListType,
  ApiKeysResponseSchema,
  type ApiKeyDeleteRequestType,
  type ApiKeyReissueRequestType,
} from './schema';

/**
 * api-keys API 엔드포인트
 */
export const apiKeysApi = {
  /** API 키 조회 */
  get: createApiEndpoint<ApiKeysRequestType, ApiKeysResponseListType>({
    path: '/merchants/api-keys/:merchantId',
    method: 'get',
    requestSchema: ApiKeysRequestSchema,
    responseSchema: ApiKeysResponseSchema,
    apiInstance: backofficeApiInstance,
  }),

  /** API 키 생성 */
  create: createApiEndpoint<ApiKeysRequestType, ApiKeyResponseType>({
    path: '/merchants/api-keys/:merchantId',
    method: 'post',
    requestSchema: ApiKeysRequestSchema,
    responseSchema: ApiKeySchema,
    apiInstance: backofficeApiInstance,
  }),

  /** API 키 재발급 */
  reissue: createApiEndpoint<ApiKeyReissueRequestType, ApiKeyResponseType>({
    path: '/merchants/api-keys/:merchantId/reissue',
    method: 'post',
    requestSchema: ApiKeyReissueRequestSchema,
    responseSchema: ApiKeySchema,
    apiInstance: backofficeApiInstance,
  }),

  /** API 키 삭제 */
  delete: createApiEndpoint<ApiKeyDeleteRequestType, { status: number }>({
    path: '/merchants/api-keys/:key',
    method: 'delete',
    requestSchema: ApiKeyDeleteRequestSchema,
    responseSchema: z.object({ status: z.number() }),
    apiInstance: backofficeApiInstance,
  }),
} as const;
