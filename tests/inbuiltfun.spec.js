import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/");
//const pagetitle = await page.title();
//await expect(pagetitle).toBe("OrangeHRM");
const img = await page.getByAltText('company-branding')
await expect(img).toBeVisible();
await page.waitForTimeout(5000);
await page.getByPlaceholder('username').fill("Admin");
await page.getByPlaceholder('password').fill("admin123");
await page.getByRole('button',{type: 'submit'}).click();
await page.waitForTimeout(8000);
const image= await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
await expect(await page.getByText(image)).toBeVisible();
console.log(image);
})