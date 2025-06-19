import LogoIcon from '@/assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { logo, logoIcon, profile } from './sidebar.css';

export const Profile = () => {
  return (
    <div className={profile}>
      <Link to="/" className={logo}>
        <Logo />
        열정페이
      </Link>
    </div>
  );
};

const Logo = () => {
  return (
    <div>
      <img src={LogoIcon} alt="logo" className={logoIcon} />
    </div>
  );
};
