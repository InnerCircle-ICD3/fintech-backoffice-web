import Flex from '@/components/layout/flex/Flex';
import type { MenuItemProps } from '@/types/menu';
import { MenuItem as ReactProMenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

interface MenuListProps {
  items: MenuItemProps['item'][];
  renderItem: (item: MenuItemProps['item'], index: number) => React.ReactNode;
}

const MenuList = ({ items, renderItem }: MenuListProps) => {
  return <>{items.map((item, index) => renderItem(item, index))}</>;
};

const MenuItem = ({ item, level = 0 }: MenuItemProps) => {
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
    <ReactProMenuItem
      component={<Link to={path || '/'} className="link" />}
      active={location.pathname === path}
    >
      {menuContent}
    </ReactProMenuItem>
  );
};

export const Menu = {
  List: MenuList,
  Item: MenuItem,
} as const;
