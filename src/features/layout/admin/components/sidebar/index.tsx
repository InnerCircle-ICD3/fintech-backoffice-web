import { authApi } from '@/api/auth/api';
import Flex from '@/components/layout/flex';
import { MENU_ITEMS } from '@/constants/menu';
import { useOverlay } from '@/contexts/overlay';
import { Logout } from '@/features/layout/admin/components/sidebar/Logout';
import { Menu } from '@/features/layout/admin/components/sidebar/Menu';
import { Profile } from '@/features/layout/admin/components/sidebar/Profile';
import type { MerchantInfoType } from '@/queries';
import { useClearTokens } from '@/stores/auth';
import { vars } from '@/styles/theme.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import { Menu as ReactProMenu, Sidebar as ReactProSidebar } from 'react-pro-sidebar';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { expandIcon, footerSection, menuContainer, sidebar, sidebarContainer } from './sidebar.css';

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

const Sidebar = () => {
  const merchantInfo = useLoaderData() as MerchantInfoType;
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const clearTokens = useClearTokens();
  const { openConfirmation } = useOverlay();

  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      clearTokens();
      queryClient.invalidateQueries({
        predicate: () => true,
      });
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
      <ReactProSidebar className={sidebar} backgroundColor={vars.color.white}>
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
            <Profile merchantInfo={merchantInfo} />
            {/* 메뉴 */}
            <Menu.List
              items={MENU_ITEMS}
              renderItem={(item) => <Menu.Item key={item.id} item={item} />}
            />
          </ReactProMenu>
          <Flex className={footerSection} direction="column">
            {/* 로그아웃 */}
            <Logout onLogout={handleLogout} />
          </Flex>
        </div>
      </ReactProSidebar>
    </div>
  );
};

export default Sidebar;
