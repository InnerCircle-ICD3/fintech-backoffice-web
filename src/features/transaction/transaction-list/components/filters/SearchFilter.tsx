import Flex from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import {
  TRANSACTION_DEFAULTS,
  useTransactionParams,
} from '@/features/transaction/transaction-list/hooks/useTransactionParams';
import { zodResolver } from '@hookform/resolvers/zod';
import { addDays, format } from 'date-fns';
import { RotateCcw, SearchIcon } from 'lucide-react';
import { createContext, useContext, type ReactNode } from 'react';
import { useForm, type UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { DateRangePicker } from './DateRangePicker';
import { StatusSelect } from './StatusSelect';

const searchSchema = z.object({
  dateRange: z.object({
    from: z.date({ required_error: '시작일을 선택해주세요.' }),
    to: z.date({ required_error: '종료일을 선택해주세요.' }),
  }),
  status: z.string().optional(),
});

export type SearchFormData = z.infer<typeof searchSchema>;

interface SearchFilterContextValue {
  form: UseFormReturn<SearchFormData>;
  onSubmit: (data: SearchFormData) => void;
  onReset: () => void;
}

const SearchFilterContext = createContext<SearchFilterContextValue | null>(null);

const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (!context) {
    throw new Error('SearchFilter.* 컴포넌트는 SearchFilter 내부에서만 사용할 수 있습니다.');
  }
  return context;
};

interface SearchFilterComposition {
  Status: typeof StatusSelect;
  DateRange: typeof DateRangePicker;
  Actions: typeof SearchFilterActions;
}

const SearchFilter: React.FC<{ children: ReactNode }> & SearchFilterComposition = ({
  children,
}) => {
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
        from: addDays(new Date(), -TRANSACTION_DEFAULTS.SEARCH_PERIOD_DAYS),
        to: new Date(),
      },
      status: '',
    };
    form.reset(defaultValues);
    handleSubmit(defaultValues);
  };

  return (
    <SearchFilterContext.Provider value={{ form, onSubmit: handleSubmit, onReset: handleReset }}>
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: '100%' }}>
            <Flex
              direction={'row'}
              gap={'12px'}
              align={'center'}
              width={'100%'}
              justify={'between'}
            >
              {children}
            </Flex>
          </form>
        </Form>
      </Card>
    </SearchFilterContext.Provider>
  );
};

const SearchFilterActions = () => {
  const { onReset } = useSearchFilter();

  return (
    <Flex gap={'8px'}>
      <Button type="button" size={'sm'} variant={'ghost'} width={'fit'} onClick={onReset}>
        <RotateCcw size={18} />
      </Button>
      <Button type="submit" size={'sm'} variant={'secondary'} width={'fit'}>
        <SearchIcon size={18} />
      </Button>
    </Flex>
  );
};

SearchFilter.Status = function SearchFilterStatus() {
  // const { form } = useSearchFilter();
  return <StatusSelect />;
};

SearchFilter.DateRange = function SearchFilterDateRange() {
  // const { form } = useSearchFilter();
  return <DateRangePicker />;
};

SearchFilter.Actions = SearchFilterActions;

export default SearchFilter;
