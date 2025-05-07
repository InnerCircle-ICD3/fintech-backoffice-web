import { RecipeVariants } from '@vanilla-extract/recipes';
import { NavLink, NavLinkProps } from 'react-router-dom';
import Flex from '@/components/layout/flex/Flex';
import { menu } from '@/styles/menu.css';

type MenuVariants = RecipeVariants<typeof menu>;

type MenuProps = Omit<NavLinkProps, 'children'> &
  MenuVariants & {
    label?: string | undefined;
    menuId?: string;
  };

const MenuLink = (props: MenuProps) => {
  const { label = '', menuId, division, ...attributes } = props;

  return (
    <NavLink className={({ isActive }) => menu({ division, active: isActive })} {...attributes}>
      {({ isActive }) => (
        <Flex align={'center'} gap={'8px'}>
          {label}
        </Flex>
      )}
    </NavLink>
  );
};

export default MenuLink;
