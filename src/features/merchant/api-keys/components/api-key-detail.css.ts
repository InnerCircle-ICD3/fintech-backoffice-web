import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  margin: '24px 0',
});

export const infoItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const label = style({
  width: '80px',
  color: vars.color.gray6,
  fontSize: vars.fontSize.sm,
});

export const value = style({
  flex: 1,
  fontSize: vars.fontSize.sm,
});

export const statusActive = style({
  color: vars.color.green,
  fontWeight: vars.fontWeight.medium,
});

export const statusInactive = style({
  color: vars.color.red,
  fontWeight: vars.fontWeight.medium,
});

export const actions = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
  marginTop: '24px',
  borderTop: `1px solid ${vars.color.border}`,
  paddingTop: '24px',
});

export const actionButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
