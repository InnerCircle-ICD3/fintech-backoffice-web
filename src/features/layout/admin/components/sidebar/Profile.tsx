import { logo, logoIcon, profile } from '@/styles/lnb.css';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div className={profile}>
      <Link to="/" className={logo}>
        <div className={logoIcon}>Y</div>
        <span>열정페이</span>
      </Link>
    </div>
  );
};
