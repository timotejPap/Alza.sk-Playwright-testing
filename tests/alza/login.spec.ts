import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login';
import { Registration } from './pages/register';

test.describe("Login test with annotation", () => {

test("Login", async ({page}) => {
     test.info().annotations.push(({
       type: "Test",
         description: "This test allows user to login on alza.sk."
    }));

    const login = new LoginPage (page);
    const newReg = new Registration (page);
    
    await test.step("Go to alza.sk", async () => {
        await newReg.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs valid login credentials", async () => {
        await login.loginProcess();
    })

    await test.step("Click on Moja Alza", async () => {
        await newReg.account();
    })

    await test.step("Checks logout text", async () => {
        await login.logoutText();
    })
})
});