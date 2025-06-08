import Flex from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import Card from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTransactionParams } from '@/features/transaction/transaction-list/hooks/useTransactionParams';
import { cx } from '@/utils/cx';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon, RotateCcw, SearchIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import * as styles from './search-filter.css';

const STATUS_OPTIONS = [
  { label: '결제대기', value: 'REQUESTED' },
  { label: '결제완료', value: 'COMPLETED' },
  { label: '결제실패', value: 'FAILED' },
] as const;

const searchSchema = z.object({
  dateRange: z.object({
    from: z.date({ required_error: '시작일을 선택해주세요.' }),
    to: z.date({ required_error: '종료일을 선택해주세요.' }),
  }),
  status: z.string().optional(),
});

type SearchFormData = z.infer<typeof searchSchema>;

const SearchFilter = () => {
  const { params, updateParams } = useTransactionParams();

  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      dateRange: {
        from: new Date(params.startDate),
        to: new Date(params.endDate),
      },
      status: params.status,
    },
  });

  const handleSubmit = (data: SearchFormData) => {
    updateParams({
      startDate: format(data.dateRange.from, 'yyyy-MM-dd'),
      endDate: format(data.dateRange.to, 'yyyy-MM-dd'),
      status: data.status,
    });
  };

  const handleReset = () => {
    const defaultValues = {
      dateRange: {
        from: addDays(new Date(), -20),
        to: new Date(),
      },
      status: '',
    };
    form.reset(defaultValues);
    handleSubmit(defaultValues);
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: '100%' }}>
          <Flex direction={'row'} gap={'12px'} align={'center'} width={'100%'} justify={'between'}>
            <Flex direction={'row'} gap={'12px'}>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="거래 상태" />
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_OPTIONS.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
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
                              className={cx(
                                styles.datePickerButton,
                                !field.value && styles.mutedText
                              )}
                            >
                              <CalendarIcon className={styles.calendarIcon} />
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
            </Flex>

            <Flex gap={'8px'}>
              <Button
                type="button"
                size={'sm'}
                variant={'ghost'}
                width={'fit'}
                onClick={handleReset}
              >
                <RotateCcw size={18} />
              </Button>
              <Button type="submit" size={'sm'} variant={'secondary'} width={'fit'}>
                <SearchIcon size={18} />
              </Button>
            </Flex>
          </Flex>
        </form>
      </Form>
    </Card>
  );
};

export default SearchFilter;
