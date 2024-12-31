import {test,expect} from '@playwright/test'
test ('autosuggestion',async({page}) =>{
    await page.goto("https://www.redbus.in/");
    //await page.locator('#src').fill('hyderabad');
    //await page.waitForSelector("//li[contains(@class,'iwsKbI')]/div/text[1]");
//const cityoptions= await page.$$("//li[contains(@class,'iwsKbI')]/div/text[1]");
    //for(let i of cityoptions){
        //const value= await i.textContent();
        //console.log(value);
        //if(value.includes('Mehdipatnam')){
           //i.click();
            //break;
        //}
    //}
    await page.waitForTimeout(3000);
    await page.locator('#dest').fill('vijayawada');
await page.waitForSelector("//li[contains(@class,'iwsKbI')]/div/text[1]");
const cityoptions= await page.$$("//li[contains(@class,'iwsKbI')]/div/text[1]");
for(let k of cityoptions){
    const value= await k.textContent();
    console.log(value);
    if(value.includes('Benz Circle')){
       k.click();
        break;
    }
}
})
