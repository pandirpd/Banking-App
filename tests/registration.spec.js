const { test, expect } = require('../fixtures/baseTest');
const fs = require('node:fs');
const path = require('node:path');

test('user can register successfully', async ({
  page,
  registrationPage,
}) => {
  const username = `user${Date.now()}`;
  const password = 'Password123';

  await page.goto('register.htm');

  await registrationPage.registerUser({
    firstName: 'Test',
    lastName: 'User',
    address: '1 Main Street',
    city: 'London',
    state: 'London',
    zipCode: '12345',
    phoneNumber: '5551234567',
    ssn: '123456789',
    username,
    password,
  });

  await expect(page.locator('#rightPanel')).toContainText(
    'Your account was created successfully. You are now logged in.'
  );

  await expect(page.locator('h1')).toContainText(
    `Welcome ${username}`
  );

  const credentialsPath = path.join(
    __dirname,
    '../test-data/runtime-credentials.json'
  );

  fs.writeFileSync(
    credentialsPath,
    JSON.stringify({ username, password }, null, 2)
  );
});