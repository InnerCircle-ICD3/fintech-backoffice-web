import Lnb from '@/pages/main/containers/lnb';
import Content from '@/pages/main/containers/Content';
import { layout, mainContainer } from '@/styles/layout.css';

const Layout = () => {
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
