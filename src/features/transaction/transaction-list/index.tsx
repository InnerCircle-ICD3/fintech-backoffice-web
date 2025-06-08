import { transactionApi } from '@/api/transaction/api';
import AdminSection from '@/components/layout/section/admin';
import { QUERY_KEYS } from '@/constants/queries';

import { MerchantInfoType } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router-dom';
import SearchFilter from './components/SearchFilter ';
import Table from './components/Table';
import { useTransactionParams } from './hooks/useTransactionParams';
import { selectFormattedTransactions } from './selectors';

const TransactionList = () => {
  const merchantInfo = useOutletContext<MerchantInfoType>();
  const { params } = useTransactionParams();

  const {
    data: rawTransactions,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
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
    staleTime: 0,
    gcTime: 0,
  });

  if (error) {
    return (
      <div>
        잠시 후 다시 시도해주세요.
        <button onClick={() => refetch()}>다시 시도</button>
      </div>
    );
  }

  if (!rawTransactions) {
    return <div>No data</div>;
  }

  return (
    <AdminSection label={'거래 내역'}>
      <SearchFilter />
      <Table data={rawTransactions} isFetching={isFetching} isPending={isLoading} />
    </AdminSection>
  );
};

export default TransactionList;
