import Login from '@/pages/auth/login';
import { RouteObject } from 'react-router-dom';
import { PublicRoute } from '@/router/components';

export const authRoutes: RouteObject = {
  element: <PublicRoute />,
  children: [
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/register',
    },
  ],
};
