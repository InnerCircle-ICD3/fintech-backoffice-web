import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const sidebarContainer = style({
  display: 'flex',
  height: '100vh',
});

export const sidebar = style([
  {
    width: '100%',
    height: '100%',

    background: vars.color.white,

    border: `1px solid ${vars.color.border}`,

    overflow: 'hidden',
  },
]);

export const menu = style({
  width: '100%',
  background: vars.color.white,
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

export const profileInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: 0,
});

export const profileInfoItem = style({
  padding: 0,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.text.sub,
});

export const logo = style({
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.menu,
  letterSpacing: '-0.02em',
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
});

export const logoIcon = style({
  width: '28px',
  height: '28px',
  borderRadius: '8px',
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

export const footerSection = style({
  marginTop: 'auto',
  padding: '16px 20px',
  borderTop: `1px solid ${vars.color.border}`,
});

export const footerMenuButton = style({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '8px',
  padding: '10px',
});

export const sdkKeyCopyButton = style({
  padding: '0px',
});

export const sdkKeyButtonSubmitButton = style({
  padding: '10px 16px',
});
