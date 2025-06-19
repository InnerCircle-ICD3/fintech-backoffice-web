import { transactionApi } from '@/api/transaction/api';
import { QUERY_KEYS } from '@/constants/queries';
import { selectFormattedTransactions } from '@/features/transaction/transaction-list/selectors';
import { TransactionParams } from '@/types/transaction-params';
import { queryOptions } from '@tanstack/react-query';

export const transactionQueryOptions = (userId: number, params: TransactionParams) =>
  queryOptions({
    queryKey: QUERY_KEYS.TRANSACTION.ALL(params),
    queryFn: () =>
      transactionApi.get({
        merchantId: userId,
        ...params,
      }),
    select: selectFormattedTransactions,
  });
