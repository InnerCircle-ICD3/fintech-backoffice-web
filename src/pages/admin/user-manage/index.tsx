import Text from '@/components/ui/text/Text';
import { lazy, Suspense } from 'react';

const UserManage1 = lazy(() => import('./UserManage1'));
const UserManage2 = lazy(() => import('./UserManage2'));

const UserManage = () => {
  return (
    <div>
      <Text size={'xl'}>UserManage</Text>

      {/* UserManage1 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
        }}
      >
        <Suspense fallback={<div>UserManage1 로딩 중...</div>}>
          <UserManage1 />
        </Suspense>
      </div>

      {/* UserManage2 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
        }}
      >
        <Suspense fallback={<div>UserManage2 로딩 중...</div>}>
          <UserManage2 />
        </Suspense>
      </div>
    </div>
  );
};

export default UserManage;
