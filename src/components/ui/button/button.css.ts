import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const button = recipe({
  base: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: vars.fontWeight.medium,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-out, color 0.2s ease-out',

    ':disabled': {
      cursor: 'not-allowed',
      backgroundColor: vars.color.disabledBg,
      color: vars.color.disabledText,
    },
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        ':hover': {
          backgroundColor: vars.color.primaryD,
        },
        ':disabled': {
          backgroundColor: vars.color.disabledBg,
          color: vars.color.disabledText,
        },
      },
      secondary: {
        backgroundColor: vars.color.white,
        color: vars.color.text.main,
        border: `1px solid ${vars.color.border}`,
        ':hover': {
          backgroundColor: vars.color.primaryB,
        },
        ':disabled': {
          borderColor: vars.color.border,
        },
      },
      destructive: {
        backgroundColor: vars.color.red,
        color: vars.color.white,
        ':hover': {
          backgroundColor: vars.color.redD,
        },
        ':disabled': {
          backgroundColor: vars.color.disabledBg,
          color: vars.color.disabledText,
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.text.main,
        border: 'none',
        ':hover': {
          backgroundColor: vars.color.etc,
        },
      },
    },
    size: {
      sm: {
        fontSize: vars.fontSize.sm,
        padding: '6px 12px',
      },
      md: {
        fontSize: vars.fontSize.md,
        padding: '10px 16px',
      },
      lg: {
        fontSize: vars.fontSize.lg,
        padding: '20px',
        borderRadius: '14px',
      },
    },
  },

  compoundVariants: [],

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
