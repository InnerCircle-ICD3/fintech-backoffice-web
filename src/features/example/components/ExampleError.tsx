import Flex from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import { merchantApiInstance } from '@/services/api-instance';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const ExampleError = () => {
  const [errorType, setErrorType] = useState('400');

  const { refetch } = useQuery({
    queryKey: ['error-test', errorType],
    queryFn: async () => await merchantApiInstance.get(`/error/${errorType}`),
    enabled: false,
  });

  const { mutate } = useMutation({
    mutationKey: ['error-test-mutation', errorType],
    mutationFn: async () => await merchantApiInstance.get(`/error/${errorType}`),
  });

  const handleMutationTest = () => {
    mutate();
  };

  const handleTest = () => {
    refetch();
  };

  return (
    <div style={{ flex: '1' }}>
      <h2>에러 처리 테스트</h2>
      <Flex gap={'4px'} direction={'column'}>
        <label>에러 타입을 선택해주세요.</label>
        <select value={errorType} onChange={(e) => setErrorType(e.target.value)}>
          <option value="400">400 - Bad Request</option>
          <option value="401">401 - Unauthorized</option>
          <option value="403">403 - Forbidden</option>
          <option value="404">404 - Not Found</option>
          <option value="500">500 - Server Error</option>
          <option value="network">Network Error</option>
          <option value="timeout">Timeout</option>
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
