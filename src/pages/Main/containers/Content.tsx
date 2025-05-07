import { Outlet } from 'react-router-dom';
import { content } from '@/styles/content.css';
import { SIDE } from '@/constants/common';

const Content = () => {
  const lnbExpandAnimationStatus = 'EXPAND';

  return (
    <div className={content}>
      <div
        style={{
          position: 'relative',
          flex: 1,
          width: '100%',
          minWidth: `calc(1280px - ${SIDE.WIDTH[lnbExpandAnimationStatus ? 'EXPAND' : 'COLLAPSE']} - 60px)`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
