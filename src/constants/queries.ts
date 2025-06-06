export const QUERY_KEYS = {
  MERCHANT: {
    INFO: ['merchant', 'info'] as const,
  },
  SDK: {
    KEY: ['sdk', 'key'] as const,
    ACTIVATE: ['sdk', 'key', 'activate'] as const,
    DEACTIVATE: ['sdk', 'key', 'deactivate'] as const,
  },
  API_KEYS: {
    LIST: ['api', 'keys'] as const,
    CREATE: ['api', 'keys', 'create'] as const,
    REISSUE: ['api', 'keys', 'reissue'] as const,
    DELETE: ['api', 'keys', 'delete'] as const,
  },
} as const;
