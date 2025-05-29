import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import { LogOut } from 'lucide-react';
import { footerMenuButton } from './sidebar.css';

interface LogoutProps {
  onLogout: () => void;
}

export const Logout = ({ onLogout }: LogoutProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onLogout}
      className={footerMenuButton}
      data-testid="logout-button"
    >
      <LogOut size={16} />
      <Text>로그아웃</Text>
    </Button>
  );
};
