import {expect, Locator, Page} from "@playwright/test";

export class CoursesPromoPage {
    readonly page: Page
    readonly coursePromoHead: Locator
    readonly joinCourseButton: Locator

    constructor(page: Page) {
        this.page = page
        this.coursePromoHead = page.locator('.course-promo__head').first()
        this.joinCourseButton = page.locator('"Поступить на курс"').first()
    }

    async checkCoursePromoHead() {
        await expect.soft(this.coursePromoHead).toBeVisible()
    }

    async clickOnJoinCourse() {
        await this.joinCourseButton.click()
    }
}
