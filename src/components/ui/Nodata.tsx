import Flex from '@/components/layout/flex';
import Text from '@/components/ui/text';
import { TriangleAlertIcon } from 'lucide-react';

export interface NodataProps {
  noDataMessage?: string;
}

const Nodata = (props: NodataProps) => {
  const { noDataMessage = 'No Records' } = props;

  return (
    <Flex
      direction={'column'}
      grow={'full'}
      justify={'center'}
      align={'center'}
      gap={'16px'}
      style={{ paddingTop: '32px', paddingBottom: '32px' }}
    >
      <TriangleAlertIcon />

      <Text size={'sm'} weight={'regular'}>
        {noDataMessage}
      </Text>
    </Flex>
  );
};

export default Nodata;
