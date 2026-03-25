import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,

  reporter: [['html', { open: 'never' }]],

  use: {
  baseURL: 'https://www.saucedemo.com/',

  headless: true,

  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  trace: 'on-first-retry',
}