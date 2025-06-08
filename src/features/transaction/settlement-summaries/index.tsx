import AdminSection from '@/components/layout/section/admin';
import SearchFilter from '@/features/transaction/transaction-list/components/SearchFilter ';

const SettlementSummaries = () => {
  return (
    <AdminSection label={'정산 내역'}>
      <SearchFilter />
      {/* <Table data={cardTransactionList} isFetching={false} isPending={false} /> */}
    </AdminSection>
  );
};

export default SettlementSummaries;
