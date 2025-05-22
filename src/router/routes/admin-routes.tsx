import AdminLayout from '@/pages/main/AdminLayout';
import { ProtectedRoute } from '@/router/components';
import { lazyImport } from '@/utils/lazy-lmport';
import type { RouteObject } from 'react-router-dom';

const UserManage = lazyImport(() => import('@/pages/admin/user-manage'));
const ApprovalManage = lazyImport(() => import('@/pages/admin/approval-manage'));
const TransactionList = lazyImport(() => import('@/pages/transaction/transaction-list'));

const transactionSectionRoutes = [
  {
    path: '/transaction/list',
    lazy: TransactionList,
  },
];

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

export const adminRoutes: RouteObject = {
  element: <ProtectedRoute />,
  children: [
    {
      element: <AdminLayout />,
      children: [...transactionSectionRoutes, ...adminSectionRoutes],
    },
  ],
};
