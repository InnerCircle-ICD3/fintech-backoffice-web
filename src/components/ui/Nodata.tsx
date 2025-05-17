import ErrorIcon from '@/assets/images/icon/icon_error_yellow.svg';

import Flex from '@/components/layout/flex/Flex';
import Text from '@/components/ui/text/Text';

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
      <ErrorIcon />

      <Text size={'sm'} weight={'regular'}>
        {noDataMessage}
      </Text>
    </Flex>
  );
};

export default Nodata;
