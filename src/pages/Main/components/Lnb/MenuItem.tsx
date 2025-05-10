import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import Flex from '@/components/layout/flex/Flex';
import MenuLink from '@/pages/main/components/MenuLink';
import { menu } from '@/styles/menu.css';
import type { MenuItem } from '@/types/menuData';

interface MenuItemProps {
  data: MenuItem;
}

const MenuItem = (props: MenuItemProps) => {
  const { data } = props;
  const { menuId, menuNm = '', menuUrl = '' } = data;
  const [activeLnb, setActiveLnb] = useState('');

  const location = useLocation();

  const handleSubMenuOpen = () => {
    setActiveLnb(activeLnb === menuId ? '' : menuId);
  };

  useLayoutEffect(() => {
    if (window.location.pathname.includes(menuUrl)) {
      setActiveLnb(menuId);
    }
  }, [location]);

  return (
    <div style={{ width: '100%', whiteSpace: 'nowrap' }}>
      {data.menuTypeCd === 'C' ? (
        <Flex direction={'column'} grow={'wFull'}>
          <div
            className={menu({
              division: '1depth',
              active: data.menuId === activeLnb,
            })}
            onClick={handleSubMenuOpen}
          >
            <Flex align={'center'} gap={'8px'}>
              {menuNm}
            </Flex>
          </div>
        </Flex>
      ) : (
        <MenuLink label={menuNm} menuId={menuId} to={menuUrl} division={'2depth'} type={'page'} />
      )}
    </div>
  );
};

export default MenuItem;
