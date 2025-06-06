import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const merchantInfoHeader = style({
  width: '100%',
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const merchantInfoHeaderTitle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});
