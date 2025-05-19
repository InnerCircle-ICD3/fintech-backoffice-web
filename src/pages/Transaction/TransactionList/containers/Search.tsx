import SearchContainer from '@/components/layout/container/SearchContainer';
import { Label } from '@/components/ui/label/Label';
import Flex from '@/components/layout/flex/Flex';

const Search = () => {
  return (
    <SearchContainer onSearch={() => {}} onReset={() => {}}>
      <Flex direction={'column'} gap={'6px'}>
        <Label>거래번호</Label>
        <input type="text" />
      </Flex>
    </SearchContainer>
  );
};

export default Search;
