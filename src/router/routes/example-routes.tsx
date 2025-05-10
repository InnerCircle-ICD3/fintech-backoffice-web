import { appLoader } from '@/loader';
import { RouteObject } from 'react-router-dom';
import { lazyImport } from '@/utils/lazy-lmport';
import { QueryClient } from '@tanstack/react-query';

const Example = lazyImport(() => import('@/pages/example'));
const ExampleLoader = lazyImport(() => import('@/pages/example/components/ExampleLoader'));

export const exampleRoutes = (queryClient: QueryClient): RouteObject[] => [
  {
    path: '/example',
    lazy: Example,
  },
  {
    path: '/example-loader',
    lazy: ExampleLoader,
    loader: appLoader(queryClient),
  },
];
