import { useLoaderData } from 'react-router-dom';

const ExampleLoader = () => {
  const data = useLoaderData();

  return (
    <div style={{ flex: '1' }}>
      <h1>Example Loader</h1>
      <pre>Data from loader: {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleLoader;
