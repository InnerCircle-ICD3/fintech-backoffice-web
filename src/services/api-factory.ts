import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { axiosInstance } from './api-instance';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface ApiEndpointDefinition<TReq, TRes> {
  path: string;
  method: HttpMethod;
  requestSchema?: z.ZodType<TReq>;
  responseSchema: z.ZodType<TRes>;
  axiosInstance?: AxiosInstance;
}

export const createApiEndpoint = <TReq, TRes>({
  path,
  method,
  requestSchema,
  responseSchema,
}: ApiEndpointDefinition<TReq, TRes>) => {
  return async (
    payload?: TReq,
    pathParams: Record<string, string> = {},
    axiosConfig: AxiosRequestConfig = {}
  ) => {
    /**
     * URL의 path parameter를 실제 값으로 치환합니다.
     * @example
     * path: '/users/:userId/posts/:postId'
     * pathParams: { userId: '123', postId: '456' }
     * 결과: '/users/123/posts/456'
     */
    const url = Object.entries(pathParams).reduce(
      (path, [key, value]) => path.replace(`:${key}`, value),
      path
    );

    const validatedPayload =
      payload && requestSchema
        ? (() => {
            const result = requestSchema.safeParse(payload);
            if (!result.success) {
              throw fromZodError(result.error);
            }
            return result.data;
          })()
        : payload;

    const data = await axiosInstance({
      ...axiosConfig,
      url,
      method,
      ...(method === 'get' || method === 'delete'
        ? { params: validatedPayload }
        : { data: validatedPayload }),
    });

    const result = responseSchema.safeParse(data);
    if (!result.success) {
      console.error('에러:', result.error);
      throw new Error(`API 응답이 예상과 달라요: ${fromZodError(result.error).toString()}`);
    }

    return result.data;
  };
};
