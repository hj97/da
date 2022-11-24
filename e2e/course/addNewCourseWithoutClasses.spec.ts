import {expect, test} from '@playwright/test';
import {login} from "../common/commonLogin";
import {get} from "../../api/get";
import {courseLocators} from "./locators";

test('User can add new course and delete it', async ({page}) => {
    const leftMenuContent = page.locator(courseLocators.leftMenuContent)
    await login(page)

    await test.step('Go to learn page', async () => {
        await page.getByRole('link', {name: 'Stepik'}).click();
        await expect.soft(page).toHaveURL('/learn?auth=login');
    })
    await test.step('Check layout after go to learn page', async () => {
        await expect.soft(page.locator(courseLocators.headerLearnPage), 'Header is not displayed').toBeVisible()
        await expect.soft(page.locator(courseLocators.leftMenuLearnPage), 'Side bar is not displayed').toBeVisible()
        await expect.soft(page.locator(courseLocators.coursesInProcess), 'Have not a started course').toHaveText('Моё обучение')
        await expect.soft(page.locator(courseLocators.bodyLearnPage), 'Body is not displayed').toBeVisible()
    })
    await test.step('Open the course', async () => {
        await page.locator(courseLocators.courseIcon).first().click();
        await expect.soft(page.locator(courseLocators.courseHead), 'Description of the course is not displayed').toBeVisible()
    })

    await test.step('Arrive to the course', async () => {
        await page.getByRole('button', {name: 'Поступить на курс'}).first().click();
        await expect.soft(leftMenuContent, 'Left menu is not displayed').toBeVisible()
    })
    await test.step('Check course program', async () => {
        // await page.locator(courseLocators.leftMenuHeader).click();
        // await page.locator('[aria-label="Навигация по курсу"] .sidebar-module-header__title').first()
        await expect.soft(leftMenuContent, 'Left menu is not displayed').toBeVisible()
        await page.locator('.lesson-sidebar__course-title').click();
        await page.locator('.st-link').first().click();

    })
    await test.step('Go to learn page', async () => {
        // await page.getByRole('link', {name: 'Stepik'}).click();
        await page.locator('//a[contains(@href, "/learn?auth=login")]').first().click()
        await expect.soft(page).toHaveURL('/learn?auth=login');
    })
    await test.step('Go to course in process', async () => {
        await page.getByRole('link', {name: 'Прохожу'}).click();
        await expect.soft(page).toHaveURL('/learn/courses');
        await expect.soft(page.locator(courseLocators.courseInProcessLearn).first()).toBeVisible();
    })
    await test.step('Go to course in process', async () => {
        const getCourse = await get(page, '/api/users?ids%5B%5D=37228178&ids%5B%5D=48959503&ids%5B%5D=207915658&ids%5B%5D=470788160')
        await console.log(getCourse)
    })
    await test.step('Delete course', async () => {
        await page.locator(courseLocators.courseSetting).first().click();
        await page.locator(courseLocators.exitTheCourse).click();
        await page.locator('[role="dialog"]').locator('.danger').click();
        await expect(page.locator(courseLocators.coursesInProcess).first()).not.toBeVisible();
    })
});