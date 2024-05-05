import { test, expect } from '@playwright/test';
import { PloomMainPage } from '../pages/PloomMainPage';
import { PloomShopPage } from '../pages/PloomShopPage';
import { PloomProductPage } from '../pages/PloomProductPage';


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
  await ploomShopPage.testProductBuyButton.click()

  // then
  await expect(page).toHaveURL(`https://www.ploom.co.uk/en/shop/products/devices/ploom-x-advanced`);
  await expect(ploomProductPage.addToChartBtn).toBeVisible();
  // when 
  await ploomProductPage.addToChartBtn.click();
  await expect(ploomProductPage.addToChartBtn).toBeVisible();
  await expect(ploomProductPage.cartProductList).toBeVisible({timeout: 9000});

  expect(ploomProductPage.cartIconLabel).toHaveText('1');
  expect(ploomProductPage.firstProductInList).toContainText('Ploom X Advanced')
});



