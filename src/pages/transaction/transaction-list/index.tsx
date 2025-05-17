import Content from '@/components/layout/container/content/Content';
import Search from '@/pages/transaction/TransactionList/containers/Search';
import Table from '@/pages/transaction/TransactionList/containers/Table';
import { cardTransactionList } from '@/constants/transactionMock';

const TransactionList = () => {
  return (
    <Content label={'Transaction List'}>
      <Search />
      <Table data={cardTransactionList} isFetching={false} isPending={false} />
    </Content>
  );
};

export default TransactionList;
