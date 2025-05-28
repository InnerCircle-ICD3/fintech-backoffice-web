import { PublicRoute } from '@/router/components';
import { RouteObject } from 'react-router-dom';

import Login from '@/features/auth/login';
import Register from '@/features/auth/register';

export const authRoutes: RouteObject = {
  element: <PublicRoute />,
  children: [
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/register',
      element: <Register />,
    },
  ],
};
