import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/register");
    //expect(page).tohaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
//tohave title
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await page.waitForTimeout(5000);
    //locator to be visible
const logoelemnt = await page.locator("//div[@class='header-logo']");
//await page.locator('.header-logo')
await expect(logoelemnt).toBeVisible();
await page.waitForTimeout(5000);
//enable
const searchbox = await page.locator('#small-searchterms');
await expect(searchbox).toBeEnabled();
await page.waitForTimeout(5000);
console.log("all are completed")
//checked
const checkbox = await page.locator("//input[@id='gender-female']");
checkbox.check();
await expect(checkbox).toBeChecked();
await page.waitForTimeout(5000);
await page.locator("//select[@name='DateOfBirthDay']").selectOption({value: '1'});
await page.locator("//select[@name='DateOfBirthMonth']").selectOption({value: '10'});
await page.locator("//select[@name='DateOfBirthYear']").selectOption({value: '2021'});
await page.waitForTimeout(5000);
})

