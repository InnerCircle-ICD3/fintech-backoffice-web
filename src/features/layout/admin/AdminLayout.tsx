import { adminLayoutContent } from '@/features/layout/admin/admin-layout.css';
import Sidebar from '@/features/layout/admin/components/sidebar';
import { layout, mainContainer } from '@/styles/layout.css';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className={layout}>
      <div className={mainContainer}>
        <Sidebar />
        <main className={adminLayoutContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
