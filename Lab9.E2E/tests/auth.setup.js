import { test as setup, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { SignInPage } from '../pages/sign-in-page.js';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  const email = process.env.UMSYS_EMAIL;
  const password = process.env.UMSYS_PASSWORD;
  await mkdir(dirname(authFile), { recursive: true });

  if (!email || !password) {
    await page.context().storageState({ path: authFile });
    return;
  }

  await page.goto('/sign-in');
  const signIn = new SignInPage(page);
  await signIn.login(email, password);

  await page.waitForURL(new RegExp(`/${email.replace(/[.@+]/g, '\\$&')}/?$`));
  await expect(page).toHaveURL(new RegExp(`/${email.replace(/[.@+]/g, '\\$&')}/?$`));
  await page.context().storageState({ path: authFile });
});
