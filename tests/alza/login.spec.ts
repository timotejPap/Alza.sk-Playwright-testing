import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login';

test.describe("Login test with annotation", () => {


// valid email and valid password

test("Login OK - Email Y, Password Y @EYPY", async ({page}) => {
     test.slow()
     test.info().annotations.push(({
       type: "Test",
         description: "This test allows user to login to alza.sk. Includes valid email and valid password."
    }));

    const login = new LoginPage (page);
    
    await test.step("Go to alza.sk", async () => {
        await login.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs valid login credentials", async () => {
        await login.emailOKPassOK();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.account();
    })

    await test.step("Checks logout text", async () => {
        await login.logoutText();
    })

    await test.step("Logout", async () => {
        await login.clickLogout();
    })
})

// valid email and invalid password

test("Login NO - Email Y, Password N @EYPN", async ({page}) => {
     test.slow()
     test.info().annotations.push(({
       type: "Test",
         description: "This test forbids user to login to alza.sk. Includes valid email and invalid password."
    }));

    const login = new LoginPage (page);
    
    await test.step("Go to alza.sk", async () => {
        await login.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs invalid login credentials", async () => {
        await login.emailOKPassNO();
    })

     await test.step("Checks login text", async () => {
         await login.titleText();
     })
})


// invalid email and valid password

test("Login NO - Email N, Password Y @ENPY", async ({page}) => {
     test.slow()
     test.info().annotations.push(({
       type: "Test",
         description: "This test forbids user to login to alza.sk. Includes invalid email and valid password."
    }));

    const login = new LoginPage (page);
    
    await test.step("Go to alza.sk", async () => {
        await login.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs invalid login credentials", async () => {
        await login.emailNOPassOK();
    })

    await test.step("Checks login text", async () => {
        await login.titleText();
    })
})

// invalid email and invalid password

test("Login NO - Email N, Password N @ENPN", async ({page}) => {
     test.slow()
     test.info().annotations.push(({
       type: "Test",
         description: "This test forbids user to login to alza.sk. Includes invalid email and invalid password."
    }));

    const login = new LoginPage (page);
    
    await test.step("Go to alza.sk", async () => {
        await login.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs invalid login credentials", async () => {
        await login.emailNOPassNO();
    })

    await test.step("Checks login text", async () => {
        await login.titleText();
    })


});
})