import { z } from 'zod';
import { ko } from 'date-fns/locale';
import { addDays, format } from 'date-fns';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form/Form';
import { Button } from '@/components/ui/button/Button';
import { Calendar } from '@/components/ui/calendar/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover/Popover';
import { cx } from '@/utils/cx';
import { CalendarIcon } from 'lucide-react';
import {
  popoverContentStyle,
  datePickerButton,
  calendarIcon,
  datePickerContainer,
  mutedText,
} from '@/styles/example.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  dateRange: z.object({
    from: z.date({
      required_error: '시작일을 선택해주세요.',
    }),
    to: z.date({
      required_error: '종료일을 선택해주세요.',
    }),
  }),
});

export const ExampleDatePicker = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),

    // 예시로 20일 전부터 오늘까지의 날짜를 기본값으로 설정
    defaultValues: {
      dateRange: {
        from: addDays(new Date(), -20),
        to: new Date(),
      },
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    alert(
      JSON.stringify(
        {
          from: format(data.dateRange.from, 'yyyy-MM-dd'),
          to: format(data.dateRange.to, 'yyyy-MM-dd'),
        },
        null,
        2
      )
    );
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="dateRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>기간 선택</FormLabel>
                <div className={datePickerContainer}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          id="date"
                          variant="secondary"
                          className={cx(datePickerButton, !field.value && mutedText)}
                        >
                          <CalendarIcon className={calendarIcon} />
                          {field.value?.from ? (
                            field.value.to ? (
                              <>
                                {format(field.value.from, 'yyyy년 MM월 dd일', { locale: ko })} -{' '}
                                {format(field.value.to, 'yyyy년 MM월 dd일', { locale: ko })}
                              </>
                            ) : (
                              format(field.value.from, 'yyyy년 MM월 dd일', { locale: ko })
                            )
                          ) : (
                            <span>날짜를 선택하세요</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className={popoverContentStyle} align="start">
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
                <FormDescription>조회할 기간을 선택해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">제출하기</Button>
        </form>
      </Form>
    </>
  );
};
