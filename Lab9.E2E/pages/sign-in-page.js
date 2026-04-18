import { BasePage } from './base-page.js';

export class SignInPage extends BasePage {
  get path() {
    return '/sign-in';
  }

  get emailInput() {
    return this.page.locator('input[type="email"]').first();
  }

  get passwordInput() {
    return this.page.locator('input[type="password"]').first();
  }

  get googleSignInButton() {
    return this.page.getByTestId('login-btn');
  }

  get microsoftSignInButton() {
    return this.page.getByTestId('microsoft-login-btn');
  }

  get submitButton() {
    return this.googleSignInButton;
  }

  get errorMessage() {
    return this.page.getByRole('alert');
  }

  async openGoogleSignIn() {
    await this.googleSignInButton.click({ force: true });
  }

  async login(email, password) {
    if ((await this.passwordInput.count()) === 0) {
      throw new Error('Email/password login form is not available on the current sign-in page');
    }

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click({ force: true });
  }
}
