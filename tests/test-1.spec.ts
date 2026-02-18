import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { ProductPage } from '../src/pages/ProductPage';
import { ProductDetail } from '../src/pages/ProductDetail';
import { Basket } from '../src/pages/Basket';

test.describe('Hepsiburada Tests', () => {
 test('Home -product page- basket,', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const productDetail = new ProductDetail(page);
  const basket = new Basket(page);
  
  await homePage.goto();
  await homePage.openSearch();
  await productPage.productPagecontrol();
  await productPage.filtercontrol();
  await productDetail.productDetailControl();
  await basket.basketControl();






});

})
