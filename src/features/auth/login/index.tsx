import { authApi } from '@/api/auth/api';
import { LoginRequestType } from '@/api/auth/schema';
import Flex from '@/components/layout/flex';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Text from '@/components/ui/text';
import { QUERY_KEYS } from '@/constants/queries';
import { useSetUser } from '@/stores/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import * as styles from './login.css';
import { LoginFormSchema } from './schema';

type LoginFormType = z.infer<typeof LoginFormSchema>;

const Login = () => {
  const navigate = useNavigate();
  const setUser = useSetUser();
  const [showPassword, setShowPassword] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(true);

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: QUERY_KEYS.AUTH.LOGIN,
    mutationFn: async (data: LoginRequestType) => await authApi.login(data),
    onSuccess: (data) => {
      setUser(data, isRememberMe);
      form.reset();
      navigate('/');
    },
  });

  const handleSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const { id: loginId, password: loginPw } = data;
    await mutateAsync({
      loginId,
      loginPw,
    });
  };

  return (
    <div className={styles.loginContainer}>
      <Card width="532px" className={styles.loginCard}>
        <h1 className={styles.loginTitle}>로그인</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className={styles.loginForm}>
            {/* 이름 */}
            <FormField
              name="id"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">아이디</FormLabel>
                  <FormControl>
                    <Input
                      size={'lg'}
                      id="name"
                      type="text"
                      placeholder="아이디를 입력해 주세요."
                      {...field}
                      autoComplete="username"
                      autoFocus
                      data-testid="login-id-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 비밀번호 */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="password">비밀번호</FormLabel>
                  <FormControl>
                    <Input
                      size={'lg'}
                      {...field}
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="비밀번호를 입력해 주세요."
                      autoComplete="current-password"
                      data-testid="login-password-input"
                      suffix={
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                        </Button>
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Flex justify="between" align="center" gap="8px" width="100%">
              <Flex gap="8px" align="center">
                <Checkbox
                  id="rememberMe"
                  checked={isRememberMe}
                  onCheckedChange={(checked) => setIsRememberMe(!!checked)}
                  data-testid="auto-login-checkbox"
                />
                <Label htmlFor="rememberMe">자동 로그인</Label>
              </Flex>
              <Text style={{ cursor: 'pointer' }} onClick={() => alert('coming soon')}>
                비밀번호 찾기
              </Text>
            </Flex>

            <Flex direction="column" gap="16px" width="100%" className={styles.buttonContainer}>
              <Button
                type="submit"
                variant="primary"
                disabled={isPending}
                size="lg"
                data-testid="login-submit-button"
              >
                로그인
              </Button>
              <Button type="button" variant="secondary" disabled={isPending} size="lg" asChild>
                <Link to="/auth/register">회원가입</Link>
              </Button>
            </Flex>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
