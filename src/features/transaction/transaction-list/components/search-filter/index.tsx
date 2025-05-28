import SearchContainer from '@/features/transaction/transaction-list/components/search-filter/SearchContainer';

import Flex from '@/components/layout/flex';
import { Input } from '@/components/ui/input';

const SearchFilter = () => {
  return (
    <SearchContainer onSearch={() => {}} onReset={() => {}}>
      <Flex direction={'row'} gap={'6px'}>
        <Input type={'text'} size={'sm'} placeholder={'거래번호'} width={'200px'} />

        <Input type={'text'} size={'sm'} placeholder={'가맹점명'} width={'200px'} />

        <Input type={'text'} size={'sm'} placeholder={'승인금액'} width={'200px'} />
      </Flex>
    </SearchContainer>
  );
};

export default SearchFilter;
