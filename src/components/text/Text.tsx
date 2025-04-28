import { CSSProperties, ReactNode } from 'react';

import { RecipeVariants } from '@vanilla-extract/recipes';
import {text} from "@/components/text/text.css";



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
