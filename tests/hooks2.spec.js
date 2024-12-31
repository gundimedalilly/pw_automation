import {test, expect, chromium } from '@playwright/test'
    let page;
    test.beforeAll(async ({browser})=>{
    page= await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //login
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle("OrangeHRM");
    await page.getByPlaceholder('username').fill("Admin");
    await page.getByPlaceholder('password').fill("admin123");
    await page.getByRole('button',{type: 'submit'}).click();
    });
    test.afterAll(async()=>{
    //logout
    await page.locator("//span[@class='oxd-userdropdown-tab']").click();
    await page.locator("//a[text()='Logout']").click();
    })
    test ('Hooks test1',async() =>{
    //dashboard valdation
    const db=await page.locator("//h6[text()='Dashboard']");
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(3000);
    await page1.locator("//input[@placeholder='Search']").fill("automachine");
    await page1.waitForTimeout(5000);
    })
    test ('Hooks test2',async() =>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //dashboard2 valdation
        await page.locator("//button[@title='Timesheets']").click();
        await page.waitForTimeout(3000);
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet");
        await page.waitForTimeout(2000);
    })