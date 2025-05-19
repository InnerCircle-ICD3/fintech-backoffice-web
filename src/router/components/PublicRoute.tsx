import { useAccessToken } from '@/stores/auth-store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PublicRoute = () => {
  const accessToken = useAccessToken();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  if (accessToken) {
    return <Navigate to={from || '/'} replace />;
  }

  return <Outlet />;
};
