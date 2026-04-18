import { BasePage } from './base-page.js';

export class HomePage extends BasePage {
  get path() {
    return '/';
  }

  get signInLink() {
    return this.page.getByRole('link', { name: /sign[- ]?in|увійти/i });
  }

  get heroHeading() {
    return this.page.getByRole('heading').first();
  }

  async openSignIn() {
    const href = await this.signInLink.getAttribute('href');

    try {
      await Promise.all([
        this.page.waitForURL(/\/sign-in\/?$/, { timeout: 10000 }),
        this.signInLink.click(),
      ]);
    } catch {
      if (!href) {
        throw new Error('Sign-in link does not have href');
      }
      await this.page.goto(href, { waitUntil: 'domcontentloaded' });
    }
  }
}
