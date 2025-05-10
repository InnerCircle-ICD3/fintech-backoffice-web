import fixtures from '@/fixtures';
import { http, HttpResponse, delay } from 'msw';

const LoaderHandlers = [
  http.get(`${import.meta.env.VITE_API_URL}/loader`, async () => {
    await delay(200);
    return HttpResponse.json(fixtures.loader, { status: 200 });
  }),
];

export default LoaderHandlers;
