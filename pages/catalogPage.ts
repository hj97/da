import {expect, Locator, Page} from "@playwright/test";

export class CatalogPage {
    private readonly page: Page
    private readonly russianLanguageDropdown: Locator
    private readonly englishLanguageDropdown: Locator
    private readonly logoStepik: Locator

    constructor(page: Page) {
        this.page = page
        this.russianLanguageDropdown = page.locator('"Русский"')
        this.englishLanguageDropdown = page.locator('"English"').first()
        this.logoStepik = page.getByRole('link', {name: 'Stepik'})
    }

    async chooseLanguage() {
        if (this.russianLanguageDropdown) {
            console.log('okay')
        } else {
            await this.englishLanguageDropdown.click();
            await this.russianLanguageDropdown.click();
        }
    }

    async goToLearnPage() {
        await this.logoStepik.click();
        await expect.soft(this.page).toHaveURL('/learn?auth=login');
    }
}