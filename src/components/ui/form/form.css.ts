import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const formItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
});

export const formDescription = style({
  fontSize: vars.fontSize.xs,
  color: vars.color.text.sub,
  marginTop: '4px',
});

export const formMessage = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.red,
  marginTop: '4px',
});

export const errorLabel = style({
  color: vars.color.red,
});
