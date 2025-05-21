import { authApi } from '@/api/auth/api';
import { MENU_ITEMS } from '@/constants/menu';
import { useOverlay } from '@/contexts/overlay';
import { Logout } from '@/pages/main/components/lnb/Logout';
import { MenuItem } from '@/pages/main/components/lnb/MenuItem';
import { Profile } from '@/pages/main/components/lnb/Profile';
import { useClearTokens } from '@/stores/auth';
import { expandIcon, lnb } from '@/styles/lnb.css';
import { vars } from '@/styles/theme.css';
import { useMutation } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { Menu, Sidebar } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

const Lnb = () => {
  const navigate = useNavigate();
  const clearTokens = useClearTokens();

  const { openConfirmation } = useOverlay();

  const { mutate: logout } = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearTokens();
      navigate('/auth/login');
    },
  });

  const handleLogout = () => {
    openConfirmation({
      title: '로그아웃 하시겠습니까?',
      actionButtonText: '확인',
      cancelButtonText: '취소',
      onSubmit: () => {
        logout();
      },
    });
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
