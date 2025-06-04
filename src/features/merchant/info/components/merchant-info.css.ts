import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  gap: '0',
  padding: '0',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const merchantInfoHeader = style({
  width: '100%',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  borderBottom: `1px solid ${vars.color.border}`,
});

export const merchantInfoContent = style({
  width: '100%',
  padding: '24px',
});

export const formGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '24px',
});

export const buttonWrapper = style({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});

export const buttonContainer = style({
  width: '500px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});

export const buttonIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
