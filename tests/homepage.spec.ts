import { expect, test } from '@playwright/test';

test('homepage is reachable and exposes the catalog entry point', async ({ page }) => {
  await page.goto('/');
  
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await page.getByRole('button', { name: 'Allow all cookies' }).click();
  await expect(page.locator('#o_main_nav')).toMatchAriaSnapshot(`
    - link "Logo of Bluespacelabs":
      - /url: /
      - img "Logo of Bluespacelabs":
        - img "Bluespacelabs"
    `);
  await expect(page.getByRole('link', { name: 'Logo of Bluespacelabs' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Home' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Solutions' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Case Studies' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'About Us' })).toBeVisible();
  await expect(page.getByRole('menuitem', { name: 'Jobs' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Main' }).getByLabel('LinkedIn')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Contact Us', exact: true })).toBeVisible();
  await expect(page.locator('#wrap')).toContainText('Experience the Future of Innovation in Every Interaction');
  await expect(page.getByText('Innovation transforms')).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'Experience the Future of' }).locator('img')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discover' })).toBeVisible();
  await expect(page.locator('#wrap')).toContainText('Driving');
  await expect(page.locator('#wrap')).toContainText('Innovation');
  await expect(page.getByRole('heading', { name: 'Key Milestone' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Innovation Hub' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Trusted references' }).locator('font')).toBeVisible();
  await expect(page.getByRole('link', { name: 'See our case studies' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Features that set us apart' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Quality and Excellence' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Expertise and Knowledge' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Eco-Friendly Solutions' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Tailored Solutions' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Key Metrics of Company\'s Achievements' })).toBeVisible();
});