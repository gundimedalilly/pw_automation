import {test,expect} from '@playwright/test'
test ('Locators',async({page}) =>{
    await page.goto("https://practice.expandtesting.com/dropdown");
    await page.waitForTimeout(5000);
    //await page.locator("//select[@id='dropdown']").selectOption('Option 1');
    //await page.locator("//select[@id='dropdown']").selectOption({value: '2'});
    await page.locator("//select[@id='dropdown']").selectOption('2');
    await page.locator("//select[@id='elementsPerPageSelect']").selectOption({value: '2'});
    await page.locator("//select[@id='country']").selectOption('Bhutan');
   //await page.locator("//select[@id='country']").selectOption({label:'Bhutan'});
  await page.waitForTimeout(5000)

})