import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  path?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

export interface MenuItemProps {
  item: MenuItem;
  level?: number;
}
