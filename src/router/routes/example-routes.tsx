import { exampleLoader } from '@/router/loader';
import { RouteObject } from 'react-router-dom';

import { QueryClient } from '@tanstack/react-query';
import { lazyImport } from '@/utils/lazy-lmport';

const Example = lazyImport(() => import('@/pages/example'));

export const exampleRoutes = (queryClient: QueryClient): RouteObject[] => [
  {
    path: '/example',
    lazy: Example,
    loader: exampleLoader(queryClient),
  },
];
