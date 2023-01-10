import {test} from "@playwright/test";
import {LoginPage} from "../../pages/login/loginPage";
import {LearnPage} from "../../pages/learn/learnPage";
import {CatalogPage} from "../../pages/catalog/catalogPage";
import {CoursesPromoPage} from "../../pages/promo/coursesPromoPage";
import {LessonPage} from "../../pages/lesson/lessonPage";
import {LearnCoursesPage} from "../../pages/learnCourses/learnCoursesPage";

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
    await test.step('Check element on page and go to learn page', async () => {
        const lessonPage = new LessonPage(page)
        await lessonPage.checkLessonSidebar()
        await lessonPage.clickOnStepikLogo()
    })
    await test.step('Go to the courses in process', async () => {
        const learnPage = new LearnPage(page)
        await learnPage.clickOnLearnCoursesDropdown()
    })
    await test.step('Check added course and delete it', async () => {
        const learnCoursesPage = new LearnCoursesPage(page)
        await learnCoursesPage.checkAllLearnCourses(['"Поколение Python": курс для начинающих'])
        await learnCoursesPage.deleteCourse()
        await learnCoursesPage.checkAllLearnCourses([''])
    })

})
