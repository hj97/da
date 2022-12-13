import {LearnCoursesPage} from "../pages/learnCourses/learnCoursesPage";
import {test} from "@playwright/test";
import {LoginPage} from "../pages/loginPage";
import {CatalogPage} from "../pages/catalog/catalogPage";

test('User can add new course and delete it', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.login()

    await test.step('Choose language and go to learn page', async () => {
        const catalogPage = new CatalogPage(page)
        await catalogPage.chooseLanguage()
        await catalogPage.goToLearnPage()
    })
    await page.click('"Прохожу"')

    const expectedAllNameCourses = ['Python: основы и применение', 'Демо версия Школы Питона', '"Поколение Python": курс для начинающих', '"Поколение Python": курс для продвинутых']

    const learnCoursesPage = new LearnCoursesPage(page)
    await learnCoursesPage.checkAllLearnCourses(expectedAllNameCourses)
})