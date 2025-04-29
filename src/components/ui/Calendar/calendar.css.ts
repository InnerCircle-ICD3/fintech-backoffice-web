import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

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
    alignItems: 'flex-start', // items-start
  }),

  buttonNav: style({
    position: 'absolute',
    height: '1.75rem', // h-7
    width: '1.75rem', // w-7
    backgroundColor: 'transparent', // bg-transparent
    padding: 0, // p-0
    opacity: 0.8, // opacity-80
    ':hover': {
      opacity: 1, // hover:opacity-100
    },
  }),

  buttonLeft: style({
    left: 0, // left-0
  }),

  buttonRight: style({
    right: 0, // right-0
  }),

  chevronIcon: style({
    height: '1rem', // h-4
    width: '1rem', // w-4
  }),
};

export const grid = {
  monthGrid: style({
    marginLeft: 'auto', // mx-auto
    marginRight: 'auto',
    marginTop: '1rem', // mt-4
  }),

  week: style({
    marginTop: '0.5rem', // mt-2
    display: 'flex',
    width: 'max-content', // w-max
    alignItems: 'flex-start', // items-start
  }),

  day: style({
    padding: '5px',
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
    padding: 0, // p-0
    fontWeight: vars.fontWeight.regular, // font-normal
    transition: 'none', // transition-none
    selectors: {
      '&[aria-selected="true"]': {
        opacity: 1, // aria-selected:opacity-100
      },
    },
  }),

  yearButton: style({
    height: '1.75rem', // h-7
    width: '100%', // w-full
    fontSize: vars.fontSize.sm, // text-sm
    fontWeight: vars.fontWeight.regular, // font-normal
    color: 'inherit', // text-foreground
  }),

  captionButton: style({
    height: '1.75rem', // h-7
    width: '100%', // w-full
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', // truncate
    fontSize: vars.fontSize.sm, // text-sm
    fontWeight: vars.fontWeight.medium, // font-medium
  }),
};

// 상태 스타일
export const states = {
  selected: style({
    selectors: {
      '& > button': {
        backgroundColor: vars.color.primary, // bg-primary
        color: vars.color.white, // text-primary-foreground
      },
      '& > button:hover': {
        backgroundColor: vars.color.primary, // hover:bg-primary
        color: vars.color.white, // hover:text-primary-foreground
      },
    },
  }),

  today: style({
    selectors: {
      '& > button': {
        backgroundColor: vars.color.background, // bg-accent
        color: vars.color.text.title, // text-accent-foreground
      },
    },
  }),

  rangeStart: style({
    backgroundColor: vars.color.primaryB, // bg-accent
    selectors: {
      '&.day-range-start': {
        borderTopLeftRadius: '0.375rem', // rounded-s-md
        borderBottomLeftRadius: '0.375rem',
      },
      '& > button': {
        backgroundColor: vars.color.primary, // bg-primary
        color: vars.color.white, // text-primary-foreground
      },
      '& > button:hover': {
        backgroundColor: vars.color.primary, // hover:bg-primary
        color: vars.color.white, // hover:text-primary-foreground
      },
    },
  }),

  rangeMiddle: style({
    backgroundColor: vars.color.primaryB, // bg-accent
    selectors: {
      '& > button': {
        backgroundColor: 'transparent', // bg-transparent
        color: 'inherit', // !text-foreground
      },
      '& > button:hover': {
        backgroundColor: 'transparent', // hover:bg-transparent
        color: 'inherit', // hover:!text-foreground
      },
    },
  }),

  rangeEnd: style({
    backgroundColor: vars.color.primaryB, // bg-accent
    selectors: {
      '&.day-range-end': {
        borderTopRightRadius: '0.375rem', // rounded-e-md
        borderBottomRightRadius: '0.375rem',
      },
      '& > button': {
        backgroundColor: vars.color.primary, // bg-primary
        color: vars.color.white, // text-primary-foreground
      },
      '& > button:hover': {
        backgroundColor: vars.color.primary, // hover:bg-primary
        color: vars.color.white, // hover:text-primary-foreground
      },
    },
  }),

  outside: style({
    color: vars.color.text.sub, // text-muted-foreground
    opacity: 0.5, // opacity-50
    selectors: {
      '&[aria-selected="true"]': {
        backgroundColor: `${vars.color.primaryB}80`, // bg-accent/50
        color: vars.color.text.sub, // text-muted-foreground
        opacity: 0.3, // opacity-30
      },
    },
  }),

  disabled: style({
    color: vars.color.text.sub, // text-muted-foreground
    opacity: 0.5, // opacity-50
  }),

  hidden: style({
    visibility: 'hidden', // invisible
    flex: 1, // flex-1
  }),
};

// 연도 그리드 스타일
export const yearGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // grid-cols-4
  rowGap: '0.5rem', // gap-y-2
});

export const currentYearButton = style({
  backgroundColor: vars.color.background, // bg-accent
  fontWeight: vars.fontWeight.medium, // font-medium
  color: vars.color.text.title, // text-accent-foreground
});
