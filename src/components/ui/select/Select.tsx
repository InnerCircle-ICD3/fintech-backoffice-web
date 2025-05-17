import Select from 'koko-react-select';
import 'koko-react-select/dist/koko-react-select.css';

type OptionType = {
  label: string;
  value: string | number;
};

interface SearchSelectProps {
  optionList: OptionType[];
  isMulti?: boolean;
  placeholder?: string;
  isSearchable?: boolean;
  isClearable?: boolean;
  value: string | number;
  onChange: () => void;
  disabled?: boolean;
  invalid?: boolean;
  maxHeight?: string;
}

const SearchSelect = (props: SearchSelectProps) => {
  const {
    isSearchable = false,
    isClearable = true,
    disabled = false,
    invalid = false,
    value,
    optionList = [],
    placeholder,
    onChange,
  } = props;

  return (
    <Select
      optionList={optionList}
      onChange={onChange}
      value={value}
      isSearchable={isSearchable}
      isClearable={isClearable}
      disabled={disabled}
      invalid={invalid}
      placeholder={placeholder}
    />
  );
};

export default SearchSelect;
