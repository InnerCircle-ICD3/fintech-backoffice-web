import AdminSection from '@/components/layout/section/admin';
import { cardTransactionList } from '@/constants/transaction-mock';
import Table from '@/features/transaction/transaction-list/components/Table';
import SearchFilter from '@/features/transaction/transaction-list/components/search-filter';

const TransactionList = () => {
  return (
    <AdminSection label={'거래 관리'}>
      <SearchFilter />
      <Table data={cardTransactionList} isFetching={false} isPending={false} />
    </AdminSection>
  );
};

export default TransactionList;
