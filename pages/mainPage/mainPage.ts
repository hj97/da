import {CommonPage} from "../common/commonPage";
import {expect, Locator, Page} from "@playwright/test";

export class MainPage extends CommonPage {
    private readonly leftMenuBody: Locator
    private readonly menuItem: Locator
    private readonly learnLink: Locator
    private readonly coursesDropdown: Locator
    private readonly learnCoursesLink: Locator
    private readonly learnCoursesFavoriteLink: Locator
    private readonly learnCoursesWishlistLink: Locator
    private readonly learnCoursesArchiveLink: Locator
    private readonly learnCoursesClassesLink: Locator

    constructor(page: Page, pageUrl: string) {
        super(page, pageUrl);
        this.leftMenuBody = page.locator('[aria-labelledby="learn-nav-menu-label"]')
        this.menuItem = page.locator('.menu-item')
        this.learnLink = this.menuItem.locator('[href="/learn"]')
        this.coursesDropdown = this.menuItem.locator('[type="button"]')
        this.learnCoursesLink = this.menuItem.locator('[href="/learn/courses"]')
        this.learnCoursesFavoriteLink = this.menuItem.locator('href="/learn/courses/favorites"')
        this.learnCoursesWishlistLink = this.menuItem.locator('href="/learn/courses/wishlist"')
        this.learnCoursesArchiveLink = this.menuItem.locator('href="/learn/courses/archive"')
        this.learnCoursesClassesLink = this.menuItem.locator('href="/learn/classes"')
    }

    async clickOnLearnLink() {
        await expect(this.leftMenuBody).toBeVisible()
        await this.learnLink.click()
        await expect(this.page).toHaveURL('/learn')
    }

    async clickOnCoursesDropdown() {
        await expect(this.coursesDropdown).toBeVisible()
        await expect(this.learnCoursesLink).toBeVisible()
        await expect(this.learnCoursesFavoriteLink).toBeVisible()
        await expect(this.learnCoursesWishlistLink).toBeVisible()
        await expect(this.learnCoursesArchiveLink).toBeVisible()
        await this.coursesDropdown.click()
        await expect(this.learnCoursesLink).not.toBeVisible()
        await expect(this.learnCoursesFavoriteLink).not.toBeVisible()
        await expect(this.learnCoursesWishlistLink).not.toBeVisible()
        await expect(this.learnCoursesArchiveLink).not.toBeVisible()
        await this.coursesDropdown.click()
    }

    async clickOnLearnCoursesDropdown() {
        await expect(this.learnCoursesLink).toBeVisible()
        await this.learnCoursesLink.click()
        await expect(this.page).toHaveURL('/learn/courses')

    }

    async clickOnLearnCoursesFavoriteLink() {
        await expect(this.learnCoursesFavoriteLink).toBeVisible()
        await this.learnCoursesFavoriteLink.click()
        await expect(this.page).toHaveURL('/learn/courses/favorites')

    }

    async clickOnLearnCoursesWishlistLink() {
        await expect(this.learnCoursesWishlistLink).toBeVisible()
        await this.learnCoursesWishlistLink.click()
        await expect(this.page).toHaveURL('/learn/courses/wishlist')

    }

    async clickOnLearnCoursesArchiveLink() {
        await expect(this.learnCoursesArchiveLink).toBeVisible()
        await this.learnCoursesArchiveLink.click()
        await expect(this.page).toHaveURL('/learn/courses/archive')

    }
}
