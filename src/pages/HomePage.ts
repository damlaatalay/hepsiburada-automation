import { Page } from "@playwright/test";

export class HomePage {
  constructor(public page: Page) {}

  async goto() {
    await this.page.goto('/');
  }
async openSearch() {
   const overlay = this.page.locator('div.initialComponent-hk7c_9tvgJ8ELzRuGJwC');

   
    await this.page.locator('.initialComponent-hk7c_9tvgJ8ELzRuGJwC').click();
    await overlay.waitFor({ state: 'hidden', timeout: 15000 });
    await this.page.locator('[data-test-id="search-bar-input"]').fill('adidas ayakkabı');
    await overlay.waitFor({ state: 'hidden', timeout: 15000 });
    await this.page.locator('[data-test-id="search-bar-input"]').press('Enter');


  }
}