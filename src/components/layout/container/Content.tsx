import { ReactNode } from 'react';
import Flex from '@/components/layout/flex/Flex';
import Text, { TextProps } from '@/components/text/Text';

interface ContentContainerProps extends TextProps {
  children?: ReactNode;
  isVisibleHeader?: boolean;
  additionalElement?: ReactNode;
  label: string;
}

const Content = (props: ContentContainerProps) => {
  const { children, isVisibleHeader = true, additionalElement, label } = props;

  return (
    <Flex direction={'column'} grow={'full'}>
      {((isVisibleHeader && label) || additionalElement) && (
        <Flex justify={'between'} align={'center'} grow={'wFull'} style={{ padding: '8px 0' }}>
          {isVisibleHeader && (
            <Text size={'xl'} color={'primary'}>
              {label}
            </Text>
          )}

          {additionalElement}
        </Flex>
      )}

      <Flex direction={'column'} grow={'full'} gap={'20px'}>
        {children}
      </Flex>
    </Flex>
  );
};

export default Content;
