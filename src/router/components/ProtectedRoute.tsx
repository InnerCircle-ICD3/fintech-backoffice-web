import { useAuthStore } from '@/stores/auth';
import { Outlet, redirect } from 'react-router-dom';

export const protectedLoader = () => {
  const accessToken = useAuthStore.getState().accessToken;

  if (!accessToken) {
    return redirect('/auth/login');
  }
  return null;
};

export const ProtectedRoute = () => {
  return <Outlet />;
};
