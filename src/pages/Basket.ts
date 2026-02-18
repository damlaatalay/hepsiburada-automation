import { expect, Page } from "@playwright/test";

export class Basket {
  constructor(public page: Page) {}

async basketControl() {

    const basketcheck = this.page.getByText('(1 ürün)');
    await expect(basketcheck).toBeVisible();

    await expect(this.page.locator('a').filter({ hasText: 'adidas Eclyptıx 2000 Beyaz' })).toBeVisible();

}

}