import {test,expect} from '@playwright/test'
test ('WebTable with for loop Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table= await page.locator("//table[@name='BookTable']");
const rows= await table.locator('tbody tr');
var rowcount= rows.count();
await page.waitForTimeout(5000);
console.log(rowcount);
const colomns = await table.locator('tbody tr td');
var colomnscount= colomns.count();
for (let i=0;i<rowcount;i++){
    const row=rows.nth(i);
    const tds=row.locator('td');
    for(let j=0;j< await tds.count()-1;j++){
        console.log(await nth(j).textContent())
        console.log("inner loop-------")

    }
    console.log("inner loop-------")
}
await page.waitForTimeout(5000);
})
