import { z } from 'zod';

export interface ApiClientConfig<T> {
  options?: object;
  data?: unknown;
  schema: z.ZodType<T>;
}
