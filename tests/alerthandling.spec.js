import {test,expect} from '@playwright/test'
test ('Alert Handling',async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/");
//alert handling-create event
page.on('dg',async dg=>{
//check msg
 expect(dg.type()).toContain('Confirmation Alert');
 //expect(dg.message()).toContain('I am an alert box!');
 //expect(dg.message()).toContain('please enter your name:');
 expect(dg.message()).toContain('Press a button!');
 //expect(dg.defultvalue()).toContain('Harry Potter');
await dg.accept();
})
//action that triggers alert
await page.locator('#confirmBtn').click();
//const x=dg.message();
//console.log("msg is:: "+x);
await page.waitForTimeout(5000);
})
