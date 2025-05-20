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
import { RegisterFormSchema } from './register-schema';
import { authApi } from '@/api/auth/api';
import { RegisterRequestType } from '@/api/auth/schema';
import Card from '@/components/ui/Card/Card';
import * as styles from './register.css';
import { formatPhoneNumber, formatBusinessNumber } from '@/utils/format-register';

type RegisterFormType = z.infer<typeof RegisterFormSchema>;

const Register = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    mode: 'all',
    defaultValues: {
      id: '',
      password: '',
      passwordConfirm: '',
      name: '',
      businessNumber: '',
      contactName: '',
      contactEmail: '',
      contactPhone: '',
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: RegisterRequestType) => await authApi.register(data),
    onSuccess: () => {
      form.reset();
      startTransition(() => {
        navigate('/auth/login');
      });
    },
  });

  const handleSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    const { id: loginId, password: loginPw, ...rest } = data;

    await mutateAsync({
      loginId,
      loginPw,
      ...rest,
    });
  };

  return (
    <div className={styles.registerContainer}>
      <Card width="532px" className={styles.registerCard}>
        <h1>회원가입</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className={styles.registerForm}>
            {/* 아이디 */}
            <FormField
              name="id"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="id">아이디</FormLabel>
                  <FormControl>
                    <Input
                      id="id"
                      type="text"
                      placeholder="아이디를 입력해 주세요."
                      {...field}
                      autoComplete="username"
                      autoFocus
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
                      {...field}
                      id="password"
                      type="password"
                      placeholder="비밀번호를 입력해 주세요."
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 비밀번호 확인 */}
            <FormField
              name="passwordConfirm"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="passwordConfirm">비밀번호 확인</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="passwordConfirm"
                      type="password"
                      placeholder="비밀번호를 다시 입력해 주세요."
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 가맹점 이름 */}
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">가맹점 이름</FormLabel>
                  <FormControl>
                    <Input {...field} id="name" type="text" placeholder="가맹점을 입력해 주세요." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 사업자등록번호 */}
            <FormField
              name="businessNumber"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="businessNumber">사업자등록번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="businessNumber"
                      type="text"
                      placeholder="123-45-67990"
                      maxLength={12}
                      onChange={(e) => {
                        const formatted = formatBusinessNumber(e.target.value);
                        field.onChange(formatted);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 담당자 이름 */}
            <FormField
              name="contactName"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="businessNumber">이름</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="contactName"
                      type="text"
                      placeholder="이름을 입력해 주세요."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 이메일 */}
            <FormField
              name="contactEmail"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="contactEmail">이메일</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="contactEmail"
                      type="email"
                      placeholder="이메일을 입력해 주세요."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 휴대폰 */}
            <FormField
              name="contactPhone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="contactPhone">휴대폰</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="contactPhone"
                      type="text"
                      placeholder="휴대폰 번호를 입력해 주세요."
                      maxLength={13}
                      onChange={(e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        field.onChange(formatted);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              variant="secondary"
              disabled={!form.formState.isValid || isPending}
              className={styles.button}
            >
              {isPending ? '가입중...' : '회원가입'}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
