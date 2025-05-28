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
import { transactionDetailMetaData } from '@/constants/transaction-mock';

interface DetailButtonProps {
  row: any;
}

const DetailButton = ({ row }: DetailButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost">
          상세
        </Button>
      </DialogTrigger>
      <DialogContent style={{ width: '600px' }}>
        <DialogHeader>
          <DialogTitle>거래 상세 정보</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Flex gap={'6px'} direction={'column'}>
            <GridTable data={row?.original} metaData={transactionDetailMetaData} />

            <Button size={'sm'} variant={'secondary'} color={'red'}>
              취소
            </Button>
          </Flex>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DetailButton;
