import {test} from "@playwright/test";
import {LoginPage} from "../../pages/loginPage";
import {LearnPage} from "../../pages/learnPage";
import {CatalogPage} from "../../pages/catalogPage";

test('User can add new course and delete it', async ({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.login()

    await test.step('Choose language and go to learn page', async () => {
        const catalogPage = new CatalogPage(page)
        await catalogPage.chooseLanguage()
        await catalogPage.goToLearnPage()
    })

    const learnPage = new LearnPage(page)
    await learnPage.checkElementsOnLearnPage()
    await learnPage.openCourse()

})