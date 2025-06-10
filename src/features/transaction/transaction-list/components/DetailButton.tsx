import Flex from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GridTable } from '@/components/ui/table';
import { Row } from '@tanstack/react-table';
import { FormattedTransaction } from '../selectors';

interface DetailButtonProps {
  row: Row<FormattedTransaction>;
}

const DetailButton = ({ row }: DetailButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          상세
        </Button>
      </DialogTrigger>
      <DialogContent style={{ width: '800px' }}>
        <DialogHeader>
          <DialogTitle>거래 상세 정보</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Flex gap={'6px'} direction={'column'}>
            <GridTable
              data={row?.original}
              metaData={{
                date: {
                  label: '승인일자',
                },
                time: {
                  label: '승인시간',
                },
                cardCompany: {
                  label: '카드사',
                },
                cardNumber: {
                  label: '카드번호',
                },
                paidAmount: {
                  label: '승인금액',
                  format: 'currency',
                },
                paymentStatus: {
                  label: '거래상태',
                },
              }}
            />
          </Flex>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DetailButton;
