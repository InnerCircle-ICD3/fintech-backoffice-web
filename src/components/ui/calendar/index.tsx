import { Button } from '@/components/ui/button';
import { button } from '@/components/ui/button/button.css';
import * as style from '@/components/ui/calendar/calendar.css';
import { cx } from '@/utils/cx';
import { differenceInCalendarDays } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';

import {
  DayPicker,
  labelNext,
  labelPrevious,
  useDayPicker,
  type DayPickerProps,
} from 'react-day-picker';

/**
 * 기본 DayPickerProps에 추가적인 프로퍼티를 확장한 CalendarProps 타입 정의
 */
export type CalendarProps = DayPickerProps & {
  /**
   * 연도 뷰에서 한 번에 표시할 연도 수
   * @default 12
   */
  yearRange?: number;

  /**
   * 캡션에 연도 전환 기능을 표시할지 여부
   * @default true
   */
  showYearSwitcher?: boolean;

  /** 클래스명 커스터마이징 옵션들 */
  monthsClassName?: string;
  monthCaptionClassName?: string;
  weekdaysClassName?: string;
  weekdayClassName?: string;
  monthClassName?: string;
  captionClassName?: string;
  captionLabelClassName?: string;
  buttonNextClassName?: string;
  buttonPreviousClassName?: string;
  navClassName?: string;
  monthGridClassName?: string;
  weekClassName?: string;
  dayClassName?: string;
  dayButtonClassName?: string;
  rangeStartClassName?: string;
  rangeEndClassName?: string;
  selectedClassName?: string;
  todayClassName?: string;
  outsideClassName?: string;
  disabledClassName?: string;
  rangeMiddleClassName?: string;
  hiddenClassName?: string;
};

/**
 * 네비게이션 뷰 타입 - 일(달력) 또는 연도 선택 모드
 */
type NavView = 'days' | 'years';

/**
 * react-day-picker 기반의 커스텀 캘린더 컴포넌트
 *
 * 기능:
 * - 일/월/연도 선택 기능
 * - 날짜 범위 선택 지원
 * - 연도 뷰와 월 뷰 전환 가능
 *
 * @param props 캘린더 컴포넌트 속성
 * @default yearRange 12
 */

