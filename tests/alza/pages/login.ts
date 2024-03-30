import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;
    loginLink: Locator;
    title: Locator;
    userName: Locator;
    password: Locator;
    submit: Locator;
    logout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.getByTestId('headerContextMenuToggleLogin');
        // this.title = page.getByRole("heading", {name: "Prihlásenie"});
        this.title = page.getByText("Prihlásenie");
        this.userName = page.locator("#userName");
        this.password = page.locator("#password");
        this.submit = page.locator("#loginButtonText");
        this.logout = page.getByText("Odhlásiť sa");
    }
    
    async gotoPage () {
        await this.page.goto("https://www.alza.sk/");
    }  

    async clickLogin () {
        await this.loginLink.click();
    }  

    async titleText () {
        await expect (this.title).toBeVisible();
    }

    async inputUserName () {
        await this.userName.fill("email@subdomain.domain.com");
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

    async loginProcess () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("email@subdomain.domain.com");
        await this.password.fill("6SNx4WB87C3tXF");
        await this.submit.click();
    }
}