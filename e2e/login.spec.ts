import {expect, test} from "@playwright/test";
import {faker} from "@faker-js/faker";

//
// const emailArray = ['123131ok@gmail.com', '123131ok@gmail.com', 'igor185097@gmail.com'];
// const passwordArray = ['VitaB88', 'VitaB2228', 'VitaB2228']
// for (const email of emailArray, passwordArray) {
//     test(`testing with ${email}`, async ({page, email}) => {
//         await page.goto('catalog?auth=login')
//         await page.fill('#id_login_email', email)
//         await page.fill('#id_login_password', 'VitaB88')
//         await page.click('[type="submit"]')
//         await expect(page.locator('.search-form__for'), 'search form not displayed after login').toBeVisible()
//     });
// }


test('User can not login with uncorrect login', async ({page}) => {
    const email = faker.company
    await page.goto('catalog?auth=login')
    await page.fill('#id_login_email', `${email}`)
    await page.fill('#id_login_password', 'VitaB88')
    await page.click('[type="submit"]')
    await expect(page.locator('.search-form__for'), 'search form displayed after uncorrect login').not.toBeVisible()
    await expect(page.locator('[role="alert"]'), 'text with mistake form not displayed after trying to login').toBeVisible()
});

test('User can not login with uncorrect password', async ({page}) => {
    const password = faker.random
    await page.goto('catalog?auth=login')
    await page.fill('#id_login_email', 'igor185097@gmail.com')
    await page.fill('#id_login_password', `${password}`)
    await page.click('[type="submit"]')
    await expect(page.locator('.search-form__for'), 'search form not displayed after login').not.toBeVisible()
    await expect(page.locator('[role="alert"]'), 'text with mistake form not displayed after trying to logintext with mistake form not displayed after trying to login').toBeVisible()
});

test('User can not login with uncorrect login and password', async ({page}) => {
    const password = faker.random
    const email = faker.internet
    await page.goto('catalog?auth=login')
    await page.fill('#id_login_email', `${email}`)
    await page.fill('#id_login_password', `${password}`)
    await page.click('[type="submit"]')
    await expect(page.locator('.search-form__for'), 'search form not displayed after login').not.toBeVisible()
    await expect(page.locator('[role="alert"]'), 'text with mistake form not displayed after trying to login').toBeVisible()
});


