import { transactionApi } from '@/api/transaction/api';
import Flex from '@/components/layout/flex';
import AdminSection from '@/components/layout/section/admin';
import { QUERY_KEYS } from '@/constants/queries';
import { MerchantInfoType } from '@/queries';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useOutletContext } from 'react-router-dom';
import SearchFilter from './components/filters/SearchFilter';
import Table from './components/Table';
import { useTransactionParams } from './hooks/useTransactionParams';
import { selectFormattedTransactions } from './selectors';

const TransactionList = () => {
  const merchantInfo = useOutletContext<MerchantInfoType>();
  const { params } = useTransactionParams();

  const { data: transactions, isFetching } = useSuspenseQuery({
    queryKey: [
      QUERY_KEYS.TRANSACTION.ALL,
      params.page,
      params.size,
      params.status,
      params.startDate,
      params.endDate,
    ],
    queryFn: () =>
      transactionApi.get({
        merchantId: merchantInfo.merchantId,
        ...params,
      }),
    select: selectFormattedTransactions,
  });

  return (
    <AdminSection label={'거래 내역'}>
      <SearchFilter>
        <Flex gap={'16px'}>
          <SearchFilter.Status />
          <SearchFilter.DateRange />
        </Flex>
        <SearchFilter.Actions />
      </SearchFilter>
      <Suspense fallback={<div>로딩 중...</div>}>
        <Table data={transactions} isFetching={isFetching} />
      </Suspense>
    </AdminSection>
  );
};

export default TransactionList;
