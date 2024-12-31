import {test,expect} from '@playwright/test'
test ('Mouseactions',async({page}) =>{
/* await page.goto("https://demo.opencart.com/");
const desktop = await page.locator("//a[text()='Desktops']");
const mac= await page.locator("//a[text()='Mac (1)']")
await desktop.hover();
await mac.click();
*/
//await page.goto("https://testautomationpractice.blogspot.com/");
//const btn= await page.locator("//button[text()='Copy Text']");
//await btn.dblclick();


await page.waitForTimeout(5000);


//const dragvalue= await page.locator("//div[@id='draggable']");
//const drop = await page.locator("//div[@id='droppable']");
    //await dragvalue.dragTo(drop);

await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    const dragvalue= await page.locator("//div[@id='box106']");
const drop = await page.locator("//div[@id='box6']");
    await dragvalue.dragTo(drop);
})



