import {PageBase} from "../pageBase/pageBase";
import {Page} from "@playwright/test";

export class CommonPage extends PageBase {
    constructor(page: Page, pageUrl: string) {
        super(page, pageUrl);
    }
}