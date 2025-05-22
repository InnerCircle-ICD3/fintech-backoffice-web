import { GlobalErrorBoundary } from '@/components/error-boundary';
import Main from '@/pages/main';
import type { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router-dom';
import { adminRoutes, authRoutes, exampleRoutes } from './routes';

export const createRouter = (queryClient: QueryClient) => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Main />,
      errorElement: <GlobalErrorBoundary />,
      children: [
        {
          index: true,
          element: <Navigate to="/transaction/list" replace />,
        },
        authRoutes,
        adminRoutes,
        ...exampleRoutes(queryClient),
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ];

  return createBrowserRouter(routes);
};
