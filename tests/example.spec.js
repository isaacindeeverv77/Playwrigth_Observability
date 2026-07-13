const { test, expect } = require('@playwright/test');

test('basic smoke test', async ({ page }) => {
  await page.goto('https://www.bluespacelabs.com/');
  await expect(page).toHaveTitle(/AI and Digital Transformation for Enterprises/);
});
