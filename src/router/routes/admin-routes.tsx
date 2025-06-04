import AdminLayout from '@/features/layout/admin/AdminLayout';
import { merchantLoader } from '@/queries';
import { ProtectedRoute } from '@/router/components';
import { lazyImport } from '@/utils/lazy-lmport';
import type { QueryClient } from '@tanstack/react-query';
import type { RouteObject } from 'react-router-dom';

const UserManage = lazyImport(() => import('@/features/admin/user-manage'));
const ApprovalManage = lazyImport(() => import('@/features/admin/approval-manage'));
const TransactionList = lazyImport(() => import('@/features/transaction/transaction-list'));
const SettlementSummaries = lazyImport(() => import('@/features/transaction/settlement-summaries'));
const MerchantInfo = lazyImport(() => import('@/features/merchant/info'));

const transactionSectionRoutes = [
  {
    path: '/transaction/list',
    lazy: TransactionList,
  },
  {
    path: '/transaction/settlement-summaries',
    lazy: SettlementSummaries,
  },
];

const merchantSectionRoutes = [
  {
    path: '/merchant/info',
    lazy: MerchantInfo,
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

export const adminRoutes = (queryClient: QueryClient): RouteObject[] => {
  return [
    {
      element: <ProtectedRoute />,
      children: [
        {
          element: <AdminLayout />,
          loader: merchantLoader(queryClient),
          children: [...transactionSectionRoutes, ...merchantSectionRoutes, ...adminSectionRoutes],
        },
      ],
    },
  ];
};
