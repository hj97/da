import {test} from "@playwright/test";
import {LoginPage} from "../../pages/loginPage";
import {LearnPage} from "../../pages/learnPage";
import {CatalogPage} from "../../pages/catalog/catalogPage";
import {CoursesPromoPage} from "../../pages/coursesPromoPage";

test('User can add new course and delete it', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.login()

    await test.step('Choose language and go to learn page', async () => {
        const catalogPage = new CatalogPage(page)
        await catalogPage.chooseLanguage()
        await catalogPage.goToLearnPage()
    })

    await test.step('Go to course in process', async () => {
        const learnPage = new LearnPage(page)
        await learnPage.checkElementsOnLearnPage()
        await learnPage.openCourse()
    })

    await test.step('Check elements on page and go to lesson', async () => {
        const coursePromoPage = new CoursesPromoPage(page)
        await coursePromoPage.checkCoursePromoHead()
        await coursePromoPage.clickOnJoinCourse()
    })


})
