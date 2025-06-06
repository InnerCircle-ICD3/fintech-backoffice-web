import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  gap: '0',
  padding: '0',
});

export const contentWrapper = style({
  width: '100%',
  padding: '1rem',
});

export const noticeContainer = style({
  width: '100%',
  backgroundColor: '#FFF5F5',
  border: '1px solid #FFE3E3',
  color: '#E03131',
  fontSize: '0.875rem',
  lineHeight: '1.5',
  padding: '1rem',
  borderRadius: '0.5rem',
});

export const noticeList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
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

export const buttonWrapper = style({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});

export const buttonIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});
