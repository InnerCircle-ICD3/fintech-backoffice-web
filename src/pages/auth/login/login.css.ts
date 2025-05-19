import { style } from '@vanilla-extract/css';

export const loginContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const loginCard = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '64px 62px',
});

export const loginTitle = style({
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '24px',
});

export const loginForm = style({
  width: '100%',
});
