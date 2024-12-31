import {test,expect} from '@playwright/test'
test ('MultiSelect_dropDown',async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com");
//----normal selection with multiple values
//await page.locator('#colors').selectOption('Red','Yellow','White');
//--multiple values selected other way
//await page.selectOption('#colors',['Red','Yellow','White']);
await page.waitForTimeout(5000);
console.log("selected multiple colors");
//array
const colorvalues= await page.$$("//select[@id='colors']/option");
console.log("no of elements in colors list are :" +colorvalues.length)
//to check value is present
const color=await page.locator('#colors').textContent();
await expect(color.includes('Green')).toBeTruthy();
await expect(color.includes('Maroon')).toBeFalsy();
await expect(color.includes('Blue')).toBeFalsy();
})
