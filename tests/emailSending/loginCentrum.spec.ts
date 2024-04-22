import { test, expect } from '@playwright/test';
import { loginCentrum } from './loginCentrum';

test.describe("Login, sending email and logout", () => {

    test.only("Sending e-mail", async ({page}) => {
        test.info().annotations.push(({
          type: "Test",
            description: "This test allows user to login on centrum.sk. send an e-mail and logout."
       }));
   
       const centrum = new loginCentrum (page);
       
       await test.step("Go to centrum.sk", async () => {
           await centrum.gotoPage();
       })

       await test.step("Click cookies", async () => {
           await centrum.clickCookies();
        })

       await test.step("Input login name", async () => {
            await centrum.inputLoginName();
       })

       await test.step("Input password", async () => {
            await centrum.inputPassword();
       })

       await test.step("Click Submit", async () => {
            await centrum.clickSubmit();
       })
       
       await test.step("Logout visible", async () => {
            await centrum.isLogoutVisible();
       })       
       
       await test.step("Click to enter account", async () => {
            await centrum.enteringToAccount();
       })       
       
       await test.step("Writing new email", async () => {
            await centrum.newEmail();
       })       
       
       await test.step("Input recipient name", async () => {
            await centrum.writeRecipient();
       })       
       
       await test.step("Input subject", async () => {
            await centrum.subjectInput();
       })       
       
       await test.step("Input test message", async () => {
            await centrum.textMessage();
       })

    })
});