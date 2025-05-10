import { expect, test } from 'vitest';
import Login from '@/pages/auth/login';
import { render } from '@testing-library/react';

test('Login', () => {
  const { container } = render(<Login />);
  expect(container).toMatchSnapshot();
});
