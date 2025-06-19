import { merchantApiClient } from '@/services/api/merchant/api-client';
import {
  SdkKeyActivateResponseSchema,
  SdkKeyDeactivateResponseSchema,
  SdkKeyRegenerateResponseSchema,
  SdkKeyResponseSchema,
} from './schema';

const getSdkKey = async () => {
  return merchantApiClient.get('/sdk-key', {
    schema: SdkKeyResponseSchema,
  });
};

const activateSdkKey = async () => {
  return merchantApiClient.post('/sdk-key/activate', {
    schema: SdkKeyActivateResponseSchema,
  });
};

const deactivateSdkKey = async () => {
  return merchantApiClient.post('/sdk-key/deactivate', {
    schema: SdkKeyDeactivateResponseSchema,
  });
};

const regenerateSdkKey = async () => {
  return merchantApiClient.post('/sdk-key/regenerate', {
    schema: SdkKeyRegenerateResponseSchema,
  });
};

/**
 * SDK 키 API 엔드포인트
 */
export const sdkApi = {
  /** SDK 키 조회 */
  get: getSdkKey,
  /** SDK 키 활성화 */
  activate: activateSdkKey,
  /** SDK 키 재발급 */
  regenerate: regenerateSdkKey,
  /** SDK 키 비활성화 */
  deactivate: deactivateSdkKey,
};
