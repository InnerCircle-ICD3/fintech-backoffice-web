import Flex from '@/components/layout/flex';
import Pagination from '@/components/ui/pagination';
import { CustomTable, type CustomColumnDef } from '@/components/ui/table';
import { useTransactionParams } from '../hooks/useTransactionParams';
import { FormattedTransaction, FormattedTransactionResponse } from '../selectors';
import DetailButton from './DetailButton';
import * as styles from './table.css';

interface TableProps {
  data: FormattedTransactionResponse;
  isPending?: boolean;
  isFetching?: boolean;
}

const Table = (props: TableProps) => {
  const { data, isPending, isFetching } = props;
  const { updateParams } = useTransactionParams();

  const columns: CustomColumnDef<FormattedTransaction>[] = [
    {
      id: 'index',
      header: 'No',
      cell: ({ row }) => {
        const currentPage = data?.pageable?.pageNumber || 0;
        const pageSize = data?.pageable?.pageSize || 10;
        const totalElements = data?.totalElements || 0;
        return totalElements - (currentPage * pageSize + row.index);
      },
      size: 50,
      meta: { textAlign: 'center' },
    },
    {
      id: 'date',
      header: '거래일',
      cell: ({ row }) => row.original.date || '-',
      size: 100,
      meta: { textAlign: 'center' },
    },
    {
      id: 'status',
      header: '거래상태',
      cell: ({ row }) => (
        <span className={styles.status({ status: row.original.paymentStatus })}>
          {row.original.paymentStatus || '-'}
        </span>
      ),
      size: 100,
      meta: { textAlign: 'center' },
    },
    {
      id: 'paymentId',
      header: '주문번호',
      cell: ({ row }) => row.original.paymentId || '-',
      size: 100,
      meta: { textAlign: 'center' },
    },
    {
      id: 'transactionId',
      header: '거래번호',
      cell: ({ row }) => row.original.transactionId || '-',
      size: 100,
      meta: { textAlign: 'center' },
    },
    {
      id: 'paidAmount',
      header: '금액',
      cell: ({ row }) => row.original.paidAmount || '-',
      size: 100,
      meta: { textAlign: 'center' },
    },
    {
      id: 'detail',
      header: '작업',
      cell: ({ row }) => <DetailButton row={row} />,
      size: 100,
      meta: { textAlign: 'center' },
    },
  ];

  return (
    <Flex direction={'column'} grow={'full'} gap={'16px'}>
      <CustomTable
        data={data?.content}
        columns={columns}
        columnPinning={{
          left: [
            'index',
            'approvedAt',
            'status',
            'paymentId',
            'transactionId',
            'cardInfo',
            'paidAmount',
            'merchantName',
          ],
          right: ['detail'],
        }}
        isPending={isPending}
        isFetching={isFetching}
        noDataMessage={'No DataMessage'}
      />
      <Pagination
        totalCount={data?.totalElements || 0}
        forcePage={data?.pageable?.pageNumber || 0}
        pageSize={data?.pageable?.pageSize || 10}
        onPageChange={(value) => updateParams({ page: value.selected + 1 })}
      />
    </Flex>
  );
};

export default Table;
