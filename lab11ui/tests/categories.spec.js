const { test, expect } = require('@playwright/test');
const { CreateCategoryPage } = require('./pages/CreateCategoryPage');
const { CreateItemPage } = require('./pages/CreateItemPage');

test.describe('Category Management', () => {
  let createCategoryPage;
  let createItemPage;

  test.beforeEach(async ({ page }) => {
    createCategoryPage = new CreateCategoryPage(page);
    createItemPage = new CreateItemPage(page);
  });

  test('Test adding existing category (should cause error)', async ({ page }) => {
    await createCategoryPage.goto();

    const [response] = await Promise.all([
      page.waitForResponse((res) => res.url().includes('/categories') && res.request().method() === 'POST'),
      createCategoryPage.createCategory('Electronics'),
    ]);

    expect(response.status()).toBe(400);
    await expect(page.locator('body')).toContainText('Category already exists');
  });

  test('Test adding new category', async ({ page }) => {
    const newCategory = `Furniture_${Date.now()}`;

    await createCategoryPage.goto();
    await createCategoryPage.createCategory(newCategory);

    await expect(page).toHaveURL('/categories/new');

    await createItemPage.goto();
    const categories = await createItemPage.getCategoryOptions();
    expect(categories).toContain(newCategory);
  });
});
