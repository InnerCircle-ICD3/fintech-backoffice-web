import fixtures from '@/mocks/fixtures';
import { http, HttpResponse, delay } from 'msw';

const LoaderHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/example-loader`, async () => {
    await delay(200);
    return HttpResponse.json(fixtures.exampleLoader, { status: 200 });
  }),
];

export default LoaderHandlers;
