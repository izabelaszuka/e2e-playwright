import { test, expect } from '@playwright/test';
import { PloomMainPage } from '../pages/PloomMainPage';


test('should hide cookie disclaimer after giving a consent', async ({ page }) => {
  const ploomMainPage = new PloomMainPage(page);
  await ploomMainPage.goto();
  await ploomMainPage.hideCookieDisclaimer();
  await expect(ploomMainPage.cookieDisclaimer).not.toBeVisible();
});

test('should hide age confirmation modal after age confirm', async ({ page }) => {
  const ploomMainPage = new PloomMainPage(page);
  await ploomMainPage.goto();
  await ploomMainPage.hideCookieDisclaimer();
  await ploomMainPage.consentAge()
  await expect(ploomMainPage.areUSmokerModal).not.toBeVisible();
});

test('should go to shop page after clicking shop button in navigation menu', async ({ page }) => {
  const ploomMainPage = new PloomMainPage(page);
  await ploomMainPage.goto();
  await ploomMainPage.hideCookieDisclaimer();
  await ploomMainPage.consentAge();
  await ploomMainPage.gotoShopPage()
  await expect(page).toHaveURL('https://www.ploom.co.uk/en/shop');
});
