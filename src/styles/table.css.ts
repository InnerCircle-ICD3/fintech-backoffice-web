import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const tableContainer = style({
  overflow: 'auto',
  width: '100%',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  border: `1px solid ${vars.color.border}`,
});

export const table = style({
  width: 'max-content',
  minWidth: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
});

export const th = style({
  padding: '8px 16px',

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
  padding: '8px 16px',

  backgroundColor: vars.color.background,

  color: vars.color.text.main,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  lineHeight: '24px',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  borderBottom: `1px solid ${vars.color.border}`,

  selectors: {
    [`${tr()}:last-child &`]: {
      borderBottom: 'none',
    },
  },
});
