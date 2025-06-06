import { createApiEndpoint } from '@/services/api-factory';
import {
  SdkKeyActivateResponseSchema,
  SdkKeyActivateResponseType,
  SdkKeyDeactivateResponseSchema,
  SdkKeyDeactivateResponseType,
  SdkKeyResponseSchema,
  SdkKeyResponseType,
} from './schema';

/**
 * SDK 키 API 엔드포인트
 */
export const sdkApi = {
  /** SDK 키 조회 */
  get: createApiEndpoint<undefined, SdkKeyResponseType>({
    path: '/sdk-key',
    method: 'get',
    responseSchema: SdkKeyResponseSchema,
  }),
  /** SDK 키 활성화 */
  activate: createApiEndpoint<undefined, SdkKeyActivateResponseType>({
    path: '/sdk-key/activate',
    method: 'post',
    responseSchema: SdkKeyActivateResponseSchema,
  }),
  /** SDK 키 비활성화 */
  deactivate: createApiEndpoint<undefined, SdkKeyDeactivateResponseType>({
    path: '/sdk-key/deactivate',
    method: 'post',
    responseSchema: SdkKeyDeactivateResponseSchema,
  }),
};
