import { test, expect } from '@playwright/test';

test('error boundary test for different error types', async ({ page }) => {
  // 예제 에러 페이지로 이동
  await page.goto('/example');

  // 페이지가 로드되었는지 확인
  await expect(page.getByText('에러 처리 테스트')).toBeVisible();

  // 다양한 에러 타입 테스트
  const errorTypes = ['400', '401', '403', '404', '500', 'network'];

  for (const errorType of errorTypes) {
    // 에러 타입 선택
    await page.selectOption('select', errorType);

    // 일반 Query 테스트 버튼 클릭
    await page.getByRole('button', { name: '일반 Query 테스트' }).click();

    // 에러 바운더리로 리다이렉트되었는지 확인
    await expect(page.getByText('앗!..')).toBeVisible({ timeout: 11000 });

    // 에러 메시지가 표시되는지 확인
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();

    // 홈으로 이동 버튼이 있는지 확인
    await expect(page.getByRole('link', { name: '홈으로 이동' })).toBeVisible();

    // 새로고침 버튼이 있는지 확인
    await expect(page.getByRole('button', { name: '새로고침' })).toBeVisible();

    // 테스트를 위해 다시 예제 에러 페이지로 이동
    await page.goto('/example');
    await expect(page.getByText('에러 처리 테스트')).toBeVisible();
  }
});
