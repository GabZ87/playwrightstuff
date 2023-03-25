import { test, expect } from '@playwright/test'
import { Homepage } from '../pom/pages/home'

test.beforeEach(async ({ page }) => {
  const homepage = new Homepage(page)
  await homepage.goto();
});

test.describe('Homepage', () => {
  test('Debenhams search example', async ({ page }) => {
    const homepage = new Homepage(page)
    await homepage.enterSearchTerm('dress')
    await homepage.acceptBannerCookies()

    await expect(page.locator('data-test-id=search-term-dress')).toHaveText(/dress/)
  })
})
