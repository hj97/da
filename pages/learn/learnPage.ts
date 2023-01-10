import {expect, Locator, Page} from '@playwright/test';
import {MainPage} from "../mainPage/mainPage";

export class LearnPage extends MainPage {
    private readonly header: Locator
    private readonly leftMenu: Locator
    private readonly courses: Locator
    private readonly body: Locator
    private readonly courseIcon: Locator
    private readonly courseHead: Locator


    constructor(page: Page) {
        super(page, 'learn')
        this.header = page.locator('#main-navbar')
        this.leftMenu = page.locator('[aria-labelledby="learn-nav-menu-label"]')
        this.courses = page.locator('.marco-layout__header h1')
        this.body = page.locator('.marco-layout__content')
        this.courseIcon = page.locator('//*[@class="catalog-rich-card__link-wrapper"]').first()
        this.courseHead = page.locator('.course-promo__head')
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
    }
}

