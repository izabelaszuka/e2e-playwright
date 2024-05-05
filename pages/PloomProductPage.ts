import { type Locator, type Page } from '@playwright/test';

export class PloomProductPage {
    readonly page: Page;
    readonly addToChartBtn: Locator;
    readonly cart: Locator;
    readonly cartIconLabel: Locator;
    readonly cartIconLabelSelector = 'div.mini-cart__icon-label';
    readonly cartProductList: Locator;
    readonly firstProductInListSelector = 'div[data-testid=mini-cart-list] > div:first-child';
    readonly firstProductInList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToChartBtn = page.locator('button[data-testid=pdpAddToProduct]');        
        this.cart = page.locator('div[data-testid=cart]');
        this.cartIconLabel = this.cart.locator(this.cartIconLabelSelector);
        this.cartProductList = this.cart.locator('div[data-testid=mini-cart-list]');
        this.firstProductInList = this.cartProductList.locator('div').first();
    }
}