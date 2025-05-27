import { authApi } from '@/api/auth/api';
import Flex from '@/components/layout/flex/Flex';
import { MENU_ITEMS } from '@/constants/menu';
import { useOverlay } from '@/contexts/overlay';
import { Logout } from '@/pages/main/components/lnb/Logout';
import { Menu } from '@/pages/main/components/lnb/Menu';
import { Profile } from '@/pages/main/components/lnb/Profile';
import SdkKeyButton from '@/pages/main/components/lnb/SdkKeyButton';
import { useClearTokens } from '@/stores/auth';
import { expandIcon, footerSection, lnb, menuContainer, sidebarContainer } from '@/styles/lnb.css';
import { vars } from '@/styles/theme.css';
import { useMutation } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { Menu as ReactProMenu, Sidebar } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

const menuStyles = {
  button: ({ level, active }: { level: number; active: boolean }) => ({
    color: level === 0 || active ? vars.color.primary : vars.color.menu,
    ':hover': {
      color: vars.color.primary,
      backgroundColor: vars.color.primaryB,
    },
    fontSize: level === 0 ? vars.fontSize.md : vars.fontSize.sm,
    fontWeight: level === 0 || active ? vars.fontWeight.bold : vars.fontWeight.regular,
  }),
};

const Lnb = () => {
  const navigate = useNavigate();
  const clearTokens = useClearTokens();
  const { openConfirmation } = useOverlay();

  const { mutate: logoutMutate } = useMutation({
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
      onSubmit: () => logoutMutate(),
    });
  };

  return (
    <div className={sidebarContainer}>
      <Sidebar className={lnb} backgroundColor={vars.color.white}>
        <div className={menuContainer}>
          <ReactProMenu
            menuItemStyles={menuStyles}
            renderExpandIcon={(params) => (
              <ChevronRight
                className={expandIcon}
                data-open={params.open}
                style={{ color: vars.color.text.sub }}
              />
            )}
          >
            {/* 프로필 */}
            <Profile />
            {/* 메뉴 */}
            <Menu.List
              items={MENU_ITEMS}
              renderItem={(item) => <Menu.Item key={item.id} item={item} />}
            />
          </ReactProMenu>
          <Flex className={footerSection} direction="column">
            {/* SDK 키 발급 */}
            <SdkKeyButton />
            {/* 로그아웃 */}
            <Logout onLogout={handleLogout} />
          </Flex>
        </div>
      </Sidebar>
    </div>
  );
};

export default Lnb;
