import { Button } from '@/components/ui/button/Button';
import Text from '@/components/ui/text/Text';
import { footerMenuButton } from '@/styles/lnb.css';
import { LogOut } from 'lucide-react';

interface LogoutProps {
  onLogout: () => void;
}

export const Logout = ({ onLogout }: LogoutProps) => {
  return (
    <Button variant="ghost" onClick={onLogout} className={footerMenuButton}>
      <LogOut size={16} />
      <Text>로그아웃</Text>
    </Button>
  );
};
