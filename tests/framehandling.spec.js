import {test,expect} from '@playwright/test'
test ('Alert Handling',async({page}) =>{
await page.goto("https://ui.vision/demo/webtest/frames/");
const noofframes= await page.frames();
console.log("number of frames =");
console.log(noofframes.length);
//name
/*const frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
frame1.fill("[name='mytext1']",'Lilly');*/
//frame1.locator("//input[@name='mytext1']").fill("Lilly");
//await page.waitForTimeout(5000);
//2nd way()
await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill("Lilly");
await page.waitForTimeout(5000);  
//frame inside frame- interactions
const frame3= await page.frameLocator("//frame[@src='frame_3.html']");
const ifram= await frame3.frameLocator("//iframe[@src='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']");
//$x("//div[@role='radio' and @tabindex=0]") or ("(//div[@role='radio'])[1]") or $x("//div[@role='radio' and @id='i8']")
await ifram.locator("//div[@role='radio' and @id='i8']").check();
await page.waitForTimeout(5000);  
await ifram.locator("//div[@role='checkbox' and @id='i19']").check();
await page.waitForTimeout(5000);  
await ifram.getByRole('presentation').locator("//div[@role='option']//span[text()='Yes']").check();
await page.waitForTimeout(7000);
console.log("selected");
await page.frameLocator("//frame[@src='frame_4.html']").locator("//input[@type='text']").fill("web");
await page.waitForTimeout(5000);  
})
