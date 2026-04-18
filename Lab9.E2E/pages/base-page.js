export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  /** Child classes override this. */
  get path() {
    return '/';
  }

  async goto() {
    return this.page.goto(this.path, { waitUntil: 'domcontentloaded' });
  }

  title() {
    return this.page.title();
  }
}
