import { useAccessToken } from '@/stores/auth-store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = () => {
  const accessToken = useAccessToken();
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
