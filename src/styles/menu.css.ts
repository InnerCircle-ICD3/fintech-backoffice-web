import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@styles/theme.css.ts';

export const menu = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    color: vars.themeColor.color.text.main,

    textDecoration: 'none',
    wordBreak: 'break-word',

    cursor: 'pointer',
  },
  variants: {
    division: {
      '1depth': {
        width: '100%',
        height: '40px',

        padding: '8px 16px',

        fontSize: vars.fontSize.sm,
        fontWeight: vars.fontWeight.medium,
        lineHeight: '24px',

        ':hover': {
          background: vars.themeColor.color.table,
        },
      },
      '2depth': {
        width: '100%',

        padding: '4px 40px',

        fontSize: vars.fontSize.sm,
        fontWeight: vars.fontWeight.regular,
        lineHeight: '24px',

        '::before': {
          content: '',
          display: 'block',
          width: '4px',
          minWidth: '4px',
          height: '4px',
          background: vars.themeColor.color.text.main,
          borderRadius: '2px',
        },

        ':hover': {
          background: vars.themeColor.color.table,
        },
      },
      small: {
        fontSize: vars.fontSize.sm,
        fontWeight: vars.fontWeight.medium,
        lineHeight: '24px',
      },
    },
    active: {
      true: { color: vars.themeColor.color.primary, fontWeight: vars.fontWeight.bold },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { division: '2depth', active: true },
      style: {
        // backgroundColor: vars.themeColor.lnb.background.active,

        '::before': {
          content: '',
          display: 'block',
          width: '4px',
          minWidth: '4px',
          height: '4px',
          background: vars.themeColor.color.primary,
          borderRadius: '2px',
        },
      },
    },
  ],
});
