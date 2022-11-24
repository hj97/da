import {expect, Page} from "@playwright/test";

export const get = async (page: Page, url: string, requestParams?: {}): Promise<any> => {
    const requestResponse = await page.request.get(url, {params: requestParams});
    // const requestResponseText = await requestResponse.text();
    // // console.log(requestResponseText);
    expect(requestResponse.ok()).toBeTruthy();
    return await requestResponse.json();
}