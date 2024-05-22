import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;
    loginLinkWait: Locator;
    loginLink: Locator;
    title: Locator;
    userName: Locator;
    password: Locator;
    submit: Locator;
    logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLinkWait = page.getByText("Prihlásiť sa");
        this.loginLink = page.getByText("Prihlásiť sa");
        this.title = page.getByRole("heading", {name: "Prihlásenie"});
        // this.loginLink = page.getByTestId('headerContextMenuToggleLogin');
        this.userName = page.locator("#userName");
        this.password = page.locator("#password");
        this.submit = page.locator("#loginButtonText");
        this.logout = page.getByText("Odhlásiť sa");
    }
    
    async gotoPage () {
        await this.page.goto("https://www.alza.sk/");
    }  

    async waitForLoginLink () {
        await expect (this.loginLinkWait).toBeVisible();
    }

    async clickLoginLink () {
        await this.loginLink.click();
    }  

    async titleText () {
        await expect (this.title).toBeVisible();
    }

    async inputUserName () {
        await this.userName.fill("test@address.com");
    }

    async inputPassword () {
        await this.password.fill("6SNx4WB87C3tXF");
    }  

    async clickSubmit () {
        await this.submit.click();
    }  

    async logoutText () {
        await expect (this.logout).toBeVisible();
    }  

    async clickLogout () {
        await this.logout.click();
    }  

    async loginInputs () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("test@address.com");
        await this.password.fill("6SNx4WB87C3tXF");
        await this.submit.click();
    }
}