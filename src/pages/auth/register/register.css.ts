import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const registerContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '50px 0',
});

export const registerCard = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '64px 62px',
  gap: '48px',
});

export const registerTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: 'bold',
  margin: 0,
});

export const registerForm = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
});

export const button = style({
  width: '100%',
  marginTop: '48px',
});
