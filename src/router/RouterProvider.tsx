import Main from '@/pages/Main';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Auth from '@/pages/Auth';
import ExamplePage from '@/pages/ExamplePage';

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
    {
      path: '/example',
      element: <ExamplePage />,
    },
  ]);

  return <RouterProvider router={browserRouter} future={{ v7_startTransition: true }} />;
};

export default CustomRouterProvider;
