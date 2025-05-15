import { createRouter } from '@/router';
import { toast, Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { handleErrorMessage } from './services';

/**
 * @see
 * https://beomy.github.io/tech/react/tanstack-query-v5-api-reference/#mutationcache
 */

const DEFAULT_ERROR = 'Something went wrong';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 0,
      throwOnError: true,
      staleTime: 1000 * 60 * 2, // 2분
      gcTime: 1000 * 60 * 15, // 15분
    },
  },

  mutationCache: new MutationCache({
    // TODO: invalidateQueries

    onError: (error) => {
      const errorMessage = handleErrorMessage(error);
      toast.error(errorMessage ?? DEFAULT_ERROR);
    },
  }),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={createRouter(queryClient)}
        future={{ v7_startTransition: true }}
        fallbackElement={<div>앱 초기화 중...</div>}
      />
      <Toaster />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
