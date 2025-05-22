import { vars } from '@/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

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
  backgroundColor: 'rgba(0, 0, 0, 0.8)',

  selectors: {
    '&[data-state=open]': {
      animation: `${fadeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${fadeOut} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
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
  maxWidth: '25rem',
  transform: 'translate(-50%, -50%)',
  gap: '1rem',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white,
  padding: '1.5rem',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  transitionDuration: '200ms',

  '@media': {
    '(min-width: 640px)': {
      borderRadius: '0.5rem',
    },
  },

  selectors: {
    '&[data-state=open]': {
      animation: `${fadeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1), ${zoomIn} 150ms cubic-bezier(0.16, 1, 0.3, 1), ${slideInFromTop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${fadeOut} 150ms cubic-bezier(0.16, 1, 0.3, 1), ${zoomOut} 150ms cubic-bezier(0.16, 1, 0.3, 1), ${slideOutToTop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    ':global(.dark) &': {
      borderColor: '#1e293b',
      backgroundColor: '#020617',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.main,
  lineHeight: '1.25rem',
  margin: 0,

  selectors: {
    ':global(.dark) &': {
      color: '#94a3b8',
    },
  },
});

export const action = style({
  fontSize: vars.fontSize.sm,
});

export const cancel = style({
  fontSize: vars.fontSize.sm,

  '@media': {
    '(min-width: 640px)': {
      marginTop: 0,
    },
  },
});
