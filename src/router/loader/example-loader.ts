import { axiosInstance } from '@/services';
import { QueryClient } from '@tanstack/react-query';

export const loaderQueryOption = () => ({
  queryKey: ['error'],
  queryFn: () => axiosInstance.get('/example-loader'),
});

export const exampleLoader = (queryClient: QueryClient) => async () => {
  const query = loaderQueryOption();
  return queryClient.ensureQueryData(query);
};
