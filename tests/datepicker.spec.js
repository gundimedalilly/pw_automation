import {test,expect} from '@playwright/test'
test ('DatePicker Test',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
//await page.locator('#datepicker').fill('10-25-2024');
const year='2024'
const month='April'
const day='24'
await page.locator('#datepicker').click();
while(true){
    const currentyear= await page.locator('.ui-datepicker-year').textContent();
    const currentmonth= await page.locator('.ui-datepicker-month').textContent();
    if(currentyear==year && currentmonth==month)
    {
        break;
    }
    await page.locator("//a[@title='Prev']").click();
}
const days= await page.$$("//a[@class='ui-state-default']");
for(const date of days){
    if(await date.textContent()==day)
    {
        await date.click();
        break;
    }
}

await page.waitForTimeout(5000);
})