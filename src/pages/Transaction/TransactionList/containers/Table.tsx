import CustomTable, { CustomColumnDef } from '@/components/ui/Table/CustomTable';
import { CardTransactionType } from '@/types/transactionType';

interface TableProps {
  data: any;
  isPending?: boolean;
  isFetching?: boolean;
}

const Table = (props: TableProps) => {
  const { data, isPending, isFetching } = props;

  const { list, page } = data;

  const columns: CustomColumnDef<CardTransactionType>[] = [
    {
      id: 'trDt',
      header: '거래일',
      cell: ({ row }) => row.original.trDt,
      size: 100,
    },
    {
      id: 'trTm',
      header: '거래시간',
      cell: ({ row }) => row.original.trTm,
      size: 80,
    },
    {
      id: 'cardCompany',
      header: '카드사',
      cell: ({ row }) => row.original.cardCompany,
      size: 100,
    },
    {
      id: 'cardNumber',
      header: '카드번호',
      cell: ({ row }) => row.original.cardNumber,
      size: 140,
    },
    {
      id: 'merchantId',
      header: '가맹점 ID',
      cell: ({ row }) => row.original.merchantId,
      size: 120,
    },
    {
      id: 'merchantName',
      header: '가맹점명',
      cell: ({ row }) => row.original.merchantName,
      minSize: 200,
    },
    {
      id: 'approvalAmount',
      header: '승인금액',
      cell: ({ row }) => row.original.approvalAmount.toLocaleString(),
      size: 120,
      meta: { textAlign: 'right' },
    },
    {
      id: 'fee',
      header: '수수료',
      cell: ({ row }) => row.original.fee.toLocaleString(),
      size: 100,
      meta: { textAlign: 'right' },
    },
    {
      id: 'status',
      header: '매입상태',
      cell: ({ row }) => row.original.status,
      size: 100,
    },
  ];

  return (
    <CustomTable
      data={list}
      columns={columns}
      columnPinning={{ left: ['index', 'trDt', 'trTm'], right: ['detail'] }}
      paging={page}
      isPending={isPending}
      isFetching={isFetching}
      headerButton={''}
      noDataMessage={'No DataMessage'}
    />
  );
};

export default Table;
