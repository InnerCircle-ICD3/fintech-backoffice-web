import { CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import Flex from '@/components/layout/flex/Flex';
import { card } from '@/components/ui/card/card.css';
import Text from '@/components/ui/text/Text';

export type CardVariants = RecipeVariants<typeof card>;

type CardProps = CardVariants & {
  children: ReactNode;
  width?: string;
  height?: string;
  label?: string;
  additionalElement?: ReactNode;
  style?: CSSProperties;
};

const Card = (props: CardProps) => {
  const { children, width, height, label = '', additionalElement, style, ...cardVariants } = props;

  return (
    <div className={card(cardVariants)} style={{ width: width, height: height, ...style }}>
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
