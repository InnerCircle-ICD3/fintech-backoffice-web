import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

const errorPageContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: vars.color.background,
  padding: '1rem',
});

const errorCardStyle = style({
  backgroundColor: vars.color.white,
  padding: '2.5rem',
  borderRadius: '12px',
  textAlign: 'center',
  maxWidth: '500px',
  width: '100%',
});

const iconContainerStyle = style({
  marginBottom: '1.5rem',
});

const iconStyle = style({
  color: vars.color.red,
});

const errorTitleStyle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.title,
  marginBottom: '1rem',
});

const errorMessageStyle = style({
  fontSize: vars.fontSize.md,
  color: vars.color.text.main,
  lineHeight: '1.6',
  marginBottom: '2rem',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-wrap',
});

const buttonContainerStyle = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
});

const linkStyle = style({
  textDecoration: 'none',
  color: 'inherit',
});

export {
  errorPageContainerStyle,
  errorCardStyle,
  iconContainerStyle,
  iconStyle,
  errorTitleStyle,
  errorMessageStyle,
  buttonContainerStyle,
  linkStyle,
};
