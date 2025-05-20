import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// 입력 필드 스타일 레시피
export const input = recipe({
  base: {
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    fontSize: vars.fontSize.md,
    padding: '10px 16px',
    borderRadius: '8px',
    border: `1px solid ${vars.color.border}`,
    backgroundColor: vars.color.inputBg,
    color: vars.color.text.main,
    outline: 'none',
    transition: 'all 0.2s ease',

    '::placeholder': {
      fontSize: vars.fontSize.sm,
      color: vars.color.text.caption,
      fontWeight: vars.fontWeight.regular,
    },

    ':focus': {
      borderColor: vars.color.primary,
    },

    ':disabled': {
      backgroundColor: vars.color.disabledBg,
      color: vars.color.disabledText,
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      sm: {
        padding: '6px 12px',
        fontSize: vars.fontSize.sm,
      },
      md: {
        padding: '12px',
        fontSize: vars.fontSize.md,
      },
      lg: {
        padding: '16px',
        borderRadius: '12px',
        fontSize: vars.fontSize.lg,
      },
    },
    variant: {
      default: {},
      error: {
        borderColor: vars.color.red,
        ':focus': {
          borderColor: vars.color.red,
          boxShadow: `0 0 0 2px ${vars.color.shadow.red}`,
        },
      },
      success: {
        borderColor: vars.color.green,
        ':focus': {
          borderColor: vars.color.green,
          boxShadow: `0 0 0 2px rgba(0, 217, 139, 0.25)`,
        },
      },
    },

    fullWidth: {
      true: {
        // 부모 전체 너비를 차지하도록
        width: '100%',
      },
      false: {
        // 필요한 만큼만 차지하도록
        width: 'auto',
      },
    },
    withPrefix: {
      true: {
        paddingLeft: '40px',
      },
    },
    withSuffix: {
      true: {
        paddingRight: '40px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    fullWidth: true,
  },
});

export const inputContainer = recipe({
  base: {
    maxWidth: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'inline-flex',
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const prefixWrapper = style({
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
  color: vars.color.text.sub,
});

export const suffixWrapper = style({
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.text.sub,
});
