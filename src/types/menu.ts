import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  label: string;
  path?: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

export interface MenuItemProps {
  item: MenuItem;
  level?: number;
}
