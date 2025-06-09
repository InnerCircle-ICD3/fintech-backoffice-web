import { createApiEndpoint } from '@/services/api-factory';

import { backofficeApiInstance } from '@/services/api-instance';
import {
  TransactionDetailRequestSchema,
  TransactionDetailRequestType,
  TransactionDetailResponseSchema,
  TransactionDetailResponseType,
  TransactionRequestSchema,
  TransactionRequestType,
  TransactionResponseSchema,
  TransactionResponseType,
} from './schema';

/**
 * 결제 내역 API 엔드포인트
 */
export const transactionApi = {
  /** 결제 내역 전체 조회 */
  get: createApiEndpoint<TransactionRequestType, TransactionResponseType>({
    path: '/merchants/payment-histories',
    method: 'get',
    requestSchema: TransactionRequestSchema,
    responseSchema: TransactionResponseSchema,
    apiInstance: backofficeApiInstance,
  }),
  /** 결제 내역 상세 조회 */
  getDetail: createApiEndpoint<TransactionDetailRequestType, TransactionDetailResponseType>({
    path: '/merchants/payment-histories/:transactionId',
    method: 'get',
    requestSchema: TransactionDetailRequestSchema,
    responseSchema: TransactionDetailResponseSchema,
    apiInstance: backofficeApiInstance,
  }),
};
