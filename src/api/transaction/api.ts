import { backofficeApiClient } from '@/services/api/backoffice/api-client';
import {
  TransactionDetailRequestType,
  TransactionDetailResponseSchema,
  TransactionRequestType,
  TransactionResponseSchema,
} from './schema';

const getTransactions = async (payload: TransactionRequestType) => {
  return backofficeApiClient.get('/merchants/payment-histories', {
    options: {
      params: payload,
    },
    schema: TransactionResponseSchema,
  });
};

const getTransactionDetail = async (payload: TransactionDetailRequestType) => {
  return backofficeApiClient.get(`/merchants/payment-histories/${payload.transactionId}`, {
    schema: TransactionDetailResponseSchema,
  });
};

/**
 * 결제 내역 API 엔드포인트
 */
export const transactionApi = {
  /** 결제 내역 전체 조회 */
  get: getTransactions,
  /** 결제 내역 상세 조회 */
  getDetail: getTransactionDetail,
};
