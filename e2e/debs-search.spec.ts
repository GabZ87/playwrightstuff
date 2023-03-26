import { test, expect } from '@playwright/test'
import { Homepage } from '../pom'

test.beforeEach(async ({ page }) => {
  const homepage = new Homepage(page)
  await homepage.goto();
});

test.describe('Homepage', () => {
  test('Debenhams search example', async ({ page }) => {
    const homepage = new Homepage(page)
    const searchTerm = 'dress'
    
    await homepage.enterSearchTerm(searchTerm)
    await homepage.acceptBannerCookies()

    await expect(page.locator(`data-test-id=search-term-${searchTerm}`)).toBeVisible()
  })
})
