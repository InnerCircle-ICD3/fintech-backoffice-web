import Flex from '@/components/layout/flex/Flex';
import Text from '@/components/ui/text/Text';
import { logoutSection } from '@/styles/lnb.css';
import { LogOut } from 'lucide-react';

interface LogoutProps {
  onLogout: () => void;
}

export const Logout = ({ onLogout }: LogoutProps) => {
  return (
    <Flex className={logoutSection} align="center" gap="8px">
      <LogOut size={16} />
      <Text>로그아웃</Text>
    </Flex>
  );
};
