import type { AxiosError } from 'axios';
import { createRouter } from '@/router';
import { toast, Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { matchQuery, MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const DEFAULT_ERROR = 'Something went wrong';
import { OverlayProvider } from './contexts/overlay/OverlayProvider';

/**
 * @see
 * https://beomy.github.io/tech/react/tanstack-query-v5-api-reference/#mutationcache
 */

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
    /**
     * @description 뮤테이션이 성공했을 때 지정된 쿼리들이 자동으로 무효화됩니다.
     * @example
        // as-is
        const { mutate } = useMutation({
          mutationKey: ["testKey"],
          mutationFn: testFetcher,
          onSuccess: () => {
            queryClient.invalidateQueries("test1");
            queryClient.invalidateQueries("test2");
            queryClient.invalidateQueries("test3");
          },
        });

        // to-be
        const { mutate } = useMutation({
          mutationKey: ["testKey"],
          mutationFn: testFetcher,
          meta: {
            invalidates: [["test1"], ["test2"], ["test3"]],
          },
        });
     */
    onSuccess: (_data, _variables, _context, mutation) => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          mutation.meta?.invalidates?.some((queryKey) => matchQuery({ queryKey }, query)) ?? false,
      });
    },

    onError: (cause) => {
      const { response } = cause as AxiosError<{ message: string }>;
      toast.error(response?.data.message ?? DEFAULT_ERROR);
    },
  }),
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <RouterProvider
          router={createRouter(queryClient)}
          future={{ v7_startTransition: true }}
          fallbackElement={<div>앱 초기화 중...</div>}
        />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </OverlayProvider>
    </QueryClientProvider>
  );
};

export default App;
