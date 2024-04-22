import { Locator, Page, expect } from "@playwright/test";

export class loginCentrum {
    page: Page;
    cookies: Locator;
    inputUserName: Locator;
    inputUserPassword: Locator;
    submit: Locator;
    logoutText: Locator;
    enterAccount: Locator;
    writeEmail: Locator;
    recipient: Locator;
    subject: Locator;
    message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookies = page.getByRole('button', { name: 'Pokračovať s nevyhnutnými' });
        this.inputUserName = page.getByRole('complementary').locator('input[name="userName"]');
        this.inputUserPassword = page.getByRole('complementary').locator('input[name="password"]');
        this.submit = page.getByRole('button', { name: 'Prihlásiť' });
        this.logoutText = page.getByRole("button", { name: "Odhlásiť" });
        this.enterAccount = page.getByRole("link", { name: "timotejpap@centrum.sk" });
        this.writeEmail = page.getByText("Napísať správu");
        this.recipient = page.locator("#smart_input_to");
        this.subject = page.locator("#subject_input");
        this.message = page.locator("#tinymce");
    }

    async gotoPage () {
        await this.page.goto("https://www.centrum.sk/");
    }

    async clickCookies () {
        await this.cookies.click();
    }

    async clickLoginName () {
        await this.inputUserName.click();
    }

    async inputLoginName () {
        await this.inputUserName.fill("timotejpap");
    }

    async clickPassword () {
        await this.inputUserPassword.click();
    }

    async inputPassword () {
        await this.inputUserPassword.fill("Xw2Veo@pR^CBKq");
    }
    
    async clickSubmit () {
        await this.submit.click();
    }    
    
    async isLogoutVisible () {
        return await this.logoutText.isVisible();
    }

    async enteringToAccount () {
        await this.enterAccount.click();
    }
    
    async newEmail () {
        await this.writeEmail.click();
    }    
    
    async writeRecipient () {
        await this.recipient.fill("paptimotej@gmail.com");
    }    
    
    async subjectInput () {
        await this.subject.fill("Test message");
    }    
    
    async textMessage () {
        await this.message.fill("This is test message");
    }
}