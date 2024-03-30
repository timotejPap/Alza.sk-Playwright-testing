import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login';
import { Registration } from './pages/register';

test("Login", async ({page}) => {
    // test.info().annotations.push({
    //     type: "Test",
    //     description: "This test allows user to login on alza.sk."
    // });
    const login = new LoginPage (page);
    const newReg = new Registration (page);
    await newReg.gotoPage();
    await login.clickLogin();
    await login.loginProcess();
    await newReg.account();
    await login.logoutText();
});