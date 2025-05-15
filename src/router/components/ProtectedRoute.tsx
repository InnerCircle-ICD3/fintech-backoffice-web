import { useAccessToken } from '@/stores/auth-store';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const accessToken = useAccessToken();

  if (!accessToken) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return <Outlet />;
};
