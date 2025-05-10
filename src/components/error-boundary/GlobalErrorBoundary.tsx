import { determineErrorMessage } from '@/services/error.service';
import { useRouteError } from 'react-router-dom';

export const GlobalErrorBoundary = () => {
  const error = useRouteError();
  const errorMessage = determineErrorMessage(error);

  return (
    <div>
      <p>죄송합니다. 페이지 로딩 중 예상치 못한 오류가 발생했습니다.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
};
