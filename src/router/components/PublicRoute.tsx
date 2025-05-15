import { useAccessToken } from '@/stores/auth-store';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const accessToken = useAccessToken();

  if (accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
