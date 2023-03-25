import { test, expect } from '@playwright/test'

test('Debenhams search example', async ({ page }) => {
  await page.goto('https://debenhams.com/')


  await page.getByPlaceholder('Search brands or items').click()

  await page.getByPlaceholder('Search brands or items').fill('dress')

  await page.keyboard.press('Enter')

  await expect(page).toHaveURL(/.*dress/)

  await page.locator('data-test-id=cookie-accept-all').click()

  await expect(page.locator('data-test-id=search-term-dress')).toHaveText(/dress/)
})
