import { test, expect, Page } from '@playwright/test';
import { PloomMainPage } from '../pages/PloomMainPage';
import { PloomShopPage } from '../pages/PloomShopPage';
import { PloomProductPage } from '../pages/PloomProductPage';

// This utility is created to solve problem for failing tests in headless
// When running playwright ui mode is is not needed 
const getTextFromElement = async (page: Page, selector: string) => {
  return (await page.textContent(selector))!
    .replace(/ +/g, " ")
    .replace(/(\n ?)+/g, "\n")
    .trim();
}

test('should add product to chart', async ({ page }) => {
  // given
  const ploomShopPage = new PloomShopPage(page);
  const ploomProductPage = new PloomProductPage(page)

  // when
  await ploomShopPage.goto();
  await ploomShopPage.testProductTeaserCard.hover();

  // then
  expect(ploomShopPage.testProductBuyButton).toBeVisible();

  // when
  await ploomShopPage.testProductBuyButton.click();

  // then
  await expect(page).toHaveURL(`https://www.ploom.co.uk/en/shop/products/devices/ploom-x-advanced`);
  await expect(ploomProductPage.addToChartBtn).toBeVisible();

  // when 
  await ploomProductPage.addToChartBtn.click();
  await expect(ploomProductPage.addToChartBtn).toBeVisible({timeout: 30000});
  await expect(ploomProductPage.cartProductList).toBeVisible({timeout: 30000});

  // then
  expect(await getTextFromElement(page, ploomProductPage.cartIconLabelSelector)).toBe('1');
  expect(await getTextFromElement(page, ploomProductPage.firstProductInListSelector)).toContain('Ploom X Advanced')
});



