import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0',
  gap: '0',
});

export const content = style({
  padding: '0 24px 24px',
  width: '100%',
});

export const tableHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const tableHeaderButton = style({
  display: 'flex',
  gap: '8px',
});

export const tableHeaderButtonIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: vars.fontSize.sm,
});

export const keyCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  maxWidth: '320px',
});

export const keyCellContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const keyCellButton = style({
  width: '100px',
});

export const statusCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const statusBadge = style({
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
});

export const active = style({
  backgroundColor: vars.color.greenL,
  color: vars.color.green,
});

export const inactive = style({
  backgroundColor: vars.color.gray3,
  color: vars.color.gray6,
});

export const actionButtons = style({
  display: 'flex',
  gap: '8px',
});
