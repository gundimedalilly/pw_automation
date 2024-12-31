import {test,expect} from '@playwright/test'
test ('Keyboard actions',async({page}) =>{
await page.goto("https://gotranscript.com/text-compare");
//await page.locator("//textarea[@name='text1']").fill("lilly automation");

await page.keyboard.type('[name="text1"]',"Lilly Automation");
await page.keyboard.press('Enter');
//copy paste- ctrlA ,ctrcl c--ctrlV
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Tab');
await page.keyboard.press('Control+V');
await page.waitForTimeout(7000);
}
)