import { vars } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  width: '100%',

  margin: 0,
  padding: 0,

  cursor: 'default',

  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
});

globalStyle('img', {
  pointerEvents: 'none',
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('ui', {
  listStyle: 'none',
  padding: 0,
  margin: 0,
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

globalStyle('.sr-only', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: 0,
});
