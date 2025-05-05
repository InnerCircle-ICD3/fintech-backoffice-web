import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const switchRoot = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    height: '20px',
    width: '36px',
    flexShrink: 0,
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '9999px',
    border: '2px solid transparent',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    transition: 'all 0.2s ease',

    ':focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${vars.color.primaryL}`,
    },

    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    selectors: {
      '&[data-state=checked]': {
        backgroundColor: vars.color.primary,
      },
      '&[data-state=unchecked]': {
        backgroundColor: vars.color.disabledBg,
      },
    },
  },
  variants: {
    size: {
      sm: {
        height: '16px',
        width: '28px',
        padding: '0',
      },
      md: {
        height: '20px',
        width: '36px',
        padding: '0',
      },
      lg: {
        height: '24px',
        width: '44px',
        padding: '0',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const switchThumb = recipe({
  base: {
    pointerEvents: 'none',
    display: 'block',
    height: '16px',
    width: '16px',
    borderRadius: '9999px',
    backgroundColor: vars.color.white,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.2s ease',

    selectors: {
      '[data-state=checked] &': {
        transform: 'translateX(16px)',
      },
      '[data-state=unchecked] &': {
        transform: 'translateX(0)',
      },
    },
  },
  variants: {
    size: {
      sm: {
        height: '12px',
        width: '12px',
        selectors: {
          '[data-state=checked] &': {
            transform: 'translateX(12px)',
          },
        },
      },
      md: {
        height: '16px',
        width: '16px',
        selectors: {
          '[data-state=checked] &': {
            transform: 'translateX(16px)',
          },
        },
      },
      lg: {
        height: '20px',
        width: '20px',
        selectors: {
          '[data-state=checked] &': {
            transform: 'translateX(20px)',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});
