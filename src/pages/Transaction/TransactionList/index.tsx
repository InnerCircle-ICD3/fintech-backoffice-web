import Content from '@/components/layout/container/Content';
import Search from '@/pages/Transaction/TransactionList/containers/Search';

const TransactionList = () => {
  return (
    <Content label={'Transaction List'}>
      <Search />
    </Content>
  );
};

export default TransactionList;
