import { test, expect } from '@playwright/test';
import { Registration } from './pages/register';

test.describe("Registration test with annotation", () => {

    test("Login", async ({page}) => {
         test.info().annotations.push(({
           type: "Test",
             description: "This test allows user to register on alza.sk."
        }));

    const newReg = new Registration (page);

    await test.step("Go to alza.sk", async () => {
        await newReg.gotoPage();
    })

    await test.step("Click on Moja Alza", async () => {
        await newReg.account();
    })

    await test.step("Click on registration link", async () => {
        await newReg.registerLink();
    })

    await test.step("Click to email input field", async () => {
        await page.locator("#edth1EmailLogin").click();
    })

    await test.step("Input valid email address", async () => {
        await newReg.regEmailInput();
    })

    await test.step("Input password", async () => {
        await newReg.regPasswordInput();
    })

    await test.step("Input confirm password", async () => {
        await newReg.regPasswordConfirm();
    })

    await test.step("Input tel. number", async () => {
        await newReg.regNumberInput();
    })

    await test.step("Click on submit Uložiť", async () => {
        await newReg.submit();
    })

    await test.step("Checks login text", async () => {
        await newReg.loginText();
    })
    })
});