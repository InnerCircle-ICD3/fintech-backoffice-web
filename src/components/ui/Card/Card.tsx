import { CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import Flex from '@/components/layout/flex/Flex';
import { card } from '@/styles/card.css';
import Text from '@/components/ui/text/Text';
import { cx } from '@/utils/cx';

export type CardVariants = RecipeVariants<typeof card>;

type CardProps = CardVariants & {
  children: ReactNode;
  width?: string;
  height?: string;
  label?: string;
  additionalElement?: ReactNode;
  style?: CSSProperties;
  className?: string;
};

const Card = (props: CardProps) => {
  const {
    children,
    width,
    height,
    label = '',
    additionalElement,
    style,
    className,
    ...cardVariants
  } = props;

  return (
    <div
      className={cx(card(cardVariants), className)}
      style={{ width: width, height: height, ...style }}
    >
      {(label || additionalElement) && (
        <Flex grow={'wFull'} justify={'between'} align={'center'}>
          <Text size={'xl'}>{label}</Text>
          {additionalElement}
        </Flex>
      )}

      {children}
    </div>
  );
};

export default Card;
