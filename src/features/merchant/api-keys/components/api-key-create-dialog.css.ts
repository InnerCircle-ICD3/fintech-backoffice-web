import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const contentWrapper = style({
  width: '100%',
  padding: '1rem',
});

export const noticeContainer = style({
  width: '100%',
  backgroundColor: '#FFFBEB',
  border: `1px solid ${vars.color.yellow}`,
  color: '#92400E',
  fontSize: '0.875rem',
  lineHeight: '1.5',
  padding: '1rem',
  borderRadius: '0.5rem',
});

export const noticeTitle = style({
  margin: 0,
  fontSize: vars.fontSize.md,
  fontWeight: 'bold',
  marginBottom: '0.5rem',
  color: '#92400E',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const noticeList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
});

export const noticeItem = style({
  position: 'relative',
  paddingLeft: '0.75rem',
  ':before': {
    content: '•',
    position: 'absolute',
    left: 0,
  },
});
