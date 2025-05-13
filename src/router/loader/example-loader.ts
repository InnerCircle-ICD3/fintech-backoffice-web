import api from '@/services/api-service';
import type { QueryClient } from '@tanstack/react-query';

export const loaderQueryOption = () => ({
  queryKey: ['error-loader'],
  queryFn: () => api.get('/example-loader'),
});

export const exampleLoader = (queryClient: QueryClient) => async () => {
  const query = loaderQueryOption();
  return queryClient.ensureQueryData(query);
};
