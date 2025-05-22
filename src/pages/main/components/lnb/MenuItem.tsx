import Flex from '@/components/layout/flex/Flex';
import type { MenuItemProps } from '@/types/menu';
import { MenuItem as ProMenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

export const MenuItem = ({ item, level = 0 }: MenuItemProps) => {
  const location = useLocation();
  const { label, path, icon: Icon, children } = item;

  const menuContent = (
    <Flex align="center" gap="8px">
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </Flex>
  );

  if (children) {
    return (
      <SubMenu
        label={menuContent}
        defaultOpen={true}
        rootStyles={level === 0 ? { marginTop: '16px' } : undefined}
      >
        {children.map((child, index) => (
          <MenuItem key={`${label}-${index}`} item={child} level={level + 1} />
        ))}
      </SubMenu>
    );
  }

  return (
    <ProMenuItem
      component={<Link to={path || '/'} className="link" />}
      active={location.pathname === path}
    >
      {menuContent}
    </ProMenuItem>
  );
};
