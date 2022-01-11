// const { chromium , firefox, webkit } = require('playwright')

const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto("https://bstackdemo.com/signin");
  });
