import {test, expect, chromium } from '@playwright/test';
test.only('screenshot.png', async({ page })=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.screenshot({ path: 'screenshot.png' });
        await page.waitForTimeout(3000);
        //await expect(page).toHaveTitle("OrangeHRM");
        await page.getByPlaceholder('username').fill("Admin");
        await page.getByPlaceholder('password').fill("admin123");
        await page.getByRole('button',{type: 'submit'}).click();
        await page.waitForTimeout(3000);
        await page.locator("//button[@title='Timesheets']").click();
        await page.waitForTimeout(3000);
   // await page.screenshot({path:'tests/screenshots/'+Date.now()+'dashboard.png',fullPage:true});
   await page.locator("//span[text()='Timesheets ']").screenshot({path:'tests/screenshots/'+Date.now()+'dashboard.png'});
    });

    