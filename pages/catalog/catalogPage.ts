import {expect, Locator, Page} from "@playwright/test";
import {MainPage} from "../mainPage/mainPage";

export class CatalogPage extends MainPage {
    protected readonly russianLanguageDropdown: Locator
    protected readonly englishLanguageDropdown: Locator
    protected readonly logoStepik: Locator

    constructor(page: Page) {
        super(page, '')
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