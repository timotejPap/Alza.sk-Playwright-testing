import { Locator, Page, expect } from "@playwright/test";

export class Registration {
    page: Page;
    mojaAlza: Locator;
    regLink: Locator;
    regEmail: Locator;
    regPassword: Locator;
    regPasswordConf: Locator;
    regNumber: Locator;
    submitButton: Locator;
    title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.mojaAlza = page.getByTestId("headerContextMenuToggleTitle");
        this.regLink = page.getByRole("link", {name: "Registrácia"});
        this.regEmail = page.locator("#edth1EmailLogin");
        this.regPassword = page.locator("#edth1Password");
        this.regPasswordConf = page.locator("#edth1PasswordConfirm");
        this.regNumber = page.locator("#ctl00_ctl00_cpcm_cpc_ud2_phoneCountryBasicPhoneValidator_inpTelNumber");
        this.submitButton = page.getByText("Uložiť");
        this.title = page.getByText("Prihlásenie");
    }
    
    async gotoPage () {
        await this.page.goto("https://www.alza.sk/");
    }  

    async account () {
        await this.mojaAlza.click();
    }    

    async registerLink () {
        await this.regLink.click();
    }    

    async regEmailInput () {
        await this.regEmail.fill("testing@address.com"); // still use another e-mail address
    }     

    async regPasswordInput () {
        await this.regPassword.fill("6SNx4WB87C3tXF");
    }    

    async regPasswordConfirm () {
        await this.regPasswordConf.fill("6SNx4WB87C3tXF");
    }    

    async regNumberInput () {
        await this.regNumber.fill("234 567 890");
    }    

    async submit () {
        await this.submitButton.click();
    }    

    async loginText () {
        await expect (this.title).toBeVisible();
    }    

}