// @ts-check
const { test, expect } = require('@playwright/test');

const DataTest = {
  SEARCH_INPUT: 'MacBook Pro 13',
  RESULT_ITEM: 'MacBook Pro 13'
}
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.solotodo.cl/');
});

test.describe('Search SoloTodo', () => {
  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SoloTodo/);
  });

  test('search for a product', async ({ page }) => {
    // Type into search.
    await page.fill('input[name="search"]', DataTest.SEARCH_INPUT);
    // Submit the form.
    await page.press('input[name="search"]', 'Enter');
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/search/);
    // Expect a heading to be visible.
    const heading = await page.waitForSelector('h2:has-text("Resultados de la búsqueda")');
    // Verfify element
    expect(heading).toBeTruthy();
  });

  test('search for a product and click on it', async ({ page }) => {
    // Type into search.
    await page.fill('input[name="search"]', DataTest.SEARCH_INPUT);
    // Submit the form.
    await page.press('input[name="search"]', 'Enter');
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/search/);
    // Expect a heading to be visible.
    const heading = await page.waitForSelector('h2:has-text("Resultados de la búsqueda")');
    // Verfify element
    expect(heading).toBeTruthy();
    // Verfify product
    const product = await page.waitForSelector(`.css-1njhssi:has-text("MacBook Pro 13")`);
    expect(await product.isVisible()).toBeTruthy();
    // Click on the first product.
    await page.click(`.css-1njhssi:has-text("MacBook Pro 13")`);
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/products/);
    // Expect a heading to be visible.
    const result = await page.getByRole('heading', { name: DataTest.RESULT_ITEM });
    // Verfify element
    expect(result).toBeTruthy();
  });

  test('search for a product and click on it and go to the product', async ({ page }) => {
    // Type into search.
    await page.fill('input[name="search"]', DataTest.SEARCH_INPUT);
    // Submit the form.
    await page.press('input[name="search"]', 'Enter');
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/search/);
    // Expect a heading to be visible.
    const heading = await page.waitForSelector('h2:has-text("Resultados de la búsqueda")');
    // Verfify element
    expect(heading).toBeTruthy();
    // Verfify product
    const product = await page.waitForSelector(`.css-1njhssi:has-text("MacBook Pro 13")`);
    expect(await product.isVisible()).toBeTruthy();
    // Click on the first product.
    await page.click(`.css-1njhssi:has-text("MacBook Pro 13")`);
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/products/);
    // Expect a heading to be visible.
    const result = await page.getByRole('heading', { name: DataTest.RESULT_ITEM });
    // Verfify result
    expect(result).toBeTruthy();
    // Wait for the page to load.
    await page.waitForTimeout(1000);
    // Expect a modal to be visible.
    const modal = page.getByRole('heading', { name: 'Producto Reacondicionado' });
    if (modal) {
      expect(modal).toBeTruthy();
      await page.click('button:has-text("CONTINUAR")');
    }
    // Search button.
    const button = await page.waitForSelector('button:has-text("Avísame cuando baje de precio")');
    // Verfify button.
    expect(button).toBeTruthy();
    //  Click button
    await button.click();
    // Wait for the page to load.
    await page.waitForTimeout(1000);
    // Expect a modal to be visible.
    const modalAlert = page.getByRole('heading', { name: 'Alertas de cambios de precio' });
    if (modalAlert) {
      expect(modal).toBeTruthy();
      await page.click('button:has-text("Cerrar")');
    }
    // Wait for the page to load.
    await page.waitForTimeout(1000);
  });

  test('Suscribe to the product', async ({ page }) => {
    // Type into search.
    await page.fill('input[name="search"]', DataTest.SEARCH_INPUT);
    // Submit the form.
    await page.press('input[name="search"]', 'Enter');
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/search/);
    // Expect a heading to be visible.
    const heading = await page.waitForSelector('h2:has-text("Resultados de la búsqueda")');
    // Verfify element
    expect(heading).toBeTruthy();
    // Verfify product
    const product = await page.waitForSelector(`.css-1njhssi:has-text("MacBook Pro 13")`);
    expect(await product.isVisible()).toBeTruthy();
    // Click on the first product.
    await page.click(`.css-1njhssi:has-text("MacBook Pro 13")`);
    // Expect a new page to be navigated.
    await expect(page).toHaveURL(/products/);
    // Expect a heading to be visible.
    const result = await page.getByRole('heading', { name: DataTest.RESULT_ITEM });
    // Verfify result
    expect(result).toBeTruthy();
    // Wait for the page to load.
    await page.waitForTimeout(1000);
    // Expect a modal to be visible.
    const modal = page.getByRole('heading', { name: 'Producto Reacondicionado' });
    if (modal) {
      expect(modal).toBeTruthy();
      await page.click('button:has-text("CONTINUAR")');
    }
    // Search button.
    const button = await page.waitForSelector('button:has-text("Avísame cuando baje de precio")');
    // Verfify button.
    expect(button).toBeTruthy();
    //  Click button
    await button.click();
    // Wait for the page to load.
    await page.waitForTimeout(1000);
    // Expect a modal to be visible.
    const modalAlert = page.getByRole('heading', { name: 'Alertas de cambios de precio' });
    if (modalAlert) {
      expect(modal).toBeTruthy();
      // Type into search.
      await page.fill('input[name="email"]', generateRandomEmail());
      // Submit the form.
      await page.press('input[name="email"]', 'Enter');
      // Wait for the page to load.
      await page.waitForTimeout(1000);
    }
    // Search toast.
    const toast = await page.locator('[id="__next"]').getByRole('alert');
    // Verfify toast.
    expect(toast).toBeTruthy();
    // Wait for the page to load.
    await page.waitForTimeout(1000);
  });

});

test.afterEach(async ({ page }) => {
  await page.screenshot({ path: `screenshots/screenshot-${Date.now()}.png` });
});

function generateRandomEmail() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let email = '';
  for (let i = 0; i < 10; i++) {
    email += characters[Math.floor(Math.random() * characters.length)];
  }
  email += '@example.com';
  return email;
}
