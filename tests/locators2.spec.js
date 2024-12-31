//const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://www.demoblaze.com/");
   //1st methd: await page.locator(id=login2).click();
//await page.locator("loc").action()
//await page.action(locator)
//2ndmethd:   
await page.click("//a[contains(text(),'Sign up')]")
  //3rd methd:  let loginlink= 'id=login2';
//await page.locator(loginlink).click();
await page.locator("//input[@id='sign-username']").fill("lillygmail.com");
await page.locator("//input[@id='sign-password']").fill("ABCDEF");
await page.locator("//button[text()='Sign up']").click();
await page.waitForTimeout(5000);
}
)
