import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const tableContainer = style({
  overflow: 'auto',
  width: '100%',
  borderRadius: '12px',
  border: `1px solid ${vars.color.border}`,
});

export const table = style({
  width: 'max-content',
  minWidth: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
});

export const th = style({
  padding: '12px 16px',
  backgroundColor: vars.color.table,
  color: vars.color.text.title,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  lineHeight: '24px',
});

export const tr = recipe({
  base: {},
  variants: {
    clickable: {
      true: { cursor: 'pointer', ':hover': { background: vars.color.primary } },
      false: {},
    },
  },
});

export const td = style({
  padding: '20px 16px',

  background: vars.color.white,

  color: vars.color.text.main,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  lineHeight: '24px',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  // borderBottom: `1px solid ${vars.color.border}`,

  selectors: {
    [`${tr()}:last-child &`]: {
      borderBottom: 'none',
    },
  },
});
