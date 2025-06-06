import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  overflowX: 'auto',
  display: 'block',
  padding: '4px',
});

export const table = style({
  width: '100%',
  minWidth: '1000px',
  fontSize: vars.fontSize.sm,
  borderCollapse: 'collapse',
});

globalStyle('table, thead, tbody, tr, th, td', {
  margin: 0,
  padding: 0,
  border: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
});

export const header = style({});

export const body = style({
  overflowX: 'auto',
});

globalStyle(`${body} tr:last-child td`, {
  borderBottom: 'none',
});

export const row = style({});

export const head = style({
  height: '48px',
  padding: '12px 24px',
  textAlign: 'left',
  verticalAlign: 'middle',
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray6,
  whiteSpace: 'nowrap',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const cell = style({
  padding: '16px 24px',
  verticalAlign: 'middle',
  lineHeight: '1.5',
  borderBottom: `1px solid ${vars.color.border}`,
});
