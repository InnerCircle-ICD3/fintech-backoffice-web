import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CustomRouterProvider from '@/router/RouterProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
      retry: 0,
      throwOnError: true,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomRouterProvider />
    </QueryClientProvider>
  );
};

export default App;
