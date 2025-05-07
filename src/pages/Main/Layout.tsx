import { Navigate, useLocation } from 'react-router-dom';
import Lnb from "@/pages/Main/containers/Lnb";

import Content from "@/pages/Main/containers/Content";
import {isEmpty} from "@/utils/commonUtils";
import {layout, mainContainer} from "@/styles/layout.css";


const Layout = () => {
  const location = useLocation();

  const accessToken =    localStorage.getItem('accessToken');
  const refreshToken =     localStorage.getItem('refreshToken');

  if (isEmpty(accessToken) || isEmpty(refreshToken)) {
    return <Navigate to={'/auth/login'} />;
  }

  return (
    <div className={layout}>

      <div className={mainContainer}>
        <Lnb />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
