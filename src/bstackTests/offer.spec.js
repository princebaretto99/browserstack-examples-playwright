const { expect } = require('@playwright/test');
const { test } = require('../../fixtures');

test.describe('Offer feature', () => {

    test('Offers for Mumbai location', async ({ page }) => {
        if(process.env.BROWSERSTACK_LOCAL == true){
            await page.goto("http://localhost:3000/");
        }
        else{
            await page.goto("https://bstackdemo.com/");
        }
        await page.click("#signin", { delay: 100 });
        await page.fill("#react-select-2-input", "fav_user");
        await page.press("#react-select-2-input", "Enter");
        await page.fill("#react-select-3-input", "testingisfun99");
        await page.press("#react-select-3-input", "Enter");
        await page.click("#login-btn");

        await page.click('text=Offers');

        const loc =  page.locator('.pt-6')
        await expect(loc).toHaveCount(1)

    });

})
