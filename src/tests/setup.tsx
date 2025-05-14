import '@testing-library/jest-dom';
import '@vanilla-extract/css/disableRuntimeStyles';

import server from './mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
