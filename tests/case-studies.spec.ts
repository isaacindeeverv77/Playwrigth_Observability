import { expect, test } from '@playwright/test';

test.skip('Case-Studies page validation', async ({ page }) => {
  
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await expect(page.locator('#wrap')).toContainText('Blogs:');
  await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Success Stories' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'News' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Tech and Transformation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Press Releases' })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search...' }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill('telecom');
  await page.getByRole('button', { name: 'Search' }).click();
});
