import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';
import { flex } from '@/components/layout/flex/flex.css';
import { SIDE } from '@/constants/common';

export const lnbContainer = style({
  height: '100%',
  padding: '20px',

  whiteSpace: 'nowrap',
});

export const lnb = style([
  flex({ direction: 'column' }),
  {
    height: '100%',
    maxHeight: SIDE.HEIGHT,

    background: vars.color.white,

    border: `1px solid ${vars.color.border}`,
    borderRadius: '10px',

    overflow: 'hidden',
  },
]);

export const top = style([flex({ direction: 'column', grow: 'full' }), { gap: '16px' }]);

export const lnbControlContainer = style([
  flex({ grow: 'wFull', justify: 'between', align: 'center' }),
  {
    height: '40px',
    minHeight: '40px',
    padding: '8px 16px',
    borderBottom: `1px solid ${vars.color.border}`,
  },
]);

export const LnbMenuContainer = recipe({
  base: [
    flex({ direction: 'column' }),
    {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  ],
  variants: {
    expand: { true: {}, false: {} },
  },
});
