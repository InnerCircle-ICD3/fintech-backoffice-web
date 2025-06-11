import Flex from '@/components/layout/flex';
import SearchFilter from './filters/SearchFilter';

export const TransactionList = () => {
  return (
    <Flex direction="column" gap="16px">
      <SearchFilter>
        <Flex direction={'row'} gap={'12px'}>
          <SearchFilter.Status />
          <SearchFilter.DateRange />
        </Flex>
        <SearchFilter.Actions />
      </SearchFilter>
      {/* 나머지 트랜잭션 리스트 컴포넌트 */}
    </Flex>
  );
};
