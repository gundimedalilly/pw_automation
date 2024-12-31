 import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://demo.nopcommerce.com/register");
    //expect(page).tohaveURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
//tohave title-soft ass
    //await expect.soft(page).toHaveTitle('nopCommerce demo store.');
  //hard ass
  await expect(page).toHaveTitle('nopCommerce demo store.');
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

//diff bw contains and tohave text
//contains return all matched and gets passed
//to have exact match
const det= await page.locator("(//div[@class='title']/strong[contains(text(),'Details')])[1]");
const reg= await page.locator("//div[@class='page-title']/h1[text()='Register']");
await expect(await page.locator("//div[@class='page-title']/h1[text()='Register']")).toHaveText('Register');
await expect(await page.locator("//div[@class='page-title']/h1[text()='Register']")).toContainText('Reg');
//to have attibute
const regbtn=await page.locator('#register-button');
//await expect(regbtn).toHaveAttribute('type','submit');
await expect(regbtn).toHaveAttribute('name','register-button');
console.log("all are completed")
const gender= await page.locator("//div[@class='gender']//input[@type= 'radio']");
await expect(gender).toHaveCount(2);
})