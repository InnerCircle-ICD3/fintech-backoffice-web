import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const formFieldsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const formItemStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '8px',
  border: `1px solid ${vars.color.border}`,
  padding: '12px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
});

export const labelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});
