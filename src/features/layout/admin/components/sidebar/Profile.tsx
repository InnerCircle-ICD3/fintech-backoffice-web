import LogoIcon from '@/assets/images/logo/logo.png';
import { Link } from 'react-router-dom';
import { logo, logoIcon, logoText, profile } from './sidebar.css';

export const Profile = () => {
export const Profile = () => {
  return (
    <h1 className={profile}>
      <Link to="/" className={logo}>
        <Logo />
        <span className={logoText}>열정페이</span>
      </Link>
    </h1>
  );
};

const Logo = () => {
  return (
    <div>
      <img src={LogoIcon} alt="logo" className={logoIcon} />
    </div>
  );
};
