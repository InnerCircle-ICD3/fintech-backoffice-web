import { adminLayoutContent } from '@/features/layout/admin/admin-layout.css';
import Sidebar from '@/features/layout/admin/components/sidebar';
import { MerchantInfoType } from '@/queries';
import { layout, mainContainer } from '@/styles/layout.css';
import { Outlet, useLoaderData } from 'react-router-dom';

const AdminLayout = () => {
  const merchantInfo = useLoaderData() as MerchantInfoType;

  return (
    <div className={layout}>
      <div className={mainContainer}>
        <Sidebar />
        <main className={adminLayoutContent}>
          <Outlet context={merchantInfo} />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
