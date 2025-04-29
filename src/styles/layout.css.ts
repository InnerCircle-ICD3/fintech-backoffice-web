import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flex } from '@styles/components/flex.css.ts';
import { vars } from '@styles/theme.css.ts';

import { TOP } from '@data/commonData.ts';

export const layout = recipe({
  base: {
    height: '100%',
  },
  variants: {
    gradient: {
      true: {
        background: `linear-gradient(to bottom, ${vars.themeColor.common.gradient} 250px, ${vars.themeColor.color.background} 250px)`,
      },
      false: { background: '#F4F5FA' },
    },
  },
  defaultVariants: {
    gradient: true,
  },
});

export const mainContainer = style([
  flex(),
  {
    width: '100%',
    height: `calc(100% - ${TOP.HEIGHT})`,
  },
]);
