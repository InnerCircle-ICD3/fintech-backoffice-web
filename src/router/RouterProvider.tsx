import Main from '@/pages/Main';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Auth from '@/pages/Auth';

const CustomRouterProvider = () => {
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <Main />,
      children: [
        {
          path: 'auth',
          element: <Auth />,
          children: [
            {
              index: true,
              element: <Navigate to={'login'} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
