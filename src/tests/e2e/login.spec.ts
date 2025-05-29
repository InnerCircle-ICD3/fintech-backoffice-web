/* eslint-disable react-hooks/rules-of-hooks */
import { test as base, expect, Page } from '@playwright/test';
import fixtures from '../mocks/fixtures';
import { MockAuthStorage } from '../mocks/stores/auth-store';

const DASHBOARD_URL = '/transaction/list';
const LOGIN_URL = '/auth/login';

const test = base.extend({
  context: async ({ context }, use) => {
    await context.addInitScript(() => {
      const mockStorage = new MockAuthStorage();
      Object.defineProperty(window, 'localStorage', { value: mockStorage });
      Object.defineProperty(window, 'sessionStorage', { value: mockStorage });
    });
    await use(context);
  },
});

async function performLogin(page: Page, autoLogin: boolean = true) {
  await page.goto(LOGIN_URL);

  if (!autoLogin) {
    await page.getByTestId('auto-login-checkbox').uncheck();
  }

  await page.getByTestId('login-id-input').fill(fixtures.login.request.loginId);
  await page.getByTestId('login-password-input').fill(fixtures.login.request.loginPw);
  await page.getByTestId('login-submit-button').click();
}

test.describe('로그인 페이지', () => {
  test('아이디 비밀번호를 입력하면 로그인 후 대시보드로 이동한다', async ({ page }) => {
    await performLogin(page);

    // 로그인 성공 확인
    await expect(page).toHaveURL(DASHBOARD_URL);
    await expect(page.getByTestId('logout-button')).toBeVisible();

    // 새로고침 후에도 로그인 상태 유지
    await page.reload();
    await expect(page).toHaveURL(DASHBOARD_URL);
    await expect(page.getByTestId('logout-button')).toBeVisible();

    // 로그아웃
    await page.getByTestId('logout-button').click();
    await page.getByTestId('confirm-dialog-action-button').click();
    await expect(page).toHaveURL(LOGIN_URL);
  });

  test('로그인 실패시 Toast UI가 표시된다', async ({ page }) => {
    await page.goto(LOGIN_URL);
    await page.getByTestId('login-id-input').fill('invalid123');
    await page.getByTestId('login-password-input').fill('invalid123!!');
    await page.getByTestId('login-submit-button').click();

    await expect(page.locator('.error-toast')).toBeVisible();
    await expect(page).toHaveURL(LOGIN_URL);
  });

  test.describe('로그인 상태 관리', () => {
    test('자동 로그인 체크 후 로그인하면 로컬스토리지에 저장하고, 로그인 상태가 유지된다', async ({
      context,
    }) => {
      const page1 = await context.newPage();
      await performLogin(page1, true);

      // localStorage 저장 확인
      const storage = await page1.evaluate(() => localStorage.getItem('auth-store'));
      expect(storage).toBeTruthy();
      await page1.close();

      // 새 브라우저에서 상태 확인
      const page2 = await context.newPage();
      await page2.goto('/');
      const loadedStorage = await page2.evaluate(() => localStorage.getItem('auth-store'));
      expect(loadedStorage).toBe(storage);
      await expect(page2).toHaveURL(DASHBOARD_URL);
    });

    test('자동 로그인 체크 해제하고 로그인하면 세션스토리지에 저장하고, 로그인이 유지되지 않는다', async ({
      context,
    }) => {
      const page1 = await context.newPage();
      await performLogin(page1, false);

      // sessionStorage 저장 확인
      const storage = await page1.evaluate(() => sessionStorage.getItem('auth-store'));
      expect(storage).toBeTruthy();
      await page1.close();

      // 새 브라우저에서 상태 확인
      const page2 = await context.newPage();
      await page2.goto('/');
      await expect(page2).toHaveURL(LOGIN_URL);
      await expect(page2.getByRole('heading', { name: '로그인' })).toBeVisible();
    });
  });
});
