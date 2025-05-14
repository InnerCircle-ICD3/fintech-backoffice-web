import { ReactNode } from 'react';
import Flex from '@/components/layout/flex/Flex';
import Text from '@/components/ui/text/Text';

export interface TableSubHeaderProps {
  totalCount: number;
  searchTime: string | null;
  countLabel?: string;
  isShowCount?: boolean;
  isShowDateTime?: boolean;
  headerButton?: ReactNode;
}

const TableSubHeader = (props: TableSubHeaderProps) => {
  const {
    totalCount,
    searchTime = '',
    countLabel = '데이터 갯수',
    isShowCount = true,
    isShowDateTime,
    headerButton,
  } = props;

  return (
    <Flex grow={'wFull'} align={'center'}>
      <Flex grow={'full'} align={'center'} gap={'16px'}>
        {isShowCount && (
          <Flex gap={'4px'}>
            <Text size={'sm'}>{countLabel} :</Text>
            <Text size={'sm'} weight={'bold'}>
              {totalCount?.toLocaleString()}
            </Text>
          </Flex>
        )}

        {isShowCount && isShowDateTime}

        {isShowDateTime && (
          <Flex gap={'4px'}>
            <Text size={'sm'}>마지막 조회 시간 :</Text>
            <Text size={'sm'} weight={'bold'}>
              {searchTime}
            </Text>
          </Flex>
        )}
      </Flex>

      <Flex align={'center'} gap={'16px'}>
        {headerButton}
      </Flex>
    </Flex>
  );
};

export default TableSubHeader;
