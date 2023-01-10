import {MainPage} from "../mainPage/mainPage";
import {expect, Locator, Page} from "@playwright/test";

export class LessonPage extends MainPage {
    protected readonly lessonSidebar: Locator
    protected readonly stepikLogo: Locator

    constructor(page: Page) {
        super(page, '')
        this.lessonSidebar = page.locator('.lesson-sidebar__content')
        this.stepikLogo = page.locator('.navbar__logo-link')
    }

    async checkLessonSidebar() {
        await expect(this.lessonSidebar).toBeVisible()
    }

    async clickOnStepikLogo() {
        await this.stepikLogo.click()
    }
}