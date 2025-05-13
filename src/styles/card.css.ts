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
        border: `1px solid ${vars.color.border}`,
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
