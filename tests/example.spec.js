import { test, expect } from '@playwright/test';

const paraBankUrl = 'index.htm';

test('ParaBank home page is displayed', async ({ page }) => {
  await page.goto(paraBankUrl);

  await expect(page).toHaveTitle(/ParaBank/);
  await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
});
