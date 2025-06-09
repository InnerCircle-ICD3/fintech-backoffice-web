import { TransactionDetailResponseType } from '@/api/transaction/schema';

const TransactionDetailResponse: TransactionDetailResponseType = {
  paymentId: 10,
  transactionId: 30001,
  userId: 2001,
  paymentMethod: 3,
  paymentStatus: 'SUCCESS',
  paidAmount: 9900,
  approvedAt: '2025-06-02T23:44:48.949825',
  failReason: null,
  lastTransactionId: 30001,
  createdAt: '2025-06-02T23:44:48.949825',
  updatedAt: '2025-06-02T23:44:48.949825',
  cardInfo: {
    cardInfoId: 1,
    type: null,
    last4: null,
    cardCompany: null,
    createdAt: null,
    updatedAt: null,
  },
};

export const transactionDetail = {
  response: TransactionDetailResponse,
};
