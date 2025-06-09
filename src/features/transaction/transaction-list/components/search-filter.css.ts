import { flex } from '@/components/layout/flex/flex.css';
import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const searchContainer = style([
  flex({ direction: 'row' }),
  {
    gap: '16px',
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.border}`,
    borderRadius: '10px',
    padding: '20px',
  },
]);

export const formFieldsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const formItemStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '8px',
  border: `1px solid ${vars.color.border}`,
  padding: '12px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
});

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
