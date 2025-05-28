import { CSSProperties, ReactNode } from 'react';

import { text } from '@/components/ui/text/text.css';
import { RecipeVariants } from '@vanilla-extract/recipes';

export type TextVariants = RecipeVariants<typeof text>;

export type TextProps = TextVariants & {
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
};

const Text = (props: TextProps) => {
  const { children, style, onClick, ...textVariants } = props;

  return (
    <p className={text(textVariants)} style={style} onClick={onClick}>
      {children}
    </p>
  );
};

export default Text;
