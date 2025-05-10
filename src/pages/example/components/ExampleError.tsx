import api from '@/services/api.service';
import { useEffect, useState } from 'react';
import Flex from '@/components/layout/flex/Flex';
import { Button } from '@/components/ui/button/Button';
import { useMutation, useQuery } from '@tanstack/react-query';

export const ExampleError = () => {
  const [errorType, setErrorType] = useState('400');
  const [shouldFetch, setShouldFetch] = useState(false);

  const { isLoading } = useQuery({
    queryKey: ['error-test', errorType],
    queryFn: async () => await api.get(`/error/${errorType}`),
    enabled: shouldFetch,
  });

  const { mutate } = useMutation({
    mutationKey: ['error-test-mutation', errorType],
    mutationFn: async () => await api.get(`/error/${errorType}`),
  });

  const handleMutationTest = () => {
    mutate();
  };

  const handleTest = () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (!isLoading && shouldFetch) {
      setShouldFetch(false);
    }
  }, [isLoading, shouldFetch]);

  return (
    <div>
      <h2>에러 처리 테스트</h2>
      <Flex gap={'4px'} direction={'column'}>
        <label>에러 타입을 선택해주세요.</label>
        <select value={errorType} onChange={(e) => setErrorType(e.target.value)}>
          <option value="400">400 - Bad Request (ignore)</option>
          <option value="401">401 - Unauthorized (logout)</option>
          <option value="403">403 - Forbidden (logout)</option>
          <option value="404">404 - Not Found (notFound)</option>
          <option value="500">500 - Server Error (errorPage)</option>
          <option value="network">Network Error</option>
          <option value="timeout">Timeout Error</option>
        </select>
      </Flex>

      <Flex gap={'10px'} style={{ marginTop: '20px' }}>
        <Button variant={'primary'} size={'sm'} onClick={handleTest}>
          일반 Query 테스트
        </Button>
        <Button variant={'primary'} size={'sm'} onClick={handleMutationTest}>
          Mutation 테스트
        </Button>
      </Flex>
    </div>
  );
};
