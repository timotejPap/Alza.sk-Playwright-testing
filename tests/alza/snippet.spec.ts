
import { test, expect } from '@playwright/test';

  test('linkedin login', async ({ page }) => {
  await page.goto('https://www.linkedin.com/feed/');
  const login = await page.title();
});