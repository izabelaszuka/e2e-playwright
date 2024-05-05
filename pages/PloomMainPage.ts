import { type Locator, type Page } from '@playwright/test';

export class PloomMainPage {
    readonly page: Page;

    readonly cookieDisclaimer: Locator;
    readonly cookieDisclaimerConsentBtn: Locator;
    readonly areUSmokerModal: Locator;
    readonly confirmAgeButton: Locator;
    readonly shopBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cookieDisclaimer = page.getByRole('alertdialog');
        this.cookieDisclaimerConsentBtn = this.cookieDisclaimer.locator('button', { hasText: "GOT IT" });
        this.areUSmokerModal = page.locator('div.modal__container', { hasText: "Are you 18 or over and a smoker or vaper?" });
        this.confirmAgeButton = this.areUSmokerModal.locator("span", {
            hasText: "Yes, discover more"
        }).first();
        this.shopBtn = page.locator("ul.navigation__listWrapper a", { hasText: "Shop" }).first();
    }

    async goto() {
        await this.page.goto('https://www.ploom.co.uk/en');
    }

    async hideCookieDisclaimer() {

        await this.cookieDisclaimerConsentBtn.click();
    }

    async consentAge() {
        this.confirmAgeButton.click()
    }

    async gotoShopPage() {
        this.shopBtn.click()
    }

}