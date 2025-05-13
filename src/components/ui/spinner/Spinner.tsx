import { SyncLoader } from 'react-spinners';
import Flex from '@/components/layout/flex/Flex';
import { vars } from '@/styles/theme.css';

interface SpinnerProps {
  isRoot?: boolean;
}

const Spinner = (props: SpinnerProps) => {
  const { isRoot } = props;

  return (
    <Flex
      grow={'full'}
      justify={'center'}
      align={'center'}
      style={{ position: 'absolute', zIndex: isRoot ? 9999 : 998 }}
    >
      <SyncLoader color={vars.color.primary} size={8} />
    </Flex>
  );
};

export default Spinner;
