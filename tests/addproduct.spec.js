import { test, expect } from '@playwright/test';

test('Add product to cart', async ({ page }) => {

  // 👇 1. Ir a la página
  await page.goto('https://www.saucedemo.com/');

  // 👇 2. Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 👇 3. ESPERAR que cargue bien (CLAVE 🔥)
  await page.waitForURL('**/inventory.html');

  // 👇 4. Ahora sí interactuar
  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('.shopping_cart_link');

  await expect(page).toHaveURL(/cart.html/);
});