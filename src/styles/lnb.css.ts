import { flex } from '@/components/layout/flex/flex.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const lnbContainer = style({
  height: '100%',
  padding: '20px',
  whiteSpace: 'nowrap',
});

export const lnb = style([
  {
    width: '100%',
    height: '100%',

    background: vars.color.white,

    border: `1px solid ${vars.color.border}`,

    overflow: 'hidden',
  },
]);

export const top = style([flex({ direction: 'column', grow: 'full' }), { gap: '16px' }]);

export const menu = style({
  width: '100%',
  background: vars.color.white,
});

export const lnbControlContainer = style([
  flex({ grow: 'wFull', justify: 'between', align: 'center' }),
  {
    height: '40px',
    minHeight: '40px',
    padding: '8px 16px',
    borderBottom: `1px solid ${vars.color.border}`,
  },
]);

export const LnbMenuContainer = recipe({
  base: [
    flex({ direction: 'column' }),
    {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      overflowX: 'hidden',
    },
  ],
  variants: {
    expand: { true: {}, false: {} },
  },
});

export const sidebarContainer = style({
  display: 'flex',
  height: '100vh',
});

export const menuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const profile = style({
  padding: '24px 20px',
  borderBottom: `1px solid ${vars.color.border}`,
  marginBottom: '8px',
  cursor: 'pointer',
});

export const logo = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.menu,
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const logoIcon = style({
  width: '32px',
  height: '32px',
  borderRadius: '8px',
  backgroundColor: vars.color.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.white,
  fontWeight: vars.fontWeight.bold,
  fontSize: vars.fontSize.md,
});

export const expandIcon = style({
  transition: 'transform 0.3s ease',
  width: '20px',
  height: '20px',
  color: vars.color.menu,
  selectors: {
    '&[data-open="true"]': {
      transform: 'rotate(90deg)',
      color: vars.color.primary,
    },
  },
});

export const logoutSection = style({
  cursor: 'pointer',
  marginTop: 'auto',
  padding: '16px 20px',
  borderTop: `1px solid ${vars.color.border}`,
});
