import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form/Form';
import { Button } from '@/components/ui/button/Button';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

export const ExampleForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(
      `폼 제출 성공!\n이메일: ${values.email}\n비밀번호: ${values.password.replace(/./g, '*')}`
    );
  }

  return (
    <div>
      <h2>로그인</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="example@email.com"
                    type="email"
                    autoComplete="email"
                    prefix={<MailIcon size={16} />}
                  />
                </FormControl>
                <FormDescription>계정에 등록된 이메일을 입력하세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="비밀번호를 입력하세요."
                    prefix={<LockIcon size={16} />}
                    suffix={
                      <Button
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
                <FormDescription>최소 8자 이상, 대소문자와 숫자를 포함해야 합니다.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">로그인</Button>
        </form>
      </Form>
    </div>
  );
};
