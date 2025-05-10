import { LnbMenuContainer } from '@/styles/lnb.css';
import { SUB_MENU } from '@/constants/menuData';
import MenuItem from '@/pages/Main/components/Lnb/MenuItem';

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
