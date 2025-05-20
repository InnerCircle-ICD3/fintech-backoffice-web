import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const checkboxRoot = style({
  height: '16px',
  width: '16px',
  borderRadius: '4px',
  border: `1px solid ${vars.color.primary}`,
  background: vars.color.white,
  boxShadow: '0 1px 2px 0 rgba(24,37,76,0.04)',
  outline: 'none',
  transition: 'background 0.2s, border 0.2s',
  padding: 0,
  margin: 0,

  selectors: {
    '&:focus-visible': {
      outline: 'none',
    },
    '&[data-state="checked"]': {
      background: vars.color.primary,
      color: vars.color.white,
      borderColor: vars.color.primaryD,
    },
  },
});

export const checkboxIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.white,
  height: '100%',
  width: '100%',
});
