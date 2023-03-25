import { expect, Locator, Page } from '@playwright/test';

export class Homepage {
  readonly homepage: Page;
  readonly searchField: Locator;
  readonly acceptCookies: Locator;

  constructor(page: Page) {
    this.homepage = page;
    this.searchField = page.getByPlaceholder('Search brands or items');
    this.acceptCookies = page.locator('data-test-id=cookie-accept-all');
  }

  async goto() {
    await this.homepage.goto('https://debenhams.com/');
  }

  async enterSearchTerm(term: string) {
    await this.searchField.click();
    await this.searchField.fill(term);
    await this.homepage.keyboard.press('Enter');

    const regex = new RegExp(`.*${term}`);
    await expect(this.homepage).toHaveURL(regex)
  }

  async acceptBannerCookies() {
    await this.acceptCookies.click();
  }
}
