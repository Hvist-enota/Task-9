import { BasePage } from './base-page.js';

export class ProfilePage extends BasePage {
  constructor(page, email) {
    super(page);
    this.email = email;
  }

  get path() {
    return `/${this.email}`;
  }

  get profileHeading() {
    return this.page.getByRole('heading').first();
  }

  get signOutButton() {
    return this.page.getByRole('button', { name: /sign out|вийти|log out/i });
  }

  async signOut() {
    await this.signOutButton.click();
  }
}
