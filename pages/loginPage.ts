import {Locator, Page} from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameField: Locator
    private readonly passwordField: Locator
    private readonly submitButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#id_login_email')
        this.passwordField = page.locator('#id_login_password')
        this.submitButton = page.locator('[type="submit"]')
    }

    async login() {
        await this.page.goto('catalog?auth=login')
        await this.usernameField.fill('igor185097@gmail.com')
        await this.passwordField.fill('VitaB88')
        await this.submitButton.click()
    }
}