function Calendar({
  className,
  showOutsideDays = true, //  현재 월 달력에 이전 달과 다음 달의 날짜를 흐리게 표시할지
  showYearSwitcher = true, // 달력 헤더(캡션)에 연도 선택 뷰로 전환하는 버튼을 보여줄지
  yearRange = 12, // 연도 뷰에서 표시할 연도 수
  numberOfMonths, // 한 번에 몇 개의 월 달력을 보여줄지
  ...props
}: CalendarProps) {
  const [navView, setNavView] = React.useState<NavView>('days');
  const [displayYears, setDisplayYears] = React.useState<{
    from: number;
    to: number;
  }>(
    React.useMemo(() => {
      const currentYear = new Date().getFullYear();
      // 현재 연도를 중심으로 앞뒤로 연도 범위를 계산합니다.
      // 예를 들어 range가 12이면, 현재 연도 기준 약 5년 전부터 6년 후까지 표시됩니다
      return {
        from: currentYear - Math.floor(yearRange / 2 - 1),
        to: currentYear + Math.ceil(yearRange / 2),
      };
    }, [yearRange])
  );

  const { onNextClick, onPrevClick, startMonth, endMonth } = props;

  /**
   * The number of displayed months.
   *
   * @defaultValue 1
   * @see https://daypicker.dev/docs/customization#multiplemonths
   */
  const columnsDisplayed = navView === 'years' ? 1 : numberOfMonths;

  /** layout */
  const _monthsClassName = cx(style.layout.months, props.monthsClassName);
  const _monthCaptionClassName = cx(style.layout.monthCaption, props.monthCaptionClassName);
  const _weekdaysClassName = cx(style.layout.weekDays, props.weekdaysClassName);
  const _weekdayClassName = cx(style.layout.weekday, props.weekdayClassName);
  const _monthClassName = cx(style.layout.month, props.monthClassName);
  const _captionClassName = cx(style.layout.caption, props.captionClassName);
  const _captionLabelClassName = cx(style.layout.captionLabel, props.captionLabelClassName);

  /** navigation */
  const buttonNavClassName = cx(button({ variant: 'secondary' }), style.navigation.buttonNav);
  const _buttonNextClassName = cx(
    buttonNavClassName,
    style.navigation.buttonRight,
    props.buttonNextClassName
  );
  const _buttonPreviousClassName = cx(
    buttonNavClassName,
    style.navigation.buttonLeft,
    props.buttonPreviousClassName
  );
  const _navClassName = cx(style.navigation.nav, props.navClassName);

  /** grid */
  const _monthGridClassName = cx(style.grid.monthGrid, props.monthGridClassName);
  const _weekClassName = cx(style.grid.week, props.weekClassName);
  const _dayClassName = cx(style.grid.day, props.dayClassName);

  /** state */
  const _dayButtonClassName = cx(
    button({ variant: 'ghost' }),
    style.interactive.dayButton,
    props.dayButtonClassName
  );

  // 상태 스타일
  const _rangeStartClassName = cx(
    style.states.rangeStart,
    'day-range-start',
    props.rangeStartClassName
  );

  const _rangeEndClassName = cx(style.states.rangeEnd, 'day-range-end', props.rangeEndClassName);

  const _rangeMiddleClassName = cx(style.states.rangeMiddle, props.rangeMiddleClassName);

  const _selectedClassName = cx(style.states.selected, props.selectedClassName);

  const _todayClassName = cx(style.states.today, props.todayClassName);

  const _outsideClassName = cx(style.states.outside, 'day-outside', props.outsideClassName);

  const _disabledClassName = cx(style.states.disabled, props.disabledClassName);

  const _hiddenClassName = cx(style.states.hidden, props.hiddenClassName);

  return (
    <>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={className}
        classNames={{
          months: _monthsClassName,
          month_caption: _monthCaptionClassName,
          weekdays: _weekdaysClassName,
          weekday: _weekdayClassName,
          month: _monthClassName,
          caption: _captionClassName,
          caption_label: _captionLabelClassName,
          button_next: _buttonNextClassName,
          button_previous: _buttonPreviousClassName,
          nav: _navClassName,
          month_grid: _monthGridClassName,
          week: _weekClassName,
          day: _dayClassName,
          day_button: _dayButtonClassName,
          range_start: _rangeStartClassName,
          range_middle: _rangeMiddleClassName,
          range_end: _rangeEndClassName,
          selected: _selectedClassName,
          today: _todayClassName,
          outside: _outsideClassName,
          disabled: _disabledClassName,
          hidden: _hiddenClassName,
        }}
        components={{
          Chevron: ({ orientation }) => {
            const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
            return <Icon size={14} />;
          },
          Nav: ({ className }) => (
            <Nav
              className={className}
              displayYears={displayYears}
              navView={navView}
              setDisplayYears={setDisplayYears}
              startMonth={startMonth}
              endMonth={endMonth}
              onNextClick={onNextClick}
              onPrevClick={onPrevClick}
            />
          ),
          CaptionLabel: (props) => (
            <CaptionLabel
              showYearSwitcher={showYearSwitcher}
              navView={navView}
              setNavView={setNavView}
              displayYears={displayYears}
              {...props}
            />
          ),
          MonthGrid: ({ className, children, ...props }) => (
            <MonthGrid
              className={className}
              displayYears={displayYears}
              startMonth={startMonth}
              endMonth={endMonth}
              navView={navView}
              setNavView={setNavView}
              {...props}
            >
              {children}
            </MonthGrid>
          ),
        }}
        numberOfMonths={columnsDisplayed}
        {...props}
      />
    </>
  );
}
Calendar.displayName = 'Calendar';

