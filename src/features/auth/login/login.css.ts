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
  padding: '55px 62px',
  gap: '38px',
});

export const loginTitle = style({
  fontSize: vars.fontSize['5xl'],
  fontFamily: 'GongGothicMedium, sans-serif',
  fontWeight: 'normal',
  margin: 0,
  background: 'linear-gradient(266deg, #122853 -27.11%, #164ABC 92.79%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
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
