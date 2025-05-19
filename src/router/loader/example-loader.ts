import { axiosInstance } from '@/services/api-instance';
import { QueryClient } from '@tanstack/react-query';

export const loaderQueryOption = () => ({
  queryKey: ['error-loader'],
  queryFn: () => axiosInstance.get('/example-loader'),
});

export const exampleLoader = (queryClient: QueryClient) => async () => {
  const query = loaderQueryOption();
  return queryClient.ensureQueryData(query);
};
