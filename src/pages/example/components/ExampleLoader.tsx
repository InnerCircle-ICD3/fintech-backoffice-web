import Flex from '@/components/layout/flex/Flex';
import { useLoaderData } from 'react-router-dom';
import { ExampleError } from './ExampleError';

export const ExampleLoader = () => {
  const data = useLoaderData();

  return (
    <Flex justify="center">
      <div>
        <h1>Example Loader</h1>
        <pre>Data from loader: {JSON.stringify(data, null, 2)}</pre>
      </div>
      <ExampleError />
    </Flex>
  );
};
