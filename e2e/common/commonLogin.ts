import {Page} from "@playwright/test";

export const login = async (page: Page) => {
    await page.goto('catalog?auth=login')
    await page.fill('#id_login_email', 'igor185097@gmail.com')
    await page.fill('#id_login_password', 'VitaB88')
    await page.click('[type="submit"]')

    if (page.locator('"Русский"')) {
        console.log('okay')
    } else {
        await page.locator('"English"').first().click();
        await page.locator('"Русский"').click();
    }
}