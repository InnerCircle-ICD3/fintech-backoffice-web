import { vars } from '@/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const trigger = style({
  boxSizing: 'border-box',
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  borderRadius: '6px',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.inputBg,
  padding: '8px 12px',
  fontSize: vars.fontSize.sm,
  whiteSpace: 'nowrap',
  transition: 'color, box-shadow',
  outline: 'none',
  color: vars.color.text.caption,
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    '&[data-size="default"]': {
      height: '43px',
    },
    '&[data-size="sm"]': {
      height: '32px',
    },
    // '&:focus-visible': {
    //   borderColor: vars.color.primaryL,
    //   boxShadow: `0 0 0 3px ${vars.color.primaryL}50`,
    // },
    '&[aria-invalid="true"]': {
      borderColor: vars.color.red,
      boxShadow: `0 0 0 3px ${vars.color.shadow.red}`,
    },
  },
});

globalStyle(`${trigger} [data-slot="select-value"]`, {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  lineClamp: 1,
  width: '130px',
  color: vars.color.text.main,
});

export const content = style({
  boxSizing: 'border-box',
  position: 'relative',
  zIndex: 50,
  maxHeight: 'var(--radix-select-content-available-height)',
  minWidth: '8rem',
  overflow: 'hidden auto',
  borderRadius: '6px',
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.white,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  selectors: {
    '&[data-state="open"]': {
      animation: 'fadeIn 0.2s ease-out',
    },
    '&[data-state="closed"]': {
      animation: 'fadeOut 0.2s ease-in',
    },
    '&[data-side="bottom"]': {
      transform: 'translateY(4px)',
    },
    '&[data-side="top"]': {
      transform: 'translateY(-4px)',
    },
  },
});

export const item = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  cursor: 'default',
  alignItems: 'center',
  gap: '8px',
  borderRadius: '2px',
  padding: '6px 32px 6px 8px',
  fontSize: vars.fontSize.sm,
  outline: 'none',
  userSelect: 'none',
  selectors: {
    '&:focus': {
      backgroundColor: vars.color.primaryB,
      color: vars.color.primary,
    },
    '&[data-disabled]': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
});

export const label = style({
  padding: '6px 8px',
  fontSize: vars.fontSize.xs,
  color: vars.color.text.sub,
});

export const separator = style({
  margin: '4px -4px',
  height: '1px',
  backgroundColor: vars.color.border,
  pointerEvents: 'none',
});

export const scrollButton = style({
  display: 'flex',
  cursor: 'default',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
});

export const viewport = style({
  padding: '4px',
  height: 'var(--radix-select-trigger-height)',
  width: '100%',
  minWidth: 'var(--radix-select-trigger-width)',
  scrollMarginBlock: '4px',
});

export const itemIndicatorWrapper = style({
  position: 'absolute',
  right: '8px',
  display: 'flex',
  width: '14px',
  height: '14px',
  alignItems: 'center',
  justifyContent: 'center',
});
