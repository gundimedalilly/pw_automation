import {test,expect} from '@playwright/test'
test ('WebTable with for loop Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table= await page.locator("//table[@name='BookTable']");
const rows= await table.locator('tbody tr');
var rowcount= rows.count();
console.log("rows are: " +rowcount)
expect(await rows.count()).toBe(7);
await page.waitForTimeout(5000);
const matchingrow= rows.filter({has:page.locator('td'), hasText:'Learn JS '});
await matchingrow.locator('input').check();
await page.waitForTimeout(5000);

await selectName(rows,'Learn JS','300');

await page.waitForTimeout(5000);

async function selectName(rows,BookName,price) {
    const matchingrow= rows.filter({
        has:page.locator('td'),
         hasText: BookName});
await matchingrow.locator('input').check();
    
}
})