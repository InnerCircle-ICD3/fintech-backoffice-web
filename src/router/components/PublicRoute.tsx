import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  const hasToken = false;

  if (hasToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
