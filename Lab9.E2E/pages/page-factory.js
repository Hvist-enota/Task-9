import { HomePage } from './home-page.js';
import { SignInPage } from './sign-in-page.js';
import { ProfilePage } from './profile-page.js';

export class PageFactory {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  home() {
    return new HomePage(this.page);
  }

  signIn() {
    return new SignInPage(this.page);
  }

  profile(email) {
    return new ProfilePage(this.page, email);
  }
}
