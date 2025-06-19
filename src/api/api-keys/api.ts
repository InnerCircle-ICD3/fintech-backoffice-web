import { backofficeApiClient } from '@/services/api/backoffice/api-client';
import { z } from 'zod';
import {
  ApiKeyDeleteRequestType,
  ApiKeyReissueRequestType,
  ApiKeySchema,
  ApiKeysRequestType,
  ApiKeysResponseSchema,
} from './schema';

const getApiKeys = async (payload: ApiKeysRequestType) => {
  return backofficeApiClient.get(`/merchants/api-keys/${payload.merchantId}`, {
    schema: ApiKeysResponseSchema,
  });
};

const createApiKey = async (payload: ApiKeysRequestType) => {
  return backofficeApiClient.post('/merchants/api-keys/:merchantId', {
    data: payload.merchantId,
    schema: ApiKeySchema,
  });
};

const reissueApiKey = async (payload: ApiKeyReissueRequestType) => {
  return backofficeApiClient.post('/merchants/api-keys/:merchantId/reissue', {
    data: payload,
    schema: ApiKeySchema,
  });
};

const deleteApiKey = async (payload: ApiKeyDeleteRequestType) => {
  return backofficeApiClient.delete(`/merchants/api-keys/${payload.key}`, {
    schema: z.object({ status: z.number() }),
  });
};

/**
 * API 키 API 엔드포인트
 */
export const apiKeysApi = {
  /** API 키 조회 */
  get: getApiKeys,
  /** API 키 생성 */
  create: createApiKey,
  /** API 키 재발급 */
  reissue: reissueApiKey,
  /** API 키 삭제 */
  delete: deleteApiKey,
};
