import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;
    loginLinkWait: Locator;
    loginLink: Locator;
    title: Locator;
    userName: Locator;
    password: Locator;
    submit: Locator;
    mojaAlza: Locator;
    logout: Locator;
    textBadLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLinkWait = page.getByText("Prihlásiť sa");
        this.loginLink = page.getByText("Prihlásiť sa");
        this.title = page.getByRole("heading", {name: "Prihlásenie"});
        this.userName = page.locator("#userName");
        this.password = page.locator("#password");
        this.submit = page.getByText("Prihlásiť sa");
        this.mojaAlza = page.getByText('Moja Alza');
        this.logout = page.getByText("Odhlásiť sa");
        this.textBadLogin = page.getByText("Nesprávne užívateľské meno alebo heslo");
    }
    
    async gotoPage () {
        await this.page.goto("https://www.alza.sk/");
    }

    async clickLoginLink () {
        await this.loginLink.click();
    }  

    async titleText () {
        await expect (this.title).toBeVisible();
        await this.page.screenshot({ path: 'loginText.png' });
    }

    async logoutText () {
        await expect (this.logout).toBeVisible();
    }  

    async clickLogout () {
        await this.logout.click();
    }  

    async emailOKPassOK () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("test@address.com");
        await this.password.fill("6SNx4WB87C3tXF");
        await this.submit.click();
    }

    async emailOKPassNO () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("test@address.com");
        await this.password.fill("badpassword");
        await this.submit.click();
    }

    async emailNOPassOK () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("test@addresss.com");
        await this.password.fill("6SNx4WB87C3tXF");
        await this.submit.click();
    }

    async emailNOPassNO () {
        await expect (this.title).toBeVisible();
        await this.userName.fill("test@addresss.com");
        await this.password.fill("badpassword");
        await this.submit.click();
    }

    async account () {
        await this.mojaAlza.click();
    }

    async errorMessage () {
        await expect (this.textBadLogin).toBeVisible();
    }
}