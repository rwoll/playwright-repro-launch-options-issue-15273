import { test } from '@playwright/test';

test('should work', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});
