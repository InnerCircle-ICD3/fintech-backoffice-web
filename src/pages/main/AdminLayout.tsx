import { content } from '@/components/layout/container/content/content.css';
import Lnb from '@/pages/main/containers/lnb';
import { layout, mainContainer } from '@/styles/layout.css';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className={layout}>
      <div className={mainContainer}>
        <Lnb />
        <main className={content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
