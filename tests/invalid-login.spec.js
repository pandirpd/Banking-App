const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { invalidLoginData } = require('../test-data/invalid-login-data');

for(const loginData of invalidLoginData){
    test(`invalid login': ${loginData.username}`,{tag:'@invalidlogin'},async({page})=>{
        const loginPage =new LoginPage(page);
        await page.goto('index.htm');
        await loginPage.login(loginData.username,loginData.password);
              await expect(page.locator('#rightPanel')).toContainText(
        'The username and password could not be verified');
    }
    );
}