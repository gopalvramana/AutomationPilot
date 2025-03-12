import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // specify your test directory
  use: {
    headless: true, // true or false depending on whether you want a headed browser
    browserName: 'chromium', // can be 'firefox' or 'webkit' as well
  },
});
