import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const labelContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const popoverContentStyle = style({
  width: 'auto',
});

export const datePickerButton = style({
  width: '300px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.regular,
  backgroundColor: vars.color.inputBg,
  height: '43px',
});

export const datePickerButtonSingle = style({
  width: '240px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  fontWeight: vars.fontWeight.regular,
});

export const calendarIcon = style({
  marginRight: '8px',
  height: '16px',
  width: '16px',
});

export const datePickerContainer = style({
  display: 'grid',
  gap: '2px',
});

export const mutedText = style({
  color: vars.color.text.sub,
});
