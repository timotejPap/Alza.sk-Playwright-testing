import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login';
import { Shopping } from './pages/shopping';

test.describe("Login to account and add item to basket", () => {

test("Login to alza", async ({page}) => {
    test.info().annotations.push(({
        type: "Test",
        description: "This test allows user to login to alza.sk."
    }));

    const login = new LoginPage (page);
    const shop = new Shopping (page);


    await test.step("Go to alza.sk", async () => {
        await page.goto("https://www.alza.sk/");
    })

    await test.step("Click on Moja Alza", async () => {
        await login.clickLoginLink();
    })

    await test.step("This inputs valid login credentials", async () => {
        await login.emailOKPassOK();
    })

    await test.step("Click on Moja Alza", async () => {
        await shop.clickOnMojaAlza();
    })

    await test.step("Checks logout text", async () => {
        await login.logoutText();
    })
});



test("Shopping watches", async ({page}) => {
    test.info().annotations.push(({
        type: "Test",
        description: "This test allows user to add an item into basket."
    }));
    
    const shop = new Shopping (page);

    await test.step("Go to alza.sk", async () => {
        await page.goto("https://www.alza.sk/");
    })

    await test.step("Searching hodinky", async () => {
        await shop.searchItem();
    })

    await test.step("Submit searching", async () => {
        await shop.searchButton();
    })
    
    await test.step("Clicking on concrete watches", async () => {
        await shop.clickWatchCasio();
    })

})
});