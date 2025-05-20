import { recipe } from '@vanilla-extract/recipes';
import { flex } from '@/components/layout/flex/flex.css';
import { vars } from '@/styles/theme.css';

export const card = recipe({
  base: [
    flex({ direction: 'column' }),
    {
      width: '100%',
      background: vars.color.white,
    },
  ],
  variants: {
    type: {
      solid: {
        border: `1px solid ${vars.color.background}`,
        background: vars.color.white,
        boxShadow: '0px 0px 16px 0px rgba(243, 244, 246, 0.80)',
        borderRadius: '10px',
        padding: '20px',
        gap: '16px',
      },
      ghost: {},
    },
  },
  defaultVariants: {
    type: 'solid',
  },
});
