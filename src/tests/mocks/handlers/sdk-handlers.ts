import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

const sdkHandlers = [
  http.post(`${import.meta.env.VITE_MAIN_API_URL}/sdk/issue`, async () => {
    return HttpResponse.json(fixtures.sdkIssue.response, { status: 200 });
  }),
];

export default sdkHandlers;
