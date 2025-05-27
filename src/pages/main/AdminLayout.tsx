import { content } from '@/components/layout/container/content/content.css';
import Lnb from '@/pages/main/containers/lnb';
import { layout, mainContainer } from '@/styles/layout.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className={layout}>
      <div className={mainContainer}>
        <Lnb />
        <main className={content}>
          <Suspense fallback={<div>컴포넌트 로딩중....</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
