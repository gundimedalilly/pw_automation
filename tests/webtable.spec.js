import {test,expect} from '@playwright/test'
test ('WebTable withforloop',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
const table= await page.locator("//table[@name='BookTable']");
const rows= await table.locator('tbody tr');
let rowcount= await rows.count();
await page.waitForTimeout(5000);
console.log("rows no.of are:  "+rowcount);
for (let i=0;i<rowcount;i++){
    const rowval=await rows.nth(i);
    console.log("nth value" +rowval);
    const tds=await rowval.locator('td');
    for(let j=0;j< await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
}
})