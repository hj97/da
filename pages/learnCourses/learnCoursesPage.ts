import {expect, Locator, Page} from "@playwright/test";
import {MainPage} from "../mainPage/mainPage";

export class LearnCoursesPage extends MainPage {
    readonly learnCourseTitle: Locator
    readonly optionsButton: Locator
    readonly leaveTheCourseRowInTheMenu: Locator
    readonly deleteCoursesDialog: Locator
    readonly applyButton: Locator

    constructor(page: Page) {
        super(page, '/learn/courses')
        this.learnCourseTitle = page.locator('.learn-course-tile').locator('.item-tile__title_with_badge')
        this.optionsButton = page.locator('.item-tile__menu')
        this.leaveTheCourseRowInTheMenu = page.getByText('Покинуть')
        this.deleteCoursesDialog = page.getByRole('dialog')
        this.applyButton = this.deleteCoursesDialog.getByText('Да, покинуть')
    }

    async getAllLearnCourses() {
        await expect(this.page.locator('.marco-layout__content')).toBeVisible()
        return await this.learnCourseTitle.allInnerTexts()
    }

    async checkAllLearnCourses(expectedAllNameCourses) {
        const actualAllNameCourses = await this.getAllLearnCourses()
        expect(actualAllNameCourses).toEqual(expectedAllNameCourses)
    }

    async openDeleteDialog() {
        await this.optionsButton.click()
        await this.leaveTheCourseRowInTheMenu.click()
    }

    async deleteCourse() {
        await this.openDeleteDialog()
        await this.applyButton.click()
    }
}