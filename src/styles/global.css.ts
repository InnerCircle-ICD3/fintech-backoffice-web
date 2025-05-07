import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

globalStyle('body', {
  width: '100%',
  height: '100vh',

  margin: 0,
  padding: 0,

  cursor: 'default',
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: 'UbuntuSans',
});

globalStyle('img', {
  pointerEvents: 'none',
});

globalStyle('::-webkit-scrollbar', {
  width: '4px',
  height: '4px',
});

globalStyle('::-webkit-scrollbar-track', {
  background: 'transparent',
});

globalStyle('::-webkit-scrollbar-thumb', {
  background: vars.color.disabledText,
  borderRadius: '24px',
});

globalStyle('::-webkit-scrollbar-corner', {
  background: 'transparent',
});
