import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { flex } from '@styles/components/flex.css.ts';
import { vars } from '@styles/theme.css.ts';

import { SIDE } from '@data/commonData.ts';

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

    background: vars.themeColor.lnb.background.default,

    border: `1px solid ${vars.themeColor.color.border}`,
    borderRadius: '10px',

    overflow: 'hidden',
  },
]);

export const top = style([flex({ direction: 'column', grow: 'full' }), { gap: '16px' }]);

export const lnbControlContainer = style([
  flex({ grow: 'wFull', justify: 'between', align: 'center' }),
  { height: '40px', minHeight: '40px', padding: '8px 16px', borderBottom: `1px solid ${vars.themeColor.color.border}` },
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

export const subMenuItemContainer = recipe({
  base: [
    flex({ direction: 'column' }),
    {
      gap: '4px',
      width: '100%',
      maxHeight: 0,
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, opacity 0.3s ease',
    },
  ],
  variants: {
    open: {
      true: { maxHeight: 'none', opacity: 1, transform: 'scaleY(1)' },
      false: { marginTop: 0 },
    },
  },
  defaultVariants: {
    open: false,
  },
});

export const bottom = style([
  flex({ direction: 'column', align: 'center' }),
  {
    width: '100%',
    gap: '8px',
    paddingBottom: '8px',
  },
]);

export const bottomLink = recipe({
  base: [
    flex(),
    {
      width: '100%',
      padding: '8px 21px',

      left: 0,

      gap: '16px',

      borderTop: `1px solid ${vars.themeColor.color.border}`,
      borderBottom: `1px solid ${vars.themeColor.color.border}`,
    },
  ],
  variants: {
    expand: { true: {}, false: { padding: '16px', flexDirection: 'column', gap: '16px', alignItems: 'center' } },
  },
});

export const supportInfo = style([
  flex({ justify: 'between', align: 'center' }),
  {
    width: '100%',
    padding: '0 16px',
  },
]);

export const helpCenterLinkButton = style({
  fontSize: vars.fontSize.xs,
  color: vars.themeColor.lnb.color.link,
});
