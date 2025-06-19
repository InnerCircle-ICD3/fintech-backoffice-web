import { keyframes, style } from '@vanilla-extract/css';

export const rootLoading = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  zIndex: 9999,
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const loadingContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  background: 'transparent',
});

const spin = keyframes({
  to: { transform: 'rotate(360deg)' },
});

export const loadingSpinner = style({
  width: '50px',
  height: '50px',
  border: '3px solid rgba(24, 37, 76, 0.1)',
  borderTop: '3px solid #18254c',
  borderRadius: '50%',
  animation: `${spin} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});
