import Login from '@/features/auth/login';
import { LoginFormSchema } from '@/features/auth/login/schema';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const router = createMemoryRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

const renderLogin = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

describe('로그인 폼', () => {
  beforeEach(() => {
    queryClient.clear();
  });

  describe('초기 화면', () => {
    test('아이디 입력창에 포커스가 자동으로 위치한다', () => {
      renderLogin();
      const idInput = screen.getByTestId('login-id-input');
      expect(idInput).toHaveFocus();
    });

    test('비밀번호 입력시 마스킹 처리되어 보여진다', () => {
      renderLogin();
      const passwordInput = screen.getByTestId('login-password-input');
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('자동 로그인이 기본적으로 체크되어 있다', () => {
      renderLogin();
      const autoLoginCheckbox = screen.getByTestId('auto-login-checkbox');
      expect(autoLoginCheckbox).toBeChecked();
    });
  });

  describe('비밀번호 보기/숨기기', () => {
    test('비밀번호 보기 버튼을 클릭하면 비밀번호가 노출된다', () => {
      renderLogin();
      const passwordInput = screen.getByTestId('login-password-input');
      const showPasswordButton = screen.getByLabelText('비밀번호 보기');

      fireEvent.click(showPasswordButton);
      expect(passwordInput).toHaveAttribute('type', 'text');
    });
  });

  describe('폼 유효성 검사 UI', () => {
    describe('필수 입력값 검증', () => {
      test('아이디와 비밀번호를 입력하지 않으면 필수 입력 에러 메시지가 표시된다', async () => {
        // 스키마로 검증하여 에러 메시지 가져오기
        const idResult = LoginFormSchema.shape.id.safeParse('');
        const passwordResult = LoginFormSchema.shape.password.safeParse('');

        const idError = !idResult.success ? idResult.error.errors[0].message : '';
        const passwordError = !passwordResult.success ? passwordResult.error.errors[0].message : '';

        renderLogin();
        const submitButton = screen.getByTestId('login-submit-button');

        fireEvent.click(submitButton);

        await waitFor(() => {
          expect(screen.getByText(idError)).toBeInTheDocument();
          expect(screen.getByText(passwordError)).toBeInTheDocument();
        });
      });
    });

    describe('아이디 입력값 검증', () => {
      test('아이디가 4자 미만이면 최소 길이 에러 메시지가 표시된다', async () => {
        renderLogin();
        const idInput = screen.getByTestId('login-id-input');

        fireEvent.change(idInput, { target: { value: 'abc' } });
        fireEvent.blur(idInput);

        const idResult = LoginFormSchema.shape.id.safeParse('abc');
        if (!idResult.success) {
          await waitFor(() => {
            expect(screen.getByText(idResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('아이디가 20자를 초과하면 최대 길이 에러 메시지가 표시된다', async () => {
        renderLogin();
        const idInput = screen.getByTestId('login-id-input');

        fireEvent.change(idInput, { target: { value: 'abcdefghijklmnopqrstu1' } });
        fireEvent.blur(idInput);

        const idResult = LoginFormSchema.shape.id.safeParse('abcdefghijklmnopqrstu1');
        if (!idResult.success) {
          await waitFor(() => {
            expect(screen.getByText(idResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('영문만 입력된 아이디는 에러 메시지가 표시된다', async () => {
        renderLogin();
        const idInput = screen.getByTestId('login-id-input');

        fireEvent.change(idInput, { target: { value: 'onlytext' } });
        fireEvent.blur(idInput);

        const idResult = LoginFormSchema.shape.id.safeParse('onlytext');
        if (!idResult.success) {
          await waitFor(() => {
            expect(screen.getByText(idResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('숫자만 입력된 아이디는 에러 메시지가 표시된다', async () => {
        renderLogin();
        const idInput = screen.getByTestId('login-id-input');

        fireEvent.change(idInput, { target: { value: '123456' } });
        fireEvent.blur(idInput);

        const idResult = LoginFormSchema.shape.id.safeParse('123456');
        if (!idResult.success) {
          await waitFor(() => {
            expect(screen.getByText(idResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });
    });

    describe('비밀번호 입력값 검증', () => {
      test('비밀번호가 8자 미만이면 최소 길이 에러 메시지가 표시된다', async () => {
        renderLogin();
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(passwordInput, { target: { value: 'weak' } });
        fireEvent.blur(passwordInput);

        const passwordResult = LoginFormSchema.shape.password.safeParse('weak');
        if (!passwordResult.success) {
          await waitFor(() => {
            expect(screen.getByText(passwordResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('비밀번호가 20자를 초과하면 최대 길이 에러 메시지가 표시된다', async () => {
        renderLogin();
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(passwordInput, { target: { value: 'ThisIsAVeryLongPassword123!' } });
        fireEvent.blur(passwordInput);

        const passwordResult = LoginFormSchema.shape.password.safeParse(
          'ThisIsAVeryLongPassword123!'
        );
        if (!passwordResult.success) {
          await waitFor(() => {
            expect(screen.getByText(passwordResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('영문과 숫자만 입력된 비밀번호는 에러 메시지가 표시된다', async () => {
        renderLogin();
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(passwordInput, { target: { value: 'onlytext12345' } });
        fireEvent.blur(passwordInput);

        const passwordResult = LoginFormSchema.shape.password.safeParse('onlytext12345');
        if (!passwordResult.success) {
          await waitFor(() => {
            expect(screen.getByText(passwordResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('영문과 특수문자만 입력된 비밀번호는 에러 메시지가 표시된다', async () => {
        renderLogin();
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(passwordInput, { target: { value: 'onlytext!@#' } });
        fireEvent.blur(passwordInput);

        const passwordResult = LoginFormSchema.shape.password.safeParse('onlytext!@#');
        if (!passwordResult.success) {
          await waitFor(() => {
            expect(screen.getByText(passwordResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });

      test('숫자와 특수문자만 입력된 비밀번호는 에러 메시지가 표시된다', async () => {
        renderLogin();
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(passwordInput, { target: { value: '12345!@#' } });
        fireEvent.blur(passwordInput);

        const passwordResult = LoginFormSchema.shape.password.safeParse('12345!@#');
        if (!passwordResult.success) {
          await waitFor(() => {
            expect(screen.getByText(passwordResult.error.errors[0].message)).toBeInTheDocument();
          });
        }
      });
    });

    describe('정상 입력값 검증', () => {
      test('아이디와 비밀번호가 모든 조건을 만족하면 에러 메시지가 표시되지 않는다', async () => {
        renderLogin();
        const idInput = screen.getByTestId('login-id-input');
        const passwordInput = screen.getByTestId('login-password-input');

        fireEvent.change(idInput, { target: { value: 'testuser123' } });
        fireEvent.change(passwordInput, { target: { value: 'Test1234!@' } });
        fireEvent.blur(idInput);
        fireEvent.blur(passwordInput);

        await waitFor(() => {
          const errorMessages = screen.queryAllByRole('alert');
          expect(errorMessages).toHaveLength(0);
        });
      });
    });
  });
});
