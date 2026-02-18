import { expect, Page } from "@playwright/test";

export class ProductPage {
constructor(public page: Page) {}


async productPagecontrol() {
  const overlay = this.page.locator('div.loading-overlay');

await this.page.getByRole('button', { name: 'Kabul et' }).click();

await overlay.waitFor({ state: 'hidden', timeout: 15000 });

await this.page.getByRole('textbox', { name: 'Filtrele' }).nth(1).click();
await this.page.getByRole('textbox', { name: 'Filtrele' }).nth(1).fill('42');

await overlay.waitFor({ state: 'hidden', timeout: 15000 });
await this.page.locator('div').filter({ hasText: /^42$/ }).nth(1).click();

await overlay.waitFor({ state: 'hidden', timeout: 15000 });

await this.page.getByText('Erkek', { exact: true }).first().click({ force: true });
await this.page.goto('https://www.hepsiburada.com/ara?q=adidas%20ayakkab%C4%B1&filtreler=bedenler:42;cinsiyet:Erkek');

await overlay.waitFor({ state: 'hidden', timeout: 15000 });

 await this.page.getByPlaceholder('En az').fill('3000');
 await this.page.getByPlaceholder('En çok').fill('5000');
await this.page.getByRole('button', { name: 'Filtrele' }).click({ force: true });

await overlay.waitFor({ state: 'hidden', timeout: 15000 });

 await this.page.getByText('Beyaz', { exact: true }).first().click({ force: true });
 await this.page.goto('https://www.hepsiburada.com/ara?q=adidas%20ayakkab%C4%B1&filtreler=bedenler:42;cinsiyet:Erkek;fiyat:3000-5000;renk:Beyaz');
}

async filtercontrol() {
 const appliedFilters = this.page.locator('[class*="appliedVerticalFilter"]');
 await expect(appliedFilters.getByText('42', { exact: true })).toBeVisible();
 await expect(appliedFilters.getByText('Erkek', { exact: true })).toBeVisible();
 await expect(appliedFilters.getByText('3000 - 5000 TL', { exact: true })).toBeVisible();
 await expect(appliedFilters.getByText('Beyaz', { exact: true })).toBeVisible();
 await this.page.evaluate(() => {
   window.scrollBy(0, 500);
 });

  const searchproduct = this.page.getByRole('link', { name: 'adidas Eclyptıx 2000 Beyaz Erkek Lifestyle Spor Ayakkabı JI4541', exact: true }).first();
  await searchproduct.scrollIntoViewIfNeeded();
  await searchproduct.click();
  

}
}