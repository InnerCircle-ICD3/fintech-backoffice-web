import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const hasToken = false;

  if (!hasToken) {
    return <Navigate to={'/auth/login'} replace />;
  }

  return <Outlet />;
};
