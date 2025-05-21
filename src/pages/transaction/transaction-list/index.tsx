import Content from '@/components/layout/container/content/Content';
import { cardTransactionList } from '@/constants/transactionMock';
import Search from '@/pages/transaction/transaction-list/containers/Search';
import Table from '@/pages/transaction/transaction-list/containers/Table';

const TransactionList = () => {
  return (
    <Content label={'Transaction List'}>
      <Search />
      <Table data={cardTransactionList} isFetching={false} isPending={false} />
    </Content>
  );
};

export default TransactionList;
