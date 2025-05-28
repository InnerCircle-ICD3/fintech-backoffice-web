import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const loginContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: vars.color.white,
});

export const loginCard = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '64px 62px',
  gap: '48px',
});

export const loginTitle = style({
  fontSize: vars.fontSize['5xl'],
  fontWeight: 'bold',
  margin: 0,
});

export const loginForm = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',
});

export const buttonContainer = style({
  width: '100%',
  marginTop: '48px',
});
