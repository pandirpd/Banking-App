const { test, expect } = require('../fixtures/baseTest');
//const { credentials } = require('../test-data/credentials');
const fs = require('node:fs');
const path = require('node:path');

const credentialsPath = path.join(
  __dirname,
  '../test-data/runtime-credentials.json'
);

const credentials = JSON.parse(
  fs.readFileSync(credentialsPath, 'utf8')
);
test(
    'user can log in successfully',
    {tag:'@login'}, 
    async ({ page, loginPage }) => {
    await page.goto(
    'index.htm'
  );

   await loginPage.login(
    credentials.username,
    credentials.password
  );


await expect(page).toHaveURL(/overview\.htm/);
await expect(page.getByText(/Welcome/)).toBeVisible();
});