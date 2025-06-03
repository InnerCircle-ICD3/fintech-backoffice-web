import { createApiEndpoint } from '@/services/api-factory';
import { paymentApiInstance } from '@/services/api-instance';
import {
  SdkKeyRequestSchema,
  SdkKeyRequestType,
  SdkKeyResponseSchema,
  SdkKeyResponseType,
} from './schema';

/**
 * SDK API 엔드포인트
 */
export const sdkApi = {
  issue: createApiEndpoint<SdkKeyRequestType, SdkKeyResponseType>({
    path: '/sdk/issue',
    method: 'post',
    requestSchema: SdkKeyRequestSchema,
    responseSchema: SdkKeyResponseSchema,
    apiInstance: paymentApiInstance,
  }),
};
