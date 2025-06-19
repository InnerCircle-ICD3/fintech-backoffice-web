import { http, HttpResponse } from 'msw';
import fixtures from '../fixtures';

let currentSdkKey = fixtures.sdkKey.get.sdkKey;

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const sdkHandlers = [
  http.get(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key`, async () => {
    return HttpResponse.json({ sdkKey: currentSdkKey }, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key/activate`, async () => {
    return HttpResponse.json(fixtures.sdkKey.activate, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key/regenerate`, async () => {
    currentSdkKey = generateUUID();
    return HttpResponse.json(fixtures.sdkKey.regenerate, { status: 200 });
  }),
  http.post(`${import.meta.env.VITE_MERCHANT_API_URL}/sdk-key/deactivate`, async () => {
    return HttpResponse.json(fixtures.sdkKey.deactivate, { status: 200 });
  }),
];

export default sdkHandlers;
