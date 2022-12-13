import {expect, Locator, Page} from '@playwright/test';

export class LearnPage {
    private readonly page: Page
    private readonly header: Locator
    private readonly leftMenu: Locator
    private readonly courses: Locator
    private readonly body: Locator
    private readonly courseIcon: Locator
    private readonly courseHead: Locator
    private readonly joinCourseButton: Locator
    private readonly sideBarContent: Locator
    private readonly sideBarHeader: Locator
    private readonly headerCourse: Locator


    constructor(page: Page) {
        this.page = page
        this.header = page.locator('#main-navbar')
        this.leftMenu = page.locator('[aria-labelledby="learn-nav-menu-label"]')
        this.courses = page.locator('.marco-layout__header h1')
        this.body = page.locator('.marco-layout__content')
        this.courseIcon = page.locator('//*[@class="catalog-rich-card__link-wrapper"]').first()
        this.courseHead = page.locator('.course-promo__head')
        this.joinCourseButton = page.getByRole('button', {name: 'Поступить на курс'}).first()
        this.sideBarContent = page.locator('.lesson-sidebar__content')
        this.sideBarHeader = page.locator('lesson-sidebar__course-title')
        this.headerCourse = page.locator('.st-link').first()
    }

    async checkElementsOnLearnPage() {
        await expect.soft(this.header, 'Header is not displayed').toBeVisible()
        await expect.soft(this.leftMenu, 'Side bar is not displayed').toBeVisible()
        await expect.soft(this.courses, 'Have not a started course').toHaveText('Моё обучение')
        await expect.soft(this.body, 'Body is not displayed').toBeVisible()
    }

    async openCourse() {
        await this.courseIcon.click();
        await expect.soft(this.courseHead, 'Description of the course is not displayed').toBeVisible()

        await this.joinCourseButton.click();
        await expect.soft(this.sideBarContent, '.lesson-sidebar__content').toBeVisible()
        await this.sideBarHeader.click()
        await this.headerCourse.click()
    }
}

