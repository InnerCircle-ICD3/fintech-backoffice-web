import { TransactionResponseSchema } from '@/api/transaction/schema';
import { format } from 'date-fns';
import { z } from 'zod';

const formatAmount = (amount: number) => amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const formatStatus = (status: string) => {
  const statusMap = {
    COMPLETED: '결제완료',
    FAILED: '결제실패',
    REQUESTED: '결제대기',
  };
  return statusMap[status] || status;
};

export const selectFormattedTransactions = (data: z.infer<typeof TransactionResponseSchema>) => ({
  ...data,
  content: data.content.map((transaction) => ({
    ...transaction,
    date: format(new Date(transaction.approvedAt), 'yy.MM.dd'),
    time: format(new Date(transaction.approvedAt), 'HH:mm:ss'),
    cardCompany: transaction.cardInfo?.cardCompany,
    cardNumber: transaction.cardInfo?.last4 ? `****-****-****-${transaction.cardInfo?.last4}` : '',
    paidAmount: formatAmount(transaction.paidAmount),
    paymentStatus: formatStatus(transaction.paymentStatus),
  })),
});

export type FormattedTransaction = ReturnType<
  typeof selectFormattedTransactions
>['content'][number];
export type FormattedTransactionResponse = ReturnType<typeof selectFormattedTransactions>;
