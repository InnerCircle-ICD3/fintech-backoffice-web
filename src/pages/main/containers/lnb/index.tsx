import { MENU_ITEMS } from '@/constants/menu';
import { Logout } from '@/pages/main/components/lnb/Logout';
import { MenuItem } from '@/pages/main/components/lnb/MenuItem';
import { Profile } from '@/pages/main/components/lnb/Profile';
import { expandIcon, lnb } from '@/styles/lnb.css';
import { vars } from '@/styles/theme.css';
import { ChevronRight } from 'lucide-react';
import { Menu, Sidebar } from 'react-pro-sidebar';

const Lnb = () => {
  const handleLogout = () => {
    // TODO: 로그아웃 처리
    console.log('로그아웃');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar className={lnb} backgroundColor={vars.color.white}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Menu
            menuItemStyles={{
              button: ({ level, active }: { level: number; active: boolean }) => {
                const isTopLevel = level === 0;

                return {
                  color: isTopLevel || active ? vars.color.primary : vars.color.menu,
                  ':hover': {
                    color: vars.color.primary,
                    backgroundColor: vars.color.primaryB,
                  },
                  fontSize: isTopLevel ? vars.fontSize.md : vars.fontSize.sm,
                  fontWeight: isTopLevel || active ? vars.fontWeight.bold : vars.fontWeight.regular,
                };
              },
            }}
            renderExpandIcon={({ open }) => (
              <ChevronRight
                className={expandIcon}
                data-open={open}
                style={{ color: vars.color.text.sub }}
              />
            )}
          >
            {/* 프로필 */}
            <Profile />
            {/* 메뉴 */}
            {MENU_ITEMS.map((item, index) => (
              <MenuItem key={`menu-${index}`} item={item} />
            ))}
          </Menu>
          {/* 로그아웃 */}
          <Logout onLogout={handleLogout} />
        </div>
      </Sidebar>
    </div>
  );
};

export default Lnb;
