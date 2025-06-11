import { TransactionRequestType } from '@/api/transaction/schema';
import { addDays, format } from 'date-fns';
import { useSearchParams } from 'react-router-dom';

type TransactionParams = Omit<TransactionRequestType, 'merchantId'>;

/** 거래 내역 조회 기본값 */
const TRANSACTION_DEFAULTS = {
  /** 기본 페이지 번호 */
  PAGE_NUMBER: 0,
  /** 기본 페이지 크기 */
  PAGE_SIZE: 10,
  /** 기본 조회 기간 (일) */
  SEARCH_PERIOD_DAYS: 7,
} as const;

export const useTransactionParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params: TransactionParams = {
    page: Number(searchParams.get('page')) || TRANSACTION_DEFAULTS.PAGE_NUMBER,
    size: Number(searchParams.get('size')) || TRANSACTION_DEFAULTS.PAGE_SIZE,
    startDate:
      searchParams.get('startDate') ||
      format(addDays(new Date(), -TRANSACTION_DEFAULTS.SEARCH_PERIOD_DAYS), 'yyyy-MM-dd'),
    endDate: searchParams.get('endDate') || format(new Date(), 'yyyy-MM-dd'),
    status: searchParams.get('status') || '',
    sort: 'createdAt',
  };

  const updateParams = (newParams: Partial<TransactionParams>) => {
    const updatedParams = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value !== undefined) {
        updatedParams.set(key, value.toString());
      }
    });
    setSearchParams(updatedParams);
  };

  return {
    params,
    updateParams,
  };
};
