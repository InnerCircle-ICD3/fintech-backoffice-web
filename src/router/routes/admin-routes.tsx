import Layout from '@/pages/main/Layout';
import { lazyImport } from '@/utils/lazy-lmport';
import { ProtectedRoute } from '@/router/components';
import { Navigate, RouteObject } from 'react-router-dom';

const UserManage = lazyImport(() => import('@/pages/admin/user-manage'));
const ApprovalManage = lazyImport(() => import('@/pages/admin/approval-manage'));
const TransactionList = lazyImport(() => import('@/pages/transaction/transaction-list'));

const adminSectionRoutes = [
  {
    path: '/admin/user-manager',
    lazy: UserManage,
  },
  {
    path: '/admin/approve',
    lazy: ApprovalManage,
  },
];

const transactionSectionRoutes = [
  {
    path: '/transaction',
    element: <Navigate to="/transaction/list" replace />,
  },
  {
    path: '/transaction/list',
    lazy: TransactionList,
  },
];

export const adminRoutes: RouteObject = {
  element: <ProtectedRoute />,
  children: [
    {
      element: <Layout />,
      children: [...adminSectionRoutes, ...transactionSectionRoutes],
    },
  ],
};
