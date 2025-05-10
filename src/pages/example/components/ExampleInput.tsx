import { Input } from '@/components/ui/input/Input';
import { Button } from '@/components/ui/button/Button';
import { MailIcon, LockIcon, EyeIcon } from 'lucide-react';

export const ExampleInput = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* size */}
      <Input size="sm" placeholder="작은 입력" />
      <Input size="md" placeholder="중간 입력" />
      <Input size="lg" placeholder="큰 입력" />

      {/* variant */}
      <Input variant="default" placeholder="기본 상태" />
      <Input variant="error" placeholder="오류 상태" />
      <Input variant="success" placeholder="성공 상태" />

      {/* prefix */}
      <Input prefix={<MailIcon size={16} />} placeholder="이메일 입력" />

      {/* suffix */}
      <Input
        type="password"
        placeholder="비밀번호 입력"
        prefix={<LockIcon size={16} />}
        suffix={
          <Button variant="ghost" size="sm">
            <EyeIcon size={16} />
          </Button>
        }
      />

      {/* 500px 너비 */}
      <div style={{ width: '500px' }}>
        <Input fullWidth={true} placeholder="fullWidth=true" />
      </div>

      {/* 내용에 맞는 너비 */}
      <div style={{ display: 'flex' }}>
        <Input fullWidth={false} placeholder="fullwidth=false" />
      </div>
    </div>
  );
};
