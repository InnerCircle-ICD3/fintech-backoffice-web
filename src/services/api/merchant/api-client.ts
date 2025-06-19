import { ApiClientConfig } from '@/services/types/api-clinet-config';
import { safeParseResult } from '@/services/utils/safe-parse-result';
import { apiInstance } from './api-instance';

/**
 * @see http://34.22.72.227:8082/swagger-ui/index.html#/
 * @description 가맹점 API
 */
export const merchantApiClient = {
  get: async <T>(url: string, config: ApiClientConfig<T>) => {
    const { options = {}, schema } = config;
    return safeParseResult<T>(() => apiInstance.get(url, options), schema);
  },

  post: async <T>(url: string, config: ApiClientConfig<T>) => {
    const { data, options = {}, schema } = config;
    return safeParseResult<T>(() => apiInstance.post(url, data, options), schema);
  },

  put: async <T>(url: string, config: ApiClientConfig<T>) => {
    const { data, options = {}, schema } = config;
    return safeParseResult<T>(() => apiInstance.put(url, data, options), schema);
  },

  delete: async <T>(url: string, config: ApiClientConfig<T>) => {
    const { options = {}, schema } = config;
    return safeParseResult<T>(() => apiInstance.delete(url, options), schema);
  },
};
