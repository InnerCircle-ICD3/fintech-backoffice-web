import { Suspense } from 'react';

const UserManage2 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>UserManage2</div>
    </Suspense>
  );
};

export default UserManage2;
