import {test,expect} from '@playwright/test'
test ('WebTable Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table= await page.locator('#productTable');
const rows= await table.locator('tbody tr');
var rowcount= rows.count();
console.log("rows are: " +rowcount)
expect(await rows.count()).toBe(5);
await page.waitForTimeout(5000);
consttable= await page.locator('#productTable');
const column = await table.locator('tbody td');
var columncount= column.count();
console.log("column are: " +columncount)
expect(await column.count()).toBe(5);
//column count hw
const matchingrow= rows.filter({has:page.locator('td'), hasText:'Tablet '});
await matchingrow.locator('input').check();
await page.waitForTimeout(5000);

await selectName(rows, page,'Tablet');
await selectName(rows, page,'Smartwatch');

await page.waitForTimeout(5000);

async function selectName(rows,page,name) {
    const matchingrow= rows.filter({
        has:page.locator('td'),
         hasText: name});
await matchingrow.locator('input').check();
    
}
})
