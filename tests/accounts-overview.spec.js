const{test,expect} = require('../fixtures/baseTest.js');

test('user can view account overview',{tag:'@ui'}, 
    async ({ authenticatedPage, paraBankHomePage}) => {
  await paraBankHomePage.openAccountOverview();
  await expect(
    paraBankHomePage.accountOverviewHeader
  ).toBeVisible();
});