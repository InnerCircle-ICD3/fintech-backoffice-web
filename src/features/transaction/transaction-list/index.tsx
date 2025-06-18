import Flex from '@/components/layout/flex';
import AdminSection from '@/components/layout/section/admin';
import { SuspenseQuery } from '@/components/react-query/SuspenseQuery';
import { transactionQueryOptions } from '@/queries/transaction';
import { useUserId } from '@/stores/auth';
import { Suspense } from 'react';
import SearchFilter from './components/filters/SearchFilter';
import Table from './components/Table';
import { useTransactionParams } from './hooks/useTransactionParams';

const TransactionList = () => {
  const { params } = useTransactionParams();
  const userId = useUserId();

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
        {userId !== null && (
          <SuspenseQuery {...transactionQueryOptions(userId, params)}>
            {({ data, isFetching }) => <Table data={data} isFetching={isFetching} />}
          </SuspenseQuery>
        )}
      </Suspense>
    </AdminSection>
  );
};

export default TransactionList;
