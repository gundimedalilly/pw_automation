import {test, expect, chromium } from '@playwright/test'
test ('Keyboard actions',async({page}) =>{
const browser = await chromium.launch();
const context = await browser.newContext();
const page1= await context.newPage();
//const page2=await context.newPage();
//const page3=await context.newPage();
//const allpages= context.pages();
//console.log("no of pages in context: ",allpages.length);
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
await page1.waitForTimeout(3000);
await expect(page1).toHaveTitle("OrangeHRM");
const img = await page.getByAltText('company-branding')
//await expect(img).toBeVisible();
//await page1.waitForTimeout(5000);
await page1.getByPlaceholder('username').fill("Admin");
await page1.getByPlaceholder('password').fill("admin123");
await page1.getByRole('button',{type: 'submit'}).click();
await page1.waitForTimeout(5000);
await page1.locator("//input[@placeholder='Search']").fill("test");
await page1.waitForTimeout(5000);
/*await page2.goto("https://testautomationpractice.blogspot.com/");
await page2.waitForTimeout(3000);
await expect(page2).toHaveTitle("OrangeHRM");
await page2.waitForTimeout(3000);
*/
const page3=await context.newPage();
const allpages= context.pages();
await page3.goto("https://testautomationpractice.blogspot.com/");
//await page3.waitForTimeout(3000);
await expect(page3).toHaveTitle("Automation Testing Practice");
await page1.waitForTimeout(5000);
await page3.locator('#name').fill('lilly');
await page3.locator('#email').fill('lilly@gmail.com');
await page3.waitForTimeout(3000);
   
    // automation- name,email
    //orange- search box- test
})
