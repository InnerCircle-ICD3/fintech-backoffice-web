import Flex from '@/components/layout/flex';
import AdminSection from '@/components/layout/section/admin';
import { SuspenseQuery } from '@/components/react-query/SuspenseQuery';
import Card from '@/components/ui/card';
import Spinner from '@/components/ui/spinner';
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
      <Suspense
        fallback={
          <Card width="100%" height="100%">
            <Spinner />
          </Card>
        }
      >
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
