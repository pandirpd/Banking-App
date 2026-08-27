const { test, expect } = require('../fixtures/baseTest');

test('user can log in successfully', async ({ page, loginPage }) => {
  if (!process.env.TEST_USERNAME || !process.env.TEST_PASSWORD) {
    throw new Error(
      'TEST_USERNAME and TEST_PASSWORD must be configured'
    );
  }

  await page.goto('index.htm');

  await loginPage.login(
    process.env.TEST_USERNAME,
    process.env.TEST_PASSWORD
  );

  await expect(page).toHaveURL(/overview\.htm/);
  await expect(page.getByText(/Welcome/)).toBeVisible();
});