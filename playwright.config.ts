import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    launchOptions: { headless: false },
  }
};

export default config;
