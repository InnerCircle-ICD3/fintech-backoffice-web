import {useLocation} from "react-router-dom";
import {LnbMenuContainer} from "@/styles/lnb.css";


const LnbMenu = () => {
  const location = useLocation();

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


  const childrenRouters = [

  ]

  return (
    <div className={LnbMenuContainer({ expand: false })}>
      {childrenRouters.map((childrenRoute) => (
        <MenuItem key={childrenRoute.id} data={childrenRoute} />
      ))}
    </div>
  );
};

export default LnbMenu;
