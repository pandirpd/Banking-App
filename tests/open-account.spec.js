const{test,expect} = require('../fixtures/baseTest.js');
const{credentials} = require('../test-data/credentials.js');

test('user can open a new saving account',async ({
    page,
    loginPage,
    openNewAccountPage,
})=>{
  await page.goto(
    'index.htm'
  );

  await loginPage.login(credentials.username, credentials.password);
  await openNewAccountPage.openNewAccount();

  await expect(page.locator('#openAccountResult')).toContainText(
    'Congratulations, your account is now open.'
  );
});