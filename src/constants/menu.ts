import type { MenuItem } from '@/types/menu';
import { BarChart2, ClipboardCheck, Users } from 'lucide-react';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: '거래 관리',
    children: [
      {
        label: '거래 내역',
        path: '/transaction/list',
        icon: BarChart2,
      },
    ],
  },
  {
    label: '관리자',
    children: [
      {
        label: '사용자 관리',
        path: '/admin/user-manager',
        icon: Users,
      },
      {
        label: '승인요청 관리',
        path: '/admin/approve',
        icon: ClipboardCheck,
      },
    ],
  },
];
