import { test, expect } from '@playwright/test';
import { Registration } from './pages/register';

test("New registration", async ({page}) => {

    test.info().annotations.push({
        type: "Test",
        description: "This test allows user to make new registration."
    });
    const newReg = new Registration (page);
    await newReg.gotoPage();
    await newReg.account();
    await newReg.registerLink();
    await page.locator("#edth1EmailLogin").click();
    await newReg.regEmailInput();
    await newReg.regPasswordInput();
    await newReg.regPasswordConfirm();
    await newReg.regEmailInput();
    await newReg.submit();
});