const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(
    __dirname,
    `../.env.${process.env.TEST_ENV || 'qa'}`
  ),
});

const { test, expect } = require('@playwright/test');
const { generateOtp } = require('../utils/mfa');

test.skip('user can complete Keycloak MFA login', async ({ page }) => {
  const requiredVariables = [
    'KEYCLOAK_URL',
    'KEYCLOAK_REALM',
    'KEYCLOAK_USERNAME',
    'KEYCLOAK_PASSWORD',
    'MFA_SECRET',
  ];

  for (const variable of requiredVariables) {
    if (!process.env[variable]) {
      throw new Error(`${variable} is missing from the environment file`);
    }
  }

  await page.goto(
    `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/account/`
  );

await page.getByRole('textbox', {
  name: 'Username or email',
}).fill(process.env.KEYCLOAK_USERNAME);

await page.getByRole('textbox', { name: 'Password' }).fill(
  process.env.KEYCLOAK_PASSWORD
);

  await page.getByRole('button', { name: 'Sign In' }).click();

  const otp = await generateOtp(process.env.MFA_SECRET);

  await page.getByLabel(/One-time code|OTP/i).fill(otp);
  await page.getByRole('button', { name: 'Sign In' }).click();

  await expect(page).toHaveURL(
    new RegExp(`/realms/${process.env.KEYCLOAK_REALM}/account`)
  );
});