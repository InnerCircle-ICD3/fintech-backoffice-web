import { style, keyframes } from '@vanilla-extract/css';
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
  from: { transform: 'scale(0.95)' },
  to: { transform: 'scale(1)' },
});

const zoomOut = keyframes({
  from: { transform: 'scale(1)' },
  to: { transform: 'scale(0.95)' },
});

const slideInFromTop = keyframes({
  from: { transform: 'translateY(-4px)' },
  to: { transform: 'translateY(0)' },
});

const slideInFromRight = keyframes({
  from: { transform: 'translateX(4px)' },
  to: { transform: 'translateX(0)' },
});

const slideInFromBottom = keyframes({
  from: { transform: 'translateY(4px)' },
  to: { transform: 'translateY(0)' },
});

const slideInFromLeft = keyframes({
  from: { transform: 'translateX(-4px)' },
  to: { transform: 'translateX(0)' },
});

// PopoverContent 스타일
export const popoverContent = style({
  zIndex: 50,
  width: '288px', // w-72 (72 * 4px = 288px)
  borderRadius: '6px', // rounded-md
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white, // bg-popover (가정)
  padding: '16px', // p-4
  color: vars.color.text.main, // text-popover-foreground (가정)
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
  outline: 'none',
  transformOrigin: 'var(--radix-popover-content-transform-origin)',

  // 애니메이션 상태에 따른 스타일
  selectors: {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms ease, ${zoomIn} 150ms ease`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 150ms ease, ${zoomOut} 150ms ease`,
    },
    '&[data-side="top"]': {
      animation: `${slideInFromBottom} 150ms ease`,
    },
    '&[data-side="right"]': {
      animation: `${slideInFromLeft} 150ms ease`,
    },
    '&[data-side="bottom"]': {
      animation: `${slideInFromTop} 150ms ease`,
    },
    '&[data-side="left"]': {
      animation: `${slideInFromRight} 150ms ease`,
    },
  },
});
