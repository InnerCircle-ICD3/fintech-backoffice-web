import SearchContainer from '@/components/layout/container/searchContainer/SearchContainer';

import Flex from '@/components/layout/flex/Flex';
import { Input } from '@/components/ui/input/Input';

const Search = () => {
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

export default Search;
