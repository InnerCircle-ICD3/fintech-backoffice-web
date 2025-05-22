import type { MenuItem } from '@/types/menu';
import { BarChart2, ClipboardCheck, Users } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'transactions',
    label: '거래 관리',
    children: [
      {
        id: 'transaction-list',
        label: '거래 내역',
        path: '/transaction/list',
        icon: BarChart2,
      },
    ],
  },
  {
    id: 'admin',
    label: '관리자',
    children: [
      {
        id: 'user-manager',
        label: '사용자 관리',
        path: '/admin/user-manager',
        icon: Users,
      },
      {
        id: 'approve',
        label: '승인요청 관리',
        path: '/admin/approve',
        icon: ClipboardCheck,
      },
    ],
  },
];
