import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const safeParseResult = async <T>(fn: () => Promise<any>, schema: z.ZodType<T>) => {
  const result = await fn();
  const parsedResult = schema.safeParse(result.data);

  if (!parsedResult.success) {
    throw new Error(`API 응답이 예상과 달라요: ${fromZodError(parsedResult.error).toString()}`);
  }

  return parsedResult.data;
};
