import { Locator, Page, expect } from "@playwright/test";

export class Shopping {
    page: Page;
    account: Locator;
    itemName: Locator;
    clickSearch: Locator;
    clickWatch: Locator;


    constructor(page: Page){
        this.page = page;
        this.account = page.getByTestId("headerContextMenuToggleTitle");
        this.itemName = page.getByPlaceholder('Čo hľadáte? Napr. kábel');
        this.clickSearch = page.getByTestId('button-search');
        this.clickWatch = page.getByRole('checkbox', { name: "CASIO LCW M100DSE-2A - Pánske"});
    }

    async clickOnMojaAlza () {
        await this.account.click();
    }

    async searchItem () {
        await this.itemName.fill("hodinky");
    }

    async searchButton () {
        await this.clickSearch.click();
    }

    // opraviť spodný test
    async clickWatchCasio () {
        await this.clickWatch.click();
        await this.page.screenshot({ path: 'searchResult.png' });
    }

}