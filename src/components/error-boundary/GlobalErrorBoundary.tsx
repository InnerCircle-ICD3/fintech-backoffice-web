import { Button } from '@/components/ui/button';
import { handleErrorMessage } from '@/services/api-error';
import { AlertTriangle } from 'lucide-react';
import { useNavigate, useRouteError } from 'react-router-dom';
import * as styles from './error-boundary.css';

export const GlobalErrorBoundary = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  const errorMessage = handleErrorMessage(error);

  return (
    <div className={styles.errorPageContainerStyle}>
      <div className={styles.errorCardStyle}>
        <div className={styles.iconContainerStyle}>
          <AlertTriangle size={48} className={styles.iconStyle} />
        </div>
        <h1 className={styles.errorTitleStyle}>앗!.. </h1>
        <p className={styles.errorMessageStyle} data-testid="error-message">
          {errorMessage || '알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'}
        </p>
        <div className={styles.buttonContainerStyle}>
          <Button onClick={() => navigate('/auth/login')}>홈으로 이동</Button>
        </div>
      </div>
    </div>
  );
};
