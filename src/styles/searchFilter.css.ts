import { style } from '@vanilla-extract/css';
import { flex } from '@/components/layout/flex/flex.css';
import { vars } from '@/styles/theme.css';

export const searchFilter = style([
  flex({ direction: 'column', grow: 'wFull' }),
  {
    gap: '16px',
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.border}`,
    borderRadius: '10px',
    padding: '20px',
  },
]);
