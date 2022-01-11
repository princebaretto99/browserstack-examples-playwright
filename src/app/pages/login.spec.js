const { test, expect } = require('@playwright/test');


test.describe('Login feature', () => {

    test('Simple Login test', async ({ page }) => {
        await page.goto("https://bstackdemo.com/");
        await page.click("#signin", { delay: 100 });
        await page.fill("#react-select-2-input", "fav_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");

        const username = await page.textContent('.username');

    });
})
