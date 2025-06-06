import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  gap: '0',
  padding: '0',
});

export const content = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '24px',
  padding: '24px',
});

export const keySection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const sdkKeyContent = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const input = style({
  fontSize: vars.fontSize.sm,
  width: '300px',
  flex: 0.5,
});

export const infoGrid = style({});

export const infoItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const infoLabel = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray6,
});

export const infoValue = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.black,
  fontWeight: vars.fontWeight.medium,
});

export const statusWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: '12px',
  width: '50%',
  justifyContent: 'flex-end',
});

export const statusBadge = style({
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  minWidth: '44px',
  textAlign: 'center',
});

export const active = style({
  backgroundColor: '#DCFCE7',
  color: '#166534',
});

export const inactive = style({
  backgroundColor: '#FEE2E2',
  color: '#991B1B',
});
