import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { globalStyle } from '@vanilla-extract/css';

export const layout = {
  months: style({
    position: 'relative',
    display: 'flex',
  }),

  monthCaption: style({
    position: 'relative',
    margin: '0 2.5rem',
    display: 'flex',
    height: '1.75rem',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  weekDays: style({
    display: 'flex',
    flexDirection: 'row',
  }),

  weekday: style({
    width: '2rem',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.regular,
    color: vars.color.text.sub,
  }),

  month: style({
    width: '100%',
  }),

  caption: style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0.25rem',
  }),

  captionLabel: style({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
  }),
};

export const navigation = {
  nav: style({
    display: 'flex',
    alignItems: 'flex-start',
  }),

  buttonNav: style({
    position: 'absolute',
    height: '1.75rem',
    width: '1.75rem',
    backgroundColor: 'transparent',
    padding: 0,
    opacity: 0.8,
    ':hover': {
      opacity: 1,
    },
  }),

  buttonLeft: style({
    left: 0,
  }),

  buttonRight: style({
    right: 0,
  }),

  chevronIcon: style({
    height: '1rem',
    width: '1rem',
  }),
};

export const grid = {
  monthGrid: style({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
  }),

  week: style({
    marginTop: '0.5rem',
    display: 'flex',
    width: 'max-content',
    alignItems: 'flex-start',
  }),

  day: style({
    textAlign: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#eee',
    },
  }),
};

export const interactive = {
  dayButton: style({
    width: '2rem',
    height: '2rem',
    borderRadius: '0.375rem',
    padding: 0,
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.regular,
    transition: 'none',
    selectors: {
      '&[aria-selected="true"]': {
        opacity: 1,
      },
    },
  }),

  yearButton: style({
    height: '1.75rem',
    width: '100%',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.regular,
    color: 'inherit',
  }),

  captionButton: style({
    height: '1.75rem',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
  }),
};

export const states = {
  selected: style({}),

  today: style({}),

  rangeStart: style({
    backgroundColor: vars.color.primaryB,
    selectors: {
      '&.day-range-start': {
        borderTopLeftRadius: '0.375rem',
        borderBottomLeftRadius: '0.375rem',
      },
    },
  }),

  rangeMiddle: style({
    backgroundColor: vars.color.primaryB,
  }),

  rangeEnd: style({
    backgroundColor: vars.color.primaryB,
    selectors: {
      '&.day-range-end': {
        borderTopRightRadius: '0.375rem',
        borderBottomRightRadius: '0.375rem',
      },
    },
  }),

  outside: style({
    color: vars.color.text.sub,
    opacity: 0.5,
    selectors: {
      '&[aria-selected="true"]': {
        backgroundColor: `${vars.color.primaryB}80`,
        color: vars.color.text.sub,
        opacity: 0.3,
      },
    },
  }),

  disabled: style({
    color: vars.color.text.sub,
    opacity: 0.5,
  }),

  hidden: style({
    visibility: 'hidden',
    flex: 1,
  }),
};

export const yearGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  rowGap: '0.5rem',
});

export const currentYearButton = style({
  backgroundColor: vars.color.background,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.title,
});

const selectedClass = states.selected;
globalStyle(`${selectedClass} button`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

globalStyle(`${selectedClass} button:hover`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

const todayClass = states.today;
globalStyle(`${todayClass} button`, {
  backgroundColor: vars.color.background,
  color: vars.color.text.title,
});

const rangeStartClass = states.rangeStart;
globalStyle(`${rangeStartClass} button`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

globalStyle(`${rangeStartClass} button:hover`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

const rangeMiddleClass = states.rangeMiddle;
globalStyle(`${rangeMiddleClass} button`, {
  backgroundColor: 'transparent',
  color: 'inherit',
});

globalStyle(`${rangeMiddleClass} button:hover`, {
  backgroundColor: 'transparent',
  color: 'inherit',
});

const rangeEndClass = states.rangeEnd;
globalStyle(`${rangeEndClass} button`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});

globalStyle(`${rangeEndClass} button:hover`, {
  backgroundColor: vars.color.primary,
  color: vars.color.white,
});
