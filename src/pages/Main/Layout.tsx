import { Navigate, useLocation } from 'react-router-dom';
import Lnb from "@/pages/Main/containers/Lnb";
import {isEmpty} from "koko-react-select/dist/utils/commonUtils";
import Content from "@/pages/Main/containers/Content";
import {layout, mainContainer} from "@/styles/layout.css";


const Layout = () => {
  const location = useLocation();

  const accessToken =    localStorage.getItem('accessToken');
  const refreshToken =     localStorage.getItem('refreshToken');

  if (isEmpty(accessToken) || isEmpty(refreshToken)) {
    return <Navigate to={'/auth/login'} />;
  }

  return (
    <div className={layout({ gradient: location.pathname.includes('dashboard') })}>

      <div className={mainContainer}>
        <Lnb />
        <Content />
      </div>
    </div>
  );
};

export default Layout;
