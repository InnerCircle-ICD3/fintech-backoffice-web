import { recipe } from '@vanilla-extract/recipes';
import {vars} from "@/styles/theme.css";



export const menu = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',

    color: vars.color.text.main,

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
          background: vars.color.table,
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
          background: vars.color.text.main,
          borderRadius: '2px',
        },

        ':hover': {
          background: vars.color.table,
        },
      },
      small: {
        fontSize: vars.fontSize.sm,
        fontWeight: vars.fontWeight.medium,
        lineHeight: '24px',
      },
    },
    active: {
      true: { color: vars.color.primary, fontWeight: vars.fontWeight.bold },
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
          background: vars.color.primary,
          borderRadius: '2px',
        },
      },
    },
  ],
});
