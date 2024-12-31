import {test,expect} from '@playwright/test'
test ('FileUpload',async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('files/testcases.xlsx');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Upload Single File' }).click();
    
    //await page.locator("//button[text()='Upload Single File']").click();
    await page.waitForTimeout(10000);
})
//tests\files\testcases.xlsx---relative path
//D:\lilly\automation machine\tests\files\testcases.xlsx-----path