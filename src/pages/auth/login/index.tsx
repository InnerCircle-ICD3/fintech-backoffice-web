import { z } from 'zod';
import { startTransition } from 'react';
import { Button } from '@/components/ui/button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form/Form';
import { Input } from '@/components/ui/input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { LoginFormSchema } from './login-schema';
import { authApi } from '@/api/auth/auth-api';
import { LoginRequestType } from '@/api/auth/auth-schema';
import { useSetTokens } from '@/stores/auth-store';

type LoginFormType = z.infer<typeof LoginFormSchema>;

const Login = () => {
  const navigate = useNavigate();
  const setToken = useSetTokens();

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    mode: 'all',
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginRequestType) => await authApi.login(data),
    onSuccess: (data) => {
      setToken(data);

      form.reset();

      startTransition(() => {
        navigate('/');
      });
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
    <div>
      <h1>로그인</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          {/* 이름 */}
          <FormField
            name="id"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">아이디</FormLabel>
                <FormControl>
                  <Input id="name" type="text" placeholder="이름을 입력해 주세요." {...field} />
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
                    {...field}
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력해 주세요."
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant="secondary" disabled={!form.formState.isValid || isPending}>
            {isPending ? '로그인중...' : '로그인'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
