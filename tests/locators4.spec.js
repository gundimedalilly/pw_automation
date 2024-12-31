import {test,expect} from '@playwright/test'
import { constants } from 'buffer';
import { relative } from 'path';
test ('Locators',async({page}) =>{
    await page.goto("https://www.demoblaze.com/");

    await page.waitForTimeout(10000);
    //page.waitForSelector("//div[@id='tbodyid']//div//h5/a");
const products= await page.$$("//div[@id='tbodyid']//div//h4/a");
const productsprice=await page.$$("//div[@id='tbodyid']//div//h5");
for(const p1 of products)
    {
            const product_name= await p1.textContent();
    console.log(product_name);
    }
    await page.waitForTimeout(10000);

for (const p2 of productsprice)
{
    const product_price=await p2.textContent();
    console.log(product_price);
}
    
}
    
)