import server from '@/tests/mocks/server';
import { http, HttpResponse } from 'msw';
import { z } from 'zod';
import { createApiEndpoint } from '../api-factory';

describe('API 엔드포인트 생성', () => {
  describe('GET 요청을 보낼 때', () => {
    const endpoint = createApiEndpoint({
      path: '/users/:userId',
      method: 'get',
      responseSchema: z.object({
        id: z.string(),
        name: z.string(),
      }),
    });

    it('path parameter를 포함하여 요청하면 해당 값이 URL에 포함된다', async () => {
      // Given
      server.use(
        http.get('/users/:userId', ({ params }) => {
          return HttpResponse.json({
            id: params.userId,
            name: '열정페이',
          });
        })
      );

      const result = await endpoint(undefined, { userId: '123' });

      expect(result).toEqual({
        id: '123',
        name: '열정페이',
      });
    });

    it('API 응답이 스키마와 다르면 검증 에러가 발생한다', async () => {
      server.use(
        http.get('/users/:userId', () => {
          return HttpResponse.json({
            id: 123,
            name: '열정페이',
          });
        })
      );

      await expect(endpoint(undefined, { userId: '123' })).rejects.toThrow(
        'API 응답이 예상과 달라요'
      );
    });
  });

  describe('POST 요청을 보낼 때', () => {
    const endpoint = createApiEndpoint({
      path: '/users',
      method: 'post',
      requestSchema: z.object({
        name: z.string(),
        age: z.number(),
      }),
      responseSchema: z.object({
        id: z.string(),
        name: z.string(),
        age: z.number(),
      }),
    });

    it('요청 데이터가 스키마와 다르면 요청을 보내기 전에 에러가 발생한다', async () => {
      const invalidData = {
        name: '열정페이',
        age: '25',
      };

      // @ts-expect-error 의도적으로 잘못된 타입의 데이터로 테스트
      await expect(endpoint(invalidData)).rejects.toThrow();
    });

    it('요청 데이터가 스키마와 일치하면 API 요청이 성공한다', async () => {
      const requestData = {
        name: '열정페이',
        age: 25,
      };

      server.use(
        http.post('/users', async ({ request }) => {
          const body = (await request.json()) as { name: string; age: number };
          return HttpResponse.json({
            id: '123',
            ...body,
          });
        })
      );

      const result = await endpoint(requestData);

      expect(result).toEqual({
        id: '123',
        name: '열정페이',
        age: 25,
      });
    });
  });
});