function Nav({
  className,
  navView,
  startMonth,
  endMonth,
  displayYears,
  setDisplayYears,
  onPrevClick,
  onNextClick,
}: {
  className?: string;
  navView: NavView;
  startMonth?: Date;
  endMonth?: Date;
  displayYears: { from: number; to: number };
  setDisplayYears: React.Dispatch<React.SetStateAction<{ from: number; to: number }>>;
  onPrevClick?: (date: Date) => void;
  onNextClick?: (date: Date) => void;
}) {
  const { nextMonth, previousMonth, goToMonth } = useDayPicker();

  /**
   * dat vs years 에따라 이전/다음 버튼의 비활성화 여부를 결정합니다.
   * - startMonth와 endMonth가 설정된 경우, 해당 범위를 벗어나는 경우 비활성화됩니다.
   */
  const isPreviousDisabled = (() => {
    if (navView === 'years') {
      return (
        (startMonth &&
          differenceInCalendarDays(new Date(displayYears.from - 1, 0, 1), startMonth) < 0) ||
        (endMonth && differenceInCalendarDays(new Date(displayYears.from - 1, 0, 1), endMonth) > 0)
      );
    }
    return !previousMonth;
  })();

  const isNextDisabled = (() => {
    if (navView === 'years') {
      return (
        (startMonth &&
          differenceInCalendarDays(new Date(displayYears.to + 1, 0, 1), startMonth) < 0) ||
        (endMonth && differenceInCalendarDays(new Date(displayYears.to + 1, 0, 1), endMonth) > 0)
      );
    }
    return !nextMonth;
  })();

  const handlePreviousClick = React.useCallback(() => {
    if (!previousMonth) return;
    if (navView === 'years') {
      setDisplayYears((prev) => ({
        from: prev.from - (prev.to - prev.from + 1),
        to: prev.to - (prev.to - prev.from + 1),
      }));
      onPrevClick?.(new Date(displayYears.from - (displayYears.to - displayYears.from), 0, 1));
      return;
    }
    goToMonth(previousMonth);
    onPrevClick?.(previousMonth);
  }, [previousMonth, goToMonth, displayYears, navView, onPrevClick, setDisplayYears]);

  const handleNextClick = React.useCallback(() => {
    if (!nextMonth) return;
    if (navView === 'years') {
      setDisplayYears((prev) => ({
        from: prev.from + (prev.to - prev.from + 1),
        to: prev.to + (prev.to - prev.from + 1),
      }));
      onNextClick?.(new Date(displayYears.from + (displayYears.to - displayYears.from), 0, 1));
      return;
    }
    goToMonth(nextMonth);
    onNextClick?.(nextMonth);
  }, [goToMonth, nextMonth, displayYears, navView, onNextClick, setDisplayYears]);
  return (
    <nav className={cx(style.navigation.nav, className)}>
      <Button
        variant="secondary"
        className={cx(style.navigation.buttonNav, style.navigation.buttonLeft)}
        type="button"
        tabIndex={isPreviousDisabled ? undefined : -1}
        disabled={isPreviousDisabled}
        aria-label={
          navView === 'years'
            ? `Go to the previous ${displayYears.to - displayYears.from + 1} years`
            : labelPrevious(previousMonth)
        }
        onClick={handlePreviousClick}
      >
        <ChevronLeft className={style.navigation.chevronIcon} />
      </Button>

      <Button
        variant="secondary"
        className={cx(style.navigation.buttonNav, style.navigation.buttonRight)}
        type="button"
        tabIndex={isNextDisabled ? undefined : -1}
        disabled={isNextDisabled}
        aria-label={
          navView === 'years'
            ? `Go to the next ${displayYears.to - displayYears.from + 1} years`
            : labelNext(nextMonth)
        }
        onClick={handleNextClick}
      >
        <ChevronRight className={style.navigation.chevronIcon} />
      </Button>
    </nav>
  );
}

function CaptionLabel({
  children,
  showYearSwitcher,
  navView,
  setNavView,
  displayYears,
  ...props
}: {
  showYearSwitcher?: boolean;
  navView: NavView;
  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
  displayYears: { from: number; to: number };
} & React.HTMLAttributes<HTMLSpanElement>) {
  if (!showYearSwitcher) return <span {...props}>{children}</span>;
  return (
    <Button
      className={cx(style.interactive.captionButton)}
      variant="ghost"
      size="sm"
      onClick={() => setNavView((prev) => (prev === 'days' ? 'years' : 'days'))}
    >
      {navView === 'days' ? children : `${displayYears.from} - ${displayYears.to}`}
    </Button>
  );
}

function MonthGrid({
  className,
  children,
  displayYears,
  startMonth,
  endMonth,
  navView,
  setNavView,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  displayYears: { from: number; to: number };
  startMonth?: Date;
  endMonth?: Date;
  navView: NavView;
  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
} & React.TableHTMLAttributes<HTMLTableElement>) {
  if (navView === 'years') {
    return (
      <YearGrid
        displayYears={displayYears}
        startMonth={startMonth}
        endMonth={endMonth}
        setNavView={setNavView}
        navView={navView}
        className={className}
        {...props}
      />
    );
  }
  return (
    <table className={className} {...props}>
      {children}
    </table>
  );
}

function YearGrid({
  className,
  displayYears,
  startMonth,
  endMonth,
  setNavView,
  navView,
  ...props
}: {
  className?: string;
  displayYears: { from: number; to: number };
  startMonth?: Date;
  endMonth?: Date;
  setNavView: React.Dispatch<React.SetStateAction<NavView>>;
  navView: NavView;
} & React.HTMLAttributes<HTMLDivElement>) {
  const { goToMonth, selected } = useDayPicker();

  return (
    <div className={cx(style.yearGrid, className)} {...props}>
      {Array.from({ length: displayYears.to - displayYears.from + 1 }, (_, i) => {
        const isBefore =
          startMonth &&
          differenceInCalendarDays(new Date(displayYears.from + i, 11, 31), startMonth) < 0;

        const isAfter =
          endMonth && differenceInCalendarDays(new Date(displayYears.from + i, 0, 0), endMonth) > 0;

        const isDisabled = isBefore || isAfter;
        const isCurrentYear = displayYears.from + i === new Date().getFullYear();

        return (
          <Button
            key={`year-${displayYears.from + i}`}
            className={cx(style.interactive.yearButton, isCurrentYear && style.currentYearButton)}
            variant="ghost"
            onClick={() => {
              setNavView('days');
              goToMonth(
                new Date(displayYears.from + i, (selected as Date | undefined)?.getMonth() ?? 0)
              );
            }}
            disabled={navView === 'years' ? isDisabled : undefined}
          >
            {displayYears.from + i}
          </Button>
        );
      })}
    </div>
  );
}

export { Calendar };
