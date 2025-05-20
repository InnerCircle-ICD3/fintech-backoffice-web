import fixtures from '@/tests/mocks/fixtures';
import { http, HttpResponse, delay } from 'msw';

const exampleLoaderHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/example-loader`, async () => {
    console.log('Fetching example loader data...');
    await delay(200);
    return HttpResponse.json(fixtures.exampleLoader, { status: 200 });
  }),

  // http.get(`${import.meta.env.VITE_API_URL}/approval-manage`, async () => {
  //   console.log('Fetching example loader error data...');
  //   await delay(200);
  //   return HttpResponse.json(
  //     {
  //       code: 'INVALID_REQUEST',
  //       message: '토큰 만료',
  //     },
  //     { status: 401 }
  //   );
  // }),
];

export default exampleLoaderHandlers;
