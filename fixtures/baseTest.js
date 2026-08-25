const {test:base ,expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {OpenNewAccountPage }= require('../pages/OpenNewAccountPage');
const ParaBankHomePage = require('../pages/ParaBankHomePage');
const { RegistrationPage } = require('../pages/registrationPage');

const test=base.extend({
    loginPage:async ({page},use)=>{
        await use(new LoginPage(page));
    },

  openNewAccountPage: async ({ page }, use) => {
    await use(new OpenNewAccountPage(page));
  },

    paraBankHomePage: async({page},use)=>{
        await use(new ParaBankHomePage(page));
    },

    authenticatedPage: async ({ page, loginPage }, use) => {
    const fs = require('node:fs');
    const path = require('node:path');

    const credentialsPath = path.join(
    __dirname,
    '../test-data/runtime-credentials.json'
        );

    const credentials = JSON.parse(
    fs.readFileSync(credentialsPath, 'utf8')
    );

    await page.goto('index.htm');

    await loginPage.login(
    credentials.username,
    credentials.password
  );

  await use(page);
},

    apiRequest: async({request}, use)=>{
        await use(request);
    },

    registrationPage: async ({ page }, use) => {
  await use(new RegistrationPage(page));
},
});

module.exports = { test, expect };