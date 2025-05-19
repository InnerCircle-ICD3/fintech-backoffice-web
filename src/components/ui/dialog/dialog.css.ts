import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const zoomIn = keyframes({
  from: { transform: 'translate(-50%, -50%) scale(0.95)' },
  to: { transform: 'translate(-50%, -50%) scale(1)' },
});

const zoomOut = keyframes({
  from: { transform: 'translate(-50%, -50%) scale(1)' },
  to: { transform: 'translate(-50%, -50%) scale(0.95)' },
});

const slideInFromTop = keyframes({
  from: { transform: 'translate(-50%, -52%)' },
  to: { transform: 'translate(-50%, -50%)' },
});

const slideOutToTop = keyframes({
  from: { transform: 'translate(-50%, -50%)' },
  to: { transform: 'translate(-50%, -52%)' },
});

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  backgroundColor: vars.color.modal,

  selectors: {
    '&[data-state=open]': {
      animation: `${fadeIn} 150ms ease-out`,
    },
    '&[data-state=closed]': {
      animation: `${fadeOut} 150ms ease-in`,
    },
  },
});

export const content = style({
  position: 'fixed',
  left: '50%',
  top: '50%',
  zIndex: 50,
  display: 'grid',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  gap: '1rem',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white,
  padding: '1.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  transitionDuration: '200ms',

  '@media': {
    '(min-width: 640px)': {
      borderRadius: '0.5rem',
    },
  },

  selectors: {
    '&[data-state=open]': {
      animation: `${zoomIn} 200ms ease-out, ${slideInFromTop} 200ms ease-out`,
    },
    '&[data-state=closed]': {
      animation: `${zoomOut} 200ms ease-in, ${slideOutToTop} 200ms ease-in`,
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  borderRadius: '0.125rem',
  opacity: 0.7,
  transition: 'opacity 150ms',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0.25rem',

  ':hover': {
    opacity: 1,
  },

  ':focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(0, 0, 0, 0.05)',
  },

  ':disabled': {
    pointerEvents: 'none',
  },

  selectors: {
    '&[data-state=open]': {
      backgroundColor: '#f1f5f9', // light accent color
      color: vars.color.text.sub,
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  textAlign: 'center',

  '@media': {
    '(min-width: 640px)': {
      textAlign: 'left',
    },
  },
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column-reverse',

  '@media': {
    '(min-width: 640px)': {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: '0.5rem',
    },
  },
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.bold,
  margin: 0,
  lineHeight: '1.2',
  letterSpacing: '-0.01em',
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.sub,
});
