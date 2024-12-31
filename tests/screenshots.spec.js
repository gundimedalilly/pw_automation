import {test, expect, chromium } from '@playwright/test';
test.skip('page screenshot', async({ page })=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//await page.screenshot({ path: 'screenshot.png' });
    await page.waitForTimeout(3000);
    //await expect(page).toHaveTitle("OrangeHRM");
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    await page.waitForTimeout(3000);
await page.screenshot({path:'tests/screenshots/'+Date.now()+'dashboard.png'});
});
test.only('full screenshot', async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.screenshot({ path: 'screenshot.png' });
        await page.waitForTimeout(3000);
        //await expect(page).toHaveTitle("OrangeHRM");
        await page.getByPlaceholder('username').fill("Admin");
        await page.getByPlaceholder('password').fill("admin123");
        await page.getByRole('button',{type: 'submit'}).click();
        await page.waitForTimeout(3000);
    await page.screenshot({path:'tests/screenshots/'+Date.now()+'dashboard.png',fullPage:true});
    });

    //await page.locator('.header').screenshot({ path: 'screenshot.png' });