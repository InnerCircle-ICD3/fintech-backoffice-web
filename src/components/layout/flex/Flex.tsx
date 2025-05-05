import { CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import { flex } from '@/components/layout/flex/flex.css';

type FlexVariants = RecipeVariants<typeof flex>;

type FlexProps = FlexVariants & {
  children?: ReactNode;
  width?: string;
  height?: string;
  gap?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

const Flex = (props: FlexProps) => {
  const { children, width, height, gap, style, onClick, ...variants } = props;

  return (
    <div className={flex(variants)} style={{ width, height, gap, ...style }} onClick={onClick}>
      {children}
    </div>
  );
};

export default Flex;
