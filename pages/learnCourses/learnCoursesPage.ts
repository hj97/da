import {expect, Locator, Page} from "@playwright/test";
import {MainPage} from "../mainPage/mainPage";

export class LearnCoursesPage extends MainPage {
    readonly learnCourseTitle: Locator

    constructor(page: Page) {
        super(page, '/learn/courses')
        this.learnCourseTitle = page.locator('.learn-course-tile').locator('.item-tile__title_with_badge')
    }

    async getAllLearnCourses() {
        await expect(this.page.locator('.marco-layout__content')).toBeVisible()
        return await this.learnCourseTitle.allInnerTexts()
    }

    async checkAllLearnCourses(expectedAllNameCourses) {
        const actualAllNameCourses = await this.getAllLearnCourses()
        expect(actualAllNameCourses).toEqual(expectedAllNameCourses)
    }
}