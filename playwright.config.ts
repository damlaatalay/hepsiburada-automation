import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  retries: 0,
  use:{
    baseURL: 'https://hepsiburada.com',
    headless: true,
    viewport: { width: 1280, height: 900 },
    actionTimeout: 10_000,
    ignoreHTTPSErrors: true,
 },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
 
});
