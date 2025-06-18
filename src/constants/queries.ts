import { TransactionParams } from '@/types/transaction-params';
import { isNotNullish } from '@/utils/type-guards';

export const QUERY_KEYS = {
  AUTH: {
    LOGIN: ['auth', 'login'] as const,
    REGISTER: ['auth', 'register'] as const,
  },
  MERCHANT: {
    INFO: ['merchant', 'info'] as const,
    DELETE: ['merchant', 'info', 'delete'] as const,
    UPDATE: ['merchant', 'info', 'update'] as const,
  },
  SDK: {
    KEY: ['sdk', 'key'] as const,
    REGENERATE: ['sdk', 'key', 'regenerate'] as const,
    ACTIVATE: ['sdk', 'key', 'activate'] as const,
    DEACTIVATE: ['sdk', 'key', 'deactivate'] as const,
  },
  API_KEYS: {
    LIST: ['api', 'keys'] as const,
    CREATE: ['api', 'keys', 'create'] as const,
    REISSUE: ['api', 'keys', 'reissue'] as const,
    DELETE: ['api', 'keys', 'delete'] as const,
  },
  TRANSACTION: {
    ALL: (params: TransactionParams) => ['transaction', 'all', params].filter(isNotNullish),
    DETAIL: ['transaction', 'detail'] as const,
  },
} as const;
