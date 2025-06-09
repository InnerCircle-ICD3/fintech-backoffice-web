import LogoIcon from '@/assets/images/logo/logo.png';
import type { MerchantInfoType } from '@/queries';
import { Link } from 'react-router-dom';
import { logo, logoIcon, profile, profileInfo, profileInfoItem } from './sidebar.css';

interface ProfileProps {
  merchantInfo: MerchantInfoType;
}

export const Profile = ({ merchantInfo }: ProfileProps) => {
  const { name, contact } = merchantInfo;

  return (
    <div className={profile}>
      <Link to="/" className={logo}>
        <Logo />
        <ul className={profileInfo}>
          <span>{name}</span>
          <span className={profileInfoItem}>{contact.email}</span>
        </ul>
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
