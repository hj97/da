import {expect, Page} from "@playwright/test";

// export async function login(page: Page) {
//     await page.goto('catalog?auth=login')
//     await page.fill('#id_login_email', 'igor185097@gmail.com')
//     await page.fill('#id_login_password', 'VitaB88')
//     await page.click('[type="submit"]')
//     await expect(page.locator('.search-form__for'), 'search form not displayed after login').toBeVisible()
//}

export const login = async (page:Page) => {
    await page.goto('catalog?auth=login')
    await page.fill('#id_login_email', 'igor185097@gmail.com')
    await page.fill('#id_login_password', 'VitaB88')
    await page.click('[type="submit"]')
    await expect(page.locator('.search-form__for'), 'search form not displayed after login').toBeVisible()
}