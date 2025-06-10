import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cx } from '@/utils/cx';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import * as styles from './date-range-picker.css';

type DateRange = {
  from?: Date;
  to?: Date;
};

const formatDateRange = (dateRange?: DateRange) => {
  if (!dateRange?.from) {
    return '날짜를 선택하세요';
  }

  const formattedFrom = format(dateRange.from, 'yyyy년 MM월 dd일', { locale: ko });

  if (!dateRange.to) {
    return formattedFrom;
  }

  const formattedTo = format(dateRange.to, 'yyyy년 MM월 dd일', { locale: ko });
  return `${formattedFrom} - ${formattedTo}`;
};

export const DateRangePicker = () => {
  return (
    <FormField
      name="dateRange"
      render={({ field }) => (
        <FormItem>
          <div className={styles.datePickerContainer}>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    id="date"
                    variant="secondary"
                    className={cx(styles.datePickerButton, !field.value && styles.mutedText)}
                  >
                    <CalendarIcon className={styles.calendarIcon} />
                    <span>{formatDateRange(field.value)}</span>
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className={styles.popoverContentStyle} align="start">
                <Calendar
                  autoFocus
                  mode="range"
                  defaultMonth={field.value?.from}
                  selected={field.value}
                  onSelect={field.onChange}
                  numberOfMonths={2}
                  locale={ko}
                />
              </PopoverContent>
            </Popover>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
