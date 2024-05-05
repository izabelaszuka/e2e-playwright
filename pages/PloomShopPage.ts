import { type Locator, type Page } from '@playwright/test';
import { PloomMainPage } from './PloomMainPage';

export class PloomShopPage {
    readonly page: Page;
    readonly mainPage: PloomMainPage;
    readonly testProductName = 'ploom-x-advanced'
    readonly testProductTeaserCard: Locator;
    readonly testProductBuyButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mainPage = new PloomMainPage(page);
        this.testProductTeaserCard = this.page.locator(`div.aem-productTeaserContainer__content > div[data-sku=${this.testProductName}]`)
        this.testProductBuyButton = this.testProductTeaserCard.locator('a.aem-button__link');
    }

    async goto() {
        await this.page.goto('https://www.ploom.co.uk/en/shop');
        await this.mainPage.hideCookieDisclaimer();
        await this.mainPage.consentAge();
    }

}