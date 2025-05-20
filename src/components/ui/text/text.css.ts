import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const text = recipe({
  base: {
    display: 'inline-block',
    margin: 0,
    width: 'fit-content',
  },
  variants: {
    weight: {
      regular: { fontWeight: vars.fontWeight.regular },
      medium: { fontWeight: vars.fontWeight.medium },
      bold: { fontWeight: vars.fontWeight.bold },
      extraBold: { fontWeight: vars.fontWeight.extraBold },
    },
    size: {
      xs: { fontSize: vars.fontSize.xs, lineHeight: '16px' },
      sm: { fontSize: vars.fontSize.sm, lineHeight: '24px' },
      md: { fontSize: vars.fontSize.md, lineHeight: '26px' },
      lg: { fontSize: vars.fontSize.lg, lineHeight: '28px' },
      xl: { fontSize: vars.fontSize.xl, lineHeight: '30px' },
      '2xl': { fontSize: vars.fontSize['2xl'], lineHeight: '32px' },
      '3xl': { fontSize: vars.fontSize['3xl'], lineHeight: '34px' },
      '4xl': { fontSize: vars.fontSize['4xl'], lineHeight: '40px' },
    },
    color: {
      primary: { color: vars.color.primary },
      title: { color: vars.color.text.title },
      main: { color: vars.color.text.main },
      sub: { color: vars.color.text.sub },
      paragraph: { color: vars.color.text.strong },
      caption: { color: vars.color.text.caption },
      menu: { color: vars.color.menu },
      label: { color: vars.color.label },
      white: { color: vars.color.white },
      red: { color: vars.color.red },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },
  defaultVariants: {
    weight: 'regular',
    size: 'sm',
    color: 'main',
  },
});
