import { expect, Page } from "@playwright/test";
 
export class ProductDetail {
  constructor(public page: Page) {}
 
  async productDetailControl() {

    await this.page.waitForLoadState('domcontentloaded');
 
    await this.page.waitForTimeout(3000);
 
  const addToCartButton = this.page.locator('[data-test-id="addToCart"]');
  await addToCartButton.scrollIntoViewIfNeeded();
  await addToCartButton.click();

  await addToCartButton.waitFor({ state: 'visible', timeout: 15000 })

  await this.page.getByRole('button', { name: 'Sepete git' }).click();
}
}