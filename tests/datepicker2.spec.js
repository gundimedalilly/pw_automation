import {test,expect} from '@playwright/test'
test ('DatePicker Test',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
//await page.locator('#datepicker').fill('10-25-2024');
await page.waitForTimeout(5000);
//await page.locator('#txtDate').fill('20-11-2024');
const day = '01'
const month='11'
const year='2024'
await page.locator('#start-date').click();
while(true){
    const currentday= await page.locator('.ui-datepicker-day').textContent();
    const currentmonth= await page.locator('.ui-datepicker-month').textContent();
    const currentyear= await page.locator('.ui-datepicker-year').textContent();
    if(currentday==day && currentmonth==month && currentyear==year)
    {
        break;
    }
    await page.locator




}
await page.waitForTimeout(5000);
await page.locator('#end-date').fill('20-11-2024');
await expect(locator).toHaveValue('You selected a range of 19 days.');
await page.waitForTimeout(5000);
})

await page.getByPlaceholder('Start Date').fill('2024-11-26');
//await page.locator("//input[@id='start-date']").fill('01-11-2024');
await page.waitForTimeout(5000);
await page.getByPlaceholder('End Date').fill('2024-12-04');