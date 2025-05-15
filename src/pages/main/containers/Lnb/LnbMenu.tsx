import { LnbMenuContainer } from '@/styles/lnb.css';
import { SUB_MENU } from '@/constants/menu-data';
import MenuItem from '@/pages/main/components/lnb/MenuItem';

const LnbMenu = () => {
  return (
    <div className={LnbMenuContainer({ expand: false })}>
      {SUB_MENU.map((childrenRoute) => (
        <MenuItem key={childrenRoute.menuId} data={childrenRoute} />
      ))}
    </div>
  );
};

export default LnbMenu;
