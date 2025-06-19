import { TransactionRequestType } from '@/api/transaction/schema';

export type TransactionParams = Omit<TransactionRequestType, 'merchantId'>;
