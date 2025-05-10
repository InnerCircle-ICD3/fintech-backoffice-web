import { LnbMenuContainer } from '@/styles/lnb.css';
import { SUB_MENU } from '@/constants/menu-data';
import MenuItem from '@/pages/main/components/lnb/MenuItem';

const LnbMenu = () => {
  // const serviceMenuList = useRecoilValue(serviceMenuListState);
  // const childrenRouters: RouterProps[] =
  //   serviceMenuList
  //     ?.filter((route) => !route.index)
  //     .find((route: RouterProps) => location.pathname.startsWith(route.fullPath || ''))
  //     ?.children?.filter((route) => !route?.index && route.isUse && route.isDisplay) || [];
  //
  // const lnbExpandAnimationStatus = useRecoilValue(lnbExpandAnimationStatusState);

  // if (childrenRouters.length === 0) {
  //   return;
  // }

  return (
    <div className={LnbMenuContainer({ expand: false })}>
      {SUB_MENU.map((childrenRoute) => (
        <MenuItem key={childrenRoute.menuId} data={childrenRoute} />
      ))}
    </div>
  );
};

export default LnbMenu;
