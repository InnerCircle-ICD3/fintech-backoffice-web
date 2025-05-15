import { exampleLoader } from '@/router/loader';
import type { RouteObject } from 'react-router-dom';

import type { QueryClient } from '@tanstack/react-query';
import { lazyImport } from '@/utils/lazy-lmport';

const Example = lazyImport(() => import('@/pages/example'));

export const exampleRoutes = (queryClient: QueryClient): RouteObject[] => [
  {
    path: '/example',
    lazy: Example,
    loader: exampleLoader(queryClient),
  },
];
